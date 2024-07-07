import React from 'react';

function DisclaimerModal({ onAccept, onDecline }) {
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000, // Ensure modal appears above other content
  };

  const modalDialogStyle = {
    maxWidth: '90%',
    width: 'auto',
    margin: 0,
  };

  const modalContentStyle = {
    width: '100%',
    maxWidth: '600px', // Adjust max-width as needed
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const modalHeaderStyle = {
    backgroundColor: '#37373f',
    color: '#fff',
    padding: '15px',
  };

  const modalBodyStyle = {
    padding: '15px',
    maxHeight: 'calc(100vh - 200px)', // Adjust max-height if needed
    overflowY: 'auto',
  };

  const modalFooterStyle = {
    backgroundColor: '#f0f0f0',
    padding: '15px',
    textAlign: 'right',
  };

  const buttonPrimaryStyle = {
    backgroundColor: '#37373f',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
  };

  const buttonSecondaryStyle = {
    backgroundColor: '#ccc',
    color: '#333',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered" style={modalDialogStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <div className="modal-header" style={modalHeaderStyle}>
            <h5 className="modal-title" style={{ color: '#fff' }}>Disclaimer & Confirmation</h5>
          </div>
          <div className="modal-body" style={modalBodyStyle}>
            <p>As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking on the “I agree” below, the user acknowledges the following:</p>
            <ul>
              <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
              <li>The user wishes to gain more information about us for his/her own information and use.</li>
              <li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site would not create any lawyer-client relationship.</li>
              <li>The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material / information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.</li>
            </ul>
          </div>
          <div className="modal-footer" style={modalFooterStyle}>
            <button className="btn btn-primary" style={buttonPrimaryStyle} onClick={onAccept}>I Agree</button>
            {/* <button className="btn btn-secondary" style={buttonSecondaryStyle} onClick={onDecline}>Decline</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;