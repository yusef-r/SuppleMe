"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';

export default function CartSummary() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{formatCurrency(parseFloat(item.price))}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-2 border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <span className="text-xl font-bold">{formatCurrency(totalPrice)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-4 block bg-emerald-500 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-emerald-600 transition"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
} 