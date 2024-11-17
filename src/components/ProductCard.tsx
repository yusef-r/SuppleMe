'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';
import { Plus, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export interface Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
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
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-scaleIn">
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
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">
            <Link href={`/shop/${product.handle}`} className="hover:text-emerald-600 transition-colors">
              {product.name}
            </Link>
          </h3>
          <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating ? product.rating.toFixed(1) : '4.5'}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-emerald-600">
            {formatCurrency(parseFloat(product.price))}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-emerald-600"
        >
          <Plus className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-180" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}