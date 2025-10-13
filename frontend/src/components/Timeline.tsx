/* import React from 'react'

function Timeline() {
  return (
    <div className='timeline' >
        <div className='sports-med-experience' >
            <h2 className='sport-med-header'>Sports Medicine</h2>
            <div className='medicine-experience'>
                <div className='med1'>
                    <div className='logo-card'>
                        <img className='med-redskins' src="public/logos/Redskinslogo3.jpg" alt="" />
                        <p>Athletic Trainer - Training Camp</p>
                        <p>1996</p>
                    </div>
                    <div className='logo-card'>
                        <img className='med-titans' src="public/logos/Titans_logo.png" alt="" />
                        <p>Athletic Trainer - Training Camp</p>
                        <p>1997,1998</p>
                    </div>
                    <div className='logo-card'>
                        <img className='med-jets' src="public/logos/JetsLogo.png" alt="" />
                        <p>Seasonal Assistant Athletic Trainer</p>
                        <p>1999-2000</p>
                    </div>
                </div>
                <div className='med2'>
                    <div className='logo-card'>
                        <img className='med-vanderbilt' src="public/logos/Vanderbiltlogo2.png" alt="" />
                        <p>Intern Athletic Trainer</p>
                        <p>1995</p>
                    </div>
                    <div className='logo-card'>
                        <img className='med-richmond' src="public/logos/RichmondSpiderslogo2.png" alt="" />
                        <p>Student Athletic Trainer</p>
                        <p>1994-1997</p>
                    </div>
                    <div className='logo-card'>
                        <img className='med-murray' src="public/logos/MurrayStateLogo2.png" alt="" />
                        <p>Graduate Assistant Athletic Trainer</p>
                        <p>1997-1999</p>
                    </div>
                    <div className='logo-card'>
                        <img className='med-pines' src="public/logos/PinesCharterlogo3.jpg" alt="" />
                        <p>Head Athletic Trainer</p>
                        <p>2000-2017</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='sports-tech-experience'>
        <h2 className='sport-tech-header'>Sports Technology</h2>

        <div className='flo-experience'>
            <div className='logo-card'>
            <img className='tech-flo' src="public/logos/FLOUnleashedlogo3.PNG" alt="" />
            <p>Chief of Business Development</p>
            <p>2024-Present</p>
            </div>
        </div>

        <div className='analytics-experience'>
            <div className='logo-card'>
            <img className='tech-optima' src="public/logos/OptimaSportsAnalyticslogo.png" alt="" />
            <p>Vice President</p>
            <p>2016-2021</p>
            </div>
            <div className='logo-card'>
            <img className='tech-bca' src="public/logos/BCAlogo.png" alt="" />
            <p className='no-wrap'>Director of Sales & Business Development</p>
            <p>2022-2023</p>
            </div>
            <div className='logo-card'>
            <img className='tech-bizid' src="public/logos/Bizidlogo5.png" alt="" />
            <p>Head of Sports Division</p>
            <p>2024</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Timeline */

import React from "react";
import "./timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      <div className='sports-med-experience'>
        <h2 className='sport-med-header'>Sports Medicine</h2>
        <div className='medicine-experience'>
          <div className='med1'>
            <div className='logo-card'>
              <img className='med-redskins' src="/logos/Redskinslogo3.jpg" alt="" />
              <p>Athletic Trainer - Training Camp</p>
              <p>1996</p>
            </div>
            <div className='logo-card'>
              <img className='med-titans' src="/logos/Titans_logo.png" alt="" />
              <p>Athletic Trainer - Training Camp</p>
              <p>1997,1998</p>
            </div>
            <div className='logo-card'>
              <img className='med-jets' src="/logos/JetsLogo.png" alt="" />
              <p>Seasonal Assistant Athletic Trainer</p>
              <p>1999-2000</p>
            </div>
          </div>
          <div className='med2'>
            <div className='logo-card'>
              <img className='med-vanderbilt' src="/logos/Vanderbiltlogo2.png" alt="" />
              <p>Intern Athletic Trainer</p>
              <p>1995</p>
            </div>
            <div className='logo-card'>
              <img className='med-richmond' src="/logos/RichmondSpiderslogo2.png" alt="" />
              <p>Student Athletic Trainer</p>
              <p>1994-1997</p>
            </div>
            <div className='logo-card'>
              <img className='med-murray' src="/logos/MurrayStateLogo2.png" alt="" />
              <p>Graduate Assistant Athletic Trainer</p>
              <p>1997-1999</p>
            </div>
            <div className='logo-card'>
              <img className='med-pines' src="/logos/PinesCharterlogo3.jpg" alt="" />
              <p>Head Athletic Trainer</p>
              <p>2000-2017</p>
            </div>
          </div>
        </div>
      </div>

      <div className='sports-tech-experience'>
        <h2 className='sport-tech-header'>Sports Technology</h2>

        <div className='flo-experience'>
          <div className='logo-card'>
            <img className='tech-flo' src="/logos/FLOUnleashedlogo3.PNG" alt="" />
            <p>Chief of Business Development</p>
            <p>2024-Present</p>
          </div>
        </div>

        <div className='analytics-experience'>
          <div className='logo-card'>
            <img className='tech-optima' src="/logos/OptimaSportsAnalyticslogo.png" alt="" />
            <p>Vice President</p>
            <p>2016-2021</p>
          </div>
          <div className='logo-card'>
            <img className='tech-bca' src="/logos/BCAlogo.png" alt="" />
            <p className='no-wrap'>Director of Sales & Business Development</p>
            <p>2022-2023</p>
          </div>
          <div className='logo-card'>
            <img className='tech-bizid' src="/logos/Bizidlogo5.png" alt="" />
            <p>Head of Sports Division</p>
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;