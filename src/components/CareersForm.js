import React, { useState } from 'react';

function CareersForm() {
  
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   college: '',
  //   location: '',
  //   month: '',
  //   cgpa: '',
  //   cv: null,
  // });

  // const [isLoading, setIsLoading] = useState(false);
  // const [submissionStatus, setSubmissionStatus] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (name === 'phone') {
  //     if (/^\d{0,10}$/.test(value) && (value.length === 0 || /^[1-9]/.test(value))) {
  //       setFormData({
  //         ...formData,
  //         [name]: value,
  //       });
  //     }
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: files ? files[0] : value,
  //     });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const data = new FormData();
  //   for (const key in formData) {
  //     data.append(key, formData[key]);
  //   }

  //   try {
  //     const response = await fetch('http://localhost:8082/api/careers/submit', {
  //       method: 'POST',
  //       body: data,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const result = await response.text();
  //     setSubmissionStatus(`Form submitted successfully! ${result}`);
  //     setFormData({
  //       firstName: '',
  //       lastName: '',
  //       email: '',
  //       phone: '',
  //       college: '',
  //       location: '',
  //       month: '',
  //       cgpa: '',
  //       cv: null,
  //     });
  //   } catch (error) {
  //     setSubmissionStatus(`Error submitting form: ${error.message}`);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <p style={{ fontWeight: '600', color: 'Black', marginBottom: '20px' }}>
      We are excited to welcome students pursuing a career in law to join our team. At Yash Jain & Associates, we provide significant opportunities for students to develop and refine their legal skills. If you are interested in exploring internship opportunities with us, please send your CV on mail advashj@gmail.com.
      </p>
      {/* <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone No. *"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="college"
            placeholder="College/University *"
            value={formData.college}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Preferred Location</option>
            <option value="location1">Gwalior</option>
            <option value="location2">Morena</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <select
            name="month"
            value={formData.month}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="">Desired Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="cgpa"
            placeholder="CGPA *"
            value={formData.cgpa}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="file"
            name="cv"
            accept=".pdf"
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#3737ee', color: 'white', fontWeight: 'bold' }}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form> */}
      {/* {/* {isLoading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <div className="spinner" style={{
            width: '40px',
            height: '40px',
            border: '5px solid #ccc',
            borderTop: '5px solid #3737ee',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </div>
        
      )}
      {submissionStatus && <p>{submissionStatus}</p>} */}
    </div>
  ); 
}

export default CareersForm;
