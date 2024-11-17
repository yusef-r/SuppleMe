"use client";

import { useState, useEffect } from 'react';
import { shopify } from '@/utils/shopify';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  handle?: string;
}

export const useShopify = {
  fetchProducts: () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const productsData = await shopify.getProducts();
          setProducts(productsData.map((product: Product) => ({
            ...product,
            rating: Math.random() * (5 - 4) + 4, // Random rating for demo
          })));
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to fetch products'));
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    return { products, loading, error };
  },

  fetchProduct: (handle: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const products = await shopify.getProducts();
          const foundProduct = products.find((p: Product) => p.handle === handle);
          
          if (foundProduct) {
            setProduct({
              ...foundProduct,
              rating: Math.random() * (5 - 4) + 4, // Random rating for demo
            });
          } else {
            setError(new Error('Product not found'));
          }
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to fetch product'));
          setLoading(false);
        }
      };

      if (handle) {
        fetchProduct();
      }
    }, [handle]);

    return { product, loading, error };
  }
}; 