/* Chhoto inline SVG icon set — kono icon library install korte hobe na. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
}

export const Icon = ({ name, ...rest }) => {
  const paths = {
    code: (
      <>
        <path d="m9 8-4 4 4 4" />
        <path d="m15 8 4 4-4 4" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
        <path d="m4 12.5 8 4.5 8-4.5" />
        <path d="m4 16.5 8 4.5 8-4.5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
        <path d="M12 8c0 2.2 1.8 4 4 4-2.2 0-4 1.8-4 4 0-2.2-1.8-4-4-4 2.2 0 4-1.8 4-4Z" />
      </>
    ),
    cart: (
      <>
        <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.1a2 2 0 0 0 2-1.5L20 7H6" />
        <circle cx="10" cy="20" r="1.2" />
        <circle cx="17" cy="20" r="1.2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),
    gauge: (
      <>
        <path d="M4 18a8 8 0 1 1 16 0" />
        <path d="m12 14 4-4" />
        <circle cx="12" cy="18" r="1" />
      </>
    ),
    arrowRight: <path d="M5 12h13m-5-5 5 5-5 5" />,
    arrowLeft: <path d="M19 12H6m5 5-5-5 5-5" />,
    arrowUpRight: (
      <>
        <path d="M8 16 16 8" />
        <path d="M9 8h7v7" />
      </>
    ),
    arrowDown: <path d="M12 5v13m-5-5 5 5 5-5" />,
    download: (
      <>
        <path d="M12 4v10m-4-4 4 4 4-4" />
        <path d="M5 19h14" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7 8 5.5L20 7" />
      </>
    ),
    phone: (
      <path d="M6.5 3.5h3l1.3 3.6-2 1.4a12 12 0 0 0 5.7 5.7l1.4-2 3.6 1.3v3a1.9 1.9 0 0 1-2.1 1.9A16.6 16.6 0 0 1 4.6 5.6 1.9 1.9 0 0 1 6.5 3.5Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    send: (
      <>
        <path d="M21 3 10.5 13.5" />
        <path d="M21 3 14.5 21l-4-8-8-4L21 3Z" />
      </>
    ),
    github: (
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.6.6-3.2-1.2-3.2-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.7 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
    ),
    linkedin: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
        <path d="M8 10.5V16M8 7.6v.1M12 16v-3.2c0-1.2.8-2 1.9-2s1.8.8 1.8 2V16" />
      </>
    ),
    fiverr: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 8.2h-2.2c-1 0-1.6.6-1.6 1.6v.6h3.8V16" />
        <path d="M9 10.4h5.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
  }

  return (
    <svg {...base} {...rest}>
      {paths[name] || null}
    </svg>
  )
}

export default Icon
