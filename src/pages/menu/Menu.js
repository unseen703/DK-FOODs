import React from "react";

import "./menu.css";
import Foodcard from "./Foodcard";
import Fooddata from "./Fooddata";
import Fooddata2 from "./Collectiondata";
import Collectioncard from "./Collectioncard";
import "./foodcard.css";
const Menu = () => {
  return (
    <div>
      <div className="mainmenu">
        <h1> Our Menu</h1>
  <div className="subhead">
  <h2>1. traditional Indian</h2>
  </div>
        <div className="menulist">
          {Fooddata.map((item, key) => {
            return (
              <Foodcard
                key={key.id}
                image={item.image}
                name = {item.name}
                price={item.price}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>

      <section className="collection">
      <div className="subhead">
      <h2>2. Our Collection</h2>
      </div>
       <div className="menulist">
          {Fooddata2.map((item, key) => {
            return (
              <Collectioncard
                key={key.id}
                image={item.image}
                name = {item.name}
                desc={item.desc}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;
