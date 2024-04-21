
import React from 'react';

function WhyChooseUs() {
  return (
    <>

   
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-6" style={{ minHeight: '500px' }}>
        <div className="position-relative h-100 rounded overflow-hidden">
          <img className="position-absolute w-100 h-100" src="img/feature.jpg" style={{ objectFit: 'cover' }} />
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

    

    </>
  );
}

export default WhyChooseUs;
