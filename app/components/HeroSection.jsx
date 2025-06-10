'use client';

import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define gradient styles based on the theme
  const mainTextGradientStyle = theme === 'dark'
    ? {
        backgroundImage: 'linear-gradient(to right, #ffffff, #60a5fa)', // Changed 'background' to 'backgroundImage'
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }
    : {
        backgroundImage: 'linear-gradient(to right, #1a202c, #4a5568)', // Changed 'background' to 'backgroundImage'
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      };

  const accentTextGradientStyle = theme === 'dark'
    ? {
        backgroundImage: 'linear-gradient(to right, #3b82f6, #a855f7)', // Changed 'background' to 'backgroundImage'
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }
    : {
        backgroundImage: 'linear-gradient(to right, #002d6b, #007bff)', // Changed 'background' to 'backgroundImage'
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      };

  // Determine the background style for the section (this can still use CSS variables from globals.css)
  const heroBackgroundStyle = theme === 'dark'
    ? 'linear-gradient(to bottom right, var(--gray-950), var(--gray-900), var(--blue-950))'
    : 'var(--background-primary)';

  return (
    <section
      className="min-h-screen relative overflow-hidden pt-20 transition-colors duration-300"
      style={{
        background: heroBackgroundStyle,
        color: 'var(--text-primary)' // Default text color for the section
      }}
    >
      {/* Background Sphere Effects */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-30"
          style={{ backgroundColor: 'var(--primary-color)' }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--primary-color-dark)' }}
        ></div>
      </div>

      <div className="relative z-10 px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* "Trusted by 500+ Enterprise Clients" badge */}
            <div
              className="inline-flex items-center space-x-2 border rounded-full px-4 py-2 mb-8 transition-colors duration-300"
              style={{
                backgroundColor: `rgba(var(--primary-color-rgb), 0.1)`,
                borderColor: `rgba(var(--primary-color-rgb), 0.2)`,
              }}
            >
              <Star className="w-4 h-4" style={{ color: 'var(--primary-color)' }} />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Trusted by 500+ Enterprise Clients</span>
            </div>

            {/* Main Heading Text Gradient */}
            <h1
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span>Enterprise Software &</span><br />
              <span style={accentTextGradientStyle}>Hardware Solutions</span>
            </h1>

            {/* Sub-paragraph */}
            <p
              className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Empowering businesses with cutting-edge technology solutions.<br />
              From custom software development to enterprise infrastructure.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link href="/solutions" passHref>
                <button
                  className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2
                             text-white"
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    boxShadow: '0 4px 8px var(--shadow-color)',
                  }}
                >
                  <span>Explore our Solutions</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="#demo" passHref>
                <button
                  className="group flex items-center space-x-3 transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-300"
                    style={{
                      backgroundColor: `rgba(var(--text-primary-rgb), 0.1)`,
                    }}
                  >
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <span className="font-medium">Watch Demo</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}