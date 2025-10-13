/* import React from 'react'

function SportsTechnologyExperience() {
  return (  
    <div className='sports-tech-experience' >
        <h2>Sports Technology</h2>
        <h2>Experience</h2>  
        <div className='flo-experience' >
            <img className='tech-flo' src="public/logos/FLOUnleashedlogo3.PNG" alt="" />
            <p>Chief Business Development Officer</p>
            <p>2024-Present</p>
        </div>
        <div className='analytics-experience'>
            <div className='optima-experience' >
                <img className='tech-optima' src="public/logos/OptimaSportsAnalyticslogo.png" alt="" />
                <p>Vice President</p>
                <p>2016-2021</p>
            </div>
            <div className='bca-experience'>
                <img className='tech-bca' src="public/logos/BCAlogo.png" alt="" />
                <p>Director of Sales & Business Development</p>
                <p>2022-2023</p>
            </div>
            <div className='bizid-experience'>
                <img className='tech-bizid' src="public/logos/Bizidlogo5.png" alt="" />
                <p>Head of Sports Division</p>
                <p>2024</p>
            </div>
        </div>
    </div>
  )
}

export default SportsTechnologyExperience */

/* import React from 'react'

function SportsTechnologyExperience() {
  return (  
    <div className='sports-tech-experience' >
        <h2 className='sport-tech-header'>Sports Technology</h2>
        <div className='flo-experience' >
            <div className='logo-card' >
                <img className='tech-flo' src="public/logos/FLOUnleashedlogo3.PNG" alt="" />
                <p>Chief of Business Development</p>
                <p>2024-Present</p>
                <video className='commercial-video' src="public/videos/Commercial-Video.MOV" controls poster="public/images/FLO-poster.png" ></video>
            </div>
        </div>
        <div className='analytics-experience'>
            <div className='logo-card' >
                <img className='tech-optima' src="public/logos/OptimaSportsAnalyticslogo.png" alt="" />
                <p>Vice President</p>
                <p>2016-2021</p>
            </div>
            <div className='logo-card'>
                <img className='tech-bca' src="public/logos/BCAlogo.png" alt="" />
                <p className='no-wrap' >Director of Sales & Business Development</p>
                <p>2022-2023</p>
            </div>
            <div className='logo-card'>
                <img className='tech-bizid' src="public/logos/Bizidlogo5.png" alt="" />
                <p>Head of Sports Division</p>
                <p>2024</p>
            </div>
            
        </div>
    </div>
  )
}

export default SportsTechnologyExperience */

import React, { useRef, useState } from 'react';

function SportsTechnologyExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (  
    <div className='sports-tech-experience'>
      <h2 className='sport-tech-header'>Sports Technology</h2>

      <div className='flo-experience'>
        <div className='logo-card'>
          <img className='tech-flo' src="public/logos/FLOUnleashedlogo3.PNG" alt="" />
          <p>Chief of Business Development</p>
          <p>2024-Present</p>

          {/* ⬇️ Wrapped video + overlay play button */}
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="commercial-video"
              controls={playing}
              poster="public/images/FLO-poster.png"
            >
              <source src="public/videos/Commercial-Video.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!playing && (
              <button className="play-overlay" onClick={handlePlay} aria-label="Play video">
                ▶
              </button>
            )}
          </div>
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
  );
}

export default SportsTechnologyExperience;