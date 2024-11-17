"use client";

import React from 'react';
import Image from 'next/image';
import { formatCurrency } from '@/utils/formatCurrency';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="relative w-full lg:w-1/2 h-[500px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-2 text-gray-600">
            {product.rating ? product.rating.toFixed(1) : 'No rating'}
          </span>
        </div>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl font-semibold mb-6">
          {formatCurrency(parseFloat(product.price))}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
} 