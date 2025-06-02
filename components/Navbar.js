'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Your actual nav items with mixed full page paths and hash paths
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated isActive logic: No link is active when on the root page.
  const isActive = (href) => {
    // If the current pathname is the root '/', no link should be active.
    if (pathname === '/') {
      return false;
    }

    // For other pages, apply the existing logic for direct page links.
    // Hash links will inherently not be active on non-root pages
    // because window.location.hash would not match the href if the page changes.
    const isHashLink = href.startsWith('#');
    if (isHashLink) {
      // If it's a hash link, it should only be active if on the homepage AND hash matches.
      // But since we return false for homepage above, hash links will never be active here.
      return false;
    } else {
      // For full page routes, active if current path matches exactly or is a child path
      // (e.g., /about is active for /about, /industries is active for /industries/bfsi)
      return pathname.startsWith(href);
    }
  };

  const linkBaseClasses =
    "relative transition-colors duration-300 text-[var(--gray-300)] hover:text-[var(--white)]";
  const underlineClasses = `
    before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-0.5
    before:bg-[var(--white)] before:transition-all before:duration-300 before:w-0
    hover:before:w-full
  `;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all pt-1 duration-300 ${scrolled ? 'backdrop-blur-md border-b' : ''
        }`}
      style={{
        backgroundColor: scrolled ? 'rgba(17, 24, 39, 0.9)' : 'transparent',
        borderColor: scrolled ? 'var(--gray-800)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 italic">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                }}
              >
                <span className="text-lg font-bold text-[var(--white)]">SB</span>
              </div>
              <span className="text-xl font-bold text-[var(--white)]"> Softbyte</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, href }) => {
              const isHashLink = href.startsWith('#');
              let finalHref = href;

              // If it's a hash link AND we are NOT on the homepage,
              // prepend '/' to ensure it navigates to homepage first, then scrolls.
              if (isHashLink && pathname !== '/') {
                finalHref = `/${href}`; // e.g., "/#services"
              }

              return (
                <Link
                  key={href}
                  href={finalHref}
                  passHref
                  legacyBehavior
                >
                  <a
                    className={`${linkBaseClasses} ${underlineClasses} ${isActive(href) ? 'text-[var(--white)] before:w-full' : ''}`}
                    onClick={() => {
                      // For hash links, if already on the homepage, handle smooth scroll manually
                      // to prevent full page reload that Link might cause for same-page hashes.
                      if (isHashLink && pathname === '/') {
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {label}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="group flex items-center space-x-3 px-4 py-2 rounded-xl text-md transition-all bg-[var(--blue-600)] hover:bg-[var(--blue-700)] text-[var(--white)] cursor-pointer duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            style={{ color: 'var(--white)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
                      md:hidden overflow-hidden transition-all duration-500 ease-in-out
                      ${isMenuOpen ? 'max-h-[500px] opacity-100 bg-blue-950' : 'max-h-0 opacity-0'}
                      border-t border-[var(--gray-800)]
                    `}
        >
          <div className="flex flex-col space-y-4 pt-4 px-2">
            {navItems.map(({ label, href }) => {
              const isHashLink = href.startsWith('#');
              let finalHref = href;

              if (isHashLink && pathname !== '/') {
                finalHref = `/${href}`;
              }

              return (
                <Link
                  key={href}
                  href={finalHref}
                  passHref
                  legacyBehavior
                >
                  <a
                    className={`${linkBaseClasses} ${underlineClasses} ${isActive(href) ? 'text-[var(--white)] before:w-full' : ''
                      }`}
                    onClick={() => {
                      setIsMenuOpen(false); // Close menu on link click
                      if (isHashLink && pathname === '/') {
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    {label}
                  </a>
                </Link>
              );
            })}
            <button className="px-4 py-2 text-md rounded-lg transition-all duration-300 bg-[var(--blue-600)] hover:bg-[var(--blue-700)] text-[var(--white)] text-left">
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
