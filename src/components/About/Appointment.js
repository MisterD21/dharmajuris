import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Appointment() {
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [service, setService] = useState('');
  // const [formStatus, setFormStatus] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);

  //   const formData = {
  //     name,
  //     email,
  //     date: selectedDate.toISOString().split('T')[0],
  //     time: selectedTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
  //     service,
  //   };

  //   try {
  //     const response = await fetch('http://localhost:8082/api/appointments', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setFormStatus('Appointment created successfully');
  //       clearForm();
  //     } else {
  //       setFormStatus('Error creating appointment');
  //     }
  //   } catch (error) {
  //     setFormStatus(`Error: ${error.message}`);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // const clearForm = () => {
  //   setName('');
  //   setEmail('');
  //   setSelectedDate(null);
  //   setSelectedTime(null);
  //   setService('');
  // };

  // return (
  //   <>
  //     <div className="container-fluid py-5">
  //       <div className="container py-5">
  //         <div className="bg-appointment rounded">
  //           <div className="row h-100 align-items-center justify-content-center">
  //             <div className="col-lg-6 py-5">
  //               <div
  //                 className="rounded p-5 my-5"
  //                 style={{ background: 'rgba(55, 55, 63, 0.7)' }}
  //               >
  //                 <h1 className="text-center text-white mb-4">Get An Appointment</h1>
  //                 <form onSubmit={handleSubmit}>
  //                   <div className="form-group">
  //                     <input
  //                       type="text"
  //                       className="form-control border-0 p-4"
  //                       placeholder="Your Name"
  //                       value={name}
  //                       onChange={(e) => setName(e.target.value)}
  //                       required
  //                     />
  //                   </div>
  //                   <div className="form-group">
  //                     <input
  //                       type="email"
  //                       className="form-control border-0 p-4"
  //                       placeholder="Your Email"
  //                       value={email}
  //                       onChange={(e) => setEmail(e.target.value)}
  //                       required
  //                     />
  //                   </div>
  //                   <div className="form-row">
  //                     <div className="col-6">
  //                       <div className="form-group">
  //                         <DatePicker
  //                           className="form-control border-0 p-4"
  //                           placeholderText="Select Date"
  //                           selected={selectedDate}
  //                           onChange={(date) => setSelectedDate(date)}
  //                           dateFormat="yyyy-MM-dd"
  //                           minDate={new Date()}
  //                         />
  //                       </div>
  //                     </div>
  //                     <div className="col-6">
  //                       <div className="form-group">
  //                         <DatePicker
  //                           className="form-control border-0 p-4"
  //                           placeholderText="Select Time"
  //                           selected={selectedTime}
  //                           onChange={(time) => setSelectedTime(time)}
  //                           showTimeSelect
  //                           showTimeSelectOnly
  //                           timeIntervals={15}
  //                           timeCaption="Time"
  //                           dateFormat="h:mm aa"
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="form-group">
  //                     <select
  //                       className="custom-select border-0 px-4"
  //                       style={{ height: '47px' }}
  //                       value={service}
  //                       onChange={(e) => setService(e.target.value)}
  //                     >
  //                       <option value="">Select A Service</option>
  //                       <option value="Service 1">Service 1</option>
  //                       <option value="Service 2">Service 2</option>
  //                       <option value="Service 3">Service 3</option>
  //                     </select>
  //                   </div>
  //                   <div>
  //                     <button className="btn btn-primary btn-block border-0 py-3" type="submit" disabled={isSubmitting}>
  //                       {isSubmitting ? 'Submitting...' : 'Get An Appointment'}
  //                     </button>
  //                   </div>
  //                   {formStatus && <p>{formStatus}</p>}
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default Appointment;