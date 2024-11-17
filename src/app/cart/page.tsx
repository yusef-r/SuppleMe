'use client';

import React from 'react';
import CartSummary from '@/components/CartSummary';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Cart() {
  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          paths={[
            { name: 'Home', href: '/' },
            { name: 'Cart', href: '/cart' },
          ]}
        />
        <h1 className="text-4xl font-bold mb-6">Your Shopping Cart</h1>
        <CartSummary />
      </div>
    </main>
  );
} 