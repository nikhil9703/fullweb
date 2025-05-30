import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Blog_content from './component/pagecontent/blog_content';
import AboutUs from './component/pagecontent/about_us';
import ChartComponent from './component/charts/employeechart';
import Blog_count from './component/charts/blogcount';
import Navbar from './component/pagecontent/navbar';
import Tiles from './component/charts/counttiles';
import Intro from './component/pagecontent/introduction';
import FeatureSection from './component/pagecontent/whatwedo';
import ContactForm from './component/pagecontent/ContactForm';

function MainPage({ onNavClick, refs }) {
  return (
    <div>
      <div className='Navbar'>
        <Navbar onNavClick={onNavClick} />
      </div>
      <div className='Introduction' ref={refs.introduction}>
        <Intro />
      </div>
      <div className='FeatureSelection' ref={refs.features}>
        <FeatureSection />
      </div>
      <div className='tiles' ref={refs.tiles}>
        <Tiles />
      </div>
      <div className="charts" ref={refs.charts}>
        <div className="chart-box"><ChartComponent /></div>
        <div className="chart-box"><Blog_count /></div>
      </div>
      <div className='blogtiles' ref={refs.blogs}>
        <Blog_content />
      </div>
      <div className='Footer' ref={refs.about}>
        <AboutUs />
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/contact">
          <button className="contact-scroll-btn">Get in Touch</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  const refs = {
    introduction: useRef(null),
    features: useRef(null),
    tiles: useRef(null),
    charts: useRef(null),
    blogs: useRef(null),
    about: useRef(null),
  };

  const handleNavClick = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage onNavClick={handleNavClick} refs={refs} />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;