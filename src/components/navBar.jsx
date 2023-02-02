import React from "react";
// import { Link } from 'react-router-dom';
// import {Button} from '../components/Button'
import "../styles/navBar.css";


const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
            <img src="/images/logov2cut.png" alt="logo" />
        </div>
        <div className="navbarContainer">
          <div className="links">
            
            <div id="navLink">
             <a href="#home">Home</a>
             </div>

             <div id="navLink">
             <a href="#about">About Site</a>
             </div>

             <div id="navLink">
             <a href="#aboutMe">About Me</a>
             </div>

             <div id="navLink">
             <a href="#myarts">My Arts</a>
             </div>

             <div id="navLink">
             <a href="#sales">Sales</a>
             </div>

             <div id="navLink">
             <a href="#cont">Contact</a>
             </div>

          </div>
            
        </div>
      </nav>
    </>
  );
};

export default NavBar;
