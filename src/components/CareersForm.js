import React, { useState } from 'react';

function CareersForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    location: '',
    month: '',
    cgpa: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here, e.g., sending data to a server
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <p style={{ fontWeight: '600', color: 'Black', marginBottom: '20px' }}>
        We are enthused to bring onboard students who have chosen a career in law. The Firm offers significant opportunities for students to hone their legal skills. Students interested in exploring internship opportunities may send their CV by filling this form.
      </p>
      <form onSubmit={handleSubmit}>
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
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
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
            <option value="february">March</option>
            <option value="january">April</option>
            <option value="february">May</option>
            <option value="january">June</option>
            <option value="february">July</option>
            <option value="january">August</option>
            <option value="february">September</option>
            <option value="january">October</option>
            <option value="february">November</option>
            <option value="february">December</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            name="CGPA"
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default CareersForm;
