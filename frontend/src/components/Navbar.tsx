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


      {/* hamburger toggle (no JS) */}
      <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-hidden="true" />
      <label htmlFor="nav-toggle" className="burger" aria-label="Toggle menu"><span /></label>


      <ul className="nav-links">
        <li><a href="#about-nav-scroll">About</a></li>
        <li><a href="#experience-nav-scroll">Experience</a></li>
        <li><a href="#webdev-nav-scroll">Web Development</a></li>
        <li><a href="#testimonials-nav-scroll">Testimonials</a></li>
        <li><a href="#gallery-nav-scroll">Gallery</a></li>
        <li className="contact-li mobile-only">
          <ContactButton label="Contact" />
        </li>
      </ul>
      <div className="contact-desktop desktop-only">
        <ContactButton label="Contact" />
      </div>
      {/* <ContactButton label={'Contact'} /> */}
    </nav>
  )
}

export default Navbar







/* import React, { useEffect, useRef, useState } from 'react';
import ContactButton from './ContactButton';
import '../styles/contactbutton.css';

function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar' ref={navRef}>
      <img className='signature' src="public/images/Signature2.png" alt="Signature Logo" />

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <div className={`burger ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger ${isOpen ? 'open' : ''}`}></div>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a onClick={toggleMenu} href="#about-nav-scroll">About</a></li>
        <li><a onClick={toggleMenu} href="#experience-nav-scroll">Experience</a></li>
        <li><a onClick={toggleMenu} href="#webdev-nav-scroll">Web Development</a></li>
        <li><a onClick={toggleMenu} href="#testimonials-nav-scroll">Testimonials</a></li>
        <li><a onClick={toggleMenu} href="#gallery-nav-scroll">Gallery</a></li>
      </ul>
      
      <ContactButton label={'Contact'} />
    </nav>
  );
}

export default Navbar; */