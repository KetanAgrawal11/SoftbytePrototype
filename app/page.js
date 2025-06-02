'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CompanyMarquee from '@/components/CompanyMarquee';
import IndustriesSection from '@/components/IndustriesSection';
import ExperienceSection from '@/components/ExperienceSection';
import CoreFeaturesSection from '@/components/CoreServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';

// Main App Component
export default function App () {
    return (
        <div className="min-h-screen bg-[var(--gray-900)] font-main">
            <HeroSection />
            <CompanyMarquee />
            <CoreFeaturesSection />
            <IndustriesSection />
            <ExperienceSection />
            <AboutSection />
            <CTASection />
            <TestimonialsSection />
            <ContactForm />
        </div>
    );
};
