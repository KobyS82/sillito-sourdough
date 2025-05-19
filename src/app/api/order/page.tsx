'use client'

import React from 'react';
import { useState } from 'react';

export default function OrderPage() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-pink-800 mb-4">Place Your Order</h1>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 shadow-md w-full max-w-md"
        >
          <label className="block mb-4">
            <span className="text-pink-700">Your Name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:ring-pink-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-pink-700">Quantity</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-pink-300 shadow-sm focus:ring-pink-500"
            />
          </label>
          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow-md w-full max-w-md text-center">
          <h2 className="text-pink-700 text-2xl mb-2">Thank you, {name}!</h2>
          <p className="text-pink-600">You’ve requested {quantity} loaf(s).</p>
        </div>
      )}
    </main>
  );
}
