import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SubNavbar.css';

const SubNavbar = ({ isOpen }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(isOpen);
  const location = useLocation();

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const subLinks = [
    { to: '/projects/master-planning', label: 'MASTER PLANNING / TOWNSHIP' },
    { to: '/projects/housing-projects', label: 'HOUSING PROJECTS' },
    { to: '/projects/office-building', label: 'OFFICE BUILDING' },
    { to: '/projects/retail-entertainment', label: 'RETAIL & ENTERTAINMENT' },
    { to: '/projects/private-houses', label: 'PRIVATE HOUSES' },
    { to: '/projects/education', label: 'EDUCATION' },
    { to: '/projects/culture', label: 'CULTURE' },
    { to: '/projects/hospitality', label: 'HOSPITALITY' },
    { to: '/projects/villas', label: 'VILLAS' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'sub-nav-link active' : 'sub-nav-link';
  };

  return (
    <div className="sub-navbar-container">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={toggleSubMenu} className="text-black focus:outline-none lg:hidden">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSubMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
        <div className={`lg:flex ${isSubMenuOpen ? 'block' : 'hidden'}`}>
          {subLinks.map((link) => (
            <Link key={link.to} to={link.to} className={isActive(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
