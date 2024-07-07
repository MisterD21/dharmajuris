      import React, { useState } from 'react';
      import { Link } from 'react-router-dom';

      const Footer = () => {
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [loading, setLoading] = useState(false);

        const handleSubscribe = async () => {
          // Validate email
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(email)) {
            setMessage('Please enter a valid email address');
            return;
          }

          setLoading(true); // Show spinner
          try {
            const response = await fetch('http://localhost:8082/subscriber/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name: 'nandan', email }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              console.error('Error:', errorData);
              setMessage(`Error: ${response.statusText}`);
              setLoading(false);
              return;
            }

            const data = await response.json();
            setMessage(data.message);
            setEmail(''); // Clear email field
          } catch (error) {
            console.error('Network error:', error);
            setMessage('Network error');
          } finally {
            setLoading(false); // Hide spinner
          }
        };

        return (
          <>
            <div className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5" style={{ marginTop: '90px' }}>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="d-flex justify-content-lg-center p-4" style={{ background: 'rgba(256, 256, 256, 0.05)' }}>
                    <i className="fa fa-2x fa-map-marker-alt text-primary"></i>
                    <div className="ml-3">
                      <h5 className="text-white">Our Office</h5>
                      <p className="m-0">Pragati Nagar, Near St. Thomas School, Shabad Pratap Aashram, Gwalior (M.P)- 474012</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-lg-center p-4" style={{ background: 'rgba(256, 256, 256, 0.05)' }}>
                    <i className="fa fa-2x fa-envelope-open text-primary"></i>
                    <div className="ml-3">
        <h5 className="text-white">Email Us</h5>
        <p className="m-0">
          <a href="mailto:contact@yashjainandassociates.com?subject=General%20Enquiry" className="text-white">
            contact@yashjainandassociates.com
          </a>
        </p>
      </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex justify-content-lg-center p-4" style={{ background: 'rgba(256, 256, 256, 0.05)' }}>
                    <i className="fa fa-2x fa-phone-alt text-primary"></i>
                    <div className="ml-3">
                      <h5 className="text-white">Call Us</h5>
                      <p className="m-0" onClick={() => window.open('tel:+91-9806204529')}>
      +91-9806204529
  </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-lg-3 col-md-6 mb-5">
                <a href="/home">
        <h1 className="m-0 mt-n2 display-9 text-primary text-uppercase" style={{ fontSize: '30px' }}>
          YJ & Associates
        </h1>
      </a>
                  <p>We uphold justice and ethical practice, offering personalized legal representation with integrity and professionalism. Inspired by our mentor, Mr. Karan Singh Jain, we provide tailored solutions and clear communication to achieve the best outcomes for our clients.</p>
                  {/* <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                  </div> */}
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                  <h4 className="font-weight-semi-bold text-primary mb-4">Popular Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" to="/Home"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                    <Link className="text-white mb-2" to="/About"><i className="fa fa-angle-right mr-2"></i>About</Link>
                    <Link className="text-white mb-2" to="/PracticeArea"><i className="fa fa-angle-right mr-2"></i>Practice   Area</Link>
                    <Link className="text-white mb-2" to="/OurPeople"><i className="fa fa-angle-right mr-2"></i>Our People</Link>
                    <Link className="text-white mb-2" to="/ContactUs"><i className="fa fa-angle-right mr-2"></i>Contact</Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                  <h4 className="font-weight-semi-bold text-primary mb-4">Quick Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" to="/Subscribing"><i className="fa fa-angle-right mr-2"></i>Subscribing</Link>
                    <Link className="text-white mb-2" to="/Disclaimer"><i className="fa fa-angle-right mr-2"></i>Disclaimer</Link>
                    <Link className="text-white mb-2" to="/Terms"><i className="fa fa-angle-right mr-2"></i>Terms</Link>
                    <Link className="text-white mb-2" to="/Privacy"><i className="fa fa-angle-right mr-2"></i>Privacy</Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                  <h4 className="font-weight-semi-bold text-primary mb-4">Follow us on linkedIn</h4>
                  <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://www.linkedin.com/in/yash-jain-b55831154/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>          </div>
              </div>
              <div className="row p-4 mt-5 mx-0" style={{ background: 'rgba(256, 256, 256, .05)' }}>
                <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                  <p className="m-0 text-white">&copy; <a className="font-weight-bold" href="#">Yash Jain & Associates</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <p className="m-0 text-white">Designed by <a className="font-weight-bold" href="http://terminalgeeks.com" target="_blank" rel="noopener noreferrer">TerminalGeeks</a></p>
                </div>
              </div>
            </div>
          </>
        );
      };

      export default Footer;
