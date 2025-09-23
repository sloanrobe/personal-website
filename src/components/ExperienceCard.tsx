import React from 'react'
import LearnMoreButton from './LearnMoreButton'
import '../styles/learnmorebutton.css'

function ExperienceCard() {
  return (
    <section className='experience'>
      <h2 className='experience-title'>Experience</h2>
      <div className='experience-types'>
        <div className='sports-technology'>
          <img className='sports-tech-generic-logo' src="public/logos/sports-tech-generic-logo.png" alt="" />
          <h2>Sports Technology</h2>
          <p>I've worked with sports technology companies to help bridge athlete performance needs with commercial innovation. From wearable / data analytics platforms to VR/immersive training tools, I focus on translating technical capabilities into actionable performance gains. My work has included guiding startups, defining product-/market fit, and aligning technological development with real world athlete care.</p>
          <div className='tech-logos'>
            <div className='tech-column'>
              <img className='tech-logo-flo' src="public/logos/FLOUnleashedlogo3.PNG" alt="" />  
              <img className='tech-logo-optima' src="public/logos/OptimaSportsAnalyticslogo.png" alt="" />
            </div>
            <div className='tech-column'>
              <img className='tech-logo-bca' src="public/logos/BCAlogo.png" alt="" />
              <img className='tech-logo-bizid' src="public/logos/Bizidlogo4.png" alt="" />
            </div>   
          </div>
          <LearnMoreButton label="Sports Tech Journey" />
        </div>
        <div className='sports-medicine'>
          <img className='NATA-logo' src="public/logos/NATA-logo3.png" alt="" />
          <h2>Sports Medicine</h2>
          <p> as a Certified Athletic Trainer embedded in elite athletics (As an athletic trainer with vast elite-level experience), I’ve developed deep expertise in injury prevention, athlete rehabilitation, and return-to-play protocols. I bring a hands-on understanding of human performance, integrating clinical care, monitoring, and recovery strategies to help elite athletes maintain health, extend careers, and optimize readiness.</p>
          <div className='medicine-logos'>
            <div className='medicine-logos-1' >
              <img className='medicine-logo-redskins' src="public/logos/Redskinslogo3.jpg" alt="Washington Redskins logo" />
              <img className='medicine-logo-titans' src="public/logos/Titans_logo.png" alt="Tennessee Titans logo" />
              <img className='medicine-logo-jets' src="public/logos/JetsLogo.png" alt="New York Jets logo" />
            </div>
            <div>
              <img className='medicine-logo-richmond' src="public/logos/RichmondSpiderslogo2.png" alt="Richmond Spiders logo" />
              <img className='medicine-logo-murray' src="public/logos/MurrayStateLogo2.png" alt="Murray State logo" />
              <img src="public/logos/Vanderbiltlogo2.png" alt="Vanderbilt logo" />       
              <img src="public/logos/PinesCharterlogo3.jpg" alt="Pines Charter logo" />
            </div>
          </div>
          <LearnMoreButton label="Career Highlights" />
        </div>
        <div className='biz-dev'>
          <img className='consulting-logo' src="public/logos/consulting-advising-logo.png" alt="" />
          <h2>Consulting & Advising</h2>
          <p>With extensive experience across sports medicine, technology, and elite performance, I bring a consultant’s mindset to solving the toughest challenges: strategic positioning, business development, stakeholder alignment, and product strategy. I partner with tech firms, teams, and institutions to help set visions, build trust, and deliver solutions that work operationally and commercially.</p>
          <div className='biz-dev-logos'>
            <div>
              <img className='lockeroom' src="public/logos/Lockeroom-Chat-logo.jfif" alt="" />
              <img className='probility' src="public/logos/ProbilityAI-logo.png" alt="" />
              <img className='recruit' src="public/logos/RecruitMelogo3.webp" alt="" />
            </div>
            <div>
              <img className='dailyhuman' src="public/logos/Dailyhuman-logo.png" alt="" />
              <img className='k12' src="public/logos/K12SportsTech-logo.jfif" alt="" />
              <img className='sportective' src="public/logos/sportective-logo.png" alt="" />
            </div>
            {/* <div>
              <img src="public/logos/locker_room_labs_logo.jfif" alt="" />
            </div>  */} 
          </div>
          <LearnMoreButton label="Business Impact" />
        </div>
      </div> 
    </section>
  )
}

export default ExperienceCard