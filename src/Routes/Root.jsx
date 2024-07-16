import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import Home from "./pages/Home";
import { Link } from 'react-router-dom'
import Skills from "./pages/Skills";
import Project from "./pages/Project"
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNot from "./pages/PageNot";




export default function Root() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
 

  useEffect(() => {
    
    if (window.location.pathname !== '/') {
     
      navigate('/');
    }
  }, []);
    return (
      <>
       
    <nav className="bg-black  py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="profile text-5xl">Pranav</Link>
        <div className="lg:flex hidden space-x-6 text-2xl">
          <Link to="/skills" className="profile ">Skills</Link>
          <Link to="/project" className="profile ">Projects</Link>
          <Link to="/about" className="profile ">About</Link>
          <Link to="/contact" className="profile ">Contact</Link>
        </div>
        <div className="profile lg:hidden">
          <button
            className=" profile text-2xl"
            type="button"
            aria-expanded="false"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 py-2 w-48 bg-black border rounded shadow-xl">
              <li><Link to="/skills" className=" profile ">Skills</Link></li>
              <li><Link to="/project" className=" profile ">Projects</Link></li>
              <li><Link to="/about" className="profile ">About</Link></li>
              <li><Link to="/contact" className="profile ">Contact</Link></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
        <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNot/>}/>

        </Routes>
      
      </>
    );
  
  }