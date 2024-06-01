import React, { useState } from 'react';
import HeaderComponent from './commonComponent/HeaderComponent';

function JobListing() {
  const [formData, setFormData] = useState({
    position: '',
    noOfVacancy: 1,
    experience: '',
    qualification: '',
    jobDescription: '',
  });
  const [deleteJobId, setDeleteJobId] = useState('');
  const [createResponse, setCreateResponse] = useState('');
  const [deleteResponse, setDeleteResponse] = useState('');
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingCreate(true);
    try {
      const response = await fetch('http://localhost:8082/api/job-listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          position: '',
          noOfVacancy: 1,
          experience: '',
          qualification: '',
          jobDescription: '',
        });
        setCreateResponse('Job listing submitted successfully!');
      } else {
        setCreateResponse('Failed to submit job listing');
      }
    } catch (error) {
      console.error('Error submitting job listing:', error);
      setCreateResponse('An error occurred while submitting the job listing');
    } finally {
      setIsLoadingCreate(false);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setIsLoadingDelete(true);
    try {
      const response = await fetch(`http://localhost:8082/api/job-listings/delete/${deleteJobId}`, {
        method: 'POST',
      });
      if (response.status === 201) {
        const text = await response.text();
        setDeleteJobId('');
        setDeleteResponse(text || 'Job listing deleted successfully!');
      } else {
        setDeleteResponse('Failed to delete job listing');
      }
    } catch (error) {
      console.error('Error deleting job listing:', error);
      setDeleteResponse('An error occurred while deleting the job listing');
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return (
    <>
      <HeaderComponent title="Job Listing" />
      <div className="container-fluid py-3">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#createListing">Create Listing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#deleteListing">Delete Listing</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="createListing" className="tab-pane fade show active">
              <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">Add New Job Listing</h1>
                      <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Position:</label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>No. of Vacancy:</label>
                      <input
                        type="number"
                        name="noOfVacancy"
                        value={formData.noOfVacancy}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Experience:</label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Qualification:</label>
                      <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Job Description:</label>
                      <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>
                  
                        {createResponse && <p className="text-center text-success">{createResponse}</p>}
                        <button type="submit" className="btn btn-primary" disabled={isLoadingCreate}>
                          {isLoadingCreate ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> : null}
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="deleteListing" className="tab-pane fade">
              <div className="row justify-content-center mt-3">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h1 className="card-title text-center mb-4">Delete Job Listing</h1>
                      <form onSubmit={handleDeleteSubmit}>
                        <div className="form-group">
                          <label>Job ID:</label>
                          <input
                            type="number"
                            name="deleteJobId"
                            value={deleteJobId}
                            onChange={(e) => setDeleteJobId(e.target.value)}
                            className="form-control"
                            required
                          />
                        </div>
                        {deleteResponse && <p className="text-center text-success">{deleteResponse}</p>}
                        <button type="submit" className="btn btn-danger" disabled={isLoadingDelete}>
                          {isLoadingDelete ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> : null}
                          Delete
                        </button>
                      </form>
                    </div>
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

export default JobListing;
