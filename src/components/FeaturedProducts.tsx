'use client';

import { useEffect, useState } from 'react';
import { Star, Plus } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Shopify Storefront API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2023-04/graphql.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string,
          },
          body: JSON.stringify({
            query: `
              {
                products(first: 3) {
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
            `,
          }),
        });

        const data = await response.json();

        // Map Shopify data to match your existing structure
        const productsData = data.data.products.edges.map((edge: any) => ({
          id: edge.node.id,
          name: edge.node.title,
          description: edge.node.description || 'No description available',
          price: edge.node.variants.edges[0]?.node.price.amount || '0.00',
          rating: Math.random() * (5 - 4) + 4, // Random rating for demo purposes
          image: edge.node.images.edges[0]?.node.url || '',
        }));

        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Your Next Steps</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Feel balanced. Think clear. Find the right supplements to elevate your wellness journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative pb-[100%] rounded-t-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${product.price}
                  </span>
                  <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group-hover:bg-emerald-600">
                  <Plus className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-180" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}