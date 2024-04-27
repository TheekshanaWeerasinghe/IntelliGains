import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div><a href="/" class="back-button">Back</a>
    <div className="Reasons" id="reasons">
         
      <div className="left-r">
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image1} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="Stroke-text">Why</span>
          <span> Choose Us ? </span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Reasons;
