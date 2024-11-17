"use client";

import { Suspense } from 'react';
import ProductDetails from '@/components/ProductDetails';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useShopify } from '@/hooks/useShopify';

export default function ProductPage({ params }: { params: { productHandle: string } }) {
  const { product, loading, error } = useShopify.fetchProduct(params.productHandle);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error loading product details.</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          paths={[
            { name: 'Home', href: '/' },
            { name: 'Shop', href: '/shop' },
            { name: product.name, href: `/shop/${params.productHandle}` },
          ]}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <ProductDetails product={{
            ...product,
            handle: params.productHandle // Ensure handle is always defined
          }} />
        </Suspense>
      </div>
    </main>
  );
} 