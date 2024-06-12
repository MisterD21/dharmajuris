import React from 'react';
import { useNavigate } from 'react-router-dom';

function Disclaimer() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/');
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.in';
  };

  return (
    <div className="container mt-5">
      <h2>Disclaimer</h2>
      <p>This website is intended solely to provide general information about Yash Jain & Associates, drawing from sources available on the internet, public platforms, and social media. We strive to ensure the accuracy and timeliness of the information presented here. However, Yash Jain & Associates is not responsible for any reliance placed on this information and will not be liable for any loss or damage resulting from inaccuracies or omissions. Readers are encouraged to verify the information independently.</p>
      <p>This website is not meant to advertise or solicit clients, nor to establish any lawyer-client relationship. The links provided are intended to offer easy access to basic information about Yash Jain & Associates and to share the firm’s thought leadership initiatives. The content on this website and any linked pages should not be taken as legal advice. Readers should consult legal professionals and experts in their jurisdictions for specific advice.</p>
      <p>We caution against using the communication features of this website for transmitting any confidential, business, or sensitive information. Users should exercise discretion, as any information exchanged will be at their own risk.</p>
      <p>Yash Jain & Associates uses cookies to enhance the usability of our website and improve user experience. By continuing to use our website without changing your privacy settings, you consent to our use of cookies.</p>
      <p>[Terms of Use and Privacy Policy]</p>
      <div>
        <button className="btn btn-primary mr-2" onClick={handleAccept}>Accept</button>
        <button className="btn btn-danger" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
}

export default Disclaimer;
