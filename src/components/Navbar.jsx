// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// // import SubNavbar from './SubNavbar';
// import '../index.css'; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? 'nav-link active' : 'nav-link';
//   };

//   return (
//     <div>
//       <nav className="fixed top-0 left-0 w-full z-20 bg-transparent shadow-md">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <Link to="/" className="text-2xl font-bold text-black ml-4 font-cursive">Mohit Dangi Architects</Link>
//           </div>
//           <div className="lg:hidden">
//             <button onClick={toggleMenu} className="text-black focus:outline-none">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//               </svg>
//             </button>
//           </div>
//           <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
//             <Link to="/" className={isActive("/")}>Home</Link>
//             <Link to="/about" className={isActive("/about")}>About Us</Link>
//             <Link to="/projects/master-planning" className={isActive("/projects")}>Architect</Link>
//             <Link to="/contact" className={isActive("/contact")}>Contact Us</Link>
//           </div>
//         </div>
//       </nav>
//       {/* <SubNavbar isOpen={isOpen} /> */}
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import SubNavbar from './SubNavbar';
import '../index.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine active link based on current pathname
  const isActive = (path) => {
    // Check if the current pathname exactly matches the given path
    if (path === "/" && location.pathname === "/") {
      return "nav-link active"; // Exact match for home page
    } else {
      // Check for exact match or start of pathname followed by '/' to handle nested routes
      return location.pathname === path || location.pathname.startsWith(path + '/') ? "nav-link active" : "nav-link";
    }
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-20 bg-transparent shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black ml-4 font-cursive">Mohit Dangi Architects</Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className={isActive("/")}>Home</Link>
            <Link to="/about" className={isActive("/about")}>About Us</Link>
            <Link to="/projects/master-planning" className={isActive("/projects")}>Architect</Link>
            <Link to="/contact" className={isActive("/contact")}>Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* <SubNavbar isOpen={isOpen} /> */}
    </div>
  );
};

export default Navbar;
