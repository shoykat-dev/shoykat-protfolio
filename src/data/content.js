/* =====================================================================
   ALL WEBSITE CONTENT LIVES HERE.
   Ekhane text change korlei pura website change hoye jabe.
   Kono component file na chhuye ei file theke edit korte paro.
   ===================================================================== */

import realestate from '../assets/projects/realestate.png'
import skincare from '../assets/projects/skincare.png'
import restaurant from '../assets/projects/restaurant.png'
import fitness from '../assets/projects/fitness.png'
import fashion from '../assets/projects/fashion.png'
import travel from '../assets/projects/travel.png'
import coffee from '../assets/projects/coffee.png'
import law from '../assets/projects/law.png'
import dental from '../assets/projects/dental.png'
import interior from '../assets/projects/interior.png'
import photography from '../assets/projects/photography.png'
import jewelry from '../assets/projects/jewelry.png'

export const profile = {
  name: 'Shoykat Hossain Sabbir',
  firstName: 'Shoykat',
  lastName: 'Hossain Sabbir',
  initials: 'SH',
  title: 'WordPress Developer | Elementor, JetEngine, ACF & WooCommerce',
  availability: 'Available for select projects',
  intro:
    'WordPress developer with 2+ years of experience building Elementor, JetEngine, ACF and WooCommerce websites — from theme and plugin customisation to custom plugin development and professional booking functionality. I deliver clean, responsive, client-focused websites that are easy to manage.',
  about: [
    'I am a WordPress developer with 2+ years of experience building websites with Elementor, JetEngine, ACF and WooCommerce.',
    'I enjoy transforming ideas into modern digital experiences through clean code, creative design and efficient solutions. My expertise includes theme and plugin customisation, custom plugin development and professional booking functionality, along with React.js, JavaScript and Tailwind CSS for modern frontends.',
  ],
  highlights: [
    'Clean coding',
    'Responsive design',
    'Elementor, JetEngine & ACF',
    'Client-focused solutions',
  ],
  email: 'developer.shoykat@gmail.com',
  phone: '+880 1727-340043',
  phoneHref: '+8801727340043',
  location: 'Mirpur-1, Dhaka, Bangladesh',
  // fullAddress REMOVED 2026-11-09 (Sabbir: professional call) — a public
  // portfolio must not publish the full home address. Contact shows
  // location (Mirpur-1, Dhaka) only; the CV (resume.pdf) keeps it.
  // Tomar CV public/resume.pdf te ache. Notun CV dile oi file ta replace koro.
  resumeUrl: '/resume.pdf',
}

/* Hero stats — factual only. Third item is the core stack, not a number. */
export const heroStats = [
  { value: '2+', label: 'Years Experience' },
  { value: '12', label: 'WordPress Projects' },
  { value: 'WordPress', label: 'Elementor • JetEngine • ACF • WooCommerce' },
]

export const socials = [
  // GitHub / Fiverr removed on purpose: real URLs not known yet.
  // Generic github.com / fiverr.com homepage links looked unprofessional.
  // Add them back here only when Sabbir gives the real profile URLs.
  { label: 'LinkedIn', short: 'LI', url: 'https://www.linkedin.com/in/shoykat-hossain-sabbir-01a02344a/' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'Frontend Development',
    note: 'Interface layer',
    icon: 'code',
    items: [
      'React.js',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Web Design',
    ],
  },
  {
    title: 'WordPress Development',
    note: 'CMS & ecommerce',
    icon: 'layers',
    items: [
      'WordPress Website Development',
      'Elementor Pro',
      'JetEngine',
      'ACF (Advanced Custom Fields)',
      'WooCommerce',
      'Booking Functionality',
      'Custom Plugin Development',
      'Theme Customization',
      'Crocoblock',
    ],
  },
  {
    title: 'Tools & Others',
    note: 'Daily workflow',
    icon: 'spark',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Website Optimization'],
  },
]

