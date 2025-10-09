/* import React, { useState, useEffect, useRef } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        {
          root: null,
          threshold: 0.1,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };

    }, 50);

    return () => clearTimeout(delayTimer);

  }, []);

  return (
    <div id='about-nav-scroll' className='about-container' ref={containerRef}>
      
      <div className={`about-section ${isVisible ? 'fade-in-1' : ''}`}>
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
      
      <div className={`about-images-wrapper`}>
        <div className='about-images'>
         
          <img src="public/images/NYJ.jpg" alt="Benji Sloan with New York Jets Staff" className={isVisible ? 'fade-in-2' : ''}/>
          
          <img src="public/images/Speaker_5.jpg" alt="Benji Sloan speaking at a conference" className={isVisible ? 'fade-in-3' : ''}/>
        </div>
      </div>
    </div>
  )
}

export default About; */



/* import React, { useState } from 'react'

import '../gallery.css'
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../galleryimg/140.jpg'
import Img2 from '../galleryimg/388.jpg'
import Img3 from '../galleryimg/390.jpg'
import Img4 from '../galleryimg/BenjiandVinny.jpg'
import Img5 from '../galleryimg/Benji-Jets-Coaches.jpg'
import Img6 from '../galleryimg/Benji-LeBron.png'
import Img7 from '../galleryimg/benjimiami.jpg'
import Img8 from '../galleryimg/Fred-Taylor.jpg'
import Img9 from '../galleryimg/Marvin-Jones.jpg'
import Img10 from '../galleryimg/NYJ-Staff-1999.jpg'
import Img11 from '../galleryimg/Tony-Gonzalez.JPG'
import Img12 from '../galleryimg/Trainers.jpg'
import Img13 from '../galleryimg/Trainers3.jpg'
import Img14 from '../galleryimg/Trainers4.jpg'
import Img15 from '../galleryimg/Trainers5.jpg'
import Img16 from '../galleryimg/Trainers8.jpg'
import Img17 from '../galleryimg/Venue1.jpg'
import Img18 from '../galleryimg/Venue2.jpg'
import Img19 from '../galleryimg/Venue3.jpg'
import Img20 from '../galleryimg/Venue4.jpg'
import Img21 from '../galleryimg/World-Football-Summit.jpg'

function Gallery() {
  

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc: Img11,
        },
        {
            id: 12,
            imgSrc: Img12,
        },
        {
            id: 13,
            imgSrc: Img13,
        },
        {
            id: 14,
            imgSrc: Img14,
        },
        {
            id: 15,
            imgSrc: Img15,
        },
        {
            id: 16,
            imgSrc: Img16,
        },
        {
            id: 17,
            imgSrc: Img17,
        },
        {
            id: 18,
            imgSrc: Img18,
        },
        {
            id: 19,
            imgSrc: Img19,
        },
        {
            id: 20,
            imgSrc: Img20,
        },
        {
            id: 21,
            imgSrc: Img21,
        },
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    
    return (
    <>
    <h1>Gallery</h1>
    <div className={model? "model open": "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
    </div>
    <div className='gallery'>
        {data.map((item, index) => {
            return(
                <div className='pics' key={index} onClick={() => getImageListItemBarUtilityClass(item.imgSrc)}>
                    <img src={item.imgSrc} style={{width: '100%'}} />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Gallery;

h1 {
    color: white;
}

.gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    padding: 0 12px;
}

.gallery .pics {
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;
}

.gallery .pics:hover {
    filter: opacity(0.8);
}

@media (max-width: 900px) {
    .gallery {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}

@media (max-width: 480px) {
    .gallery {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
        -webkit-column-width: 100%;
        -moz-column-width: 100%;
        column-width: 100%;
        padding: 0 12px;
    }
} */

/* model */

/* .model {
    width: 100%;
    height: 100%;
    position: 0;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.5s ease-in-out;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
}

.model.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.model img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
}

.model.open svg {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 2rem;
    height: 2rem;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    cursor: pointer;
} */

/* CREATE TABLE contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    submission_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); */