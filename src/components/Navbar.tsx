import React, { useEffect, useRef } from 'react'
import ContactButton from './ContactButton'
import '../styles/contactbutton.css'

function Navbar() {

  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const navEl = navRef.current
    const sentinel = document.getElementById('nav-border-sentinel')
    if (!navEl || !sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is visible (we're at the very top), NO border.
        // When it’s not visible (we've scrolled down past it), SHOW border.
        if (entry.isIntersecting) {
          navEl.classList.remove('navbar--scrolled')
        } else {
          navEl.classList.add('navbar--scrolled')
        }
      },
      {
        root: null,
        threshold: 0,
      }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className='navbar' ref={navRef}>
      <img className='signature' src="public/images/Signature2.png" alt="" />
      <ul className="nav-links">
        <li><a href="#about-nav-scroll">About</a></li>
        <li><a href="#experience-nav-scroll">Experience</a></li>
        <li><a href="#webdev-nav-scroll">Web Development</a></li>
        <li><a href="#testimonials-nav-scroll">Testimonials</a></li>
        <li><a href="#gallery-nav-scroll">Gallery</a></li>
        {/* <li>Timeline</li> */}
        {/* <li>Contact</li> */}
      </ul>
      <ContactButton label={'Contact'} />
      {/* <div className='contact-logos'>
        <a href="https://www.linkedin.com/in/benji-sloan/">
          <img className='linkedin-logo' src="public/logos/LinkedIn_logo_initials.png" alt="LinkedIn icon" />
        </a>
        <a href="mailto:benji@flounleashed.com">
          <img className='email-logo' src="public/logos/email-logo.png" alt="Email icon" />
        </a>
      </div> */}
    </nav>
  )
}

export default Navbar