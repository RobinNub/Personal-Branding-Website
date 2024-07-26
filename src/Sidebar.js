import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      // Ensure the click event is not on the toggle button
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-label="Toggle sidebar"
        ref={buttonRef}
      >
        {isOpen ? 'x' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <nav className="sidebar-nav">
          <ul>
            <li className='home'><a href="#carousel" onClick={handleLinkClick}>HOME</a></li>
            <li className='AB'><a href="#about-me" onClick={handleLinkClick}>ABOUT ME</a></li>
            <li className='Inves'><a href="#investment" onClick={handleLinkClick}>INVESTMENTS & COMPANIES</a></li>
            <li className='WWM'><a href="#work-with-me" onClick={handleLinkClick}>WORK WITH ME</a></li>
            <li className='EA'><a href="#events-activities" onClick={handleLinkClick}>EVENTS & ACTIVITIES</a></li>
            <li className='S'><a href="#footer" onClick={handleLinkClick}>SOCIALS</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;