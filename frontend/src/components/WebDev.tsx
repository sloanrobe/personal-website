import React from 'react';
import GithubButton from './GithubButton';
import '../styles/githubbutton.css';

function WebDev() {
  return (
    <div id='webdev-nav-scroll' className='webdev-container'>
      <div className='webdev-logos'>
        <img
          src="/logos/webdev-logos.png"
          alt="Web Development Logos"
        />
      </div>

      <div className='webdev-section'>
        <h2>I am a Junior Web Developer</h2>
        <hr />
        <p>I'm like the utility player in software engineering—junior role, big hustle, and ready to contribute wherever needed.</p>
        <p>For the past year, I've been diving headfirst into full-stack development—HTML, CSS, JavaScript, React, Node, databases, the works.</p>
        <p>I've built projects from scratch, broken plenty of code along the way, and learned how to fix it (and sometimes even make it better).</p>
        <div className="divider"></div>
        <p className='webdev-question'>So, what exactly does <i>this</i> mean?</p>
        <p className='webdev-answer'>It means I'm not showing up pretending to be a senior engineer—I'm here to play a solid junior role.</p>
        <p>I can build features, support a team, and contribute to projects while continuing to sharpen my skills. I know enough to be dangerous in a good way, and I'm committed to learning from those ahead of me.</p>
        <p>I may still be learning, but coding reminds me of my work in sports tech consulting—turning complex data into something usable that actually drives performance. In both worlds, the key is translating ideas into tools that people can trust and use.</p>
        <hr />
        <GithubButton label="Check out my GitHub" />
      </div>
    </div>
  );
}

export default WebDev;