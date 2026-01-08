import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Profile } from './components/Profile.jsx'
import { About } from './components/About.jsx'
import { Education } from './components/Education.jsx'
import { Skills } from './components/Skills.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />

      <main className=" min-h-screen bg-background bg-gray-300"> {/* padding-top to avoid fixed header overlap */}
        <Hero />
        <Profile />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
