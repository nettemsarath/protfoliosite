import React from 'react'
import "./skills.css";
import Seperator from '../../Common/Seperator';
import {SkillsData} from "../../../data/skills";
import SkillCard from './skill-card';

function SKills() {
  const data = SkillsData;
  return (
    <div className='skills' >
      <Seperator />
      <label className='section-title' >
        Skills
      </label>
      <div className="skills-container">
        {
          data.map(item=> (
            <div key={item.id} className="skill-section">
              <label className="skill-section-title"> {item.type} </label>
              <div className="skill-list">
                {
                  item.list.map(skill=> <SkillCard key={skill.id} skill={skill} /> )
                }
              </div>
            </div>
          ) )
        }
      </div>
    </div>
  )
}

export default SKills;