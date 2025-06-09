import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', paddingTop: '60px' }}>
      {/* Full Screen CAL-ASIA Animation */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* CAL-ASIA Logo Animation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontFamily: 'Arial, sans-serif',
            transform: 'scale(2)',
            animation: 'fadeIn 2s ease-in-out'
          }}>
            {/* Sound Bars */}
            <div style={{
              display: 'flex',
              gap: '3px',
              alignItems: 'center',
              height: '60px'
            }}>
              {[
                { height: '15px', delay: '0s', color: '#1e3a8a' },
                { height: '35px', delay: '0.1s', color: '#dc143c' },
                { height: '20px', delay: '0.2s', color: '#1e3a8a' },
                { height: '50px', delay: '0.3s', color: '#dc143c' },
                { height: '30px', delay: '0.4s', color: '#1e3a8a' },
                { height: '20px', delay: '0.5s', color: '#dc143c' },
                
              ].map((bar, index) => (
                <div
                  key={index}
                  style={{
                    width: '4px',
                    height: bar.height,
                    backgroundColor: bar.color,
                    borderRadius: '2px',
                    animation: `pulse 0.8s ease-in-out infinite alternate`,
                    animationDelay: bar.delay,
                    boxShadow: `0 0 10px ${bar.color === '#dc143c' ? 'rgba(220, 20, 60, 0.5)' : 'rgba(30, 58, 138, 0.5)'}`
                  }}
                />
              ))}
            </div>
            
            {/* Text Section */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontSize: '36px',
                fontWeight: 'bold',
                letterSpacing: '4px',
                color: 'white',
                margin: '0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>
                CAL-ASIA
              </div>
              <div style={{
                height: '3px',
                backgroundColor: '#dc143c',
                marginTop: '6px',
                width: '100%',
                boxShadow: '0 0 8px rgba(220, 20, 60, 0.6)'
              }} />
            </div>
          </div>

          {/* Floating Particles */}
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  borderRadius: '50%',
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scaleY(0.6); }
          100% { transform: scaleY(1.4); }
        }
        @keyframes fadeIn {
          0% { 
            opacity: 0;
            transform: scale(1.5) translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: scale(2) translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
