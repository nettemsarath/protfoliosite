import React from 'react'
import "./work-card.css";

function WorkCard({company}) {
  return (
    <div className='work_company'>
        <div className='work_company_title' >
            <div className='work_company_title-name' > {company.company_name} </div>
        
            <a href={company.company_URL} target="_blank" className=""> {company.company_URL} </a>
            
            <div className='work_company-duration' > {company.worked_till} </div>
        </div>
        
        <div className='work_company-description' >
            {company.work_did_in_company}
        </div>
    </div>
  )
};

export default WorkCard;