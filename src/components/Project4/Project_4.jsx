import React from 'react';
import './Project.css'
import image8 from '../../Image/Projects/project_1/8.jpg'
import image9 from '../../Image/Projects/project_1/9.jpg'
const Project_4 = () => {
  const images = [
    { src: image8 },
    { src: image9 }
  ];

  return (
    <div className="gallery-container">
    <div className="gallery-item large">
      <div className="image-container">
        <img src={images[0].src} alt={images[0].alt} className="gallery-image" />
      </div>
      <p className="gallery-label">{images[0].label}</p>
    </div>
    <div className="gallery-item small">
      <div className="image-container">
        <img src={images[1].src} alt={images[1].alt} className="gallery-image" />
      </div>
      <p className="gallery-label">{images[1].label}</p>
    </div>
  </div>
  );
};

export default Project_4;
