import React, { useEffect, useState, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../galleryimg/140.jpg';
import Img2 from '../galleryimg/388.jpg';
import Img3 from '../galleryimg/390.jpg';
import Img4 from '../galleryimg/BenjiandVinny.jpg';
import Img5 from '../galleryimg/Benji-Jets-Coaches.jpg';
import Img6 from '../galleryimg/Benji-LeBron.png';
import Img7 from '../galleryimg/benjimiami.jpg';
import Img8 from '../galleryimg/Fred-Taylor.jpg';
import Img9 from '../galleryimg/Marvin-Jones.jpg';
import Img10 from '../galleryimg/NYJ-Staff-1999.jpg';
import Img11 from '../galleryimg/Tony-Gonzalez.JPG';
import Img12 from '../galleryimg/Trainers.jpg';
import Img13 from '../galleryimg/Trainers3.jpg';
import Img14 from '../galleryimg/Trainers4.jpg';
import Img15 from '../galleryimg/Trainers5.jpg';
import Img16 from '../galleryimg/Trainers8.jpg';
import Img17 from '../galleryimg/Venue1.jpg';
import Img18 from '../galleryimg/Venue2.jpg';
import Img19 from '../galleryimg/Venue3.jpg';
import Img20 from '../galleryimg/Venue4.jpg';
import Img21 from '../galleryimg/World-Football-Summit.jpg';

const data = [
  { id: 1, imgSrc: Img5, alt: '140' },
  { id: 2, imgSrc: Img1, alt: '388' },
  { id: 3, imgSrc: Img3, alt: '390' },
  { id: 4, imgSrc: Img19, alt: 'Benji and Vinny' },
  { id: 5, imgSrc: Img12, alt: 'Benji Jets Coaches' },
  { id: 6, imgSrc: Img17, alt: 'Benji & LeBron' },
  { id: 7, imgSrc: Img7, alt: 'Benji Miami' },
  { id: 8, imgSrc: Img8, alt: 'Fred Taylor' },
  { id: 9, imgSrc: Img14, alt: 'Venue 4' },
  { id: 10, imgSrc: Img11, alt: 'Marvin Jones' },
  { id: 11, imgSrc: Img10, alt: 'NYJ Staff 1999' },
  { id: 12, imgSrc: Img9, alt: 'Tony Gonzalez' },
  { id: 13, imgSrc: Img21, alt: 'Trainers' },
  { id: 14, imgSrc: Img6, alt: 'Trainers 3' },
  { id: 15, imgSrc: Img4, alt: 'Trainers 4' },
  { id: 16, imgSrc: Img20, alt: 'Trainers 5' },
  { id: 17, imgSrc: Img16, alt: 'Trainers 8' },
  { id: 18, imgSrc: Img2, alt: 'Venue 1' },
  { id: 19, imgSrc: Img13, alt: 'Venue 2' },
  { id: 20, imgSrc: Img18, alt: 'Venue 3' },
  { id: 21, imgSrc: Img15, alt: 'World Football Summit' },
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

  // Close on Escape key press and manage body scroll class
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onKeyDown);

    // Add or remove the 'modal-open' class to prevent content shifting
    if (model) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // Clean up on component unmount
      document.body.classList.remove('modal-open');
    };
  }, [model, closeModal]);

  return (
    <>
      <h1>Gallery</h1>

      {/* Modal overlay */}
      <div
        className={model ? 'model open' : 'model'}
        /* onClick={closeModal} */
        role="dialog"
        aria-modal="true"
      >
        {model && (
          <>
            <img
              src={tempimgSrc}
              alt=""
              onClick={(e) => e.stopPropagation()} /* don’t close when clicking image */
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

      {/* Masonry gallery */}
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
    </>
  );
}

export default Gallery;