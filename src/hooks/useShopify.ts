"use client";

import { useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
}

const SHOPIFY_API_URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`;
const STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export const useShopify = {
  fetchCollections: () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchCollections = async () => {
        try {
          const response = await fetch(SHOPIFY_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
            },
            body: JSON.stringify({
              query: `{
                collections(first: 10) {
                  edges {
                    node {
                      id
                      title
                      handle
                    }
                  }
                }
              }`,
            }),
          });

          const data = await response.json();
          const collectionsData = data.data.collections.edges.map((edge: any) => ({
            id: edge.node.id,
            title: edge.node.title,
            handle: edge.node.handle,
          }));

          setCollections(collectionsData);
        } catch (err) {
          setError('Failed to load collections');
        } finally {
          setLoading(false);
        }
      };

      fetchCollections();
    }, []);

    return { collections, loading, error };
  },

  fetchProducts: () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch(SHOPIFY_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
            },
            body: JSON.stringify({
              query: `{
                products(first: 50) {
                  edges {
                    node {
                      id
                      title
                      handle
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
              }`,
            }),
          });

          const result = await response.json();
          const productsData = result.data.products.edges.map((edge: any) => ({
            id: edge.node.id,
            name: edge.node.title,
            handle: edge.node.handle,
            description: edge.node.description || 'No description available',
            price: edge.node.variants.edges[0]?.node.price.amount || '0.00',
            image: edge.node.images.edges[0]?.node.url || '/placeholder-image.png',
            rating: Math.random() * (5 - 4) + 4, // Placeholder rating
          }));

          setProducts(productsData);
        } catch (err) {
          setError('Failed to load products');
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }, []);

    return { products, loading, error };
  },

  fetchProduct: (handle: string) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const getProduct = async () => {
        try {
          const response = await fetch(SHOPIFY_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN || '',
            },
            body: JSON.stringify({
              query: `
                query($handle: String!) {
                  productByHandle(handle: $handle) {
                    id
                    title
                    handle
                    description
                    images(first: 5) {
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
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
              `,
              variables: { handle },
            }),
          });

          const data = await response.json();
          const productData = data.data.productByHandle;

          if (productData) {
            const formattedProduct: Product = {
              id: productData.id,
              name: productData.title,
              handle: productData.handle,
              description: productData.description || 'No description available',
              price: productData.variants.edges[0]?.node.price.amount || '0.00',
              image: productData.images.edges[0]?.node.url || '/placeholder-image.png',
              rating: Math.random() * (5 - 4) + 4, // Placeholder rating
            };

            setProduct(formattedProduct);
          } else {
            setError('Product not found');
          }
        } catch (err) {
          setError('Failed to load product');
        } finally {
          setLoading(false);
        }
      };

      if (handle) {
        getProduct();
      }
    }, [handle]);

    return { product, loading, error };
  },
}; 