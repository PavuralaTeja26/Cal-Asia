import React from 'react';
import '../App.css';

const CalAsiaLogo = () => {
  const bars = [
    { height: '15px', delay: '0s', color: '#dc143c' },
    { height: '25px', delay: '0.1s', color: '#1e3a8a' },
    { height: '30px', delay: '0.2s', color: '#dc143c' },
    { height: '20px', delay: '0.3s', color: '#1e3a8a' },
    { height: '35px', delay: '0.4s', color: '#dc143c' },
    { height: '40px', delay: '0.5s', color: '#1e3a8a' },
    { height: '25px', delay: '0.6s', color: '#dc143c' }
  ];

  return (
    <div className="calasia-background-logo">
      <div className="sound-bars">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: bar.height,
              backgroundColor: bar.color,
              animationDelay: bar.delay
            }}
          />
        ))}
      </div>
      <div className="logo-text">
        <div className="logo-title">CAL-ASIA</div>
        <div className="logo-underline" />
      </div>
    </div>
  );
};

export default CalAsiaLogo;
