import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isOpen, closeNav, openNav }) => {
  const navigate = useNavigate();
  const [isMenuHover, setIsMenuHover] = useState(false);

  const handleNavigate = (path) => {
    closeNav();
    navigate(path);
  };

  return (
    <>
      <style>{`
        .nav-link {
          padding: 15px 30px;
          background: none;
          border: none;
          color: white;
          font-size: 22px;
          text-align: center;
          cursor: pointer;
          width: 100%;
          max-width: 300px;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-25deg);
        }

        .nav-link:hover::before {
          animation: shine 0.75s ease-in-out;
        }

        .nav-link:hover {
          color: #ffd700;
          animation: blinkText 1s infinite;
        }

        @keyframes shine {
          0% { left: -75%; }
          100% { left: 125%; }
        }

        @keyframes blinkText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div>
          <img
            src="img_girl.jpg"
            alt="Logo"
            style={{ height: '40px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </div>

        <button
          onClick={openNav}
          onMouseEnter={() => setIsMenuHover(true)}
          onMouseLeave={() => setIsMenuHover(false)}
          style={{
            fontSize: '18px',
            cursor: 'pointer',
            padding: '10px',
            backgroundColor: isMenuHover ? 'black' : '#f0f0f0',
            color: isMenuHover ? 'white' : 'black',
            borderRadius: '4px',
            border: 'none',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
          aria-label="Open menu"
        >
          &#9776; Menu
        </button>
      </nav>

      <div
        className={`sidenav ${isOpen ? 'open' : ''}`}
        style={{
          height: '100vh',
          width: isOpen ? '100%' : '0',
          position: 'fixed',
          zIndex: 1100,
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          overflowX: 'hidden',
          transition: '0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '60px',
          color: 'white',
        }}
      >
        <button
          className="closebtn"
          onClick={closeNav}
          style={{
            position: 'absolute',
            top: '20px',
            right: '25px',
            fontSize: '36px',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="sidenav-logo" style={{ marginBottom: '40px' }}>
          <img src="img_girl.jpg" alt="Logo" style={{ width: '150px' }} />
        </div>
        <button onClick={() => handleNavigate('/about')} className="nav-link">
          About
        </button>
        <button onClick={() => handleNavigate('/services')} className="nav-link">
          Services
        </button>
        <button onClick={() => handleNavigate('/accreditation')} className="nav-link">
          Accreditation
        </button>
        <button onClick={() => handleNavigate('/oursuccess')} className="nav-link">
          Our Portfolio
        </button>
        <button onClick={() => handleNavigate('/contact')} className="nav-link">
          Contact
        </button>
      </div>
    </>
  );
};

export default Navbar;
