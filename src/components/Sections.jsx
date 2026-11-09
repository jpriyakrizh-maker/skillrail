import { useState } from 'react'
import Img from './Img.jsx'
import {
  companies,
  stats,
  browseLines,
  courses,
  steps,
  departures,
  why,
  mentors,
  reviews,
  tickets,
  faqs,
  footerCols,
} from '../data.js'

export function Logos() {
  return (
    <section className="logos" aria-label="Companies our students work at">
      <div className="wrap logos-inner">
        <span>Our students work at</span>
        {companies.map((c) => (
          <strong key={c}>{c}</strong>
        ))}
      </div>
    </section>
  )
}

export function Stats() {
  return (
    <section className="wrap stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </section>
  )
}

export function Lines() {
  return (
    <section className="section" id="lines">
      <div className="wrap">
        <h2>Browse by subject</h2>
        <p className="section-sub">8 subjects. Each one has a beginner course.</p>
        <div className="grid g4">
          {browseLines.map((l) => (
            <a className="line-tile" href="#courses" key={l.name}>
              <Img src={l.img} alt={l.name} />
              <div className="line-tile-text">
                <strong>{l.name}</strong>
                <span>{l.stations} courses</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Courses() {
  return (
    <section className="section" id="courses">
      <div className="wrap">
        <h2>Popular courses</h2>
        <p className="section-sub">Take a single course or the whole path.</p>
        <div className="grid g4">
          {courses.map((c) => (
            <article className="course" key={c.title}>
              <div className="course-img">
                <Img src={c.img} alt={c.title} />
                <span className="level">{c.level}</span>
              </div>
              <div className="course-body">
                <h3>{c.title}</h3>
                <p className="by">{c.by}</p>
                <div className="course-meta">
                  <span>{c.hours} hours</span>
                  <span>{c.rating} rating</span>
                </div>
                <strong className="price">{c.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>How it works</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Departures() {
  const [reserved, setReserved] = useState([])

  function toggle(line) {
    setReserved((r) => (r.includes(line) ? r.filter((x) => x !== line) : [...r, line]))
  }

  return (
    <section className="section" id="departures">
      <div className="wrap">
        <h2>Next batches</h2>
        <p className="section-sub">Reserve a seat for the next batch. You can cancel before it starts.</p>
        <div className="board" role="table" aria-label="Upcoming cohorts">
          <div className="board-row board-head" role="row">
            <span>Line</span>
            <span>Starts</span>
            <span>Batch</span>
            <span>Status</span>
            <span></span>
          </div>
          {departures.map((d) => {
            const isReserved = reserved.includes(d.line)
            return (
              <div className="board-row" role="row" key={d.line}>
                <span>{d.line}</span>
                <span>{d.time}</span>
                <span>{d.platform}</span>
                <span className={`tone-${d.tone}`}>{d.status}</span>
                <button className={`btn btn-small ${isReserved ? 'btn-teal' : 'btn-yellow'}`} onClick={() => toggle(d.line)}>
                  {isReserved ? 'Reserved' : 'Reserve seat'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Why students pick us</h2>
        <div className="bento">
          {why.map((w) => (
            <div className={`bento-item ${w.big ? 'is-big' : ''}`} style={{ background: w.color }} key={w.title}>
              <Img src={w.img} alt={w.title} />
              <div className="tx">
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Mentors() {
  return (
    <section className="section" id="mentors">
      <div className="wrap">
        <h2>Your mentors</h2>
        <p className="section-sub">All of them work in the field today.</p>
        <div className="grid g4">
          {mentors.map((m) => (
            <figure className="mentor" key={m.name}>
              <Img src={m.img} alt={m.name} />
              <figcaption>
                <strong>{m.name}</strong>
                <span>{m.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>What students say</h2>
        <div className="grid g3">
          {reviews.map((r) => (
            <blockquote className="review" key={r.name}>
              <p>{r.text}</p>
              <footer>
                <span className="avatar" aria-hidden="true">{r.name[0]}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.city}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <h2>Pricing</h2>
        <div className="grid g3">
          {tickets.map((t) => (
            <div className={`price-card ${t.featured ? 'is-featured' : ''}`} key={t.name}>
              <h3>{t.name}</h3>
              <p className="note">{t.note}</p>
              <p className="amount">{t.price}</p>
              <ul>
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className={`btn ${t.featured ? 'btn-navy' : 'btn-yellow'}`} href="#departures">Choose {t.name.toLowerCase()}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <h2>Common questions</h2>
        <div className="faq">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function AppStrip() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section className="wrap strips">
      <div className="strip">
        <div>
          <h3>Get the app</h3>
          <p>Download lessons and watch without internet.</p>
        </div>
        <div className="strip-actions">
          <a className="btn btn-ghost" href="#appstore">App Store</a>
          <a className="btn btn-ghost" href="#googleplay">Google Play</a>
        </div>
      </div>

      <div className="strip">
        <div>
          <h3>Weekly tips by email</h3>
          <p>One short email on Sundays. Unsubscribe anytime.</p>
        </div>
        {done ? (
          <p className="thanks" role="status">Done. Your first email comes this Sunday.</p>
        ) : (
          <form className="strip-actions" onSubmit={submit}>
            <input
              type="email"
              placeholder="name@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-yellow" type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section className="wrap">
      <div className="cta">
        <div>
          <h2>Start with a free week.</h2>
          <p>Try any course for 7 days. No card needed.</p>
        </div>
        <a className="btn btn-navy" href="#departures">Book your slot</a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <a className="logo" href="#top">
            <span className="logo-mark">S</span>
            SkillRail
          </a>
          <p className="footer-tag">Online courses with live mentors.</p>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            {c.links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}>{l}</a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
