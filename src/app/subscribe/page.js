'use client';

import { useState } from 'react';

export default function SubscribePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('weekly');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!name || !email) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, plan }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to subscribe.');
      }

      setMessage('Subscribed successfully!');
      setName('');
      setEmail('');
      setPlan('weekly');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Subscribe to Sillito Sourdough</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <select value={plan} onChange={(e) => setPlan(e.target.value)}>
          <option value="weekly">1 loaf/week - $40/mo</option>
          <option value="monthly">4 loaves/month - $40/mo</option>
        </select><br />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
