import React from 'react';
import PracticeArea from './PracticeArea';
import Footer from './Footer';
import HeaderCarousels from './HeaderCarousels';
import Navbar from './NavigationBar';
import AboutUs from './About/AboutUs';
import Appointment from './About/Appointment';

function App() {
  return (
    <>
    <HeaderCarousels />
     
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5">
                    <img className="img-fluid rounded" src="img/about.jpg" alt=""/>
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0">
                    <h2 className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block" style={{ width: '812px', marginLeft: '-100px' }}>Decades of Dedication: A Legacy of Legal Excellence</h2>
                    <h6 className="text-uppercase">Learn About Us</h6>
                    <h1 className="mb-4">Our Mission</h1>
                    <p>At <b>KSJYJ & Associates</b>, our mission is deeply rooted in our commitment to upholding the principles of justice, fairness, and ethical practice. We recognize the profound impact that legal matters can have on individuals, families, and businesses, and we are dedicated to providing compassionate and effective legal representation to our clients. Our mission is to serve as trusted advisors and advocates, guiding our clients through complex legal challenges with integrity, professionalism, and a relentless pursuit of excellence. We believe in the power of collaboration and teamwork, harnessing the diverse skills and expertise of our team to deliver innovative and tailored solutions that meet the unique needs of each client. Our ultimate goal is to achieve justice and fairness for our clients while upholding the highest standards of ethical conduct and legal professionalism.</p>
                </div>
            </div>
        </div>
    </div>
     
    <PracticeArea />
    <Appointment />
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6" style={{ minHeight: '500px' }}>
                    <div className="position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src="img/feature.jpg" style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="feature-text bg-white rounded p-lg-5">
                        <h6 className="text-uppercase">Our Features</h6>
                        <h1 className="mb-4">Why Choose Us</h1>
                        <div className="d-flex mb-4">
                            <div className="btn-primary btn-lg-square px-3" style={{ borderRadius: '50px' }}>
                                <h5 className="text-secondary m-0">01</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Best Law Practices</h5>
                                <p className="m-0">At <b>KSJYJ & Associates</b>, we uphold the highest standards of legal excellence and professionalism, ensuring that our clients receive top-notch legal representation and advice</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="btn-primary btn-lg-square px-3" style={{ borderRadius: '50px' }}>
                                <h5 className="text-secondary m-0">02</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Efficiency & Trust</h5>
                                <p className="m-0">Our firm is committed to delivering efficient and reliable legal services, built on a foundation of trust and transparency. We prioritize clear communication and timely execution to ensure our clients' peace of mind throughout the legal process</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="btn-primary btn-lg-square px-3" style={{ borderRadius: '50px' }}>
                                <h5 className="text-secondary m-0">03</h5>
                            </div>
                            <div className="ml-4">
                                <h5>Results You Deserve</h5>
                                <p className="m-0">With a track record of success and a dedication to achieving the best possible outcomes for our clients, <b>KSJYJ & Associates</b> is committed to delivering the results you deserve. We go above and beyond to protect your interests and advocate for your rights with diligence and determination.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="bg-action rounded" style={{height: '500px'}}>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-7 text-center">
                        <h1 className="text-white mb-4">Let's get started. Call us now for a Free Consultation</h1>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <a href="#" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>


    </>
  );
}

export default App;
