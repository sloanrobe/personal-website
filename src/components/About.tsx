import React from 'react'

function About() {
  return (
    <div className='about-container'>
      <div className='about-section'>
        <h2>About Me</h2>
        <hr />
        {/* <p>Professional, AI-driven Synopsis</p> */}
        <p>My name is Benji Sloan. For 25 years, I've worked at the intersection of elite athletics and innovation - helping NFL stars, Olympians, and now sports technology companies perform at their best.</p>
        <p>With a background spanning sports medicine, performance analytics, and business development, I bridge the gap between athletic performance and strategic growth.{/*  My current journey into full-stack software engineering also gives me a developer's perspective on the tools and technologies shaping industry innovation. */}</p>
        <p>I pair deep technical knowledge with a people-first mindset to solve complex challenges, build trusted partnerships, and create solutions that move both athletes and businesses forward.</p>
        {/* <p>Layman's Terms, No Fluff Synopsis</p> */}
        <div className="divider"></div>
        <p>If you want to be seen as one of many, go find someone else.  If you want to be seen as one of one, you're in the right place.</p>
        <p>Think of me as a sports translator - I've helped elite athletes and business execs understand each other for over two decades.</p>
        <p>Sure, I've been in the sports industry longer than most Gatorade flavors have existed. I've seen both torn ACLs <i>and</i> torn business plans.</p>
        <p>I know the people who move it forward, and I don't hesitate to call out what's not working. I bring hard-earned insight, a killer network, and a straight-shooting approach to get results that stick - plus diverse perspectives, a no-quit work ethic, and consistent collaboration.</p>
        {/* <p>Bottom line: I know the game, I know the players, and I make sure the wins actually count.</p> */}      
      </div>
      <div>
        <div className='about-images'>
          <img src="public/images/NYJ.jpg" alt="" />
          <img src="public/images/Speaker_5.jpg" alt="" />
        </div>  
      </div>
    </div>
  )
}

export default About