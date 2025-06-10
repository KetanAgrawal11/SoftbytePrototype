'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'; // For App Router
import Link from 'next/link';
import { CheckCircle, TrendingUp, Target, LayoutGrid, Clock, Shield, Cloud, Zap, Leaf } from 'lucide-react'; // Changed Sparkles to Target

// Import the CaseStudyCard component
import CaseStudyCard from '../../components/CaseStudyCard'; // Adjust path if necessary

// Import the industries data
import industriesData from '@/data/Data.json'; // Assuming Data.json is in a 'data' folder at root

// Import useTheme hook
import { useTheme } from '../../context/ThemeContext'; // Import useTheme

// Reusable Button component (now purely Tailwind for hover effects)
const Button = ({ children, className = '', ...props }) => {
    const { theme } = useTheme(); // Access theme inside Button component

    const buttonFrom = theme === 'dark' ? 'var(--blue-600)' : 'var(--primary-color)';
    const buttonTo = theme === 'dark' ? 'var(--purple-600)' : 'var(--purple-500)';
    const buttonTextColor = 'white'; // Remains white for contrast
    const buttonFocusRingColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color)';
    const buttonFocusRingOffsetColor = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';

    // Dynamic hover background classes
    const buttonHoverBgClass = theme === 'dark' ? 'from-[var(--blue-700)] to-[var(--purple-700)]' : 'from-[var(--primary-color-dark)] to-[var(--primary-color)]';

    return (
        <button
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
                       shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2
                       focus:ring-offset-2 bg-gradient-to-r ${buttonHoverBgClass} ${className} text-white`} // Integrated hover gradient
            style={{
                background: `linear-gradient(to right, ${buttonFrom}, ${buttonTo})`,
                '--tw-ring-color': buttonFocusRingColor,
                '--tw-ring-offset-color': buttonFocusRingOffsetColor,
            }}
            {...props}
        >
            {children}
        </button>
    );
};

// Helper function to parse bolded text from **text** format (now theme-aware)
const renderFormattedText = (text, strongTextColor) => {
    const parts = text.split(/(\*\*.*?\*\*)/g); // Split by content wrapped in **
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} style={{ color: strongTextColor }}>{part.substring(2, part.length - 2)}</strong>;
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

    // Access theme
    const { theme } = useTheme();

    // Define dynamic styles based on theme
    const pageBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';

    // Hero Section styles
    const heroSectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const heroOverlayFrom = theme === 'dark' ? 'var(--blue-950)' : 'var(--primary-color-dark)';
    const heroOverlayVia = theme === 'dark' ? 'var(--purple-950)' : 'var(--primary-color)';
    const heroOverlayTo = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';
    const heroTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const heroParagraphColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)';

    // Technology Impact Section styles
    const techImpactSectionBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';
    const techImpactHeadingGradientFrom = theme === 'dark' ? 'var(--blue-400)' : 'var(--primary-color)';
    const techImpactHeadingGradientTo = theme === 'dark' ? 'var(--purple-500)' : 'var(--primary-color-dark)';
    const techImpactImageBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const techImpactListItemColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';
    const techImpactIconColor = theme === 'dark' ? 'var(--green-400)' : 'var(--green-500)';
    const strongTextColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)'; // For bolded text in renderFormattedText

    // Benefits Section styles
    const benefitsSectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const benefitsHeadingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const benefitCardBg = theme === 'dark' ? 'var(--gray-700)' : 'var(--card-background)';
    const benefitCardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const benefitIconColor = theme === 'dark' ? 'var(--purple-500)' : 'var(--primary-color-dark)';
    const benefitTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const benefitDescriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';
    // Tailwind hover classes for benefits cards
    const benefitCardHoverBgClass = theme === 'dark' ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-100';
    const benefitCardHoverBorderBColorClass = theme === 'dark' ? 'group-hover:border-b-[var(--blue-500)]' : 'group-hover:border-b-[var(--primary-color)]';


    // Our Process Section styles
    const processSectionBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)';
    const processHeadingGradientFrom = theme === 'dark' ? 'var(--purple-500)' : 'var(--primary-color-dark)';
    const processHeadingGradientTo = theme === 'dark' ? 'var(--blue-400)' : 'var(--primary-color)';
    const processVerticalLineColor = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const processCardBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--card-background)';
    const processCardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const processStepIndicatorBg = theme === 'dark' ? 'var(--blue-950)' : 'var(--primary-color)';
    const processStepIndicatorBorder = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color-light)';
    const processStepNumberColor = 'var(--white)'; // Remains white
    const processCardTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const processCardDescriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';
    // Tailwind hover classes for process cards
    const processCardHoverBgClass = theme === 'dark' ? 'group-hover:bg-gray-700' : 'group-hover:bg-gray-100';


    // Final CTA Section styles
    const ctaSectionGradientFrom = theme === 'dark' ? 'var(--blue-950)' : 'var(--primary-color)';
    const ctaSectionGradientTo = theme === 'dark' ? 'var(--purple-950)' : 'var(--primary-color-dark)';
    const ctaHeadingColor = 'var(--white)'; // Remains white
    const ctaParagraphColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--gray-800)';


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
            <div className="min-h-screen flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: pageBg, color: heroTitleColor }}>
                <h1 className="text-4xl font-bold">Industry Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen overflow-hidden transition-colors duration-300" style={{ backgroundColor: pageBg }}>
            {/* Hero Banner for Industry */}
            <section ref={addRef} className="relative py-24 md:py-36 text-center overflow-hidden transition-colors duration-300" style={{ backgroundColor: heroSectionBg }}>
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${industry.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
                <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(to bottom right, ${heroOverlayFrom}/50, ${heroOverlayVia}/50, ${heroOverlayTo}/50)` }}></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up" style={{ color: heroTitleColor }}>
                        {industry.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 animate-fade-in-up" style={{ color: heroParagraphColor, animationDelay: '200ms' }}>
                        {industry.overview}
                    </p>
                    <Button className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        Contact for {industry.title} Solutions
                    </Button>
                </div>
            </section>

            {/* Technology Impact Section - Redesigned for visual appeal */}
            <section ref={addRef} className="py-20 px-6 md:px-12 transition-colors duration-300" style={{ backgroundColor: techImpactSectionBg }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
                        <span style={{
                            backgroundImage: `linear-gradient(to right, ${techImpactHeadingGradientFrom}, ${techImpactHeadingGradientTo})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {industry.techImpact.heading}
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <img
                                src={industry.techImpact.image || "https://placehold.co/600x400/1e293b/d1d5db?text=Tech+Impact+Visual"} // Use industry-specific image or fallback
                                alt="Technology Impact Visual"
                                className="rounded-xl shadow-lg border transition-colors duration-300"
                                style={{ borderColor: techImpactImageBorder }}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1e293b/d1d5db?text=Image+Load+Error"; }}
                            />
                        </div>
                        <ul className="space-y-6 animate-fade-in-up md:pl-8">
                            {industry.techImpact.points.map((point, index) => (
                                <li key={index} className="flex items-start space-x-3 text-lg leading-relaxed" style={{ color: techImpactListItemColor, animationDelay: `${index * 100 + 200}ms` }}>
                                    <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: techImpactIconColor }} />
                                    <span>{renderFormattedText(point, strongTextColor)}</span>
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

            {/* Benefits Section - NEW DESIGN (NO onMouseEnter/onMouseLeave) */}
            {industry.benefits && industry.benefits.length > 0 && (
                <section ref={addRef} className="py-20 px-6 md:px-12 transition-colors duration-300" style={{ backgroundColor: benefitsSectionBg }}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up" style={{ color: benefitsHeadingColor }}>
                            Key Advantages for Your {industry.title} Business
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {industry.benefits.map((benefit, index) => (
                                <div key={index}
                                    className={`group p-6 rounded-xl shadow-xl border border-b-4 border-transparent
                                               transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up
                                               ${benefitCardHoverBgClass} ${benefitCardHoverBorderBColorClass}`} // Using Tailwind classes
                                    style={{
                                        backgroundColor: benefitCardBg,
                                        borderColor: benefitCardBorder,
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <Target className="w-10 h-10 mb-4" style={{ color: benefitIconColor }} />
                                    <h3 className="text-xl font-bold mb-2" style={{ color: benefitTitleColor }}>{benefit.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: benefitDescriptionColor }}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Our Process Section - NEW DESIGN (NO onMouseEnter/onMouseLeave) */}
            {industry.processSteps && industry.processSteps.length > 0 && (
                <section ref={addRef} className="py-20 px-6 md:px-12 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: processSectionBg }}>
                    {/* Background pattern for uniqueness */}
                    <div className="absolute inset-0 z-0 opacity-10" style={{
                        backgroundImage: theme === 'dark' ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C9C9C' fill-opacity='0.1'%3E%3Cpath d='M30 15c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/%3E%3C/g%3E%3C/svg%3E")` : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23CFCFCF' fill-opacity='0.2'%3E%3Cpath d='M30 15c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0 6c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up">
                            <span style={{
                                backgroundImage: `linear-gradient(to right, ${processHeadingGradientFrom}, ${processHeadingGradientTo})`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Our Approach to {industry.title} Transformation
                            </span>
                        </h2>
                        <div className="relative flex flex-col items-center">
                            {/* Vertical line for timeline effect */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block" style={{ backgroundColor: processVerticalLineColor }}></div>
                            {industry.processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center w-full max-w-3xl mb-12 animate-fade-in-up ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="md:w-1/2 p-4 text-center md:text-left">
                                        <div
                                            className={`group p-6 rounded-xl shadow-xl border transition-all duration-300 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'}
                                                       ${processCardHoverBgClass}`} // Using Tailwind class
                                            style={{ backgroundColor: processCardBg, borderColor: processCardBorder }}
                                        >
                                            <h3 className="text-2xl font-bold mb-2" style={{ color: processCardTitleColor }}>{step.title}</h3>
                                            <p className="leading-relaxed" style={{ color: processCardDescriptionColor }}>{step.description}</p>
                                        </div>
                                    </div>
                                    {/* Process Step Indicator - NEW DESIGN */}
                                    <div className="relative z-10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 border" style={{
                                        backgroundColor: processStepIndicatorBg,
                                        color: processStepNumberColor,
                                        borderColor: processStepIndicatorBorder
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

            {/* Case Studies Section - Remains the same (CaseStudyCard component is now theme aware) */}
            {industry.caseStudies && industry.caseStudies.length > 0 && (
                <section ref={addRef} className="py-20 px-6 md:px-12 transition-colors duration-300" style={{ backgroundColor: benefitsSectionBg }}> {/* Using benefitsSectionBg for alternating background */}
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in-up" style={{ color: benefitsHeadingColor }}>
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

            {/* Final CTA Section - Now Theme-Aware */}
            <section ref={addRef} className="py-20 px-6 md:px-12 text-center animate-fade-in-up" style={{ background: `linear-gradient(to bottom right, ${ctaSectionGradientFrom}, ${ctaSectionGradientTo})` }}>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: ctaHeadingColor }}>
                        Ready to Transform Your {industry.title} Business?
                    </h2>
                    <p className="text-lg md:text-xl mb-10" style={{ color: ctaParagraphColor }}>
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
