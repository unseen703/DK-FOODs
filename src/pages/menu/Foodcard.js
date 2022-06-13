import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./foodcard.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Foodcard = ({ image, name, price, desc }) => {
    useEffect( ()=>{
        Aos.init({duration: 2000});
      },[] );

  return (
    <div data-aos="fade-up" className="maincard">
      <img src={image}  className="foodimg" />
      <div className="foodcontent">
        <div className="nav-card">
          <h2>{name}</h2>
          <h3 className="price">
            Price:
            <span className="cur-icon">
              <CurrencyRupeeIcon />
            </span>
            {price}
          </h3>
        </div>
        <p className="fooddesc">{desc}</p>
        <div className="buttons">
          <button className="buy">Buy</button>
          <button className="add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
