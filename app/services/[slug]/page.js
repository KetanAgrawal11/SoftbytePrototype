'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // For App Router
import Link from 'next/link';
import { CheckCircle, TrendingUp, Sparkles, LayoutGrid, Clock, Shield, Cloud, Zap, Leaf } from 'lucide-react'; // Added more icons for variety

// Import the services data
import servicesData from '@/data/servicesData.json'; // Assuming servicesData.json is in a 'data' folder

// Reusable Button component (copied for self-containment)
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
               bg-gradient-to-r from-[var(--blue-600)] to-[var(--purple-600)] hover:from-[var(--blue-700)] hover:to-[var(--purple-700)]
               text-[var(--white)] shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2
               focus:ring-offset-2 focus:ring-[var(--blue-500)] focus:ring-offset-[var(--gray-950)] ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Helper function to parse bolded text from **text** format (reused)
const renderFormattedText = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g); // Split by content wrapped in **
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-[var(--white)]">{part.substring(2, part.length - 2)}</strong>;
    }
    return part;
  });
};

const ServiceDetailPage = () => {
  const sectionRefs = useRef([]);
  const pathname = usePathname();
  const slug = pathname.split('/').pop(); // Extract slug from pathname

  // Find the service data based on the slug
  const service = servicesData.services.find(svc => svc.slug === slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-[var(--gray-950)] text-[var(--gray-100)] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--gray-950)] text-[var(--gray-100)] overflow-hidden">
      {/* Hero Banner for Service */}
      <section ref={addRef} className="relative py-24 md:py-36 text-center bg-[var(--gray-900)] overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${service.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-950)]/50 via-[var(--purple-950)]/50 to-[var(--gray-950)]/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--white)] leading-tight mb-6 animate-fade-in-up">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gray-300)] mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {service.overview}
          </p>
          <Button className="animate-fade-in-up" style={{ animationDelay: '400ms'}}>
            Get a Quote for {service.title}
          </Button>
        </div>
      </section>

      {/* Growth & Revenue Impact Section - Redesigned */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-950)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
            <span style={{
              background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              {service.growthRevenueImpact.heading}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://placehold.co/600x400/1f2937/d1d5db?text=Impact+Visual"
                alt="Growth Impact Visual"
                className="rounded-xl shadow-lg border border-[var(--gray-700)]"
              />
            </div>
            <ul className="space-y-6 animate-fade-in-up md:pl-8">
              {service.growthRevenueImpact.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 text-lg text-[var(--gray-400)] leading-relaxed" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--green-400)' }} />
                  <span>{renderFormattedText(point)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section - New */}
      {service.benefits && service.benefits.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-900)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">
              Key Benefits You&apos;ll Gain
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-[var(--gray-800)] p-6 rounded-xl shadow-xl border border-[var(--gray-700)] hover:border-[var(--blue-600)] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <Sparkles className="w-10 h-10 mb-4" style={{ color: 'var(--purple-500)' }} />
                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--gray-400)] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Features Section - Redesigned with different icon */}
      {service.keyFeatures && service.keyFeatures.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-950)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-[var(--gray-800)] p-6 rounded-xl shadow-xl border border-[var(--gray-700)] hover:border-[var(--blue-600)] transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <LayoutGrid className="w-10 h-10 mb-4" style={{ color: 'var(--blue-500)' }} />
                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process Section - New */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-900)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
              <span style={{
                background: 'linear-gradient(to right, var(--purple-500), var(--blue-400))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                Our Streamlined Process
              </span>
            </h2>
            <div className="relative flex flex-col items-center">
              {/* Vertical line for timeline effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--gray-700)] hidden md:block"></div>
              {service.processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center w-full max-w-3xl mb-12 animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="md:w-1/2 p-4 text-center md:text-left">
                    <div className={`bg-[var(--gray-800)] p-6 rounded-xl shadow-xl border border-[var(--gray-700)] transition-all duration-300 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'}`}>
                      <h3 className="text-2xl font-bold text-[var(--white)] mb-2">{step.title}</h3>
                      <p className="text-[var(--gray-400)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                    color: 'var(--white)'
                  }}>
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="md:w-1/2 p-4 hidden md:block"></div> {/* Spacer for alignment */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-gradient-to-br from-[var(--blue-950)] to-[var(--purple-950)] text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-8 leading-tight">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg md:text-xl text-[var(--gray-300)] mb-10">
            Let&apos;s discuss how our {service.title} expertise can drive your business forward.
          </p>
          <Button>Start Your Transformation</Button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
