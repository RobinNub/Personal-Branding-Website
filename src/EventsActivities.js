import React, { useState, useEffect } from 'react';
import './EventsActivities.css';

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co/svhwKr3/Plantation.jpg',
    title: 'Plantation',
    date: '6 Aug 2021',
    description: "I ogrganised and participated in a meaningful plantation drive as part of a Corporate Social Responsibility (CSR) initiative. This event was a testament to our commitment to environmental sustainability and community engagement. We planted a variety of native trees and shrubs, contributing to local biodiversity and combating climate change. The drive not only enhanced the green cover but also fostered a sense of teamwork and responsibility among participants. It was rewarding to see the immediate impact of our efforts and know that we are contributing to a greener, healthier planet."
  },
  {
    id: 2,
    image: 'https://i.ibb.co/mFbF7qJ/mentoring.jpg',
    title: 'Mentoring',
    date: 'May 2023',
    description: "I had the privilege of conducting a mentorship session at a College. Interacting with the next generation of leaders and innovators was incredibly rewarding. We discussed career paths, the importance of adaptability in the tech industry, and strategies for continuous learning and personal growth. The enthusiasm and curiosity of the students were inspiring, reaffirming the value of mentorship in shaping future professionals. Engaging with young minds is a fulfilling way to give back and contribute to their growth and success."},
  {
    id: 3,
    image: 'https://i.ibb.co/SnM70d5/Organic.png',
    title: 'Organic',
    date: 'Mar 2023',
    description: "I engaged in farming as a project focused on natural cultivation, emphasizing the production of 100% organic and natural produce. This initiative not only ensures healthier food options but also significantly contributes to environmental sustainability. By adopting eco-friendly farming practices, we minimize chemical usage, enhance soil health, and promote biodiversity. This approach not only yields nutritious crops but also preserves the ecosystem for future generations. It's a fulfilling endeavor to contribute to a sustainable future while providing clean, healthy food."
  },
  {
    id: 4,
    image: 'https://i.ibb.co/d6QSvZ0/Workshop.jpg',
    title: 'Workshop',
    date: 'April 2024',
    description: 'I recently had the opportunity to participate in a "Bridge to AI - Python Workshop," a dynamic event designed to introduce participants to the fundamentals of Python programming in the context of artificial intelligence. The workshop covered essential Python concepts, data manipulation techniques, and basic AI algorithms. Through hands-on coding sessions and real-world examples, attendees gained practical skills and insights into how Python can be leveraged to solve complex problems in AI. This enriching experience not only boosted technical proficiency but also sparked a deeper interest in AI innovations.',
  },
  {
    id: 5,
    image: 'https://i.ibb.co/kS4YvW3/CODE-EVENT.jpg',
    title: 'CodeEvent',
    date: 'June 2023',
    description: "The CODE 2023 event, hosted by Expand My Business, is set to be India's largest digital convention, taking place on June 10-11 at Pragati Maidan, New Delhi. This landmark event aims to bring together entrepreneurs, investors, and industry leaders to explore business growth, investment opportunities, and mentorship. Over two action-packed days, attendees will engage in six major events, including the Founders' Conference, Investor Summit, and various specialized conferences focusing on MarTech and HR Tech.",
  },
  {
    id: 6,
    image: 'https://i.ibb.co/3YN9Tmt/Alumni-Meet.jpg',
    title: 'AlumniMeet',
    date: 'May 2024',
    description: 'The recent college alumni meet at Tim Hortons was a vibrant networking event, bringing together past graduates for an evening of connection and camaraderie. The gathering provided an excellent opportunity for alumni to reconnect, share professional experiences, and explore collaborative opportunities. With a warm and inviting atmosphere, attendees enjoyed engaging conversations over coffee, reigniting old friendships, and forming new professional connections. The event was a testament to the enduring bonds formed during college years and highlighted the ongoing value of our alumni community.',
  },
  {
    id: 7,
    image: 'https://i.ibb.co/yfRppr3/Organic-agriculture.jpg',
    title: 'Organic culture',
    date: 'July 2023',
    description: 'The agriculture event in Kurukshetra brought together farmers, experts, and enthusiasts to discuss sustainable natural farming. The gathering provided a platform for sharing innovative practices, exploring eco-friendly techniques, and networking with like-minded individuals. Attendees engaged in insightful discussions on organic cultivation methods, environmental preservation, and enhancing soil health. The event highlighted the collective commitment to fostering sustainable agriculture and building a greener future.',
  },
  {
    id: 8,
    image: 'https://i.ibb.co/1RB8nQK/USA.jpg',
    title: 'USA',
    date: 'Sept 2023',
    description: 'During my recent visit to the US, I was struck by the diversity of cultures and perspectives I encountered. Traveling abroad opens eyes to new ways of thinking and living, challenging preconceptions and broadening my worldview. It helps in making connections with people from various backgrounds, each offering unique insights and opportunities. This experience expandes horizon of growth, both personally and professionally. It made me realize that stepping out of our comfort zones and immersing ourselves in different environments can spark creativity, foster adaptability, and unlock potential we never knew existed. The memories and lessons from this journey will undoubtedly shape my future endeavors.'},
];

function EventsActivities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 8000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const { image, title, date, description } = slides[currentSlide];
  return (
    <div className="events-activities">
      <div className="triangle-container">
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>
        <div className="triangle triangle3"></div>
      </div>
      <header className="events-header">
        <h1>Events & Activities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </header>
      <main className="events-main">
        <button className="slider-button prev" onClick={handlePrevClick}>&lt;</button>
        <div className="events-content">
          <div className="events-slider">
            <img src={image} alt="Event" className="event-image" />
          </div>
          <div className="events-details">
            <h2>{title}</h2>
            <p className='date'>{date}</p>
            <p>{description}</p>
          </div>
        </div>
        <button className="slider-button next" onClick={handleNextClick}>&gt;</button>
      </main>
      <div className='line'></div>
      <div className="details-button-container">
        <a href="https://www.linkedin.com/in/jigarjit-singh" target="_blank" rel="noopener noreferrer">
          <button className="details-button">VIEW ALL EVENT DETAILS</button>
        </a>
      </div>
    </div>
  );
}

export default EventsActivities;
