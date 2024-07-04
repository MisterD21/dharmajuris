import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

// Define an array of client objects
const clients = [
  {
    // name: 'Aditya Birla Sun Life Insurance Company Limited',
    image: 'img/adityaBirla.jpg',
    
  },
  {
    // name: 'Bajaj Allianz Life Insurance Company Limited',
    image: 'img/bajaj.jpeg',
    
  },
  {
    // name: 'Bharti Axa Life Insurance Company Limited',
    image: 'img/bharti.png',
    
  },
  {
    // name: 'PNB Met Life Insurance Company Limited',
    image: 'img/Pnb-metlife-logo.jpg',
    
  },
  {
    // name: 'Zuno Insurance Company Limited',
    image: 'img/zuno.png',
    
  },
  {
    // name: 'Life Insurance Corporation of India',
    image: 'img/Life Insurance Corporation of India.png',
    
  },
  {
    // name: 'Bajaj Finance Limited',
    image: 'img/Bajaj Finance Limited.jpeg',
    
  },
  {
    // name: 'L & T Finance Limited',
    image: 'img/LT Finance Logo - JPG 3 1.jpg.webp',
    
  },
  {
    // name: 'Bajaj Hosuing Finance Limited',
    image: 'img/xlarge_Bajaj_Housing_Finance_IPO_efa94fb5b8.png.jpeg',
    
  },
  {
    // name: 'Vastu Housing Finance Limited',
    image: 'img/vastu-housing-finance.webp',
  },
  {
    // name: 'Agarwal Movers and Packers',
    image: 'img/main-qimg-c51064d7420e0c393365367b7ca9842c.gif',
    
  },
  {
    // name: 'Sunbeam Generators',
    image: 'img/images.jpeg',
    
  },
  // {
  //   name: 'Langar Bidi Company Poona',
  //   image: 'img/bharti.png',
    
  // },
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
