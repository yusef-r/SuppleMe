"use client";

import React, { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

export default function CheckoutForm() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit_card',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for actual payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setOrderSuccess(true);
    clearCart();
  };

  if (orderSuccess) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Thank you for your purchase!</h2>
        <p>Your order has been successfully placed.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm w-full lg:w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add more payment methods as needed */}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-lg font-bold">{formatCurrency(totalPrice)}</span>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Processing...' : 'Complete Purchase'}
      </button>
    </form>
  );
} 