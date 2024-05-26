
import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

function OurClients() {
  return (
    <>

        <HeaderComponent title="OurClients" />
   
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                    <img className="img-fluid rounded" src="img/about.jpg" alt=""/>

                <h1>this is OurClients</h1>
                
                </div>
                <br/>
                <div className="row">

                <p>this is OurClients</p>
                
                </div>
        </div>
        </div>

    

    </>
  );
}

export default OurClients;
