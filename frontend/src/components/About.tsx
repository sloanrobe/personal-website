import React from 'react';

function About() {
  return (
    <div id='about-nav-scroll' className='about-container'>
      <div className='about-section'>
        <h2>Hi, my name is Benji Sloan...</h2>
        <p>...and for 25 years, I've worked at the intersection of elite athletics and innovation - helping NFL stars, elite athletes, Olympians, and now sports technology companies perform at their best.</p>
        <p>My background spans sports medicine, performance analytics, and business development, and I routinely bridge the gap between athletic performance and strategic growth.</p>
        <p>My focus is solving complex challenges, building trusted partnerships, and creating solutions that move both athletes and businesses forward.</p>
        <div className="divider"></div>
        <p className='about-question'>So, what exactly does that mean?</p>
        <p>Think of me as a sports translator - I've helped elite athletes and business execs understand each other for over two decades.</p>
        <p>Sure, I've been in the sports industry longer than most Gatorade flavors have existed. I've seen both torn ACLs <i>and</i> torn business plans.</p>
        <p>I know the people who move it forward, and I don't hesitate to call out what's not working. I bring hard-earned insight, a killer network, and a straight-shooting approach to get results that stick - plus diverse perspectives, a no-quit work ethic, and consistent collaboration.</p>
      </div>

      <div className='about-images-wrapper'>
        <div className='about-images'>
          <img
            src="/images/NYJ.jpg"
            alt="Benji Sloan with New York Jets Staff"
          />
          <img
            src="/images/Speaker_5.jpg"
            alt="Benji Sloan speaking at a conference"
          />
        </div>
      </div>
    </div>
  );
}

export default About;