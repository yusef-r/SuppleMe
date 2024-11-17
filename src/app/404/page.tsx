import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Custom404() {
  const pathname = usePathname();

  return (
    <main className="py-10 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <Breadcrumbs paths={[{ name: 'Home', href: '/' }]} />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page Not Found</p>
        <Link href="/" className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
          Go Back Home
        </Link>
      </div>
    </main>
  );
} 