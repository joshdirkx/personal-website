import React from 'react';
import './styles.css';  // Import your styles

function Background() {
  return (
    <div className="animated-background w-embed">
      <div className="animatedwrapper">
        <div className="dot dot--one"></div>
        <div className="dot dot--two"></div>
        <div className="dot dot--three"></div>
        <div className="dot lower-dot--one"></div>
      </div>
    </div>
  );
}

export default Background;
