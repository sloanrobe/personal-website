import React from 'react'

function ProfileSection() {
  return (
    <div className='profile-container'>
      {<div className='profile-photo'>
        {<img src="public/images/BenjiHeadshotNoBackground.png" alt="" />}
      </div>}
      <div className='headline'>
        <p className='headline-line'>Visionary Leadership.</p>
        <p className='headline-line'>Strategic Insight.</p>
        <p className='headline-line'>Proven Results.</p>
        {<p className='headline-sub'>Where Performance Meets Sports Tech Innovation.</p>}
          {/* <p>Performance Visionary.</p>
          <p>Sports Tech Strategist.</p>
          <p>Collaborative Leader.</p> */}
      </div>
    </div>
  )
}

export default ProfileSection