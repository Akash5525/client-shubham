// import React, { useEffect,useRef } from 'react';
// import '../components/css/Home5.css'; 

// const Home5 = () => {
//   const slides = [
//     { id: 1, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 1', label: 'U16 House', link: '/details/u16-house' },
//     { id: 2, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 2', label: 'Project 2', link: '/details/project-2' },
//     { id: 3, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 3', label: 'Project 3', link: '/details/project-3' },
//     { id: 4, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 4', label: 'U16 House', link: '/details/project-4' },
//     { id: 5, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 5', label: 'Project 5', link: '/details/project-5' },
//     { id: 6, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 6', label: 'Project 6', link: '/details/project-6' },

//   ];

//   const sliderRef = useRef(null);

//   const slideLeft = () => {
//     sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
//   };

//   const slideRight = () => {
//     sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;
//     const slideTimer = setInterval(() => {
//       slider.scrollLeft += slider.offsetWidth;
//       scrollAmount += slider.offsetWidth;
//       if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
//         scrollAmount = 0;
//         slider.scrollLeft = 0;
//       }
//     }, 2500);

//     return () => clearInterval(slideTimer);
//   }, []);

//   return (
//     <div className="home5-container">
//       <button className="slide-button left" onClick={slideLeft}>{"<"}</button>
//       <div className="slider" ref={sliderRef}>
//         <div className="slides">
//           {slides.map((slide) => (
//             <div className="slide" key={slide.id}>
//               <a href={slide.link}>
//                 <img src={slide.src} alt={slide.alt} className="slide-image" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="slide-button right" onClick={slideRight}>{">"}</button>
//     </div>
//   );
// };

// export default Home5;

// import React, { useEffect, useRef } from 'react';
// import '../../components/css/Home5.css';

// const Home5 = () => {
//   const slides = [
//     { id: 1, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 1', label: 'U16 House', link: '/details/u16-house' },
//     { id: 2, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 2', label: 'Project 2', link: '/details/project-2' },
//     { id: 3, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 3', label: 'Project 3', link: '/details/project-3' },
//     { id: 4, src: 'https://images.pexels.com/photos/20323737/pexels-photo-20323737/free-photo-of-clouds-and-sunlight-on-yellow-sky-over-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 4', label: 'Project 4', link: '/details/project-4' },
//     { id: 5, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 5', label: 'Project 5', link: '/details/project-5' },
//     { id: 6, src: 'https://images.pexels.com/photos/1464163/pexels-photo-1464163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 6', label: 'Project 6', link: '/details/project-6' },
//   ];

//   const sliderRef = useRef(null);

//   const slideLeft = () => {
//     sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
//   };

//   const slideRight = () => {
//     sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     let scrollAmount = 0;
//     const slideTimer = setInterval(() => {
//       slider.scrollLeft += slider.offsetWidth;
//       scrollAmount += slider.offsetWidth;
//       if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
//         scrollAmount = 0;
//         slider.scrollLeft = 0;
//       }
//     }, 5500);

//     return () => clearInterval(slideTimer);
//   }, []);

//   return (
//     <div className="home5-container ">
//       <button className="slide-button left" onClick={slideLeft}>{"<"}</button>
//       <div className="slider py-20 mx-12" ref={sliderRef}>
//         <div className="slides ">
//           {slides.map((slide) => (
//             <div className="slide" key={slide.id}>
//               <a href={slide.link}>
//                 <img src={slide.src} alt={slide.alt} className="slide-image" />
//               </a>
//               <p className="slide-label">{slide.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="slide-button right" onClick={slideRight}>{">"}</button>
//     </div>
//   );
// };

// export default Home5;

import React from 'react';

const Home5 = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 ">
          <img 
            src="https://images.pexels.com/photos/2298203/pexels-photo-2298203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Large Architecture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <img 
              src="https://images.pexels.com/photos/139300/pexels-photo-139300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Small Architecture" 
              className="w-full mb-8"
            />
            <h2 className="text-4xl font-bold mb-4">Building Futures</h2>
            <p className="mb-8">
              We are more than just architects; we are builders of tomorrow. We know that every design and construction project has the potential to influence future generations.
            </p>
            <h2 className="text-4xl font-bold mb-4">Crafting Futures</h2>
            <p>
              We are artisans of architecture and architecture is a craft. We take great care in creating spaces that inspire people, evoke emotion and fulfil their purpose. Our attention to detail and dedication to quality craftsmanship is what sets us apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
