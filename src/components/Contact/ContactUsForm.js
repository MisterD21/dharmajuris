import React from 'react';  

function ContactUsForm() {
  return (
    <>
    <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center pb-2">
            <h6 className="text-uppercase">Contact Us</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-sm-6 control-group">
                      <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea className="form-control p-4" rows="6" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-block" type="submit" id="sendMessageButton">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <iframe
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    

    </>
  );
}

export default ContactUsForm;
