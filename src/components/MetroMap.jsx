import { useState } from 'react'

const lines = [
  { id: 'web', name: 'Web line', color: '#ff7f93', d: 'M30 60H150L190 100H330L370 60H610' },
  { id: 'data', name: 'Data line', color: '#6fe3c1', d: 'M30 180H400L440 140H610' },
]

// pos: label above ("up") or below ("down") the station
const stations = [
  { id: 'html', label: 'HTML', line: 'web', x: 30, y: 60, pos: 'up', hours: 12, text: 'How web pages are built.' },
  { id: 'css', label: 'CSS', line: 'web', x: 110, y: 60, pos: 'up', hours: 16, text: 'Make pages look good on phone and laptop.' },
  { id: 'js', label: 'JavaScript', line: 'web', x: 190, y: 100, pos: 'up', hours: 30, text: 'Make pages do things: buttons, forms, data from APIs.' },
  { id: 'react', label: 'React', line: 'web', x: 260, y: 100, pos: 'up', hours: 42, text: 'Build full pages from small reusable parts.' },
  { id: 'db', label: 'Databases', line: 'web', x: 330, y: 100, pos: 'up', hours: 20, text: 'Save and fetch data. Both lines share this course.', hub: true },
  { id: 'node', label: 'Node', line: 'web', x: 450, y: 60, pos: 'up', hours: 28, text: 'Write the server side: APIs and logins.' },
  { id: 'fullstack', label: 'Full-stack dev', line: 'web', x: 610, y: 60, pos: 'up', anchor: 'end', hours: 40, text: 'Build one complete app and put it online.' },
  { id: 'python', label: 'Python', line: 'data', x: 30, y: 180, pos: 'down', hours: 30, text: 'Start with Python, the usual first language for data work.' },
  { id: 'stats', label: 'Statistics', line: 'data', x: 120, y: 180, pos: 'down', hours: 22, text: 'The basic maths you need before touching data.' },
  { id: 'sql', label: 'SQL', line: 'data', x: 330, y: 180, pos: 'down', hours: 20, text: 'Get answers out of a database. Both lines share this course.', hub: true },
  { id: 'ml', label: 'Machine learning', line: 'data', x: 440, y: 140, pos: 'down', hours: 55, text: 'Train simple models and test how good they are.' },
  { id: 'charts', label: 'Charts', line: 'data', x: 520, y: 140, pos: 'down', hours: 14, text: 'Show data as charts people can read.' },
  { id: 'analyst', label: 'Data analyst', line: 'data', x: 610, y: 140, pos: 'down', anchor: 'end', hours: 35, text: 'Finish with a portfolio of 3 projects to show employers.' },
]

const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function MetroMap() {
  const [selectedId, setSelectedId] = useState('react')
  const selected = stations.find((s) => s.id === selectedId)
  const selectedLine = lines.find((l) => l.id === selected.line)

  return (
    <section className="section map-section" id="map">
      <div className="wrap">
        <h2>See what you will learn, step by step</h2>
        <p className="section-sub">Each coloured line is a career path and each dot is one course. Tap a dot to see what is inside.</p>

        <div className="map-card">
          <svg viewBox="0 0 640 230" role="img" aria-label="Metro map of the Web line and Data line">
            {lines.map((l) => (
              <path key={l.id} id={`path-${l.id}`} d={l.d} fill="none" stroke={l.color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            ))}
            <line x1="330" y1="100" x2="330" y2="180" stroke="#fff" strokeWidth="3" strokeLinecap="round" />

            {stations.map((s) => {
              const isSel = s.id === selectedId
              const ly = s.pos === 'up' ? s.y - 15 : s.y + 24
              return (
                <g
                  key={s.id}
                  className="station"
                  tabIndex={0}
                  role="button"
                  aria-label={`${s.label} station`}
                  aria-pressed={isSel}
                  onClick={() => setSelectedId(s.id)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedId(s.id)}
                >
                  {isSel && <circle cx={s.x} cy={s.y} r={s.hub ? 15 : 13} fill="none" stroke="#c8f169" strokeWidth="2" />}
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={s.hub ? 8 : 6}
                    fill={s.hub ? '#fff' : '#292531'}
                    stroke={s.hub ? '#292531' : '#fff'}
                    strokeWidth={s.hub ? 3 : 2.5}
                  />
                  <text x={s.x} y={ly} dx={s.anchor === 'end' ? 20 : 0} textAnchor={s.anchor || 'middle'} className={isSel ? 'is-on' : ''}>
                    {s.label}
                  </text>
                </g>
              )
            })}

            {!reducedMotion && (
              <circle r="7" fill="#c8f169" stroke="#292531" strokeWidth="2">
                <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#path-web" />
                </animateMotion>
              </circle>
            )}
          </svg>

          <div className="legend">
            {lines.map((l) => (
              <span key={l.id}>
                <i style={{ background: l.color }} />
                {l.name}
              </span>
            ))}
            <span><i className="hub-dot" />Interchange</span>
          </div>

          <div className="station-panel" aria-live="polite">
            <div>
              <span className="chip" style={{ background: selectedLine.color }}>{selectedLine.name}</span>
              <h3>{selected.label}</h3>
              <p>{selected.text}</p>
            </div>
            <div className="station-side">
              <strong>{selected.hours} hours</strong>
              <a className="btn btn-yellow" href="#courses">Open course</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
