import React from 'react'
import "./about.css";

import codingImg from "../../../images/assets/coding.png";
import SocialContact from '../../Common/Social-Contact';

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
      <SocialContact />
    </div>
  )
};

export default About;