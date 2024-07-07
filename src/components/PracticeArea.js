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
    dots: false, // Disable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    responsive: [
      {
        breakpoint: 1024, // Adjust the number of slides for different screen sizes
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600, // Adjust the number of slides for different screen sizes
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h6 className="text-uppercase">Our Practice</h6>
            <h1 className="mb-4">Our Practice Areas</h1>
            <p>Explore our diverse Practice Areas, offering comprehensive legal solutions tailored to your needs. From swift dispute resolutions to expert guidance in complex matters, our dedicated teams ensure confident navigation of legal challenges.</p>
            {/* <a href="" className="btn btn-primary mt-2">More Services</a> */}
          </div>
          <div className="col-lg-9 pt-5 pt-lg-0">
            <div className="bg-primary rounded" style={{ height: '200px' }}></div>
            {/* Use Slider component here */}
            <Slider ref={sliderRef} {...settings} className="owl-carousel service-carousel position-relative" style={{ marginTop: '-180px', padding: '0 20px' }}>
              {/* Slides */}
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-landmark"></i>
                </div>
                <h5 className="mb-4 px-4">Civil Law</h5>
                <p className="m-0">Welcome to YJ & Associates, your expert guide in Indian civil law. From contracts to civil disputes, we provide strategic counsel and effective advocacy for your legal needs.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-users"></i>
                </div>
                <h5 className="mb-4 px-4">Family Law</h5>
                <p className="m-0">Navigate family matters with care. Our team offers compassionate support and expert guidance to resolve disputes and protect your loved ones' interests.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-hand-holding-usd"></i>
                </div>
                <h5 className="mb-4 px-4">Arbitration</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Commercial Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Corporate Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Intellectual Property Rights</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Legal Metrology</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Labour & Employment Law</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Motor Accident Claims</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Property Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Public Interest Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Pro Bono Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Real Estate Disputes</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Regulatory Practice</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">SARFAESI Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Technology Law</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>                
                <h5 className="mb-4 px-4">Consumer Litigation</h5>
                <p className="m-0">Protect your business interests with our tailored corporate litigation solutions.</p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Criminal Law</h5>
                <p className="m-0">At the forefront of justice, our team stands ready to safeguard your rights. With unwavering dedication and strategic prowess, we navigate the complexities of the legal system to ensure your voice is heard and your rights are protected.</p>
              </div>
            </Slider>
            {/* Custom arrow buttons */}
            <div class="col-lg-9 pt-5 pt-lg-0 mx-auto text-center"> 
                <button className="custom-prev-button" onClick={handlePrev}><FaAngleLeft /></button>
                <button className="custom-next-button" onClick={handleNext}><FaAngleRight /></button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PracticeArea;
