import './styles/style.css'
import './styles/navbar.css'
import './styles/profilesection.css'
import './styles/logobar.css'
import './styles/about.css'
/* import './styles/connectbar.css' */
import './styles/experiencecard.css'
/* import './styles/sportstechnologyexperience.css'
import './styles/sportsmedicineexperience.css' */
import './styles/testimonialsection.css'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import LogoBar from './components/LogoBar'
import About from './components/About'
/* import ConnectBar from './components/ConnectBar' */
import ExperienceCard from './components/ExperienceCard'
/* import SportsTechnologyExperience from './components/SportsTechnologyExperience'
import SportsMedicineExperience from './components/SportsMedicineExperience' */
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <>
      <div className="App">

        <div>
          <Navbar />
        </div>

        {<div>
          <ProfileSection />
        </div>}

        <div>
          <LogoBar />
        </div>

        {<div>
          <About />
        </div>}

        <div>
          <ExperienceCard />
        </div>

        <div>
          <TestimonialSection />
        </div>

      </div>
    </> 
  );
}

export default App;