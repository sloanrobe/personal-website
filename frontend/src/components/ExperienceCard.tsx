import React from 'react'
import LearnMoreButton from './LearnMoreButton'
import '../styles/learnmorebutton.css'

function ExperienceCard() {
  return (
    <section id='experience-nav-scroll' className='experience'>
      <h2 className='experience-title'>Experience</h2>
      <div className='experience-card'>
        <div className='experience-section sports-technology'>
          <img className='sports-tech-generic-logo' src="/logos/sports-tech-generic-logo.png" alt="Sports Tech logo" />
          <h2>Sports Technology</h2>
          <div className='card-body'>
            <p>Seasoned sports tech executive with deep network and proven track record fueling company growth, shaping product-market fit, and aligning technology with athlete and team performance.</p>
           {/* <p>I've worked with sports technology companies to help bridge athlete performance needs with commercial innovation. From wearable / data analytics platforms to VR/immersive training tools, I focus on translating technical capabilities into actionable performance gains. My work has included guiding startups, defining product-/market fit, and aligning technological development with real world athlete care.</p> */}
            <div className="sports-tech-bullets">
            <ul>
              <li>Sports Analytics</li>
              <li>Performance Equipment</li>
              <li>Wearable Technology</li>
            </ul>
            <ul>
              <li>Player Profiling Solutions</li>
              <li>Team Culture & Chemistry</li>
              <li>Cognitive Assessments</li>
            </ul>
            </div>
            <div className='tech-logos'>
              <div className='tech-column'>
                <img className='tech-logo-flo' src="/logos/FLOUnleashedlogo3.PNG" alt="FLO Unleashed logo" />  
                <img className='tech-logo-optima' src="/logos/OptimaSportsAnalyticslogo.png" alt="Optima Sports Analytics logo" />
              </div>
              <div className='tech-column'>
                <img className='tech-logo-bca' src="/logos/BCAlogo.png" alt="Blu Chip Analytics logo" />
                <img className='tech-logo-bizid' src="/logos/Bizidlogo4.png" alt="Bizid logo" />
              </div>   
            </div>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className='experience-section sports-medicine'>
          <img className='NATA-logo' src="/logos/NATA-logo3.png" alt="NATA logo" />
          <h2>Sports Medicine</h2>
          <div className='card-body'>
            <p>A Certified Athletic Trainer with deep expertise in injury prevention, athlete rehabilitation, and return-to-play protocols. Extensive coverage of elite, collegiate, and youth athletics.</p>
            {/* <p> as a Certified Athletic Trainer embedded in elite athletics (As an athletic trainer with vast elite-level experience), I’ve developed deep expertise in injury prevention, athlete rehabilitation, and return-to-play protocols. I bring a hands-on understanding of human performance, integrating clinical care, monitoring, and recovery strategies to help elite athletes maintain health, extend careers, and optimize readiness.</p> */}
            <div className="sports-medicine-bullets">
              <ul>
                <li>80+ NFL Pro Bowlers</li>
                <li>11 NFL Hall of Famers</li>
                <li>6 Heisman Trophy Winners</li>
              </ul>
              <ul>
                <li>4 NFL #1 <span className='hide-on-mobile'>Overall</span> Draft Picks</li>
                <li>2 NFL MVPs</li>
                <li>2 Olympic Athletes</li>
              </ul>
            </div>
            <div className='medicine-logos'>
              <div className='medicine-logos-1' >
                <img className='medicine-logo-redskins' src="/logos/Redskinslogo3.jpg" alt="Washington Redskins logo" />
                <img className='medicine-logo-titans' src="/logos/Titans_logo.png" alt="Tennessee Titans logo" />
                <img className='medicine-logo-jets' src="/logos/JetsLogo.png" alt="New York Jets logo" />
              </div>
              <div>
                <img className='medicine-logo-vanderbilt' src="/logos/Vanderbiltlogo2.png" alt="Vanderbilt logo" />
                <img className='medicine-logo-richmond' src="/logos/RichmondSpiderslogo2.png" alt="Richmond Spiders logo" />
                <img className='medicine-logo-murray' src="/logos/MurrayStatelogo2.png" alt="Murray State logo" />     
                <img className='medicine-logo-pines' src="/logos/PinesCharterlogo3.jpg" alt="Pines Charter logo" />
              </div>
            </div>
            <div className='learn-more-wrapper'>
              <LearnMoreButton label="View My Experience" />
            </div>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className='experience-section biz-dev'>
          <img className='consulting-logo' src="/logos/consulting-advising-logo.png" alt="Business Consulting logo" />
          <h2>Business Consulting</h2>
          <div className='card-body'>
            <p>Trusted advisor to sports technology companies, bringing a strategic mindset to business development, stakeholder alignment, and product innovation that bridges performance needs with commercial success.</p>
            {/* <p>With extensive experience across sports medicine, technology, and elite performance, I bring a consultant’s mindset to solving the toughest challenges: strategic positioning, business development, stakeholder alignment, and product strategy. I partner with tech firms, teams, and institutions to help set visions, build trust, and deliver solutions that work operationally and commercially.</p> */}
            <div className="biz-dev-bullets">
              <ul>
                <li>Business Development</li>
                <li>Go-To-Market Planning</li>
                <li>Stakeholder Alignment</li>
              </ul>
              <ul>
                <li>Sports Tech Strategy</li>
                <li>Product-Market Fit</li>
                <li>Product Roadmap</li>
              </ul>
            </div>
            <div className='biz-dev-logos'>
              <div className='biz-dev-logos-top' >
                <img className='lockeroom' src="/logos/Lockeroom-Chat-logo.jfif" alt="Lockeroom Chat logo" />
                <img className='probility' src="/logos/ProbilityAI-logo.PNG" alt="Probility AI logo" />
                <img className='recruit' src="/logos/RecruitMelogo3.webp" alt="RecruitMe Sports logo" />
              </div>
              <div className='biz-dev-logos-bottom' >
                <img className='sportective' src="/logos/sportectivelogo2.png" alt="Sportective logo" />
                <img className='k12' src="/logos/K12SportsTech-logo.jfif" alt="K12 Sports Tech logo" />
                <img className='dailyhuman' src="/logos/Dailyhuman-logo.PNG" alt="Dailyhuman logo" />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ExperienceCard