import React from 'react'

function ExperienceCard() {
  return (
    <div className='experience-types'>
      <div className='sports-technology'>
        <h2>Sports Technology</h2>
        <p>A description of sports technology experience will go here.</p>
        <div className='tech-logos'>
          <div className='tech-column'>
            <img src="public/logos/FLOUnleashedlogo3.PNG" alt="" />  
            <img src="public/logos/OptimaSportsAnalyticslogo.png" alt="" />
          </div>
          <div className='tech-column'>
            <img src="public/logos/BCAlogo.png" alt="" />
            <img className='tech-logo-bizid' src="public/logos/Bizidlogo4.png" alt="" />
          </div>   
        </div>
      </div>
      <div className='sports-medicine'>
        <h2>Sports Medicine</h2>
        <p>A description of sports medicine experience will go here.</p>
        <div className='medicine-logos'>
          <div>
            <img className='medicine-logo-redskins' src="public/logos/Redskinslogo3.jpg" alt="Washington Redskins logo" />
            <img className='medicine-logo-titans' src="public/logos/Titans_logo.png" alt="Tennessee Titans logo" />
            <img className='medicine-logo-jets' src="public/logos/JetsLogo.png" alt="New York Jets logo" />
          </div>
          <div className='medicine-logos-college'>
            <img className='medicine-logo-richmond' src="public/logos/RichmondSpiderslogo2.png" alt="Richmond Spiders logo" />
            <img className='medicine-logo-murray' src="public/logos/MurrayStateLogo2.png" alt="Murray State logo" />
            <img src="public/logos/Vanderbiltlogo2.png" alt="Vanderbilt logo" />       
            <img src="public/logos/PinesCharterlogo3.jpg" alt="Pines Charter logo" />
          </div>
        </div>
      </div>
      <div className='biz-dev'>
        <h2>Consulting & Advising</h2>
        <p>A description of full-stack experience will go here.</p>
      </div>
    </div>
  )
}

export default ExperienceCard