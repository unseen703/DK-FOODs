import React, { useState } from "react";
import { Link } from "react-router-dom";
import  Logo from "../../images/DKfoods.png"
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
   if(toggle)setToggle(false);
   
  };
  return <div className="navbar">
  <div className="headwrapper">
      <img src={Logo} alt =" logo.img" className="foodlogo" />
      <h3 className="logo">DK&FOODS</h3>
      </div>
      <div className={`content ${toggle && 'open'}` } onClick={handleToggle}>
              <Link to="/"  > Home </Link> 
              <Link to="/about" > About </Link> 
              <Link to="/menu" > Menu </Link> 
              <Link to="/contact"> Contact </Link> 
              <Link to="/signup" className="signup"> Sign Up </Link> 
           </div>
           <div className={`navbar-toggle ${ toggle && "open"}` } onClick={()=>{setToggle(!toggle)}}>

           <div className="bar"></div>

           </div>

    
   
  </div>;
};

export default Navbar;
