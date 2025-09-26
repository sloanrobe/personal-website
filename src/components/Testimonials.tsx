import React from 'react'

function Testimonials() {
  return (
    <>
    <div className='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonial-row'>
            <div className='testimonial-card'>
                <p>“Over the past six months, Benji has brought real value to Dailyhuman, from key investor and partner introductions to business development guidance that's strengthened how we position the company. We're lucky to have him looking out for us.”</p>
            </div>
            <div className='testimonial-card'>
                <p>"I've known Benji since September of last year, and from day one, he's been an incredible supporter. His deep understanding of the sports industry has been invaluable in connecting me with the right people; whether they are potential customers, investors, or partners. What I've valued most, however, is his unwavering belief in what we're building around fan engagement and the consistent support he's provided along the way."</p>
            </div>
        </div>
        <div className='testimonial-row'>
            <div className='testimonial-card'>
                <p>"Benji Sloan is a master of connections. But he doesn't just connect competencies; he connects people. When we were looking to grow, he didn't just point us to people with the right résumés—he introduced us to the people we needed to succeed. He has an uncanny ability to see how different personalities and skills can complement each other, and the people he's brought into our network not only have the right skills, but they also have the right mindset. If you're in the tech startup space, Benji likely knows who you need to know."</p>
            </div>
            <div className='testimonial-card'>
                <p>"Benji has been so helpful and generous with his time, expertise and network - and it's a big, well-developed network, full of people Benji has helped and who want to help him. On top of this, his expertise in the sports tech space is top notch, and his advice applicable and productive for me personally and for my company, K12 Sports Tech. Take a few minutes with him and see what I mean - you won't be sorry you took the time!"</p>
            </div>
        </div>
        <div className='testimonial-row'>
            <div className='testimonial-card'>
                <p>"I was recommended to connect with Benji through a mutual football/soccer contact when I was exploring the potential to launch Sportective. Since our first call I immediately knew Benji would become not only a trusted advisor but also a good friend and guiding influence, with his diverse knowledge of the sports world, particularly in the US and Europe. His insights have been instrumental in helping us shape Sportective's roadmap and he is always available as a sounding board to offer sound and rational advice. I have no hesitation in recommending Benji not only as a high-integrity operator, but also as a good guy you'd want to work with.</p>
            </div>
            {<div className='testimonial-card'>
                <p>"This is ANOTHER testimonial about someone's experience working with me. It will probably be more than one sentence"</p>
            </div>}
        </div>
    </div>

    <div className='testimonials-test'>
        <h2>Testimonials</h2>
            <div className='testimonial-dailyhuman'>
                <p>“Over the past six months, Benji has brought real value to Dailyhuman, from key investor and partner introductions to business development guidance that's strengthened how we position the company. We're lucky to have him looking out for us.”</p>
            </div>
            <div className='testimonial-lockeroom'>
                <p>"I've known Benji since September of last year, and from day one, he's been an incredible supporter. His deep understanding of the sports industry has been invaluable in connecting me with the right people; whether they are potential customers, investors, or partners. What I've valued most, however, is his unwavering belief in what we're building around fan engagement and the consistent support he's provided along the way."</p>
            </div>
            <div className='testimonial-probility'>
                <div className='headshot-info'>
                    <img className='headshot-style' src="public/headshots/plocki-headshot.jfif" alt="" />
                    <p>Founder & CEO</p>
                    <img className='testimonial-img-probility' src="public/logos/ProbilityAI-logo.png" alt="" />
                </div>
                <p>"Benji Sloan is a master of connections. But he doesn't just connect competencies; he connects people. When we were looking to grow, he didn't just point us to people with the right résumés — he introduced us to the people we needed to succeed. He has an uncanny ability to see how different personalities and skills can complement each other, and the people he's brought into our network not only have the right skills, but they also have the right mindset. If you're in the tech startup space, Benji likely knows who you need to know."</p>
            </div>
            <div className='testimonial-k12'>
                <p>"Benji has been so helpful and generous with his time, expertise and network - and it's a big, well-developed network, full of people Benji has helped and who want to help him. On top of this, his expertise in the sports tech space is top notch, and his advice applicable and productive for me personally and for my company, K12 Sports Tech. Take a few minutes with him and see what I mean - you won't be sorry you took the time!"</p>
            </div>
            <div className='testimonial-sportective'>
                <p>"I was recommended to connect with Benji through a mutual football/soccer contact when I was exploring the potential to launch Sportective. Since our first call I immediately knew Benji would become not only a trusted advisor but also a good friend and guiding influence, with his diverse knowledge of the sports world, particularly in the US and Europe. His insights have been instrumental in helping us shape Sportective's roadmap and he is always available as a sounding board to offer sound and rational advice. I have no hesitation in recommending Benji not only as a high-integrity operator, but also as a good guy you'd want to work with.</p>
            </div>
            {/* <div className='testimonial-card-test'>
                <p>"This is ANOTHER testimonial about someone's experience working with me. It will probably be more than one sentence"</p>
            </div> */}
    </div>
    </>
  )
}

export default Testimonials