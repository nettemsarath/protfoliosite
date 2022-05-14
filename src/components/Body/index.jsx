import React from 'react'
import About from './About';
import "./body.css";
import Contact from './Contact';
import Projects from './Projects';
import SKills from './Skills';
import Work from './Work';

function Body() {
  return (
    <div className='body' >
      <section id="about" >
        <About />
      </section>
      <section id="projects"> 
        <Projects />
      </section>
      <section id="skills" >
        <SKills />
      </section>
      <section id="work" >
        <Work />
      </section>
      <section id="contact" >
        <Contact />
      </section>
    </div>
  )
}

export default Body;