import React from 'react';
import './styles.css';  // Import your styles

function App() {
  return (
    <div className="background-container">
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="fadeMask">
          <rect width="200%" height="200%" fill="url(#fadeGradient)"/>
        </mask>

        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="80%" stop-color="#FFFFFF"/>
          <stop offset="90%" stop-opacity="0"/>
        </linearGradient>

        <linearGradient id="MyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="#ff7e5f"/>
          <stop offset="50%"  stop-color="#feb47b"/>
          <stop offset="100%" stop-color="#4b6cb7"/>
        </linearGradient>
      </defs>
        <path fill="url(#MyGradient)" d="M34.2,-51.4C41.2,-55.1,41.6,-39.7,35,-27.9C28.4,-16.1,14.9,-8.1,18.6,2.1C22.2,12.2,42.9,24.5,45.3,29.1C47.7,33.7,31.8,30.6,21.2,30.9C10.6,31.2,5.3,34.8,-3.9,41.5C-13.1,48.3,-26.2,58.1,-36.6,57.7C-47,57.4,-54.9,46.8,-59.4,35.5C-63.9,24.1,-65.2,12.1,-61.8,2C-58.3,-8.1,-50.2,-16.2,-43,-23C-35.9,-29.9,-29.8,-35.5,-22.8,-31.8C-15.8,-28.1,-7.9,-15.1,2.8,-20C13.6,-24.9,27.2,-47.7,34.2,-51.4Z" transform="translate(100 100)" mask="url(#fadeMask)"/>
      </svg>
      {/* Rest of your website content */}
      <div className="content">
        Hello, this is your site's content.
      </div>
    </div>
  );
}

export default App;
