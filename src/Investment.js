import React, { useState } from 'react';
import "./Investment.css";

const companyLogos = [
  { src: "https://i.ibb.co/Z8XrrLN/AONE-X-US.png", alt: "AONE X US", link: "https://www.aonexus.com/" },
  { src: "https://i.ibb.co/vDBn47n/Begampura-Farm.png", alt: "Begampura Farm", link: "https://www.facebook.com/begampurafarm/" },
  { src: "https://i.ibb.co/t8KzLvw/Concepts-and-careers.png", alt: "Concepts and Careers", link: "https://conceptsandcareers.com/" },
  { src: "https://i.ibb.co/DDX0g2Y/growth-university-Cn-C.png", alt: "Growth University CnC", link: "https://growthuniversity.conceptsandcareers.com/" },
  { src: "https://i.ibb.co/PZ3CL11/innonexus-tech-logo.png", alt: "Innonexus Tech", link: "https://innonexus.tech/" },
  { src: "https://i.ibb.co/H7Xzjsj/JW-Circle.png", alt: "JW Circle", link: "https://jwinfo.tech/" },
  { src: "https://i.ibb.co/XJBT4yW/JWInfotech.png", alt: "JW Infotech", link: "https://jwinfo.tech/" },
  { src: "https://i.ibb.co/cN0yXsB/JW-Jewellers-logo.png", alt: "JW Jewellers", link: "http://www.jwjewellers.com/" },
  { src: "https://i.ibb.co/x771nM0/Pay-Rental.png", alt: "Pay Rental", link: "https://payrental.co.in/" },
  { src: "https://i.ibb.co/6wvP8xS/NexusTeq.png", alt: "NexusTeq", link: "https://nexusteq.com/" },
  { src: "https://i.ibb.co/zQncP0b/perfect-fitness-team.png", alt: "Perfect Fitness Team", link: "https://perfectfitnessteam.co.in/" },
  { src: "https://i.ibb.co/tKpCmrt/Tregcom-logo.jpg", alt: "Tregcom", link: "https://www.facebook.com/tregcom.in/" }
];

const Investment = () => {
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState(null);
  return (
    <div className="investment">
      <section className="instructions-box">
        <h1>Investments & Companies</h1>
        <div className="instructions">
          <p>Throughout my career, I have founded and invested in a diverse portfolio of companies, each representing a unique facet of my entrepreneurial vision. JW Infotech stands as a leading Information Technology solutions provider, delivering innovative technology solutions to help businesses grow and thrive. Concepts and Careers, along with its flagship initiative Growth University, focuses on nurturing talent and providing advanced educational programs to equip individuals with essential skills for today's dynamic job market.</p>
          <p>InnoNexus embodies the spirit of innovation, developing cutting-edge technologies that address real-world challenges across various industries. Begampura Farm is committed to sustainable agriculture, employing modern techniques to produce high-quality, organic products while promoting eco-friendly farming practices. Perfect Fitness Team offers personalized fitness and wellness solutions designed to help individuals achieve their health goals and maintain a balanced lifestyle.</p>
          <p>AOneXus provides comprehensive business solutions, including consulting services and technology implementation, to help businesses streamline operations and achieve sustainable growth. PayRental revolutionizes property management with an innovative platform that ensures a seamless experience for landlords and tenants. NexusTeq delivers advanced technology solutions tailored to meet the unique needs of businesses, encompassing software development, Information Technology consulting, and system integration.</p>
          <p>TREGCOM - The Real Estate Group of Companies excels in property development and management, offering services from residential and commercial projects to property investment advisory. JW EXIM specializes in import and export services, facilitating international trade and ensuring the smooth exchange of goods and services across borders. Finally, JW Jewellers celebrates elegance and craftsmanship with exquisite jewelry collections designed to cater to diverse tastes.</p>
          <p>These ventures reflect my commitment to innovation, sustainability, and excellence, each company serving as a testament to my belief in creating value and driving positive change across various industries.</p>
        </div>
        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/jigarjit-singh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="learn-more">Know More</button>
          </a>
        </div>
      </section>

      <section className="companies-box">
        {companyLogos.map((logo, index) => (
          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="company-link"
            onMouseEnter={() => setHoveredLogoIndex(index)}
            onMouseLeave={() => setHoveredLogoIndex(null)}
          >
            <div className="company-logo">
              <img src={logo.src} alt={logo.alt} />
              {hoveredLogoIndex === index && (
                <div className="view-more-overlay">
                  <span className="view-more-text">View More → </span>
                </div>
              )}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Investment;
