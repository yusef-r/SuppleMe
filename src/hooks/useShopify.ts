"use client";

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

export const useShopify = {
  fetchProducts: () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
            },
            body: JSON.stringify({
              query: `
                {
                  products(first: 20) {
                    edges {
                      node {
                        id
                        title
                        description
                        images(first: 1) {
                          edges {
                            node {
                              url
                            }
                          }
                        }
                        variants(first: 1) {
                          edges {
                            node {
                              price {
                                amount
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              `
            }),
          });

          const data = await response.json();
          
          const productsData = data.data.products.edges.map((edge: any) => ({
            id: edge.node.id,
            name: edge.node.title,
            description: edge.node.description || 'No description available',
            price: edge.node.variants.edges[0]?.node.price.amount || '0.00',
            rating: Math.random() * (5 - 4) + 4, // Random rating for demo
            image: edge.node.images.edges[0]?.node.url || '',
          }));

          setProducts(productsData);
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Failed to fetch products'));
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    return { products, loading, error };
  }
}; 