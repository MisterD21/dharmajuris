import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PracticeArea = () => {
  const sliderRef = useRef(null); // Reference to the slider component

  // Event handler for previous button
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to the previous slide
    }
  };

  // Event handler for next button
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  // Define settings for the slider
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    responsive: [
      {
        breakpoint: 1024, // Adjust the number of slides for different screen sizes
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust the number of slides for different screen sizes
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Array of practice areas (replace with your actual data)
  const practiceAreas = [
    { icon: 'fa-landmark', title: 'Civil Law', link: '/CivilLitigation' },
    { icon: 'fa-users', title: 'Family Law', link: '/familylaw' },
    { icon: 'fa-hand-holding-usd', title: 'Arbitration', link: '/arbitration' },
    { icon: 'fa-gavel', title: 'Commercial Litigation', link: '/CommercialLitigation' },
    { icon: 'fa-gavel', title: 'Corporate Litigation', link: '/CorporateLitigation' },
    { icon: 'fa-gavel', title: 'Intellectual Property Rights', link: '/IntellectualPropertyRights' },
    { icon: 'fa-gavel', title: 'Legal Metrology', link: '/LegalMetrology' },
    { icon: 'fa-gavel', title: 'Labour & Employment Law', link: '/LabourEmploymentLaw' },
    { icon: 'fa-gavel', title: 'Motor Accident Claims', link: '/MotorAccidentClaims' },
    { icon: 'fa-gavel', title: 'Property Litigation', link: '/propertylitigation' },
    { icon: 'fa-gavel', title: 'Public Interest Litigation', link: '/PublicInterestLitigation' },
    { icon: 'fa-gavel', title: 'Pro Bono Litigation', link: '/probonolitigation' },
    { icon: 'fa-gavel', title: 'Real Estate Disputes', link: '/RealRstateDisputes' },
    { icon: 'fa-gavel', title: 'Regulatory Practice', link: '/RegulatoryPractice' },
    { icon: 'fa-gavel', title: 'SARFAESI Litigation', link: '/SARFAESILitigation' },
    { icon: 'fa-gavel', title: 'Technology Law', link: '/TechnologyLaw' },
    { icon: 'fa-gavel', title: 'Consumer Litigation', link: '/ConsumerLitigation' },
    { icon: 'fa-gavel', title: 'Criminal Law', link: '/CriminalLitigation' },
  ];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Our Practice Areas</h1>
        <div>
          <button className="custom-prev-button mx-2" onClick={handlePrev}><FaAngleLeft /></button>
          <button className="custom-next-button mx-2" onClick={handleNext}><FaAngleRight /></button>
        </div>
      </div>
      <br/>
      <Slider ref={sliderRef} {...settings}>
        {practiceAreas.map((area, index) => (
          <div key={index} className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
            <a href={area.link} className="w-100 h-100 d-flex flex-column align-items-center text-center">
              <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                <i className={`fa fa-2x ${area.icon}`}></i>
              </div>
              <h5 className="mb-4 px-4">{area.title}</h5>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PracticeArea;