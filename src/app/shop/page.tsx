"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { useShopify } from '@/hooks/useShopify';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Shop() {
  const { products, loading, error } = useShopify.fetchProducts();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading products.</p>
          <p className="text-sm mt-2">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs paths={[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop All Products</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Discover our complete collection of premium supplements designed to support your wellness journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}