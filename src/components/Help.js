
import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

function Help() {
  return (
    <>

        <HeaderComponent title="Disclaimer" />
   
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">

                <h1>Disclaimer</h1>
                
                </div>
                <br/>
                <div className="row">

                <p>The Indian Bar Council prohibits law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for informational purposes and not for advertising. Yash Jain & Associates does not intend to solicit clients through this website. We do not take responsibility for the decisions taken by the reader based solely on the information provided on the website.</p>

                <p>By clicking on “I agree,” the visitor acknowledges that the information provided on the website:
(a) does not amount to advertising or solicitation, and
(b) is meant only for his/her understanding about our activities and who we are.</p>
                
                </div>
        </div>
        </div>

    

    </>
  );
}

export default Help;
