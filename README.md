# Shoykat Hossain Sabbir — Portfolio Website

Premium dark portfolio website. Built with **React 18 + Vite** (kono extra framework nei, tai load fast ar edit kora shoj).

---

## 1. Kivabe chalabo (VS Code)

Computer e **Node.js 18 ba tar upore** thakte hobe (https://nodejs.org theke install koro).

```bash
# 1) folder ta VS Code e open koro, tarpor terminal e:
npm install

# 2) development server chalu koro
npm run dev
```

Terminal e ekta link ashbe — `http://localhost:5173` — seta browser e open korlei site dekhte parba.
Code save korar sathe sathe browser auto update hobe.

Production build test korte:

```bash
npm run build     # dist/ folder e final site toiri hobe
npm run preview   # build ta locally dekhar jonno
```

---

## 2. Vercel e free live korar niyom

1. GitHub e ekta **new repository** banao (public/private — dutoi cholbe).
2. Ei folder er bhitor theke code push koro:

   ```bash
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/TOMAR-USERNAME/REPO-NAME.git
   git push -u origin main
   ```

3. https://vercel.com e GitHub diye login koro → **Add New → Project** → tomar repo ta import koro.
4. Vercel nijei dhore felbe:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`

   Kichu change korte hobe na, shudhu **Deploy** e click koro.
5. 1 minute er moddhe free domain e site live: `https://tomar-project.vercel.app`

> Free custom domain chaile Vercel er **Settings → Domains** theke add korte parba.
> Er por GitHub e jokhon-i push korba, site automatic update hoye jabe.

---

## 3. Content kothay change korbo

**99% text ek-i file e:** `src/data/content.js`

| Ki change korte chao | Kothay |
|---|---|
| Nam, title, intro, email, phone, address | `profile` object |
| LinkedIn link (GitHub/Fiverr pore, asol URL pele) | `socials` array |
| Navbar menu | `navLinks` |
| Skills (3 ta category) | `skillGroups` |
| Experience timeline | `experience` |
| Projects (2 marquee row: real client + sample) | `clientProjects` / `sampleProjects` |
| Services card | `services` |
| Education timeline | `education` |

### Notun project add korte
1. Project er image ta `src/assets/projects/` e rakho (jemon `myshop.png`).
2. `src/components/Projects.jsx` er upore import koro ar `images` object e add koro:
   ```js
   import myshop from '../assets/projects/myshop.png'
   const images = { fashion, woocommerce, landing, business, myshop }
   ```
3. `content.js` er `projects` array e notun object add koro, `image: 'myshop'` diye.
   `demo` ar `details` e asol link boshao (`#` er bodole).

### Resume change korte
`public/resume.pdf` file ta replace kore dao — button automatic notun ta download korbe.

### Profile chobi change korte
`src/assets/portrait.webp` replace koro (background cut kora transparent chobi hole best dekhabe).

---

## 4. Design kothay change korbo

- **Color, spacing, font:** `src/styles/global.css` er `:root` block.
  - `--cyan`, `--blue`, `--accent-grad` → accent color
  - `--section-space` → shob section er upor-niche er padding (ek jaygay change korlei shob section e apply hobe)
  - `--gutter` → dan-bam er padding
  - `--container` → max width
- **Protita section er nijer CSS file ache:** `src/components/Hero.css`, `About.css`, `Skills.css`, ityadi. Je section change korba, shudhu oi file tai khulo.

---

## 5. Contact form kaj korano (nijer Gmail diye, kono third-party service chara)

Contact form submit hole site `/api/contact` e request pathay — eita **Vercel er nijer serverless function** (`api/contact.js` file), jeta tomar **nijer Gmail account** diye (Nodemailer + Gmail SMTP) direct tomar inbox e mail pathay. Kono baire company (Formspree ityadi) involve thake na.

### Step 1 — Gmail e App Password banao

Gmail normal password diye ei rokom SMTP kaj kore na, tai ekta **App Password** lagbe (eita Google er nijer feature, third-party na):

1. Age Gmail account e **2-Step Verification ON** koro (na thakle): https://myaccount.google.com/security
2. Tarpor jao: https://myaccount.google.com/apppasswords
3. App er nam dao (jemon `Portfolio Website`) → **Create**
4. Google ekta **16-digit code** dibe (jemon `abcd efgh ijkl mnop`) — eita copy kore rakho (space chara, 16 character)

### Step 2 — Vercel e Environment Variable set koro

1. Project ta Vercel e deploy kora thakle, Vercel Dashboard e project ta open koro
2. **Settings → Environment Variables** e jao
3. Duita variable add koro:

   | Key | Value |
   |---|---|
   | `GMAIL_USER` | `developer.shoykat@gmail.com` |
   | `GMAIL_APP_PASSWORD` | (16-digit App Password, space chara) |

4. **Save** koro
5. Project ta **Redeploy** koro (Deployments tab → shesher deployment er `...` menu → Redeploy) — environment variable notun deployment theke effect hobe

### Step 3 — Test koro

Live site e giye contact form fill up kore **Send message** chapo. Kichukhoner moddhe `developer.shoykat@gmail.com` e mail ashbe, sathe reply korle sorasori oi customer er email e reply jabe (`Reply-To` already set kora ache).

### Local e (VS Code, `npm run dev`) test korte chaile

Vite er normal dev server `/api` route run kore na, tai duita option:

- **Sohoj option:** Vercel e deploy kore shekhaneই test koro (upore ja bolechi).
- **Local e test korte chaile:** Vercel CLI install koro (`npm i -g vercel`), project folder e `.env` file banao (`.env.example` copy kore, real value boshao), tarpor `npm run dev` er bodole:
  ```bash
  vercel dev
  ```
  eita local e o `/api` route shoho pura site run korbe.

---

## 6. Folder structure

```
shoykat-portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ og-image.png        # social share preview
│  └─ resume.pdf          # download resume button
├─ src/
│  ├─ assets/
│  │  ├─ portrait.webp    # hero chobi (background remove kora)
│  │  ├─ portrait.png     # same chobi, PNG backup
│  │  └─ projects/        # project preview image (SVG)
│  ├─ components/         # protita section + tar CSS
│  ├─ data/content.js     # ★ shob content ekhane
│  ├─ hooks/              # scroll reveal, active section, progress bar
│  ├─ styles/global.css   # ★ color / spacing / typography token
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html             # SEO meta tag + Google Fonts
├─ vercel.json
└─ package.json
```

---

## 7. Ki ki feature ache

- Sticky navbar + active section highlight + smooth scroll
- Mobile e full-screen menu
- Hero: transparent portrait, glow, floating tech chip, parallax
- Scroll reveal animation (shob section)
- Top e scroll progress bar
- Loading animation (preloader)
- Projects: **2 ta auto marquee row** — uporer row left-to-right, nicher row right-to-left; hover/focus korle oi row pause hoy; desktop 3, tablet 2, mobile 1 card visible
- Contact form: validation + mailto / Formspree
- Fully responsive (desktop / tablet / mobile)
- SEO: meta tags, Open Graph, JSON-LD schema
- `prefers-reduced-motion` respect kora (accessibility)

---

Kono jaygay atke gele `src/data/content.js` ar `src/styles/global.css` — ei duita file theke shuru koro. 90% kaj oikhanei hoye jabe.
