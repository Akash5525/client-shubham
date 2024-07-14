// src/components/Gallery.js
import React from 'react';
import { useLocation } from 'react-router-dom';

// Sample data for the gallery images for each project
const galleryData = {
  'ras-township': [
    { src: 'https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'RAS TOWNSHIP,RAJASTHAN' },
    // Add more images as needed
  ],
  'studios-90': [
    { src: 'https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'STUDIOS 90, KARNATAKA' },
    { src: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'STUDIOS 90, KARNATAKA' },
    // Add more images as needed
  ],
  'the-pearl': [
    { src: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'THE PEARL, OMAN' },
    // Add more images as needed
  ],
};

const Gallery = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const project = query.get('project');

  const images = galleryData[project] || [];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-4">{project ? project.replace('-', ' ').toUpperCase() : 'Gallery'}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-48 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
