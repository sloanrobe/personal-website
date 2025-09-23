import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      {/* <h1>Benji Sloan, MA, ATC</h1> */}
      <img className='signature' src="public/images/Signature.png" alt="" />
      <ul className="nav-links">
        <li>About</li>
        <li>Experience</li>
        <li>Full-Stack Developer</li>
        <li>Testimonials</li>
        <li>Timeline</li>
        <li>Contact</li>
      </ul>
      <div className='contact-logos'>
        <a href="https://www.linkedin.com/in/benji-sloan/">
          <img className='linkedin-logo' src="public/logos/LinkedIn_logo_initials.png" alt="LinkedIn icon" />
        </a>
        <a href="mailto:benji@flounleashed.com">
          <img className='email-logo' src="public/logos/email-logo.png" alt="Email icon" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar