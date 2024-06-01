import React, { useState } from 'react';

function SubscriptionComponent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setLoading(true); // Show spinner
    try {
      const response = await fetch('http://localhost:8082/subscriber/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        setMessage(`Error: ${response.statusText}`);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setMessage(data.message);
      setEmail(''); // Clear email field
    } catch (error) {
      console.error('Network error:', error);
      setMessage('Network error');
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <h4 className="font-weight-semi-bold text-primary mb-4">Subscribe to Updates</h4>
      <p>Stay informed with the latest updates from Yash Jain & Associates. By subscribing, you will receive regular updates on our services, insights, and events directly to your inbox.</p>
      <div style={{ width: '100%' }}>
        <div className="input-group" style={{ width: '100%' }}>
          <input
            type="text"
            className="form-control border-0"
            style={{ padding: '25px', width: '100%' }}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary px-4" onClick={handleSubscribe} disabled={loading}>
              {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Subscribe'}
            </button>
          </div>
        </div>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SubscriptionComponent;
