import React from "react";
import contactBG  from "../images/contactback3.avif"
import "./contact.css";
const Contact = () => {
 function handleOnClick(){

 }
  return <>
      <div className="maincontact">
        <div className="leftside">
         <img src={contactBG} alt="" />
        </div>
      <div className="rightside">
            <h1>Contact Us</h1>
            <form className="formcontent">
                <input type="text" name="names" placeholder="Enter Your Name" />
                <input type="email" name="names" placeholder="Enter Your Email" />
                <textarea name="message" placeholder="Enter Your Message" />
                <button type="submit" id="formbutton" onClick={handleOnClick}>Submit</button>
            </form>
          </div>
      </div>
  </>;
};

export default Contact;
