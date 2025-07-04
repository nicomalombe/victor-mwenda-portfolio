import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/nico.jpg'; 
import Footer from '../Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="home-container">
      <div className="intro-box">
        <div className="profile-image-container">
          <img src={profileImage} alt="Victor Mwenda" className="profile-image" />
        </div>
        <h1 className="greeting">
          Hi, I'm <span className="name">Victor Mwenda</span> 👋
        </h1>
        <p className="welcome-text">
          Welcome to my professional portfolio. Explore my work, skills, and journey.
        </p>

        <button className="learn-more-btn" onClick={handleLearnMore}>
          Learn more about me
        </button>
        <br />
<Footer />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} nicodemus malombe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
