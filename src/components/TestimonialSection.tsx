/* import React from 'react'

function TestTestimonial() {
  return (
    <div className='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonial-row'>
            <div className='testimonial-probility testimonial-card'>
                <img className='testimonial-img-probility' src="public/logos/probilitylogo-rounded.PNG" alt="" />
                <p>"Benji Sloan is a master of connections. But he doesn't just connect competencies; he connects people. When we were looking to grow, he didn't just point us to people with the right résumés — he introduced us to the people we needed to succeed. He has an uncanny ability to see how different personalities and skills can complement each other, and the people he's brought into our network not only have the right skills, but they also have the right mindset. If you're in the tech startup space, Benji likely knows who you need to know."</p>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/plocki-headshot.jfif" alt="" />
                    <p>Doug Plocki</p>
                    <p>Founder & CEO</p>  
                </div>
            </div>
            <div className='testimonial-dailyhuman testimonial-card'>    
                <img className='testimonial-img-dailyhuman' src="public/logos/dailyhumanlogo-rounded.PNG" alt="" />
                <p>“Over the past six months, Benji has brought real value to Dailyhuman, from key investor and partner introductions to business development guidance that's strengthened how we position the company. We're lucky to have him looking out for us.”</p>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/josh-roenitz.jfif" alt="" />
                    <p>Josh Roenitz</p>
                    <p>Founder & CEO</p>   
                </div>
            </div>  
            <div className='testimonial-lockeroom testimonial-card'>
                <img className='testimonial-img-lockeroom' src="public/logos/lockeroomlogo-rounded.PNG" alt="" />
                <p>"I've known Benji since September of last year, and from day one, he's been an incredible supporter of Lockeroom Chat. His deep understanding of the sports industry has been invaluable in connecting me with the right people; whether they are potential customers, investors, or partners. What I've valued most, however, is his unwavering belief in what we're building around fan engagement and the consistent support he's provided along the way."</p>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/demetri-harrison.jfif" alt="" />
                    <p>Demetri Harrison</p>
                    <p>Co-Founder & CEO</p>
                </div>
            </div>
            <div className='testimonial-k12 testimonial-card'>
                <img className='testimonial-img-k12' src="public/logos/k12logo-rounded.PNG" alt="" />
                <p>"Benji has been so helpful and generous with his time, expertise and network - and it's a big, well-developed network, full of people Benji has helped and who want to help him. On top of this, his expertise in the sports tech space is top notch, and his advice applicable and productive for me personally and for my company, K12 Sports Tech. Take a few minutes with him and see what I mean - you won't be sorry you took the time!"</p>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/abby-emerson.jfif" alt="" />
                    <p>Abby Emerson</p>
                    <p>Founder</p>   
                </div>
            </div>
            <div className='testimonial-sportective testimonial-card'>
                <img className='testimonial-img-sportective' src="public/logos/sportectivelogo-rounded.PNG" alt="" />
                <p>"I was recommended to connect with Benji through a mutual football/soccer contact when I was exploring the potential to launch Sportective. Since our first call I immediately knew Benji would become not only a trusted advisor but also a good friend and guiding influence, with his diverse knowledge of the sports world, particularly in the US and Europe. His insights have been instrumental in helping us shape Sportective's roadmap and he is always available as a sounding board to offer sound and rational advice. I have no hesitation in recommending Benji not only as a high-integrity operator, but also as a good guy you'd want to work with.</p>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/neil-whitbread.jfif" alt="" />
                    <p>Neil Whitbread</p>
                    <p>Managing Director</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestTestimonial */

/* import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    companyLogo: 'public/logos/probilitylogo-rounded.PNG',
    logoClass: 'testimonial-img-probility',
    text: `"Benji Sloan is a master of connections. But he doesn't just connect competencies; he connects people. When we were looking to grow, he didn't just point us to people with the right résumés — he introduced us to the people we needed to succeed. He has an uncanny ability to see how different personalities and skills can complement each other, and the people he's brought into our network not only have the right skills, but they also have the right mindset. If you're in the tech startup space, Benji likely knows who you need to know."`,
    headshot: 'public/headshots/plocki-headshot.jfif',
    name: 'Doug Plocki',
    title: 'Founder & CEO',
  },
  {
    id: 2,
    companyLogo: 'public/logos/dailyhumanlogo-rounded.PNG',
    logoClass: 'testimonial-img-dailyhuman',
    text: `“Over the past six months, Benji has brought real value to Dailyhuman, from key investor and partner introductions to business development guidance that's strengthened how we position the company. We're lucky to have him looking out for us.”`,
    headshot: 'public/headshots/josh-roenitz.jfif',
    name: 'Josh Roenitz',
    title: 'Founder & CEO',
  },
  {
    id: 3,
    companyLogo: 'public/logos/lockeroomlogo-rounded.PNG',
    logoClass: 'testimonial-img-lockeroom',
    text: `"I've known Benji since September of last year, and from day one, he's been an incredible supporter of Lockeroom Chat. His deep understanding of the sports industry has been invaluable in connecting me with the right people; whether they are potential customers, investors, or partners. What I've valued most, however, is his unwavering belief in what we're building around fan engagement and the consistent support he's provided along the way."`,
    headshot: 'public/headshots/demetri-harrison.jfif',
    name: 'Demetri Harrison',
    title: 'Co-Founder & CEO',
  },
  {
    id: 4,
    companyLogo: 'public/logos/k12logo-rounded.PNG',
    logoClass: 'testimonial-img-k12',
    text: `"Benji has been so helpful and generous with his time, expertise and network - and it's a big, well-developed network, full of people Benji has helped and who want to help him. On top of this, his expertise in the sports tech space is top notch, and his advice applicable and productive for me personally and for my company, K12 Sports Tech. Take a few minutes with him and see what I mean - you won't be sorry you took the time!"`,
    headshot: 'public/headshots/abby-emerson.jfif',
    name: 'Abby Emerson',
    title: 'Founder',
  },
  {
    id: 5,
    companyLogo: 'public/logos/sportectivelogo-rounded.PNG',
    logoClass: 'testimonial-img-sportective',
    text: `"I was recommended to connect with Benji through a mutual football/soccer contact when I was exploring the potential to launch Sportective. Since our first call I immediately knew Benji would become not only a trusted advisor but also a good friend and guiding influence, with his diverse knowledge of the sports world, particularly in the US and Europe. His insights have been instrumental in helping us shape Sportective's roadmap and he is always available as a sounding board to offer sound and rational advice. I have no hesitation in recommending Benji not only as a high-integrity operator, but also as a good guy you'd want to work with."`,
    headshot: 'public/headshots/neil-whitbread.jfif',
    name: 'Neil Whitbread',
    title: 'Managing Director',
  },
];

function TestimonialSection() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <div className='testimonials'>
      <h2>Testimonials</h2>
      <div className='testimonial-container'>
        <div className='testimonial-card'>
          <img className={currentTestimonial.logoClass} src={currentTestimonial.companyLogo} alt="" />
          <p>{currentTestimonial.text}</p>
          <div className='headshot-info'>
            <img className='headshot-style' src={currentTestimonial.headshot} alt="" />
            <p>{currentTestimonial.name}</p>
            <p>{currentTestimonial.title}</p>
          </div>
        </div>
      </div>
      <div className='testimonial-dots'>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection; */

