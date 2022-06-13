import React from "react";
import backimage from '../../images/finalback.jpg';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
     
  return  <div className="home" style={{ backgroundImage: `url(${backimage})` }}>
       <div className="container "> 
       <h1>Dk&FOODS</h1>
       <p>INDIAN FOOD AT YOUR </p>     
            <button className='mainbutton'>
                <Link to="/menu">Order Now</Link>
            </button>
       </div>
       
      </div>
};

export default Home;
