import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1>About Cal-Asia</h1>
          <p>
            Cal-Asia Private Limited is a one-stop solution for all Test & Measurement and communication product sales and services. Our offerings include repair, bench & onsite calibration, and system integration. Based in Singapore, we operate an ISO 17025-compliant test and calibration lab. All our test standards are traceable to NIST, and our performance verification procedures confirm to OEM specifications.
          </p>
        </header>

        {/* Video Section */}
        <section className="video-section">
          <div className="video-container">
            <div className="video-wrapper">
              <video controls preload="metadata" style={{ maxWidth: '100%', height: 'auto' }}>
                <source src={`${process.env.PUBLIC_URL}/videos/calasiaprocess.mp4`} type="video/mp4" />
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
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Customers</span>
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
              <p>
                Guided by our core values of integrity and commitment, our mission is to deliver the highest quality services. Our team of industry experts ensures not only our clients' success but also the recognition of Cal-Asia as their reliable partner of choice.
              </p>
            </div>

            <div className="info-card">
              <h3>Our Vision</h3>
              <p>
                To emerge as one of the leading companies in the APAC region, supporting our customers in achieving their enterprise goals through collaborative partnerships.
              </p>
            </div>

            <div className="info-card">
              <h3>Our Values</h3>
              <p>
                We maintain the highest standards of accuracy and reliability in every calibration and repair service we offer.
              </p>
            </div>

            <div className="info-card">
              <h3>What We Do</h3>
              <p>
                Cal-Asia Pvt. Ltd. is a comprehensive solution provider for Test & Measurement Equipment, Calibration, Repairs, and Communication Products.
              </p>
            </div>

            <div className="info-card">
              <h3>Our Expertise</h3>
              <p>
                We deliver high-precision solutions backed by technical excellence and a deep understanding of industry requirements. Our specializations include Electro-Technical Calibration and Industrial Equipment Repairs.
              </p>
            </div>

            <div className="info-card">
              <h3>Why Choose Us</h3>
              <p>
                With years of experience across diverse industries, we offer end-to-end services — from sales and setup to calibration, repair, and after-sales support. We are your single-point partner.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
