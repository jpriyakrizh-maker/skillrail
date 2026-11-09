import { useState } from 'react'
import Img from './Img.jsx'
import { heroImage, ticketLines } from '../data.js'

export default function Hero() {
  const [lineId, setLineId] = useState('web')
  const line = ticketLines.find((l) => l.id === lineId)

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Learn a skill with a mentor who actually works in the field.</h1>
          <p className="lead">
            Choose a path, finish the projects, and meet your mentor live every week. You do not need to know anything before you start.
          </p>

          <form className="ticket" onSubmit={(e) => e.preventDefault()}>
            <div className="ticket-row">
              <div>
                <span className="ticket-label">From</span>
                <strong>Beginner</strong>
              </div>
              <span className="ticket-arrow" aria-hidden="true">to</span>
              <div className="ticket-right">
                <span className="ticket-label">To</span>
                <strong>Job-ready</strong>
              </div>
            </div>

            <div className="ticket-perf" />

            <div className="ticket-row">
              <label className="ticket-select">
                <span className="ticket-label">Line</span>
                <select value={lineId} onChange={(e) => setLineId(e.target.value)}>
                  {ticketLines.map((l) => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                  ))}
                </select>
              </label>
              <div className="ticket-right">
                <span className="ticket-label">Duration</span>
                <strong>{line.duration}</strong>
              </div>
            </div>

            <a className="btn btn-navy ticket-btn" href="#departures">Book this path</a>
          </form>
        </div>

        <div className="hero-photo">
          <Img src={heroImage} alt="Learners studying together" />
          <div className="platform-sign">
            <span className="platform-num">3</span>
            <div>
              <strong>Web development</strong>
              <span>Enrolling now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
