'use client';

import React from 'react';
import CheckoutForm from '@/components/CheckoutForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import CartSummary from '@/components/CartSummary';
import { useCart } from '@/hooks/useCart';

export default function Checkout() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Checkout</h1>
          <p>Your cart is empty.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          paths={[
            { name: 'Home', href: '/' },
            { name: 'Cart', href: '/cart' },
            { name: 'Checkout', href: '/checkout' },
          ]}
        />
        <h1 className="text-4xl font-bold mb-6">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <CheckoutForm />
          <CartSummary />
        </div>
      </div>
    </main>
  );
} 