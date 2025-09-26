import './styles/style.css'
import './styles/navbar.css'
import './styles/profilesection.css'
import './styles/logobar.css'
import './styles/about.css'
import './styles/connectbar.css'
import './styles/experiencecard.css'
import './styles/sportstechnologyexperience.css'
import './styles/sportsmedicineexperience.css'
import './styles/testimonials.css'
/* import './styles/timeline.css' */
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import LogoBar from './components/LogoBar'
import About from './components/About'
import ConnectBar from './components/ConnectBar'
import ExperienceCard from './components/ExperienceCard'
import SportsTechnologyExperience from './components/SportsTechnologyExperience'
import SportsMedicineExperience from './components/SportsMedicineExperience'
import Testimonials from './components/Testimonials'
/* import Timeline from './components/Timeline' */

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

      {/*   <div>
          <ConnectBar />
        </div> */}

        <div>
          <ExperienceCard />
        </div>

        {/* <div>
          <Timeline />
        </div> */}

        {/* <div>
          <SportsTechnologyExperience />
        </div>

        <div>
          <SportsMedicineExperience />
        </div> */}

        <div>
          <Testimonials />
        </div>

      </div>
    </> 
  );
}

export default App;