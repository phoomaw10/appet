// Home.js
import React from "react";
import Logo from "../Images/Picky Cat Logo.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="App" style={{ margin: '20px' }}>
      <div id="home" className="home-section">
        {/* <div className="photo-container">
          <img src={Logo} alt="My Photo" className="circular-image" />
        </div> */}
        <div className="text-container">
          <h2>Welcome to Picky Cat Website</h2>
          <p>This website is designed for our customers to learn about us and explore the products we offer.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
