"use client";

import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  paths: Breadcrumb[];
}

export default function Breadcrumbs({ paths }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path, index) => (
          <li key={path.href}>
            <div className="flex items-center">
              {index !== 0 && (
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <Link
                href={path.href}
                className={`ml-1 text-sm font-medium ${
                  index === paths.length - 1 ? 'text-gray-500' : 'text-emerald-600 hover:text-emerald-800'
                }`}
              >
                {path.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
} 