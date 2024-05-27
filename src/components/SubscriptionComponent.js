
import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

function SubscriptionComponent() {
  return (
    <>

<div style={{ width: '100%', maxWidth: '100%', padding: '20px', boxSizing: 'border-box' }}>
            <h4 className="font-weight-semi-bold text-primary mb-4">Subscribe to Updates</h4>
            <p>Stay informed with the latest updates from Yash Jain & Associates. By subscribing, you will receive regular updates on our services, insights, and events directly to your inbox.</p>
            <div style={{ width: '100%' }}>
                <div className="input-group" style={{ width: '100%' }}>
                    <input
                        type="text"
                        className="form-control border-0"
                        style={{ padding: '25px', width: '100%' }}
                        placeholder="Your Email"
                    />
                    <br/>
                    <br/><br/>
                    <div className="input-group-append">
                        <button className="btn btn-primary px-4">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default SubscriptionComponent;
