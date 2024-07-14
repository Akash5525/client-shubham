// import React from 'react';

// const images = [
//   {
//     src: "https://images.pexels.com/photos/24259690/pexels-photo-24259690/free-photo-of-a-red-light-is-shining-on-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//     title: "The Loop",
//   },
//   {
//     src: "https://images.pexels.com/photos/14447626/pexels-photo-14447626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "U16 House",
//   },
//   {
//     src: "https://images.pexels.com/photos/1453782/pexels-photo-1453782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "OMA Baserria",
//   },
//   {
//     src: "https://images.pexels.com/photos/8864792/pexels-photo-8864792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "Hampton by Hilton",
//   },
//   {
//     src: "https://images.pexels.com/photos/1168750/pexels-photo-1168750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     title: "IB House",
//   },
// ];

// const Project_2 = () => {
//   return (
//     <div className="flex flex-wrap justify-between p-8">
//       {/* First Image */}
//       <div className="w-full md:w-1/2 p-4">
//         <div className="overflow-hidden h-full">
//           <img
//             src={images[0].src}
//             alt={images[0].title}
//             className="object-cover w-full h-full max-h-screen/2 zoom"
//           />
//         </div>
//         <p className="mt-2 text-center text-lg font-semibold">{images[0].title}</p>
//       </div>

//       {/* Next Two Images */}
//       <div className="w-full md:w-1/2 flex flex-col justify-between p-4">
//         <div className="overflow-hidden mb-4">
//           <img
//             src={images[1].src}
//             alt={images[1].title}
//             className="object-cover w-full h-1/2 max-h-screen/2 zoom"
//           />
//           <p className="mt-2 text-center text-lg font-semibold">{images[1].title}</p>
//         </div>
//         <div className="overflow-hidden">
//           <img
//             src={images[2].src}
//             alt={images[2].title}
//             className="object-cover w-full h-1/2 max-h-screen/2 zoom"
//           />
//           <p className="mt-2 text-center text-lg font-semibold">{images[2].title}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project_2;


import React from 'react';
import './Project.css'
import image7 from '../../Image/Projects/project_1/7.jpg'
import image8 from '../../Image/Projects/project_1/8.jpg'
const Project_2 = () => {
  const images = [
    { src: image7  ,
      title: "RAS TOWNSHIP,RAJASTHAN", },
    { src: image8 ,
      title: "STUDIOS 90,KARNATAKA",
    }
  ];

  return (
    <div className="gallery-container">
    <div className="gallery-item large">
      <div className="image-container">
        <img src={images[0].src} alt={images.title} className="gallery-image" />
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

export default Project_2;
