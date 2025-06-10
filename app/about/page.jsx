'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

// Import Lucide icons directly if needed, or remove comments if not used
// import { Lightbulb, ShieldCheck, Globe, Users, Award, Headset, History, Lock, Code, Cpu, CheckCircle } from 'lucide-react';

const AboutUs = () => {
    const sectionRefs = useRef([]);
    const { theme } = useTheme(); // Get the current theme

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
                threshold: 0.1, // Trigger when 10% of the element is visible
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

    // --- Dynamic Theme Variables ---
    const primaryBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';
    const secondaryBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const tertiaryBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--background-secondary)'; // Used for card backgrounds

    const primaryText = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const secondaryText = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)';
    const mutedText = theme === 'dark' ? 'var(--gray-300)' : 'var(--gray-300)'; // Often same for muted in both themes

    const borderColor = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const cardHoverBorderColor = theme === 'dark' ? 'var(--blue-600)' : 'var(--primary-color)'; // Example blue for hover

    const blueIconColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color-dark)';
    const purpleIconColor = theme === 'dark' ? 'var(--purple-500)' : 'var(--secondary-color)';
    const yellowIconColor = theme === 'dark' ? 'var(--yellow-500)' : 'var(--accent-color-1)'; // Example accent for light theme
    const greenIconColor = theme === 'dark' ? 'var(--green-500)' : 'var(--accent-color-2)'; // Example accent for light theme

    const buttonBgGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-600), var(--purple-600))'
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))';
    const buttonHoverBgGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-700), var(--purple-700))'
        : 'linear-gradient(to right, var(--primary-color-dark), var(--primary-color))';
    const focusRingColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color)';
    const focusRingOffsetColor = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';

    const heroBgGradientFrom = theme === 'light' ? '#F8F7F2' : 'rgb(2, 6, 23)'; // gray-950
    const heroBgGradientVia = theme === 'light' ? 'white' : 'rgb(2, 6, 23)';    // gray-950
    const heroBgGradientTo = theme === 'light' ? '#F0F7FF' : 'rgb(15, 23, 42)'; // slate-950

    const badgeBg = theme === 'light' ? 'bg-blue-50' : 'bg-blue-950';
    const badgeText = theme === 'light' ? 'text-blue-600' : 'text-blue-300';

    const mainHeadingText = theme === 'light' ? 'text-gray-900' : 'text-gray-50';

    const digitalTransformGradientFrom = theme === 'light' ? 'from-blue-600' : 'from-blue-500';
    const digitalTransformGradientTo = theme === 'light' ? 'to-cyan-500' : 'to-cyan-400';

    const subheadingText = theme === 'light' ? 'text-gray-600' : 'text-gray-400';

    const exploreButtonBg = theme === 'light' ? 'bg-gray-900' : 'bg-blue-700';
    const exploreButtonText = 'text-white'; // Remains white in both themes for contrast
    const exploreButtonHoverBg = theme === 'light' ? 'hover:bg-gray-800' : 'hover:bg-blue-600';

    const contactButtonBorder = theme === 'light' ? 'border-gray-300' : 'border-blue-700';
    const contactButtonText = theme === 'light' ? 'text-gray-700' : 'text-blue-300';
    const contactButtonHoverBorder = theme === 'light' ? 'hover:border-gray-400' : 'hover:border-blue-600';
    const contactButtonHoverBg = theme === 'light' ? 'hover:bg-white' : 'hover:bg-blue-900';

    const statsText = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
    const statsNumber = theme === 'light' ? 'text-blue-600' : 'text-blue-400';

    const decorativeCurveBg = theme === 'light' ? 'bg-white' : 'bg-slate-950';

    // --- Reusable Components (now theme-aware) ---
    const Button = ({ children, className = '', ...props }) => (
        <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
                       shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2
                       focus:ring-offset-2 ${className}`}
            style={{
                background: buttonBgGradient,
                color: 'var(--white)', // Text on button remains white for contrast
                '--tw-ring-color': focusRingColor,
                '--tw-ring-offset-color': focusRingOffsetColor,
            }}
            {...props}
        >
            {children}
        </button>
    );

    const ServiceCard = ({ title, description, icon }) => (
        <div
            className="p-8 rounded-xl shadow-xl border transition-all duration-300 transform hover:-translate-y-2"
            style={{
                backgroundColor: tertiaryBg,
                borderColor: borderColor,
                '--tw-border-color-hover': cardHoverBorderColor, // Use the dynamic variable for hover border
            }}
        >
            <div className="mb-4 text-4xl" style={{ color: blueIconColor }}>{icon}</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: primaryText }}>{title}</h3>
            <p className="leading-relaxed" style={{ color: mutedText }}>{description}</p>
        </div>
    );

    const ValueCard = ({ title, description, icon }) => {
        // iconColorVar is now always blueAccentColor
        const iconColorVar = blueIconColor;

        return (
            <div
                className="p-6 rounded-xl shadow-xl border transition-all duration-300 transform hover:-translate-y-2"
                style={{
                    backgroundColor: tertiaryBg,
                    borderColor: borderColor,
                    '--tw-hover-border-color': iconColorVar, // Hover border will also be blue
                }}
            >
                <div className="mb-4 text-4xl" style={{ color: iconColorVar }}>{icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: primaryText }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: mutedText }}>{description}</p>
            </div>
        );
    };

    const USP_Card = ({ title, description, icon, delay }) => (
        <div
            className="p-6 rounded-xl shadow-xl border transition-all duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{
                backgroundColor: tertiaryBg,
                borderColor: borderColor,
                '--tw-border-color-hover': purpleIconColor, // USP cards use purple for hover border
                animationDelay: `${delay}ms`
            }}
        >
            <div className="mb-4 text-4xl" style={{ color: purpleIconColor }}>{icon}</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: primaryText }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: mutedText }}>{description}</p>
        </div>
    );

    const OutlineButton = ({ children, className = '', ...props }) => (
        <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
                       transform hover:-translate-y-1 focus:outline-none focus:ring-2
                       focus:ring-offset-2 ${className}`}
            style={{
                backgroundColor: buttonOutlineBg,
                color: buttonOutlineText,
                border: `1px solid ${buttonOutlineBorder}`,
                '--tw-ring-color': focusRingColor,
                '--tw-ring-offset-color': focusRingOffsetColor,
            }}
            {...props}
        >
            {children}
        </button>
    );

    return (
        <div className="min-h-screen overflow-hidden transition-colors duration-300" style={{ backgroundColor: primaryBg, color: primaryText }}>
            {/* Hero Banner */}
            <div className={`relative overflow-hidden bg-gradient-to-br py-8`}
                 style={{
                     background: `linear-gradient(to bottom right, ${heroBgGradientFrom}, ${heroBgGradientVia}, ${heroBgGradientTo})`
                 }}>
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/assets/patterns/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />

                <div className="relative max-w-screen-xl mx-auto px-6 pt-28 pb-10 z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Top Badge */}
                        <div className={`inline-block mb-4 px-5 py-1.5 rounded-full ${badgeBg} ${badgeText} text-sm font-medium tracking-wide`}>
                            Empowering Enterprise Through Technology
                        </div>

                        {/* Main Heading */}
                        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6 ${mainHeadingText}`}>
                            Reliable IT Services for{" "}
                            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${digitalTransformGradientFrom} ${digitalTransformGradientTo}`}>
                                Digital Transformation
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${subheadingText}`}>
                            With 35+ years of global expertise, we deliver secure, scalable, and business-focused software solutions in over 20 countries.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Link href="/solutions">
                                <button className={`px-8 py-3 rounded-lg transition-all duration-200 transform
                                                   hover:-translate-y-0.5 hover:shadow-lg
                                                   ${exploreButtonBg} ${exploreButtonText} ${exploreButtonHoverBg}`}>
                                    Explore Solutions
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className={`px-8 py-3 rounded-lg transition-all duration-200 transform
                                                   hover:-translate-y-0.5 hover:shadow-md
                                                   border ${contactButtonBorder} ${contactButtonText}
                                                   ${contactButtonHoverBorder} ${contactButtonHoverBg}`}>
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                        {/* Feature Highlights */}
                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base ${statsText}`}>
                            <div className="flex flex-col items-center text-center">
                                <span className={`font-semibold text-lg ${statsNumber}`}>35+ Years</span>
                                <span>Industry Expertise</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className={`font-semibold text-lg ${statsNumber}`}>20+ Countries</span>
                                <span>Global Presence</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className={`font-semibold text-lg ${statsNumber}`}>24/7</span>
                                <span>Technical Support</span>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <span className={`font-semibold text-lg ${statsNumber}`}>Enterprise Grade</span>
                                <span>Security & Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Vision & Mission */}
            <section ref={addRef} className="py-20 px-6 md:px-12" style={{ backgroundColor: primaryBg }}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>Our Vision</h2>
                        <p className="leading-relaxed text-lg" style={{ color: mutedText }}>
                            To be the global leader in enterprise technology, recognized for our relentless pursuit of innovation and our commitment to transforming businesses through intelligent software and resilient hardware. We envision a world where technology seamlessly integrates with human potential, driving unprecedented growth and efficiency.
                        </p>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h2 className="text-4xl font-bold mb-6" style={{ color: primaryText }}>Our Mission</h2>
                        <p className="leading-relaxed text-lg" style={{ color: mutedText }}>
                            SoftByte is dedicated to crafting bespoke, scalable, and secure enterprise software and hardware solutions that address the unique challenges of modern businesses. We achieve this by fostering a culture of excellence, leveraging cutting-edge technologies, and building lasting partnerships with our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do – Services Section */}
            <section ref={addRef} className="py-20 px-6 md:px-12" style={{ backgroundColor: secondaryBg }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up" style={{ color: primaryText }}>What We Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Software Services"
                            description="From custom application development and cloud solutions to data analytics and AI integration, we build intelligent software that streamlines operations and drives digital transformation."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            }
                        />
                        <ServiceCard
                            title="Hardware Solutions"
                            description="We design, deploy, and maintain robust hardware infrastructures, including network architecture, server solutions, IoT devices, and specialized computing systems, ensuring peak performance and reliability."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu">
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <rect x="9" y="9" width="6" height="6" rx="1" />
                                    <path d="M15 2v2" />
                                    <path d="M15 20v2" />
                                    <path d="M2 15h2" />
                                    <path d="M20 15h2" />
                                    <path d="M15 4h2" />
                                    <path d="M15 20h2" />
                                    <path d="M4 9v2" />
                                    <path d="M20 9v2" />
                                    <path d="M4 13v2" />
                                    <path d="M20 13v2" />
                                    <path d="M9 2v2" />
                                    <path d="M9 20v2" />
                                    <path d="M2 9h2" />
                                    <path d="M20 9h2" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section ref={addRef} className="py-20 px-6 md:px-12" style={{ backgroundColor: primaryBg }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up" style={{ color: primaryText }}>Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            title="Innovation"
                            description="We constantly push the boundaries of technology, embracing new ideas and methodologies to deliver groundbreaking solutions."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.7 1.3 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                    <path d="M11 17v5" />
                                </svg>
                            }
                            colorKey="blue"
                        />
                        <ValueCard
                            title="Integrity"
                            description="We operate with honesty, transparency, and ethical conduct, building trust with our clients, partners, and employees."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            }
                            colorKey="purple"
                        />
                        <ValueCard
                            title="Excellence"
                            description="We are committed to delivering the highest quality in every aspect of our work, striving for perfection in our solutions and services."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                                </svg>
                            }
                            colorKey="yellow"
                        />
                        <ValueCard
                            title="Customer-Centricity"
                            description="Our clients are at the heart of everything we do. We prioritize their needs, ensuring their success is our ultimate goal."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            }
                            colorKey="green"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us (USPs) */}
            <section ref={addRef} className="py-20 px-6 md:px-12" style={{ backgroundColor: secondaryBg }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up" style={{ color: primaryText }}>Why Choose SoftByte?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <USP_Card
                            title="ISO Certified"
                            description="Adhering to the highest international standards for quality management and information security."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            }
                            delay={0}
                        />
                        <USP_Card
                            title="24/7 Global Support"
                            description="Our dedicated support team is available around the clock, ensuring your operations run smoothly, wherever you are."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset">
                                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7A7 7 0 0 1 10 7h4a7 7 0 0 1 7 7v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                                </svg>
                            }
                            delay={100}
                        />
                        <USP_Card
                            title="30+ Years Experience"
                            description="Leverage decades of industry expertise and a proven track record of delivering successful enterprise solutions."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history">
                                    <path d="M12 8v4l3 3" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            }
                            delay={200}
                        />
                        <USP_Card
                            title="Secure & Scalable"
                            description="Built with robust security protocols and designed for seamless scalability to grow with your business needs."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            }
                            delay={300}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={addRef} className="py-20 px-6 md:px-12 text-center animate-fade-in-up bg-linear-to-br from-[var(--light-theme-accent-gradient-end)] to-[var(--purple-950)]"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        style={{ color: 'var(--white)' }} // Keep this white on dark CTA background or adjust
                    >
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg md:text-xl mb-10"
                        style={{ color: 'var(--dark-white)' }} // Keep secondary text on dark CTA background
                    >
                        Partner with SoftByte and unlock the full potential of your enterprise with our innovative software and hardware solutions.
                    </p>
                    <Button>Contact Our Experts</Button>
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

export default AboutUs;