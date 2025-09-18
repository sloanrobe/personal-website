import React from 'react'

function ExperienceCard() {
  return (
    <div className='experience-types'>
        <div className='sports-technology'>
            <h2>Sports Technology</h2>
            <p>A description of sports technology experience will go here.</p>
            {/* <img src="public/logos/FLOUnleashedlogo3.PNG" alt="" /> */}


        </div>
        <div className='sports-medicine'>
            <h2>Sports Medicine</h2>
            <p>A description of sports medicine experience will go here.</p>


        </div>
        <div className='full-stack'>
            <h2>Junior Full-Stack Developer</h2>
            <p>A description of full-stack experience will go here.</p>


        </div>
    </div>
  )
}

export default ExperienceCard