import './styles/style.css'
import './styles/navbar.css'
import './styles/profilesection.css'
import './styles/about.css'
import './styles/logobar.css'
import './styles/experiencecard.css'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import About from './components/About'
import LogoBar from './components/LogoBar'
import ExperienceCard from './components/ExperienceCard'

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

        <div>
          <About />
        </div>

        <div>
          <ExperienceCard />
        </div>

      </div>
    </> 
  );
}

export default App;