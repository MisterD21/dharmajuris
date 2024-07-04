import React, { useState } from 'react';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setResponseMessage('Please enter a valid email address');
      return;
    }

    // Mobile number validation
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobileNumber)) {
      setResponseMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8082/subscriber/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobileNumber, subject, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setResponseMessage(`Error: ${response.statusText}`);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setResponseMessage(data.message);
      setName('');
      setEmail('');
      setMobileNumber('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Network error:', error);
      setResponseMessage('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid py-0">
        <div className="container py-0">
          <div className="text-center pb-2">
            <h6 className="text-uppercase">Contact Us</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success"></div>
                <h1>Yash Jain & Associates</h1>
                <h4>Call us at +91 9806204529</h4>
                <h4>Mail us at advashj@gmail.com</h4>
                <br/> 
                High Court Main Building
                <br/> 
                City Center, Jiwaji University, 
                <br />Mahalgaon, Gwalior, Madhya Pradesh 474011
                {/* <form name="sentMessage" id="contactForm" noValidate onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-sm-6 control-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="tel"
                      className="form-control p-4"
                      id="number"
                      placeholder="Mobile Number (10 digits)"
                      required
                      pattern="[0-9]{10}"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control p-4"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-block" type="submit" id="sendMessageButton" disabled={loading}>
                      {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Send Message'}
                    </button>
                  </div>
                </form>
                 */}
                {responseMessage && <p>{responseMessage}</p>}
              </div>
            </div>
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <iframe
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.10275043224!2d78.156599582421!3d26.200326483008094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c40facffbdbf%3A0xfb723dcd09eb4ce3!2sHigh%20Court%20Main%20Building!5e0!3m2!1sen!2sin!4v1716810425816!5m2!1sen!2sin"
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
