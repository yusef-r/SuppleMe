"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { useShopify } from '@/hooks/useShopify';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Shop() {
  const { products, loading, error } = useShopify.fetchProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs paths={[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }]} />
        <h1 className="text-4xl font-bold mb-6">Shop All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
} 