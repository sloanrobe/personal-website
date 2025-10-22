/* import React, { useEffect, useState, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../galleryimg/140.jpg';
import Img2 from '../galleryimg/388.jpg';
import Img3 from '../galleryimg/390.jpg';
import Img4 from '../galleryimg/JetsBenjiVinny.jpg';
import Img5 from '../galleryimg/Benji-Jets-Coaches.jpg';
import Img6 from '../galleryimg/JetsRayLucasNews.jpg';
import Img7 from '../galleryimg/BenjiMiamiHerald.jpg';
import Img8 from '../galleryimg/Fred-Taylor.jpg';
import Img9 from '../galleryimg/Marvin-Jones.jpg';
import Img10 from '../galleryimg/NYJ-Staff-1999.jpg';
import Img11 from '../galleryimg/Tony-Gonzalez.JPG';
import Img12 from '../galleryimg/Trainers.jpg';
import Img13 from '../galleryimg/Trainers3.jpg';
import Img14 from '../galleryimg/Trainers4.jpg';
import Img15 from '../galleryimg/JetsTeamPhoto.jpg';
import Img16 from '../galleryimg/Trainers8.jpg';
import Img17 from '../galleryimg/Venue1.jpg';
import Img18 from '../galleryimg/Venue2.jpg';
import Img19 from '../galleryimg/Venue3.jpg';
import Img20 from '../galleryimg/Venue4.jpg';
import Img21 from '../galleryimg/World-Football-Summit.jpg';

const data = [
  { id: 1, imgSrc: Img5, alt: 'Benji on sideline with Jets coaches' },
  { id: 2, imgSrc: Img6, alt: 'News article - NY Daily News with Benji in photo' },
  { id: 3, imgSrc: Img3, alt: 'Pregame photo of Benji on sideline' },
  { id: 4, imgSrc: Img19, alt: 'Venue 3' },
  { id: 5, imgSrc: Img15, alt: '1999 New York Jets team photo' },
  { id: 6, imgSrc: Img17, alt: 'Venue 1' },
  { id: 7, imgSrc: Img7, alt: 'Miami Herald photo of Benji during Jets vs. Dolphins' },
  { id: 8, imgSrc: Img8, alt: 'Photo with ex-Jaguars RB Fred Taylor' },
  { id: 9, imgSrc: Img12, alt: 'Pregame on sideline before Jets vs. Seahawks in 1999' },
  { id: 10, imgSrc: Img11, alt: 'Photo with NFL Hall of Fame TE Tony Gonzalez' },
  { id: 11, imgSrc: Img21, alt: 'Discussing sports analytics with delegate at the 2022 World Football Summit' },
  { id: 12, imgSrc: Img9, alt: 'Photo with ex-Jets LB Marvin Jones' },
  { id: 13, imgSrc: Img10, alt: '1999 Jets Athletic Training Interns' },
  { id: 14, imgSrc: Img1, alt: 'Benji on sideline during Jets pregame' },
  { id: 15, imgSrc: Img16, alt: 'Pregame on sideline during Jets vs. Seahawks kickoff in 1999' },
  { id: 16, imgSrc: Img20, alt: 'Venue 4' },
  { id: 17, imgSrc: Img4, alt: 'Benji with Vinny Testaverde and Bill Parcells' },
  { id: 18, imgSrc: Img2, alt: 'Benji on sideline during Jets at Dolphins pregame' },
  { id: 19, imgSrc: Img13, alt: 'Pregame on sideline during Jets vs. Seahawks in 1999' },
  { id: 20, imgSrc: Img18, alt: 'Venue 2' },
  { id: 21, imgSrc: Img14, alt: 'Pregame on sideline during Jets vs. Seahawks in 1999' },
];

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModal = useCallback(() => {
    setModel(false);
    setTempImgSrc('');
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onKeyDown);

    if (model) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [model, closeModal]);

  return (
    <div id='gallery-nav-scroll'>
      <h1>Gallery</h1>

      <div
        className={model ? 'model open' : 'model'}
        role="dialog"
        aria-modal="true"
      >
        {model && (
          <>
            <img
              src={tempimgSrc}
              alt=""
              onClick={(e) => e.stopPropagation()}
            />
            <CloseIcon
              className="close-btn"
              onClick={closeModal}
              aria-label="Close"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && closeModal()}
            />
          </>
        )}
      </div>

      <div className="gallery">
        {data.map((item) => (
          <div
            className="pics"
            key={item.id}
            onClick={() => getImg(item.imgSrc)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && getImg(item.imgSrc)}
          >
            <img src={item.imgSrc} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery; */







