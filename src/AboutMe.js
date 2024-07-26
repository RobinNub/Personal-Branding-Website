import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="container">
      <div className="text-container">
        <h1 className="header">About Me</h1>
        <p className="text">
        Welcome! I’m Jigarjit Singh, a multifaceted entrepreneur, business strategist, and Information Technology professional with a steadfast commitment to sustainable growth and global unity. My journey spans across diverse domains including IT, wellness & fitness, finance, real estate, education, hospitality, and farming. My mission is to drive business growth while adhering to sustainable standards that benefit both businesses and the world.  
        </p>
        <p className="text">
        I hold three professional degrees: a B-Tech in Computer Science and Engineering, a Masters in English and Literature, and an LLB. My academic background reflects my dedication to continuous learning and excellence in multiple fields. Over the years, I have managed, grown, and operated multiple businesses, with a major focus on the Information Technology sector.
        </p>
        <p className="text">
        In addition to my professional endeavors, I am passionate about giving back to society. I am actively involved in corporate social responsibility (CSR) activities, always seeking ways to contribute to the overall development of communities around me. 
        As a motivational speaker, I focus on themes of growth—both career and personal development. I aim to inspire and empower my audience, whether they are mentees or participants in my talks, to achieve their fullest potential.
        </p>
        <p className="text">
        Join me on this journey of growth and transformation. Together, we can create a brighter, more sustainable future for all.
        </p>
      </div>
      <img
        src="https://i.ibb.co/nfzDXqY/About-me.png"
        alt="Profile"
        className="image"
      />
    </div>
  );
};

export default AboutMe;
