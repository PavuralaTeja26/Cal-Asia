import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    const flipCards = document.querySelectorAll(".flip-card");

    flipCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";

      setTimeout(() => {
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200);
    });

    const handleCardClick = (e) => {
      if (window.innerWidth <= 768) {
        e.currentTarget.classList.toggle("mobile-flip");
      }
    };

    flipCards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });

    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        .flip-card.mobile-flip .flip-card-inner {
          transform: rotateY(180deg);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      flipCards.forEach((card) => {
        card.removeEventListener("click", handleCardClick);
      });
    };
  }, []);

  const PUBLIC_URL = process.env.PUBLIC_URL;

  const services = [
    {
      image: "/standardcalibration.jpg",
      title: "Standard Calibration",
      description: "Ensure accuracy and traceability for your equipment.",
      features: [
        "NIST-traceable calibration",
        "Comprehensive reporting",
        "Fast turnaround time",
      ],
      color: "blue",
    },
    {
      image: "/standardrepair.jpeg",
      title: "Standard Repair",
      description: "Expert repair services to restore functionality and reliability.",
      features: ["Factory-trained technicians", "OEM replacement parts", "Warranty coverage"],
      color: "green",
    },
    {
      image: "/accreditationcalibration.webp",
      title: "Accreditation Calibration",
      description: "High-precision calibration with ISO/IEC 17025 accreditation.",
      features: ["Certified equipment", "International compliance", "Detailed documentation"],
      color: "orange",
    },
    {
      image: "/rental.WebP",
      title: "Rental Services",
      description: "Short-term and long-term equipment rentals for your needs.",
      features: ["Wide range of instruments", "Flexible rental terms", "Ready-to-use delivery"],
      color: "pink",
    },
    {
      image: "/onsitecalibration.jpg",
      title: "Onsite Calibration",
      description: "Convenient and efficient calibration at your location.",
      features: ["Minimize downtime", "Certified onsite teams", "Real-time adjustments"],
      color: "teal",
    },
    {
      image: "/newtestequipment.webp",
      title: "Sales of New Test Equipment",
      description: "Comprehensive range of cutting-edge test and measurement equipment.",
      features: ["Latest technology instruments", "Competitive pricing", "Full technical support"],
      color: "green",
    },
    {
      image: "/expresscalibration.webp",
      title: "Express Calibration",
      description: "Fast-track calibration services for urgent requirements.",
      features: ["24-48 hour turnaround", "Priority handling", "Same-day quotes"],
      color: "blue",
    },
    {
      image: "/systemintegration.jpg",
      title: "System Integration",
      description: "Custom test system design and integration solutions.",
      features: ["Tailored solutions", "End-to-end integration", "Performance optimization"],
      color: "orange",
    },
    {
      image: "/testingsw.jpg",
      title: "Test SW Development",
      description: "Custom software development for test automation and control.",
      features: ["Automated test sequences", "User-friendly interfaces", "Data management systems"],
      color: "black",
    },
    {
      image: "/operationmaintance.jpg",
      title: "Operations & Maintenance training",
      description: "Comprehensive training programs for equipment operation and maintenance.",
      features: ["Hands-on training sessions", "Certification programs", "Ongoing support"],
      color: "teal",
    },
    {
      image: "/trainedmanpower.jpg",
      title: "Trained Manpower provision",
      description: "Skilled technical personnel for your projects and operations.",
      features: ["Certified technicians", "Flexible deployment", "Quality assurance"],
      color: "blue",
    },
    {
      image: "/annualmaintanancecalibration.jpg",
      title: "Annual Maintenance Contracts",
      description: "Comprehensive maintenance packages to ensure optimal performance.",
      features: ["Preventive maintenance", "Priority support", "Cost-effective solutions"],
      color: "green",
    },
    {
      image: "/flexiblepayment.WebP",
      title: "Flexible payment options ",
      description: "Multiple payment solutions to suit your business needs.",
      features: ["Installment plans", "Lease agreements", "Credit facilities"],
      color: "orange",
    },
  ];

  return (
    <div className="services-container">
      <div className="header">
        <h1>Our Services</h1>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className={`flip-card-front ${service.color}`}>
                <img
                  src={PUBLIC_URL + service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h2 className="service-title">{service.title}</h2>
              </div>
              <div className="flip-card-back">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
