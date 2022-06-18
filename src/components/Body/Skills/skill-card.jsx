import React from 'react';
import "./skill-card.css";

function Skillcard({skill}) {
  return (
    <div className='skill-card' >
        <div className="skill-icon">
            <img src={skill.icon} />
        </div>
        <label className=""> {skill.name} </label>
    </div>
  )
};

export default Skillcard;