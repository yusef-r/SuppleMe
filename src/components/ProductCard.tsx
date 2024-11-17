'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';
import { Plus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export interface Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/shop/${product.handle}`}>
        <div className="relative pb-[100%] rounded-t-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/shop/${product.handle}`} className="hover:text-emerald-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{formatCurrency(parseFloat(product.price))}</p>
        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
        >
          <Plus className="inline mr-2 w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
} 