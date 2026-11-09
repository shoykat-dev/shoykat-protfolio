import nodemailer from 'nodemailer'

/**
 * Ei function ta Vercel automatic /api/contact route hisebe run kore.
 * Kono third-party form service na — tomar nijer Gmail account diye
 * (Nodemailer + Gmail SMTP) direct tomar inbox e mail pathay.
 *
 * Dorkari 2 ta environment variable (Vercel Dashboard -> Settings ->
 * Environment Variables e set korte hobe):
 *   GMAIL_USER          -> developer.shoykat@gmail.com
 *   GMAIL_APP_PASSWORD  -> Google App Password (normal Gmail password na)
 *
 * Kivabe set korte hobe, README.md er "Contact form" part e step-by-step
 * likha ache.
 */

const MAX_LEN = { name: 120, phone: 40, email: 160, message: 5000 }

let cachedTransporter = null

function getTransporter() {
  // Bar bar notun connection na baniye, ekbar baniye reuse kori
  // (function warm thakle) — pathano ektu fast hoy.
  if (cachedTransporter) return cachedTransporter

  cachedTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  return cachedTransporter
}

export default async function handler(req, res) {
  // Shudhu POST allow — baki sob method e clear error
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  // Vercel shadharonoto JSON body automatic parse kore dey, tobuo
  // safety er jonno string ashle nijei parse kore ni
  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      body = {}
    }
  }

  const name = String(body?.name || '').trim()
  const phone = String(body?.phone || '').trim()
  const email = String(body?.email || '').trim()
  const message = String(body?.message || '').trim()
  // hidden honeypot field — asol user eita kokhono fill up korbe na,
  // shudhu bot/spam script kore, tai eita bhorti thakle chupchap
  // success dekhiye dei (spammer ke bujhte na dewa best practice)
  const honeypot = String(body?.company || '').trim()

  if (honeypot) {
    return res.status(200).json({ success: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }
  if (
    name.length > MAX_LEN.name ||
    phone.length > MAX_LEN.phone ||
    email.length > MAX_LEN.email ||
    message.length > MAX_LEN.message
  ) {
    return res.status(400).json({ error: 'One of the fields is too long.' })
  }

  const GMAIL_USER = process.env.GMAIL_USER
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables')
    return res.status(500).json({ error: 'Mail server is not configured yet.' })
  }

  try {
    const transporter = getTransporter()

    await transporter.sendMail({
      from: `"Portfolio Website" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New project enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone || '-'}`,
        `Email: ${email}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;color:#111;line-height:1.6">
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Phone:</b> ${escapeHtml(phone || '-')}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact form send failed:', err)
    return res.status(502).json({ error: 'Could not send the message. Please try again.' })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
