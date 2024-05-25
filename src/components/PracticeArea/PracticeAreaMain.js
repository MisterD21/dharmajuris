import React, { useRef } from 'react';
import PracticeArea from '../PracticeArea';
import PracticeAreaHeaderImage from './PracticeAreaHeaderImage';

const PracticeAreaMain = () => {
  
    return (
        <>
        <PracticeAreaHeaderImage />
        <PracticeArea />

        <div className="container-fluid py-5">
  <div className="container py-5">
    <div className="bg-action rounded" style={{ height: '500px' }}>
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-lg-7 text-center">
          <h1 className="text-white mb-4">Let's get started. Call us now for a Free Consultation</h1>
          <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
</div>



        </>
    );
}

export default PracticeAreaMain;
