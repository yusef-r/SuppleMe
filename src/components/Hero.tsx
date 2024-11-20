'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Leaf, Brain, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [featuredCollectionUrl, setFeaturedCollectionUrl] = useState('/');

  // Fetch Shopify collection or product URL
  useEffect(() => {
    const fetchFeaturedCollection = async () => {
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
                collectionByHandle(handle: "featured") {
                  id
                  title
                  handle
                }
              }
            `,
          }),
        });

        const data = await response.json();
        const collectionHandle = data.data.collectionByHandle?.handle || '';
        setFeaturedCollectionUrl(`/collections/${collectionHandle}`);
      } catch (error) {
        console.error('Error fetching featured collection:', error);
      }
    };

    fetchFeaturedCollection();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Evolving Wellness.
              <span className="text-emerald-400 block">Designed for You.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Supplements chosen to support the present—and elevate the future.
            </p>
            <Link 
              href="/shop"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-600 transition-all duration-300 transform hover:translate-x-1 flex items-center group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fadeIn [animation-delay:200ms]">
            {[
              {
                icon: Leaf,
                title: 'Natural Ingredients',
                description: "Sourced from nature's finest ingredients"
              },
              {
                icon: Brain,
                title: 'Cognitive Enhancement',
                description: 'Boost focus and mental clarity'
              },
              {
                icon: Shield,
                title: 'Quality Assured',
                description: 'Third-party tested for purity'
              },
              {
                icon: ArrowRight,
                title: 'Fast Results',
                description: 'See improvements in weeks'
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}