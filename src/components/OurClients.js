import React from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

// Define an array of client objects
const clients = [
  {
    name: 'Client 1',
    image: 'img/team-1.jpg',
    description: 'Description of Client 1'
  },
  {
    name: 'Client 2',
    image: 'img/team-2.jpg',
    description: 'Description of Client 2'
  },
  {
    name: 'Client 3',
    image: 'img/team-3.jpg',
    description: 'Description of Client 3'
  },
  {
    name: 'Client 5',
    image: 'img/team-4.jpg',
    description: 'Description of Client 2'
  },
  {
    name: 'Client 5',
    image: 'img/team-5.jpg',
    description: 'Description of Client 3'
  }
];

function OurClients() {
  return (
    <>
      <HeaderComponent title="OurClients" />
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
