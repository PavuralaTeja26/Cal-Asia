import React from "react";

const testimonials = [
  {
    name: "Pavani ",
    company: "Astra Microwave Product Limited",
    text: "Excellent Service.",
  },
  
  
];

const galleryData = [
  
  {
    image: "/gallery4.jpeg",
    title: "Deekshit",
    description: "Country Manager",
  },
  {
    image: "/gallery3.jpeg",
    title: "Anil",
    description: "Repair Service Manager",
  },
  
  {
    image: "/gallery2.jpeg",
    title: "Bharath",
    description: "Calibration Manager",
  },
  {
    image: "/gallery1.jpeg",
    title: "Appala Naidu",
    description: "Calibration Engineer",
  },
  
];

const Oursuccess = () => (
  <div className="container">
    {/* Hero Section */}
    <div className="hero-section">
      <h1>Our Portfolio & Expertise</h1>
      <p>
        Explore our work gallery, download our brochures and hear what our clients say
      </p>
    </div>

    {/* Gallery Section */}
    <div className="section">
      <h2 className="section-title">Our Gallery</h2>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div className="gallery-item" key={index}>
            <div className="gallery-image">
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="gallery-content">
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Brochure Section */}
<div className="section">
  <h2 className="section-title">Our Brochure</h2>
  <div className="brochure-grid">
    <div className="brochure-item">
      <img src="brochure1.jpeg" alt="Page 1" className="brochure-img" />
      <img src="brochure2.jpeg" alt="Page 2" className="brochure-img" />
      <h3 className="brochure-title">Company + Services Overview</h3>
      <p className="brochure-description">
        Download our complete brochure combining company profile and services.
      </p>
      <a 
        href="/brochure.docx" 
        download="brochure.docx"
        className="download-btn"
      >
        Download
      </a>
    </div>
  </div>
</div>



    {/* Testimonials Section */}
    <div className="section">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-item" key={idx}>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>, {t.company}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Oursuccess;
