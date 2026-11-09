/** Shob section er upore ek-i rokom heading block. */
export default function SectionHead({ eyebrow, title, sub, align = 'row' }) {
  return (
    <header className={`section-head section-head--${align} reveal`}>
      <div className="section-head__text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
    </header>
  )
}
