import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MetroMap from './components/MetroMap.jsx'
import {
  Logos,
  Stats,
  Lines,
  Courses,
  Steps,
  Departures,
  Why,
  Mentors,
  Reviews,
  Pricing,
  Faq,
  AppStrip,
  Cta,
  Footer,
} from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <div className="announce">Free trial week on all courses. Last date: 30 November.</div>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <MetroMap />
        <Stats />
        <Lines />
        <Courses />
        <Steps />
        <Departures />
        <Why />
        <Mentors />
        <Reviews />
        <Pricing />
        <Faq />
        <AppStrip />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
