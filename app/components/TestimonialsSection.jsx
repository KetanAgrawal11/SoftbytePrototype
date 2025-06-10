'use client';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme
import React from 'react'; // React is implicitly imported by useState/useEffect in other files but good practice to explicitly import

export default function TestimonialsSection() {
    const { theme } = useTheme();

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, FinTech Corp",
            company: "FinTech Corp",
            content: "Softbyte transformed our entire infrastructure. Their expertise in financial services helped us achieve 99.99% uptime and enhanced security compliance.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "VP Engineering, ManufacturingPro",
            company: "ManufacturingPro",
            content: "The IoT integration and automation solutions provided by Softbyte increased our production efficiency by 40%. Outstanding technical expertise.",
            rating: 5
        },
        {
            name: "Dr. Emma Williams",
            role: "IT Director, HealthSystem Plus",
            company: "HealthSystem Plus",
            content: "Their healthcare IT solutions revolutionized our patient management system. The team's understanding of HIPAA compliance was exceptional.",
            rating: 5
        }
    ];

    // --- Dynamic Styles based on Theme ---
    const sectionBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--background-secondary)'; // Light background for light theme
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const taglineColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // "Clients Say" text gradient
    const clientsSayGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-400), var(--purple-500))' // Dark theme gradient
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))'; // Light theme: primary to darker primary

    // Testimonial Card
    const cardBorderColor = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const cardBgClasses = theme === 'dark'
        ? 'bg-[rgba(17,24,39,0.5)] hover:bg-[var(--gray-900)]' // Dark theme: semi-transparent dark, hover darker
        : 'bg-[var(--card-background)]'; // Light theme: card background, hover light gray

    // Star rating color
    const starColor = theme === 'dark' ? 'var(--yellow-400)' : '#FFBF00'; // Specific gold/yellow for light theme

    // Quote icon color
    const quoteIconColor = theme === 'dark' ? 'var(--blue-400)' : 'var(--primary-color)';

    // Testimonial content text color
    const contentTextColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)'; // Darker for light theme

    // Avatar initials background and text
    const avatarBackground = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-500), var(--purple-600))' // Dark theme gradient
        : 'var(--primary-color)'; // Light theme: solid primary color
    const avatarTextColor = 'var(--white)'; // Always white for contrast on gradient/primary background

    // Reviewer name and role colors
    const reviewerNameColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const reviewerRoleColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';


    return (
        <section className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                        What Our{' '}
                        <span style={{
                            backgroundImage: clientsSayGradient, // Changed 'background' to 'backgroundImage'
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Clients Say</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                        Trusted by industry leaders who value innovation and reliability
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${cardBgClasses}`}
                            style={{
                                borderColor: cardBorderColor
                            }}
                        >
                            <div className="flex items-center mb-4">
                                {/* Star Rating */}
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: starColor }} />
                                ))}
                            </div>

                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 mb-4 transition-colors duration-300" style={{ color: quoteIconColor }} />

                            {/* Testimonial Content */}
                            <p className="mb-6 leading-relaxed text-lg transition-colors duration-300" style={{ color: contentTextColor }}>
                                `{testimonial.content}`
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{
                                    background: avatarBackground,
                                    color: avatarTextColor
                                }}>
                                    {/* Initials */}
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    {/* Name */}
                                    <div className="font-semibold transition-colors duration-300" style={{ color: reviewerNameColor }}>{testimonial.name}</div>
                                    {/* Role */}
                                    <div className="text-sm transition-colors duration-300" style={{ color: reviewerRoleColor }}>{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