export const experience = [
  {
    period: '2025 — Present',
    role: 'Co-Leader & WordPress Developer',
    company: 'Softvence Omega (Betopia Group)',
    points: [
      'Leading WordPress development projects',
      'Building responsive websites with Elementor, JetEngine, ACF and Crocoblock',
      'Developing custom website solutions from client requirements',
      'Improving website usability and performance',
    ],
  },
  {
    period: '2024',
    role: 'Intern — WordPress Theme Development',
    company: 'Creative IT Institute',
    points: [
      'Learned the professional WordPress development workflow',
      'Created and customized WordPress themes',
      'Worked on practical client-style website projects',
    ],
  },
]

/* ---------------------------------------------------------------------
   PROJECTS — 12 Demo Website Projects
   --------------------------------------------------------------------- */
export const wpProjects = [
  {
    title: 'Haven Estates',
    category: 'Real Estate Website',
    image: realestate,
  },
  {
    title: 'Glow Lab',
    category: 'Skincare Website',
    image: skincare,
  },
  {
    title: 'Ember & Oak',
    category: 'Restaurant Website',
    image: restaurant,
  },
  {
    title: 'Pulse Fitness',
    category: 'Fitness Website',
    image: fitness,
  },
  {
    title: 'Atelier Noir',
    category: 'Fashion Website',
    image: fashion,
  },
  {
    title: 'Wanderlust',
    category: 'Travel Website',
    image: travel,
  },
  {
    title: 'Kaffa Roasters',
    category: 'Coffee Website',
    image: coffee,
  },
  {
    title: 'Sterling & Cole',
    category: 'Law Firm Website',
    image: law,
  },
  {
    title: 'BrightSmile',
    category: 'Dental Website',
    image: dental,
  },
  {
    title: 'Studio Haven',
    category: 'Interior Design Website',
    image: interior,
  },
  {
    title: 'Lens & Light',
    category: 'Photography Website',
    image: photography,
  },
  {
    title: 'Lumière Jewels',
    category: 'Jewellery Website',
    image: jewelry,
  },
]

export const projects = [...wpProjects]

export const services = [
  {
    title: 'WordPress Website Development',
    text: 'Complete, scalable WordPress websites built around your business goals.',
    icon: 'layers',
  },
  {
    title: 'Elementor Customization',
    text: 'Pixel-precise Elementor pages with JetEngine and ACF — flexible, easy-to-manage content control.',
    icon: 'spark',
  },
  {
    title: 'WooCommerce Development',
    text: 'Fast, intuitive online stores and booking websites designed to turn visitors into customers.',
    icon: 'cart',
  },
  {
    title: 'React.js Frontend Development',
    text: 'Responsive React interfaces written with clean, maintainable components.',
    icon: 'code',
  },
  {
    title: 'Landing Page Design',
    text: 'Focused landing experiences built for clarity, speed and conversion.',
    icon: 'target',
  },
  {
    title: 'Website Optimization',
    text: 'Speed, usability and performance improvements that make a site feel instant.',
    icon: 'gauge',
  },
]

export const education = [
  {
    period: 'Running',
    institution: 'Uttara University',
    degree: 'Bachelor of Computer Science Engineering',
    meta: '',
    level: "Bachelor's Degree",
    status: 'Currently pursuing',
    location: 'Uttara, Dhaka',
    monogram: 'UU',
  },
  {
    period: '2020 — 2024',
    institution: 'Magura Polytechnic Institute',
    degree: 'Diploma in Computer Science Engineering',
    meta: 'Grade 3.00',
    level: 'Diploma',
    status: 'Completed',
    location: 'Magura',
    monogram: 'MP',
  },
  {
    period: '2019 — 2020',
    institution: 'Bheramara Pilot Model High School',
    degree: 'Secondary School Certificate (SSC)',
    meta: 'Technical group',
    level: 'SSC',
    status: 'Completed',
    location: 'Bheramara, Kushtia',
    monogram: 'BP',
  },
]

/* ---------------------------------------------------------------------
   CONTACT FORM
   Form submit korle /api/contact (Vercel serverless function) call hoy,
   ja tomar nijer Gmail account (Nodemailer + App Password) diye direct
   tomar inbox e mail pathay. Kono third-party form service lage na.
   Setup korar niyom README.md er "Contact form" part e likha ache.
   --------------------------------------------------------------------- */
