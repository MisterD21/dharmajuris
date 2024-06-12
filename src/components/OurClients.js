import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

// Define an array of client objects
const clients = [
  {
    name: 'Aditya Birla Sun Life Insurance Company Limited',
    image: 'img/team-3.jpg',
    
  },
  {
    name: 'Bajaj Allianz Life Insurance Company Limited',
    image: 'img/team-3.jpg',
    
  },
  {
    name: 'Bharti Axa Life Insurance Company Limited',
    image: 'img/team-3.jpg',
    
  },
  {
    name: 'PNB Met Life Insurance Company Limited',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Zuno Insurance Company Limited',
    image: 'img/team-5.jpg',
    
  },
  {
    name: 'Life Insurance Corporation of India',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Bajaj Finance Limited',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'L & T Finance Limited',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Bajaj Hosuing Finance Limited',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Vastu Housing Finance Limited',
    image: 'img/team-4.jpg',
  },
  {
    name: 'Agarwal Movers and Packers',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Sunbeam Generators',
    image: 'img/team-4.jpg',
    
  },
  {
    name: 'Langar Bidi Company Poona',
    image: 'img/team-4.jpg',
    
  },
];

function OurClients() {
  return (
    <>
      <HeaderComponent title="Our Clients" />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            {clients.map((client, index) => (
              <div className="col-md-4" key={index}>
                <div className="client-card">
                  <img className="img-fluid rounded" src={client.image} alt={client.name} />
                  <div className="client-info">
                    <h4>{client.name}</h4>
                    <p>{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClients;
