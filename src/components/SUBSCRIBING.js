
import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';
import SubscriptionComponent from './SubscriptionComponent';

function SUBSCRIBING() {
  return (
    <>

        <HeaderComponent title="Subscribing" />
   
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">

                <h1>By Subscribing</h1>
                
                </div>
                <br/>
                <div className="row">

                <p>Stay informed with the latest updates from Yash Jain & Associates. By subscribing, you will receive regular updates on our services, insights, and events directly to your inbox. Our updates include:</p>

                <p>Newsletters featuring the latest legal developments</p>
                <p>Invitations to webinars and events</p>
                <p>Articles and reports on various legal topics</p>
                <p>Updates on our firm's activities and services</p>
<p>To subscribe, please enter your email address below. By subscribing, you consent to receiving these communications from Yash Jain & Associates. You can unsubscribe at any time by clicking the "unsubscribe" link in our emails.</p>
                
                </div>
                <br />
                <SubscriptionComponent />
        </div>
        </div>

    

    </>
  );
}

export default SUBSCRIBING;
