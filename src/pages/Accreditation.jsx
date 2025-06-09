import React, { useState } from 'react';


const Accreditation = () => {
  const [expandedSection, setExpandedSection] = useState('quality-management');

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const accreditations = [
    
    {
  id: 'iso-17025',
  title: 'ISO/IEC 17025:2017',
  description: 'Testing and Calibration Laboratories',
  icon: '🔬',
  details: (
    <>
      Calibration Laboratory has excelled in its field of Electro-Technical and has proved its caliber to be the market leader.
      We calibrate Electro-Technical (Radio Frequency-Power (30 dBm) & Frequency (up to 20GHz).
      We also calibrate other parameters like Mechanical-Pressure & Dimension, Thermal-Temperature etc.
      <br />
      <span className="blinking-text">NABL ACCREDITATION IS UNDER PROCESS</span>
    </>
  )
}

    
      
  ];

  const certifications = [
    {
      title: 'NIST Traceability',
      description: 'All calibrations traceable to NIST standards',
      icon: '📊'
    },
    {
      title: 'A2LA Accredited',
      description: 'American Association for Laboratory Accreditation',
      icon: '✅'
    },
    {
      title: 'FDA Compliance',
      description: 'Food and Drug Administration regulations',
      icon: '🏥'
    },
    {
      title: 'GMP Certified',
      description: 'Good Manufacturing Practice compliance',
      icon: '⚡'
    }
  ];

  return (
    <div className="accreditation-page">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="main-title">Accreditations & Certifications</h1>
          <p className="main-subtitle">
            Our commitment to excellence is validated through rigorous industry standards and continuous compliance with regulatory requirements.
          </p>
        </div>

        {/* Quality Management Section */}
        <div className="section-card">
          <div 
            className="section-header"
            onClick={() => toggleSection('quality-management')}
          >
            <h2>Quality Management Systems</h2>
            <span className={`arrow ${expandedSection === 'quality-management' ? 'expanded' : ''}`}>
              ▲
            </span>
          </div>
          
          {expandedSection === 'quality-management' && (
            <div className="section-content">
              <h3 className="framework-title">Quality Management Framework</h3>
              <p className="framework-description">
                Our quality management system is built on continuous improvement, customer satisfaction, 
                and operational excellence. We maintain rigorous standards across all processes to ensure 
                consistent delivery of high-quality products and services as per National/International Standard ISO/IEC 17025:2017.
              </p>

              <div className="content-grid">
                <div className="content-grid">
  <div className="content-box">
    <h3>Quality Policy</h3>
    <ul>
      <li>
        It is the policy of CAL-AISA INDIA PRIVATE LIMITED to provide the highest standards in calibration services & maintain precision and accuracy. The laboratory service shall ensure total customer satisfaction by maintaining independence, impartiality, and consistency in its operations, through continual improvement of all our calibration processes and complete effectiveness of the Quality Management System.
      </li>
      <li>
        All personnel are competent and concerned with calibration. Within the laboratory, they are made to familiarize themselves with the quality documentation and implement the policies and procedures of the management system in their work.
      </li>
      <li>
        Our primary goal is to maintain excellence in all aspects of our NABL calibration services by continuously improving our systems and processes. Our calibration laboratory fully meets all requirements of ISO/IEC 17025:2017, ensuring no compromise on precision, traceability, and measurement repeatability.
      </li>
      <li>
        The policy of the calibration laboratory also includes providing prompt services and maintaining absolute confidentiality and impartiality to meet the requirements of standard clause 4.1 and 4.2 of ISO/IEC 17025:2017.
      </li>
      <li>
        Improvement in every aspect of NABL calibration is our continuous endeavor at CAL-AISA INDIA PRIVATE LIMITED. The management and staff put extra effort into maintaining our ISO/IEC 17025:2017 accreditation by regularly reviewing and updating our quality management systems. This assures clients they receive the most reliable and accurate calibration services.
      </li>
    </ul>
  </div>
</div>


                <div className="content-box">
                  <h3>Quality Objectives</h3>
                  <ul className="objectives-list">
                    <li>Assure quality of calibration results by following unambiguous quality manual, quality system procedures aligned with ISO/IEC 17025:2017, NABL, National / International Standards, which are continuously updated and remain current.</li>
                    <li>To improve the quality of calibration & repairing services by adding latest equipment to the laboratory.</li>
                    <li>The laboratory management is committed to comply with ISO/IEC 17025:2017, NABL and bring about continual improvement in the effectiveness of the management system and customer’s satisfaction.</li>
                    <li>All calibrations shall be completed and report the results without ambiguity & within the time frame scheduled as per the customer’s prerequisite.</li>
                    <li>Organize one training program on calibration activities per year for staff.</li>
                    <li>Conduct one customer meet every year to promote the calibration services</li>
                    <li>The quality objectives shall be reviewed during every management review 
                      to meet customer requirements as well as to accomplish the statuary and regulatory requirements.</li>
                    <li>All calibrations shall be completed and report the results without ambiguity & within the time frame scheduled as per the customer’s prerequisite.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ISO Accreditations */}
        <div className="section-card">
          <div 
            className="section-header"
            onClick={() => toggleSection('iso-accreditations')}
          >
            <h2>Accreditations</h2>
            <span className={`arrow ${expandedSection === 'iso-accreditations' ? 'expanded' : ''}`}>
              ▲
            </span>
          </div>
          
          {expandedSection === 'iso-accreditations' && (
            <div className="section-content">
              <div className="accreditation-grid">
                {accreditations.map((accreditation) => (
                  <div key={accreditation.id} className="accreditation-card">
                    <div className="accreditation-icon">{accreditation.icon}</div>
                    <h4 className="accreditation-title">{accreditation.title}</h4>
                    <p className="accreditation-description">{accreditation.description}</p>
                    <p className="accreditation-details">{accreditation.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

       
              </div>
            </div>
          
  );
};

export default Accreditation;