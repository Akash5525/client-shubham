// import React, { useState } from 'react';
// import { MdKeyboardArrowDown } from 'react-icons/md'; // Arrow down icon
// import Navbar from '../Navbar';
// import Home2 from './Home2';
// import Home3 from './Home3';
// import Home5 from './Home5';
// import Home6 from './Home6';
// import Homevideo from '../../Image/video/Homepage.mp4';

// const Home = () => {
//   const scrollToNextSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div>
//       <div className="relative min-h-screen overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={Homevideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="relative z-10">
//           <Navbar />
//           <div className="flex items-center justify-center min-h-screen">
//             <div className="text-center">
//               <h1 className="text-6xl font-bold text-white animate-bounce">Building Futures</h1>
//               <div className="mt-10 text-lg font-medium text-white animate-pulse cursor-pointer" onClick={scrollToNextSection}>
//                 SCROLL <MdKeyboardArrowDown className="inline-block text-5xl ml-2" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//       </div>
//       <Home2 />
//       <Home3 />
//       <Home6 />
//       <Home5 />
//     </div>
//   );
// };

// export default Home;









// import React, { useState, useEffect, useRef } from 'react';
// import { MdKeyboardArrowDown } from 'react-icons/md'; // Arrow down icon
// import Navbar from '../Navbar';
// import Home2 from './Home2';
// import Home3 from './Home3';
// import Home5 from './Home5';
// import Home6 from './Home6';
// import Homevideo from '../../Image/video/Homepage.mp4';

// const Home = () => {
//   const home2Ref = useRef(null);

//   const scrollToNextSection = () => {
//     window.scrollTo({
//       top: window.innerHeight,
//       behavior: 'smooth'
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fadeIn');
//         } else {
//           entry.target.classList.remove('animate-fadeIn');
//         }
//       },
//       {
//         root: null,
//         threshold: 0.1,
//       }
//     );

//     if (home2Ref.current) {
//       observer.observe(home2Ref.current);
//     }

//     return () => {
//       if (home2Ref.current) {
//         observer.unobserve(home2Ref.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div className="relative min-h-screen overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={Homevideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div className="relative z-10">
//           <Navbar />
//           <div className="flex items-center justify-center min-h-screen">
//             <div className="text-center">
//               <h1 className="text-6xl font-bold text-white animate-bounce">Building Futures</h1>
//               <div className="mt-10 text-lg font-medium text-white animate-pulse cursor-pointer" onClick={scrollToNextSection}>
//                 SCROLL <MdKeyboardArrowDown className="inline-block text-5xl ml-2" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//       </div>
//       <div ref={home2Ref} className="transition-opacity duration-1000 opacity-0">
//         <Home2 />
//         <Home3 />
//         <Home6 />
//         <Home5 />
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Arrow down icon
import Navbar from '../Navbar';
import Home2 from './Home2';
import Home3 from './Home3';
import Home5 from './Home5';
import Home6 from './Home6';
import Homevideo from '../../Image/video/Homepage.mp4';

const Home = () => {
  const home2Ref = useRef(null);
  const home3Ref = useRef(null);
  const home5Ref = useRef(null);
  const home6Ref = useRef(null);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollEffect = (ref) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        } else {
          entry.target.classList.remove('animate-fadeIn');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };

  useEffect(() => {
    const cleanUpHome2 = handleScrollEffect(home2Ref);
    const cleanUpHome3 = handleScrollEffect(home3Ref);
    const cleanUpHome5 = handleScrollEffect(home5Ref);
    const cleanUpHome6 = handleScrollEffect(home6Ref);

    return () => {
      cleanUpHome2();
      cleanUpHome3();
      cleanUpHome5();
      cleanUpHome6();
    };
  }, []);

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Homevideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10">
          <Navbar />
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white animate-bounce">Building Futures</h1>
              <div className="mt-10 text-lg font-medium text-white animate-pulse cursor-pointer" onClick={scrollToNextSection}>
                SCROLL <MdKeyboardArrowDown className="inline-block text-5xl ml-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div ref={home2Ref} className="transition-opacity duration-1000 opacity-0">
        <Home2 />
      </div>
      <div ref={home3Ref} className="transition-opacity duration-1000 opacity-0">
        <Home3 />
      </div>
      <div ref={home5Ref} className="transition-opacity duration-1000 opacity-0">
        <Home5 />
      </div>
      <div ref={home6Ref} className="transition-opacity duration-1000 opacity-0">
        <Home6 />
      </div>
    </div>
  );
};

export default Home;
