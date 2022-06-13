import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./foodcard.css";

const Collectioncard = ({ image, name,  desc }) => {
    useEffect( ()=>{
        Aos.init({duration: 2000});
      },[] );

  return (
    <div data-aos="fade-up" className="maincard">
      <img src={image}  className="foodimg" />
      <div className="foodcontent">
        <div className="nav-card">
          <h2>{name}</h2>
       
        </div>
        <p className="fooddesc">{desc}</p>
        <div className="buttons">
          <button className="buy"> Explore </button>
         
        </div>
      </div>
    </div>
  );
};

export default Collectioncard;
