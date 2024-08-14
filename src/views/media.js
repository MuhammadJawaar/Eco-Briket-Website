import React, { useState } from 'react';
import Navbar8 from '../components/navbar8'; // Import Navbar8 component
import Footer4 from '../components/footer4'; // Import Footer4 component
import './media.css'; // Import custom CSS for Media component

// Import all 18 images from src/assets
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';
import img14 from '../assets/14.png';
import img15 from '../assets/15.png';
import img16 from '../assets/16.png';
import img17 from '../assets/17.png';
import img18 from '../assets/18.png';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18,
];

const Media = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleOverlayClick = (direction) => {
    if (direction === 'left') {
      setCurrentPage((prevPage) =>
        prevPage > 0 ? prevPage - 1 : images.length - 1
      );
    } else if (direction === 'right') {
      setCurrentPage((prevPage) =>
        prevPage < images.length - 1 ? prevPage + 1 : 0
      );
    }
  };

  const translateX = `-${currentPage * 100}%`;

  return (
    <div>
      <Navbar8
        link1={
          <span className="media-text thq-link thq-body-small">Home</span>
        }
        link2={
          <span className="media-text001 thq-link thq-body-small">Media</span>
        }
        link3={
          <span className="media-text002 thq-link thq-body-small">About</span>
        }
      />
      <div className="media-container">
        <h2 className="media-title">Flipbook</h2> {/* Title for the image gallery */}
        <div className="media-wrapper">
          <div
            className="media-overlay left"
            onClick={() => handleOverlayClick('left')}
          />
          <div
            className="media-overlay right"
            onClick={() => handleOverlayClick('right')}
          />
          <div className="media-images" style={{ transform: `translateX(${translateX})` }}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Page ${index + 1}`}
                className={`media-image ${index === currentPage ? 'current' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="poster-container">
          <h2 className="poster-title">Poster</h2> {/* Title for the poster */}
          <img
            src="https://i.ibb.co.com/y5GMg0P/Black-and-Beige-Vintage-Newspaper-Baby-Announcement-Poster.png"
            alt="Poster"
            className="poster-image"
          />
        </div>
        <div className="download-container">
          <a
            href="https://bit.ly/eco-briket" // Replace with your actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            Link Drive Media
          </a>
        </div>
      </div>
      <Footer4
        link1={
          <span className="media-text114 thq-body-small">Tentang Kami</span>
        }
        link2={
          <span className="media-text115 thq-body-small">Produk</span>
        }
        link3={
          <span className="media-text116 thq-body-small">Media</span>
        }
        link4={
          <span className="media-text117 thq-body-small">Kontak</span>
        }
        link5={
          <span className="media-text118 thq-body-small">FAQ</span>
        }
        termsLink={
          <span className="media-text119 thq-body-small">
            Ketentuan Penggunaan
          </span>
        }
        cookiesLink={
          <span className="media-text120 thq-body-small">
            Kebijakan Cookie
          </span>
        }
        privacyLink={
          <span className="media-text121 thq-body-small">
            Kebijakan Privasi
          </span>
        }
      />
    </div>
  );
};

export default Media;
