'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // For App Router
import Link from 'next/link';
import { CheckCircle, TrendingUp, Target, LayoutGrid, Clock, Shield, Cloud, Zap, Leaf } from 'lucide-react'; // Changed Sparkles to Target

// Import the CaseStudyCard component
import CaseStudyCard from '@/components/CaseStudyCard'; // Adjust path if necessary

// Import the industries data
import industriesData from '@/data/Data.json'; // Assuming Data.json is in a 'data' folder at root

// Reusable Button component (copied from previous context for self-containment)
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


const IndustryDetailPage = () => {
  const sectionRefs = useRef([]);
  const pathname = usePathname(); // For App Router: Get the current path
  const slug = pathname.split('/').pop(); // Extract slug from pathname

  // Find the industry data based on the slug
  const industry = industriesData.industries.find(ind => ind.slug === slug);

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

  if (!industry) {
    return (
      <div className="min-h-screen bg-[var(--gray-950)] text-[var(--gray-100)] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Industry Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--gray-950)] text-[var(--gray-100)] overflow-hidden">
      {/* Hero Banner for Industry */}
      <section ref={addRef} className="relative py-24 md:py-36 text-center bg-[var(--gray-900)] overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${industry.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-950)]/50 via-[var(--purple-950)]/50 to-[var(--gray-950)]/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--white)] leading-tight mb-6 animate-fade-in-up">
            {industry.title}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gray-300)] mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {industry.overview}
          </p>
          <Button className="animate-fade-in-up" style={{ animationDelay: '400ms'}}>
            Contact for {industry.title} Solutions
          </Button>
        </div>
      </section>

      {/* Technology Impact Section - Redesigned for visual appeal */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-950)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
            <span style={{
              background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              {industry.techImpact.heading}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://placehold.co/600x400/1e293b/d1d5db?text=Tech+Impact+Visual"
                alt="Technology Impact Visual"
                className="rounded-xl shadow-lg border border-[var(--gray-700)]"
              />
            </div>
            <ul className="space-y-6 animate-fade-in-up md:pl-8">
              {industry.techImpact.points.map((point, index) => (
                <li key={index} className="flex items-start space-x-3 text-lg text-[var(--gray-400)] leading-relaxed" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                  <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: 'var(--green-400)' }} />
                  <span>{renderFormattedText(point)}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* "See More Use Cases" Button - kept here */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: `${industry.techImpact.points.length * 100 + 200}ms` }}>
            <Link href={`/industries/${industry.slug}/use-cases`} passHref>
              <Button>See More Use Cases</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section - NEW DESIGN */}
      {industry.benefits && industry.benefits.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-900)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">
              Key Advantages for Your {industry.title} Business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {industry.benefits.map((benefit, index) => (
                <div key={index}
                     className={`bg-[var(--gray-700)] p-6 rounded-xl shadow-xl border border-[var(--gray-700)]
                                 hover:bg-[var(--gray-600)] border-b-4 border-transparent hover:border-[var(--blue-500)]
                                 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <Target className="w-10 h-10 mb-4" style={{ color: 'var(--purple-500)' }} /> {/* Changed icon */}
                  <h3 className="text-xl font-bold text-[var(--white)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--gray-400)] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process Section - NEW DESIGN */}
      {industry.processSteps && industry.processSteps.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-950)] relative overflow-hidden">
          {/* Background pattern for uniqueness */}
          <div className="absolute inset-0 z-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C9C9C' fill-opacity='0.1'%3E%3Cpath d='M30 15c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
              <span style={{
                background: 'linear-gradient(to right, var(--purple-500), var(--blue-400))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}>
                Our Approach to {industry.title} Transformation
              </span>
            </h2>
            <div className="relative flex flex-col items-center">
              {/* Vertical line for timeline effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--gray-700)] hidden md:block"></div>
              {industry.processSteps.map((step, index) => (
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
                  {/* Process Step Indicator - NEW DESIGN */}
                  <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border border-[var(--blue-500)]" style={{
                    backgroundColor: 'var(--blue-950)', // Solid background for number
                    color: 'var(--white)'
                  }}>
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  <div className="md:w-1/2 p-4 hidden md:block"></div> {/* Spacer for alignment */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section - Remains the same */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-900)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">
              Case Studies in {industry.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.caseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={index} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section - Remains the same */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-gradient-to-br from-[var(--blue-950)] to-[var(--purple-950)] text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-8 leading-tight">
            Ready to Transform Your {industry.title} Business?
          </h2>
          <p className="text-lg md:text-xl text-[var(--gray-300)] mb-10">
            Partner with SoftByte for cutting-edge solutions tailored to your industry&apos;s unique needs.
          </p>
          <Button>Get a Custom Consultation</Button>
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

export default IndustryDetailPage;
