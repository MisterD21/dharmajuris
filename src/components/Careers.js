import React, { useState } from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';
import Overview from './Overview';
import CareersForm from './CareersForm';
import Positions from './Positions';

function Careers() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'internships':
        return <CareersForm />;
      case 'positions':
        return <Positions />;
      default:
        return null;
    }
  };

  const tabStyle = {
    color: '#373737e',
  };

  const activeTabStyle = {
    backgroundColor: '#373737e',
    // color: 'brown',
  };

  return (
    <>
      <HeaderComponent title="Careers" />

      <div className="container-fluid py-0">
        <div className="container py-0">
          <div className="row">
            <div className="col-9">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={activeTab === 'overview' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={activeTab === 'internships' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('internships')}
                  >
                    Internships
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    style={activeTab === 'positions' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('positions')}
                  >
                    Open Positions
                  </button>
                </li>
              </ul>
              <div className="tab-content py-4">
                {renderContent()}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
