import React from 'react'

function ProfileSection() {
  return (
    <div className='profile-container'>
      <div className='profile-photo'>
        <img src="public/images/BenjiHeadshotNoBackground.png" alt="" />
      </div>
      <div className='headline'>
          <p>Performance Visionary.</p>
          <p>Sports Tech Strategist.</p>
          <p>Collaborative Leader.</p>
      </div>
    </div>
  )
}

export default ProfileSection