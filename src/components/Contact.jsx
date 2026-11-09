import { useState } from 'react'
import { profile, socials } from '../data/content'
import SectionHead from './SectionHead'
import Icon from './Icons'
import './Contact.css'

const empty = { name: '', phone: '', email: '', message: '', company: '' }

/** /api/contact route ta available na thakle (jemon local Vite dev
 * server e) eita throw kori, jate mailto fallback e switch korte pari. */
class NoApiError extends Error {}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    setErrors((e) => ({ ...e, [field]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please add your name'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please add a valid email address'
    if (values.message.trim().length < 10) next.message = 'Tell me a little more (10+ characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    // /api/contact ekta Vercel serverless function — tomar nijer Gmail
    // (Nodemailer + App Password) diye direct tomar inbox e mail pathay.
    // Kono third-party form service noy.
    setStatus({ type: 'sending', text: 'Sending your message…' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      // /api route ta na paoya gele (jemon local `npm run dev` e, jekhane
      // Vercel function run kore na) server ekta HTML "not found" page
      // ferot dey, JSON na — sheikhetre form ke atke na rekhe mail app
      // fallback hisebe kaj kore.
      const contentType = res.headers.get('content-type') || ''
      if (!contentType.includes('application/json')) {
        throw new NoApiError()
      }

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Request failed')

      setValues(empty)
      setStatus({ type: 'done', text: 'Message sent. I will reply within 24 hours.' })
    } catch (err) {
      if (err instanceof NoApiError) {
        openMailFallback()
        setStatus({
          type: 'done',
          text: 'Your mail app is opening with the message ready to send.',
        })
        return
      }
      setStatus({
        type: 'error',
        text: `Sending failed. Please email me directly at ${profile.email}.`,
      })
    }
  }

  const openMailFallback = () => {
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone || '-'}`,
      `Email: ${values.email}`,
      '',
      values.message,
    ].join('\n')
    const subject = `New project enquiry from ${values.name}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const details = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: 'pin', label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Have a project in mind? Let's talk."
          sub="I am open to freelance projects, development partnerships and full-time opportunities."
        />

        <div className="contact__panel reveal">
          <div className="contact__glow" aria-hidden="true" />
          <div className="contact__grid">
          <div className="contact__info reveal">
            <div className="contact__avail">
              <span className="contact__avail-dot" aria-hidden="true" />
              <div>
                <strong>Available for select projects</strong>
                <p>Currently taking on new WordPress and WooCommerce projects.</p>
              </div>
            </div>

            <ul className="contact__details">
              {details.map((item) => (
                <li className="contact__detail" key={item.label}>
                  <span className="contact__detail-icon">
                    <Icon name={item.icon} />
                  </span>
                  <span className="contact__detail-text">
                    <span className="contact__detail-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </span>
                  {item.href && (
                    <Icon name="arrowUpRight" className="contact__detail-arrow" />
                  )}
                </li>
              ))}
            </ul>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="contact__linkedin"
              >
                <span className="contact__linkedin-icon">
                  <Icon name={social.label.toLowerCase()} />
                </span>
                <span className="contact__linkedin-text">
                  <span>Connect on LinkedIn</span>
                  <strong>Shoykat Hossain Sabbir</strong>
                </span>
                <Icon name="arrowUpRight" className="contact__detail-arrow" />
              </a>
            ))}

            <div className="contact__include">
              <h3>What to include in your message</h3>
              <ul>
                <li>
                  <Icon name="check" />
                  Project type — website, online shop or booking site
                </li>
                <li>
                  <Icon name="check" />
                  Timeline and budget range
                </li>
                <li>
                  <Icon name="check" />
                  A link to your current site, if you have one
                </li>
              </ul>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                Email me directly
                <Icon name="mail" />
              </a>
              <a
                className="btn btn--ghost"
                href={profile.resumeUrl}
                download="Shoykat-Hossain-Sabbir-Resume.pdf"
              >
                Download resume
                <Icon name="download" />
              </a>
            </div>
          </div>

          <form className="contact__form glass reveal" onSubmit={handleSubmit} noValidate>
            <div className="contact__form-head">
              <h3>Send a message</h3>
              <p>Tell me about your project — I will get back to you.</p>
            </div>
            {/* Honeypot — sadharon user ke ei field dekhabe na (CSS diye
               hide kora), shudhu spam bot eita bhorti kore. Bhorti thakle
               server side e (api/contact.js) chupchap ignore kora hoy. */}
            <label className="field field--honeypot" aria-hidden="true">
              <span>Company</span>
              <input
                type="text"
                name="company"
                tabIndex="-1"
                autoComplete="off"
                value={values.company}
                onChange={update('company')}
              />
            </label>

            <div className="field-row">
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  value={values.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  autoComplete="name"
                />
                {errors.name && <em>{errors.name}</em>}
              </label>

              <label className="field">
                <span>Phone number</span>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={update('phone')}
                  placeholder="Optional"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="field">
              <span>Email address</span>
              <input
                type="email"
                value={values.email}
                onChange={update('email')}
                placeholder="you@company.com"
                autoComplete="email"
              />
              {errors.email && <em>{errors.email}</em>}
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                rows="5"
                value={values.message}
                onChange={update('message')}
                placeholder="Tell me about your project, timeline and budget."
              />
              {errors.message && <em>{errors.message}</em>}
            </label>

            <button
              type="submit"
              className="btn btn--primary contact__submit contact__submit--full"
            >
              {status.type === 'sending' ? 'Sending…' : 'Send message'}
              <Icon name="send" />
            </button>

            <p className="contact__privacy">
              Your details are only used to reply to you.
            </p>

            {status.text && (
              <p className={`contact__status contact__status--${status.type}`} role="status">
                {status.text}
              </p>
            )}
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
