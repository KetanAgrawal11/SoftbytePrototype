'use client';
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function CompanyMarquee() {
    const { theme } = useTheme();

    const companies = [
        "Microsoft", "Google", "Amazon", "IBM", "Oracle", "SAP", "Salesforce",
        "Adobe", "Cisco", "Intel", "Dell", "HP", "VMware", "ServiceNow"
    ];

    // Define dynamic styles based on the current theme
    const sectionBackground = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const trustedByColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)'; // Muted dark for light theme

    // Define Tailwind classes for company names based on theme and desired font size
    const companyNameClasses = theme === 'dark'
        ? 'text-gray-400 hover:text-white' // Dark theme: default gray-500, hover white
        : 'text-[var(--gray-300)] hover:text-[var(--primary-color)]'; // Light theme: default text-primary (dark charcoal), hover primary-color (vibrant blue)

    return (
        <section
            className="py-16 overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: sectionBackground }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p
                    className="text-center mb-12 text-lg md:text-xl font-medium transition-colors duration-300"
                    style={{ color: trustedByColor }}
                >
                    Trusted by industry leaders worldwide
                </p>

                <div className="relative">
                    <div className="flex animate-marquee space-x-16">
                        {/* Duplicate companies for seamless marquee effect */}
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                // Adjusted font size to md:text-4xl for larger impact, and applied theme-aware color classes
                                className={`flex-shrink-0 text-xl md:text-3xl font-bold transition-colors whitespace-nowrap ${companyNameClasses}`}
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0) }
                    100% { transform: translateX(-50%) }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
