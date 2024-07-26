import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Carousel from './Carousel';
import Investment from './Investment';
import WorkWithMe from './WorkWithMe';
import EventsActivities from './EventsActivities';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div id='Sidebar'><Sidebar/></div>
      <div id='carousel'><Carousel /></div>
      <div id='about-me'><AboutMe /></div>
      <div id='investment'><Investment /></div>
      <div id='work-with-me'><WorkWithMe /></div>
      <div id='events-activities'><EventsActivities /></div>
      <div id='footer'><Footer /></div>
      <BackToTop />
    </div>
  );
}

export default App;
