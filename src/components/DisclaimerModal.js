import React from 'react';

function DisclaimerModal({ onAccept, onDecline }) {
  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Disclaimer</h5>
          </div>
          <div className="modal-body">
            {/* <p>This website has been designed only for the purposes of dissemination of basic information on Cyril Amarchand Mangaldas; information which is otherwise available on the internet, various public platforms and social media. Careful attention has been given to ensure that the information provided herein is accurate and up-to-date. However, Cyril Amarchand Mangaldas is not responsible for any reliance that a reader places on such information and shall not be liable for any loss or damage caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof. Reader is advised to confirm the veracity of the same from independent and expert sources.</p>
            <p>This website is not an attempt to advertise or solicit clients, and does not seek to create or invite any lawyer-client relationship. The links provided on this website are to facilitate access to basic information on Cyril Amarchand Mangaldas, and, to share the various thought leadership initiatives undertaken by it. The content herein or on such links should not be construed as a legal reference or legal advice. Readers are advised not to act on any information contained herein or on the links and should refer to legal counsels and experts in their respective jurisdictions for further information and to determine its impact.</p>
            <p>Cyril Amarchand Mangaldas advises against the use of the communication platform provided on this website for exchange of any confidential, business or politically sensitive information. User is requested to use his or her judgment and exchange of any such information shall be solely at the user’s risk.</p> */}
            <p>Cyril Amarchand Mangaldas uses cookies on its website to improve its usability. This helps us in providing a good user experience and to also help in improving our website. By continuing to use our website without changing your privacy settings, you agree to use our cookies.</p>
            <p>Terms of use and Privacy policy</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onAccept}>Accept</button>
            <button className="btn btn-secondary" onClick={onDecline}>Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;
