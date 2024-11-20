'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Search, Menu, Leaf, ChevronDown } from 'lucide-react';

interface Collection {
  title: string;
  handle: string;
}

const collections: Collection[] = [
  { title: 'Shop', handle: 'shop' },
  { title: 'Bundles', handle: 'bundles' },
  { title: 'About', handle: 'about' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch cart count
  useEffect(() => {
    // implement fetching cart data from Shopify
    setCartCount(3); // Placeholder count, replace with Shopify cart API call
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className={`w-7 h-7 transition-all duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'} group-hover:scale-110 transform`} />
              <div className={`absolute inset-0 animate-ping rounded-full ${isScrolled ? 'bg-emerald-600' : 'bg-emerald-400'} opacity-20`} />
            </div>
            <span className={`text-xl font-bold transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>SuppleMe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {collections.map((collection) => (
              <Link
                key={collection.handle}
                href={`/collections/${collection.handle}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-gray-200 hover:text-white'
                }`}
              >
                {collection.title}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isScrolled ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
              <Search className="w-5 h-5" />
            </button>

            <Link href="/cart" className="relative group">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isScrolled ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
                <ShoppingCart className="w-5 h-5" />
                <span className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full transition-all duration-300 ${isScrolled ? 'bg-emerald-600' : 'bg-emerald-400'} text-white`}>
                  {cartCount}
                </span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            {collections.map((collection) => (
              <Link
                key={collection.handle}
                href={`/${collection.handle}`}
                className="block py-2 text-gray-600 hover:text-emerald-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {collection.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}