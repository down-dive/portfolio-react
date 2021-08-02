import React from 'react';
import AboutHeading from '../AboutHeading';
import AboutContext from '../AboutContext'


function About() {
  return (
    <section className="section-about" id="about" className='about'>
      <AboutHeading />
      <AboutContext />
</section>
  );
}

export default About;