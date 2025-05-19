'use client'

import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess('');
  setLoading(true);
  setMessage('Submitting your order...');

  if (!name.trim()) {
    setError('Please enter your name.');
    return;
  }

  if (!quantity || isNaN(quantity) || quantity < 1) {
    setError('Please enter a valid quantity.');
    return;
  }

  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, quantity: parseInt(quantity) }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Something went wrong.');
    }

    setSuccess('Your order was submitted successfully!');
    setName('');
    setQuantity(1);
  } catch (err) {
    console.error(err);
    setError('Failed to submit order. Please try again.');
  }
  setLoading(false);
  setMessage(''); // Clear the message after submission
  setTimeout(() => {
    setMessage(''); // Clear the message after 3 seconds
  }, 3000);
};


  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50 p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center text-rose-700">Sillito Sourdough</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              className="w-full mt-1 p-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">How many loaves?</label>
            <input
              type="number"
              min="1"
              className="w-full mt-1 p-2 border rounded-md"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-md font-medium"
          >
            Place Order ($12 per loaf)
          </button>
          {error && (
            <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
          )}

          {success && (
            <p style={{ color: 'green', marginTop: '1rem' }}>{success}</p>
          )}
        </form>
        {message && <p className="text-green-600 text-center">{message}</p>}
      </div>
    </main>
  )
}
// This is a simple order form for a bakery. It allows users to enter their name and the quantity of loaves they want to order.