import React from 'react';
import { Link } from 'react-router-dom';

function HeaderCarousels() {
const phoneNumber = "9806204529";
  return (
    <>
    
    <div className="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active" style={{ height: '100vh', minHeight: '400px' }}>
                    <img className="position-absolute w-100 h-100" alt="" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }}/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Best Law Agency</h4>
                            <h3 className="display-2 text-capitalize text-white mb-4">Our fighting Is for your justice</h3>
                            {/* <a className="btn btn-primary py-3 px-5 mt-2" href="#">Get An Appointment</a> */}
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/Contact">Get An Appointment</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item position-relative" style={{ height: '100vh', minHeight: '400px' }}>
                    <img className="position-absolute w-100 h-100" alt="" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }}/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: '900px' }}>
                            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Results You Deserve</h4>
                            <h3 className="display-2 text-capitalize text-white mb-4">Comprehensive Legal Solutions for Every Challenge</h3>
                            <a className="btn btn-primary py-3 px-5 mt-2" href={`tel:${phoneNumber}`}>Call Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-lg btn-secondary btn-lg-square">
                    <span className="carousel-control-prev-icon"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-lg btn-secondary btn-lg-square">
                    <span className="carousel-control-next-icon"></span>
                </div>
            </a>
        </div>
    </div>


    </>
  );
}

export default HeaderCarousels;