import React, { useEffect, useState, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../galleryimg/140.jpg';
import Img2 from '../galleryimg/388.jpg';
import Img3 from '../galleryimg/390.jpg';
import Img4 from '../galleryimg/JetsBenjiVinny.jpg';
import Img5 from '../galleryimg/Benji-Jets-Coaches.jpg';
import Img6 from '../galleryimg/JetsRayLucasNews.jpg';
import Img7 from '../galleryimg/BenjiMiamiHerald.jpg';
import Img8 from '../galleryimg/Fred-Taylor.jpg';
import Img9 from '../galleryimg/Marvin-Jones.jpg';
import Img10 from '../galleryimg/NYJ-Staff-1999.jpg';
import Img11 from '../galleryimg/Tony-Gonzalez.JPG';
import Img12 from '../galleryimg/Trainers.jpg';
import Img13 from '../galleryimg/Trainers3.jpg';
import Img14 from '../galleryimg/Trainers4.jpg';
import Img15 from '../galleryimg/JetsTeamPhoto.jpg';
import Img16 from '../galleryimg/Trainers8.jpg';
import Img17 from '../galleryimg/Venue1.jpg';
import Img18 from '../galleryimg/Venue2.jpg';
import Img19 from '../galleryimg/Venue3.jpg';
import Img20 from '../galleryimg/Venue4.jpg';
import Img21 from '../galleryimg/World-Football-Summit.jpg';

const data = [
  { id: 1, imgSrc: Img5, alt: 'Benji on the sideline with Jets Head Coach Bill Parcells' },
  { id: 2, imgSrc: Img6, alt: 'NY Daily News article from October 18, 1999 - Benji in bottom photo' },
  { id: 3, imgSrc: Img3, alt: 'Pregame photo of Benji on sideline' },
  { id: 4, imgSrc: Img19, alt: 'Venue 3' },
  { id: 5, imgSrc: Img15, alt: '1999 New York Jets team photo. Benji is on the front row, 4th from right.' },
  { id: 6, imgSrc: Img17, alt: 'Venue 1' },
  { id: 7, imgSrc: Img7, alt: 'Miami Herald article from December 13, 1999 - Benji and Coach Bill Belichick' },
  { id: 8, imgSrc: Img8, alt: 'Photo with former University of Florida & Jacksonville Jaguars RB Fred Taylor' },
  { id: 9, imgSrc: Img12, alt: 'Pregame on sideline before Jets vs. Seahawks in 1999' },
  { id: 10, imgSrc: Img11, alt: 'Photo with NFL Hall of Fame TE Tony Gonzalez' },
  { id: 11, imgSrc: Img21, alt: 'Discussing sports analytics with delegate at the 2022 World Football Summit in Seville, Spain' },
  { id: 12, imgSrc: Img9, alt: 'Photo with former FSU & New York Jets LB Marvin Jones' },
  { id: 13, imgSrc: Img10, alt: '1999 Jets Seasonal Assistant Athletic Trainers' },
  { id: 14, imgSrc: Img1, alt: 'Benji on sideline during Jets pregame' },
  { id: 15, imgSrc: Img16, alt: 'Pregame on sideline during Jets vs. Seahawks kickoff in 1999' },
  { id: 16, imgSrc: Img20, alt: 'Venue 4' },
  { id: 17, imgSrc: Img4, alt: 'September 12, 1999 - Benji with QB Vinny Testaverde, RB Richie Anderson, and Head Coach Bill Parcells' },
  { id: 18, imgSrc: Img2, alt: 'Benji on sideline during Jets at Dolphins pregame' },
  { id: 19, imgSrc: Img13, alt: 'Pregame on sideline during Jets vs. Seahawks in 1999' },
  { id: 20, imgSrc: Img18, alt: 'Venue 2' },
  { id: 21, imgSrc: Img14, alt: 'Pregame on sideline during Jets vs. Seahawks in 1999' },
];

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  // 1. New state to hold the caption
  const [caption, setCaption] = useState('');

  // Updated getImg to take both imgSrc and alt text (caption)
    const getImg = (imgSrc, altText) => {
    setTempImgSrc(imgSrc);
    setCaption(altText); // Store the alt text as the caption
    setModel(true);
  };

  const closeModal = useCallback(() => {
    setModel(false);
    setTempImgSrc('');
    setCaption(''); // Clear the caption on close
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onKeyDown);

    if (model) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [model, closeModal]);

  return (
    <div id='gallery-nav-scroll'>
      <h1>Gallery</h1>

      <div
        className={model ? 'model open' : 'model'}
        role="dialog"
        aria-modal="true"
        // Allows clicking outside the image/caption to close the modal
        onClick={closeModal} 
      >
        {model && (
          <>
             <figure> {/* Use <figure> for semantic grouping of image and caption */}
               <img
                src={tempimgSrc}
                alt={caption} // Keep the alt text for accessibility
                onClick={(e) => e.stopPropagation()}
              />
              {/* 2. Display the caption using the new state */}
              {caption && <figcaption className="image-caption">{caption}</figcaption>}
            </figure>

            <CloseIcon
              className="close-btn"
              onClick={closeModal}
              aria-label="Close"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && closeModal()}
            />
          </>
        )}
      </div>

      <div className="gallery">
        {data.map((item) => (
          <div
            className="pics"
            key={item.id}
            // Pass both imgSrc and alt text to getImg
            onClick={() => getImg(item.imgSrc, item.alt)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && getImg(item.imgSrc, item.alt)}
          >
            <img src={item.imgSrc} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;