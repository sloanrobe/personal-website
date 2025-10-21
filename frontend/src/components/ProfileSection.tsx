import React from 'react'

function ProfileSection() {
  return (
    <div className='profile-container'>
      {<div className='profile-photo'>
        {<img src="/images/BenjiHeadshotNoBackground.png" alt="Benji Sloan profile photo" />}
      </div>}
      <div className='headline'>
        <p className='headline-line'>Visionary Leadership.</p>
        <p className='headline-line'>Strategic Insight.</p>
        <p className='headline-line'>Proven Results.</p>
        <p className='headline-sub'>Sports Tech Consulting for Innovation and Growth</p>
      </div>
    </div>
  )
}

export default ProfileSection