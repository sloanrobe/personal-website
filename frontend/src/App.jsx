import './styles/style.css'
import './styles/navbar.css'
import './styles/profilesection.css'
import './styles/logobar.css'
import './styles/about.css'
import './styles/experiencecard.css'
import './styles/webdev.css'
import './styles/testimonialsection.css'
import './styles/gallery.css'
import './styles/contactform.css'
import './styles/footer.css'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import LogoBar from './components/LogoBar'
import About from './components/About'
import ExperienceCard from './components/ExperienceCard'
import WebDev from './components/WebDev'
import TestimonialSection from './components/TestimonialSection'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

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
          <Gallery />
        </div>

        <div>
          <ContactForm />
        </div>

        <div>
          <Footer />
        </div>

      </div>
    </> 
  );
}

export default App;