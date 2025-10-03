import './styles/style.css'
import './styles/navbar.css'
import './styles/profilesection.css'
import './styles/logobar.css'
import './styles/about.css'
/* import './styles/connectbar.css' */
import './styles/experiencecard.css'
import './styles/webdev.css'
import './styles/testimonialsection.css'
import './styles/contactform.css'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import LogoBar from './components/LogoBar'
import About from './components/About'
/* import ConnectBar from './components/ConnectBar' */
import ExperienceCard from './components/ExperienceCard'
import WebDev from './components/WebDev'
import TestimonialSection from './components/TestimonialSection'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <div className="App">

        <div>
          <Navbar />
        </div>

        <div>
          <ProfileSection />
        </div>

        <div>
          <LogoBar />
        </div>

        <div id="nav-border-sentinel" aria-hidden="true" style={{ height: 1 }} />

        <div>
          <About />
        </div>

        <div>
          <ExperienceCard />
        </div>

        <div>
          <WebDev />
        </div>

        <div>
          <TestimonialSection />
        </div>

        <div>
          <ContactForm />
        </div>

      </div>
    </> 
  );
}

export default App;