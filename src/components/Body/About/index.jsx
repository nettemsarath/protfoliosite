import React from 'react'
import "./about.css";

import codingImg from "../../../images/assets/coding.png";

function About() {
  return (
    <div className='about' >
      <div className="about-top">
        <div className="about-info">
          Hello ther iam 
          <br /> 
          <span className='info-name' > Random Guy. </span> 
          <br /> i love experementing with web.
        </div>
        <div className="about-photo">
           <img src={codingImg} alt="" />
        </div>
      </div>
      <div className="about-bottom">
        This is contacts
      </div>
    </div>
  )
}

export default About;