import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    cssEase: 'ease-in-out', 
    fade: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const slideData = [
    {
      image:
        "https://i.ibb.co/2yxz9hh/fakesuper-background-abstract-pattern-technology-grey-323130-81567280-d575-471f-bc56-1661e7d580e5.png",
      title: '"Driving Digital Transformation with AI Solutions and Entrepreneurship"',
      description:
        "Grab your reader's attention with a great quote from the document or use this space to emphasize a key point."
    },
    {
      image:
        "https://i.ibb.co/3zspqh6/artificial-intelligence-nanotechnologies-business-technologies-concept-futuristic-background-photo.jpg",
      title: '"Unlocking Business Potential: Strategic Consulting and Startup Advisory"',
      description:
        "Grab your reader's attention with a great quote from the document or use this space to emphasize a key point."
    },
    {
      image: "https://i.ibb.co/bKNT458/Digital-Transformation-Consulting-2.webp",
      title: '"AI Innovations and Legal Expertise: Journey in Transforming Businesses"',
      description:
        "Grab your reader's attention with a great quote from the document or use this space to emphasize a key point."
    },
    {
      image: "https://i.ibb.co/Bzc8PH6/i-Stock-1160000498.jpg",
      title: '"Empowering Entrepreneurs: AI Solutions and Start-up Strategies"',
      description:
        "Grab your reader's attention with a great quote from the document or use this space to emphasize a key point."
    },
  ];

  return (
    <div className="carousel-container">
      <img
        src="https://i.ibb.co/ZMfNrv3/JJ-Singh-logo-02.png" 
        alt="JJ Singh Logo"
        className="carousel-title"
      />
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} className="carousel-image" />
            <div
              className="carousel-content"
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

