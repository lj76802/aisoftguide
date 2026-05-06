'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              AI
            </div>
            <span className="font-bold text-lg text-white">
              AiSoft<span className="text-violet-400">Guide</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              AI Tools
            </Link>
            <Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Tutorials
            </Link>
            <Link href="/compare" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Compare
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Blog
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/tools"
              className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Browse Tools
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 flex flex-col gap-3">
            <Link href="/tools" className="text-gray-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>AI Tools</Link>
            <Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Tutorials</Link>
            <Link href="/compare" className="text-gray-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Compare</Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </header>
  );
}