import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    companyLogo: 'public/logos/probilitylogo-rounded.PNG',
    logoClass: 'testimonial-img-probility',
    text: `"Benji Sloan is a master of connections. But he doesn't just connect competencies; he connects people. When we were looking to grow, he didn't just point us to people with the right résumés — he introduced us to the people we needed to succeed. He has an uncanny ability to see how different personalities and skills can complement each other, and the people he's brought into our network not only have the right skills, but they also have the right mindset. If you're in the tech startup space, Benji likely knows who you need to know."`,
    headshot: 'public/headshots/plocki-headshot.jfif',
    name: 'Doug Plocki',
    title: 'Founder & CEO',
  },
  {
    id: 2,
    companyLogo: 'public/logos/dailyhumanlogo-rounded.PNG',
    logoClass: 'testimonial-img-dailyhuman',
    text: `“Over the past six months, Benji has brought real value to Dailyhuman, from key investor and partner introductions to business development guidance that's strengthened how we position the company. We're lucky to have him looking out for us.”`,
    headshot: 'public/headshots/josh-roenitz.jfif',
    name: 'Josh Roenitz',
    title: 'Founder & CEO',
  },
  {
    id: 3,
    companyLogo: 'public/logos/lockeroomlogo-rounded.PNG',
    logoClass: 'testimonial-img-lockeroom',
    text: `"I've known Benji since September of last year, and from day one, he's been an incredible supporter of Lockeroom Chat. His deep understanding of the sports industry has been invaluable in connecting me with the right people; whether they are potential customers, investors, or partners. What I've valued most, however, is his unwavering belief in what we're building around fan engagement and the consistent support he's provided along the way."`,
    headshot: 'public/headshots/demetri-harrison.jfif',
    name: 'Demetri Harrison',
    title: 'Co-Founder & CEO',
  },
  {
    id: 4,
    companyLogo: 'public/logos/k12logo-rounded.PNG',
    logoClass: 'testimonial-img-k12',
    text: `"Benji has been so helpful and generous with his time, expertise and network - and it's a big, well-developed network, full of people Benji has helped and who want to help him. On top of this, his expertise in the sports tech space is top notch, and his advice applicable and productive for me personally and for my company, K12 Sports Tech. Take a few minutes with him and see what I mean - you won't be sorry you took the time!"`,
    headshot: 'public/headshots/abby-emerson.jfif',
    name: 'Abby Emerson',
    title: 'Founder',
  },
  {
    id: 5,
    companyLogo: 'public/logos/sportectivelogo-rounded.PNG',
    logoClass: 'testimonial-img-sportective',
    text: `"I was recommended to connect with Benji through a mutual football/soccer contact when I was exploring the potential to launch Sportective. Since our first call I immediately knew Benji would become not only a trusted advisor but also a good friend and guiding influence, with his diverse knowledge of the sports world, particularly in the US and Europe. His insights have been instrumental in helping us shape Sportective's roadmap and he is always available as a sounding board to offer sound and rational advice. I have no hesitation in recommending Benji not only as a high-integrity operator, but also as a good guy you'd want to work with."`,
    headshot: 'public/headshots/neil-whitbread.jfif',
    name: 'Neil Whitbread',
    title: 'Managing Director',
  },
];

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    if (index === activeIndex) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 150);
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <div id='testimonials-nav-scroll' className='testimonials'>
      <h2>Testimonials</h2>
      <div className='testimonial-container'>
        <div className='testimonial-card'>
          <div className={`testimonial-content ${isFading ? 'fading' : ''}`}>
            <img className={currentTestimonial.logoClass} src={currentTestimonial.companyLogo} alt="" />
            <p>{currentTestimonial.text}</p>
            <div className='testimonial-author'>
              <img className='headshot-style' src={currentTestimonial.headshot} alt="" />
              <p>{currentTestimonial.name}</p>
              <p>{currentTestimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial-dots'>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;