import React, { useState, useEffect } from 'react';

function Positions() {
  const [positions, setPositions] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Dummy data to simulate fetched job positions
    const dummyData = [
      {
        id: 1,
        position: 'Software Engineer',
        vacancies: 5,
        experience: '2-4 years',
        qualification: 'B.Tech in Computer Science',
        description: 'Responsible for developing and maintaining software applications.',
      },
      {
        id: 2,
        position: 'Data Analyst',
        vacancies: 3,
        experience: '1-3 years',
        qualification: 'B.Sc in Data Science',
        description: 'Analyze and interpret complex data sets.',
      },
      // Add more dummy data as needed
    ];

    // Simulate API call
    setTimeout(() => {
      setPositions(dummyData);
    }, 1000);
  }, []);

  const handleDescriptionClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedJob(null);
    }, 300); // Delay to allow the modal to fade out before resetting the selected job
  };

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>No.</th>
            <th style={styles.th}>Position</th>
            <th style={styles.th}>No. of Vacancy</th>
            <th style={styles.th}>Experience</th>
            <th style={styles.th}>Qualification</th>
            <th style={styles.th}>Job Description</th>
            <th style={styles.th}>Apply</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((job, index) => (
            <tr key={job.id}>
              <td style={styles.td}>{index + 1}</td>
              <td style={styles.td}>{job.position}</td>
              <td style={styles.td}>{job.vacancies}</td>
              <td style={styles.td}>{job.experience}</td>
              <td style={styles.td}>{job.qualification}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, transition: 'background-color 0.3s' }} onClick={() => handleDescriptionClick(job)}>Description</button>
              </td>
              <td style={styles.td}>
                <button style={styles.button}>Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div style={{ ...styles.modalOverlay, transition: 'opacity 0.3s' }}>
          <div style={styles.modal}>
            <h2>{selectedJob.position}</h2>
            <p>{selectedJob.description}</p>
            <button style={styles.button} onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#3737ee',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '1',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '500px',
    maxWidth: '100%',
  },
};

export default Positions;
