import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import {   BrowserRouter as Router,
  Route,
  Routes, } from 'react-router-dom';
import Home from './components/Home/Home';
import Project1 from './components/Projects/Project_1';
import Project2 from './components/Project2/Project_1'
import Project3 from './components/Project3/Project_1'
import Project4 from './components/Project4/Project_1'
import Project5 from './components/Project5/Project_1'
import Project6 from './components/Project6/Project_1'
import Project7 from './components/Project7/Project_1'
import Project8 from './components/Project8/Project_1'
import Project9 from './components/Project9/Project_1'
import Gallery from './components/Gallery/Gallery';
import Contactus from './components/Contact/Contactus';
import Aboutus from './components/About/Aboutus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
      axios.get('http://localhost:5000/api/products').then(
          response => {
              setData(response.data);
          }
      ).catch(error => {
          console.error(error);
      })
  }, [])
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/projects/master-planning" element={<Project1/>} />
          <Route  path="/projects/housing-projects" element={<Project2/>} />
          <Route  path="/projects/office-building" element={<Project3/>} />
          <Route  path="/projects/retail-entertainment" element={<Project4/>} />
          <Route  path="/projects/private-houses" element={<Project5/>} />
          <Route  path="/projects/education" element={<Project6/>} />
          <Route  path="/projects/culture" element={<Project7/>} />
          <Route  path="/projects/hospitality" element={<Project8/>} />
          <Route  path="/projects/villas" element={<Project9/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
