import React, { useState, useEffect } from 'react';

function Positions() {
  const [positions, setPositions] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    cv: null,
    jobId: null,
  });

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/job-listings');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error('Error fetching positions:', error);
      }
    };

    fetchPositions();
  }, []);

  const handleDescriptionClick = (job) => {
    setSelectedJob(job);
    setShowDescriptionModal(true);
  };

  const handleCloseDescriptionModal = () => {
    setShowDescriptionModal(false);
    setTimeout(() => {
      setSelectedJob(null);
    }, 300);
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prevState) => ({
      ...prevState,
      jobId: job.id,
    }));
    setShowApplyModal(true);
  };

  const handleCloseApplyModal = () => {
    setShowApplyModal(false);
    setTimeout(() => {
      setSelectedJob(null);
    }, 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      cv: e.target.files[0],
    }));
  };

  const handleSubmitApplication = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('mobile', formData.mobile);
    data.append('cv', formData.cv);
    data.append('jobId', formData.jobId);

    try {
      const response = await fetch('http://localhost:8082/api/applications', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Application submitted!');
        handleCloseApplyModal();
      } else {
        alert('Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the application');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Position</th>
            <th style={styles.th}>No. of Vacancy</th>
            <th style={styles.th}>Experience</th>
            <th style={styles.th}>Qualification</th>
            <th style={styles.th}>Job Description</th>
            <th style={styles.th}>Apply</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((job) => (
            <tr key={job.id}>
              <td style={styles.td}>{job.id}</td>
              <td style={styles.td}>{job.position}</td>
              <td style={styles.td}>{job.noOfVacancy}</td>
              <td style={styles.td}>{job.experience}</td>
              <td style={styles.td}>{job.qualification}</td>
              <td style={styles.td}>
                <button style={{ ...styles.button, transition: 'background-color 0.3s' }} onClick={() => handleDescriptionClick(job)}>Description</button>
              </td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleApplyClick(job)}>Apply</button>
              </td>
            </tr>
            
          ))}
          <h4>Currently there is no openings.</h4>
        </tbody>
      </table>

      {showDescriptionModal && (
        <div style={{ ...styles.modalOverlay, transition: 'opacity 0.3s' }}>
          <div style={styles.modal}>
            <h2>{selectedJob.position}</h2>
            <p>{selectedJob.jobDescription}</p>
            <button style={styles.button} onClick={handleCloseDescriptionModal}>Close</button>
          </div>
        </div>
      )}

      {showApplyModal && (
        <div style={{ ...styles.modalOverlay, transition: 'opacity 0.3s' }}>
          <div style={styles.modal}>
            <h2>Apply for {selectedJob.position}</h2>
            <form onSubmit={handleSubmitApplication}>
              <div style={styles.formGroup}>
                <label>Job ID:</label>
                <p>{selectedJob.id}</p>
              </div>
              <div style={styles.formGroup}>
                <label>Name:</label>
                <input type="text" name="name" required style={styles.input} value={formData.name} onChange={handleInputChange} />
              </div>
              <div style={styles.formGroup}>
                <label>Email:</label>
                <input type="email" name="email" required style={styles.input} value={formData.email} onChange={handleInputChange} />
              </div>
              <div style={styles.formGroup}>
                <label>Mobile Number:</label>
                <input type="tel" name="mobile" required style={styles.input} value={formData.mobile} onChange={handleInputChange} />
              </div>
              <div style={styles.formGroup}>
                <label>CV (PDF):</label>
                <input type="file" name="cv" accept="application/pdf" required style={styles.input} onChange={handleFileChange} />
              </div>
              <button type="submit" style={styles.button}>Submit</button>
              <button type="button" style={styles.button} onClick={handleCloseApplyModal}>Cancel</button>
            </form>
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
    margin: '5px'
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
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
};

export default Positions;
