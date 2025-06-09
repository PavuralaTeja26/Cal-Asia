import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1>About Cal-Asia</h1>
          <p>CAL ASIA  Private Limited is a one stop solution for all Test & Measurement and communication product sales & Services. Our services include repair, Bench & Onsite calibration and system integration.  We are based in Singapore with ISO 17025 compliant test and calibration lab. All our test standards are traceable to NIST and performance verification procedures confirms OEM specification</p>
        </header>

        {/* Video Section */}
        <section className="video-section">
          <div className="video-container">
            <div className="video-wrapper">
              <video controls poster="" preload="metadata">
                <source src="/videos/calasiaprocess.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Company Details Section */}
        <section className="company-details">
          {/* Stats Container */}
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Customers</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>

          {/* Info Cards */}
          <div className="company-info">
            <div className="info-card">
              <h3>Our Mission</h3>
              <p>Leaning on our core values of Integrity & Commitment, CAL-ASIA mission is to continue delivering the highest quality services to our customers by applying best practices from our team of Industry experts ensuring not only our customers success, but the establishment of CAL-ASIA Services as their Reliable Partner of Choice.</p>
            </div>

            <div className="info-card">
              <h3>Our Vision</h3>
              <p>Emerge as one of the leading companies in the APAC region in supporting our customers to achieve their enterprise goals through collaborative partnerships..</p>
            </div>

            <div className="info-card">
              <h3>Our Values</h3>
              <p>We deliver services with the highest standards of accuracy, ensuring reliability in every calibration and repair.</p>
            </div>

            <div className="info-card">
              <h3>What We Do</h3>
              <p>Cal-Asia Pvt. Ltd. is a one-stop solution provider for Test & Measurement Equipment, Calibration, Repairs, and Communication Products.</p>
            </div>

            <div className="info-card">
              <h3>Our Expertise</h3>
              <p>At Cal-Asia Pvt. Ltd., our expertise lies in delivering high-precision solutions backed by technical excellence and a deep understanding of industry needs. We specialize in:  Electro-Technical Calibration, Industrial Equipment Repairs.</p>
            </div>

            <div className="info-card">
              <h3>Why Choose Us</h3>
              <p>Years of experience in calibration, repair, and test & measurement solutions across diverse industries.From sales and setup to calibration, repair, and after-sales support — we are your single-point partner.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        
      </div>
    </div>
  );
};

export default About;