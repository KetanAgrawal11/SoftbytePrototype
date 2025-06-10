'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import {
    Lightbulb, Layers, Zap, Globe, Cloud, Fingerprint,
    RefreshCcw, LayoutDashboard, Search, Settings, Rocket, Handshake, CheckCircle,
    Building2, Cog, GraduationCap, ShoppingCart, Wrench, Heart
} from 'lucide-react';
import CTASection from '../components/CTASection';

// Define a simple, theme-aware Button component within this file
const CallToActionButton = ({ children, onClick, href }) => {
    const { theme } = useTheme();

    const buttonBg = theme === 'dark'
        ? 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))' // Dark theme gradient
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))'; // Light theme gradient, can be adjusted

    const buttonTextColor = 'var(--white)'; // White text for both themes against the gradient

    const buttonHoverBg = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-600), var(--purple-700))' // Darker gradient on hover
        : 'linear-gradient(to right, var(--primary-color-dark), var(--primary-color))'; // Darker gradient on hover

    const commonClasses = "px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl";

    if (href) {
        return (
            <Link href={href} passHref legacyBehavior>
                <a
                    className={commonClasses}
                    style={{
                        background: buttonBg,
                        color: buttonTextColor,
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverBg}
                    onMouseLeave={(e) => e.currentTarget.style.background = buttonBg}
                >
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={commonClasses}
            style={{
                background: buttonBg,
                color: buttonTextColor,
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverBg}
            onMouseLeave={(e) => e.currentTarget.style.background = buttonBg}
        >
            {children}
        </button>
    );
};


export default function SolutionsOverviewPage() {
    const { theme } = useTheme();

    // Core Solution Pillars with more detail
    const solutionPillars = [
        {
            icon: <RefreshCcw className="w-8 h-8" />,
            title: "Digital Transformation & Modernization",
            description: "Future-proofing your enterprise by overhauling legacy systems, integrating modern technologies, and optimizing processes for agility and efficiency.",
            benefits: [
                "Streamlined Operations",
                "Enhanced Customer Experiences",
                "Increased Business Agility"
            ],
            link: "/services/it"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Solutions & Infrastructure",
            description: "Leveraging the power of cloud computing for scalable, secure, and resilient IT infrastructure. From migration to managed services.",
            benefits: [
                "Cost Efficiency & Scalability",
                "Robust Data Security",
                "Global Accessibility"
            ],
            link: "/services/cloud"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "AI, Automation & Data Analytics",
            description: "Harnessing artificial intelligence, machine learning, and automation to derive actionable insights and automate complex workflows.",
            benefits: [
                "Predictive Insights",
                "Operational Automation",
                "Optimized Decision-Making"
            ],
            link: "/services/ai"
        },
        {
            icon: <Fingerprint className="w-8 h-8" />,
            title: "Cybersecurity & Risk Management",
            description: "Protecting your digital assets with advanced cybersecurity measures and proactive risk management strategies against evolving threats.",
            benefits: [
                "Comprehensive Threat Protection",
                "Regulatory Compliance",
                "Business Continuity"
            ],
            link: "/services/cybersecurity"
        },
        {
            icon: <LayoutDashboard className="w-8 h-8" />,
            title: "Enterprise Application Development",
            description: "Building robust, scalable, and intuitive enterprise applications that align with your specific business needs and drive innovation.",
            benefits: [
                "Tailored Functionality",
                "Enhanced Productivity",
                "Seamless Integration"
            ],
            link: "/services/custom-development"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "System Integration & Optimization",
            description: "Connecting disparate systems and applications to create a cohesive and efficient IT ecosystem, eliminating data silos.",
            benefits: [
                "Unified Data Flow",
                "Improved Collaboration",
                "Reduced Operational Overhead"
            ],
            link: "/services/infrastructure"
        }
    ];

    // Solutions Delivery Process Steps
    const deliveryProcess = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Discovery & Strategy",
            description: "Deep dive into your business needs, challenges, and goals to craft a tailored digital roadmap."
        },
        {
            icon: <LayoutDashboard className="w-8 h-8" />,
            title: "Design & Architecture",
            description: "Crafting robust, scalable, and secure solution blueprints that align with your strategic vision."
        },
        {
            icon: <Settings className="w-8 h-8" />,
            title: "Development & Implementation",
            description: "Agile development and meticulous implementation, ensuring high-quality, on-time delivery."
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Deployment & Integration",
            description: "Seamless rollout of solutions with minimal disruption, integrating smoothly with existing systems."
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Support & Optimization",
            description: "Ongoing maintenance, proactive support, and continuous optimization to ensure long-term success."
        }
    ];

    // Why Choose Softbyte differentiators
    const differentiators = [
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation-Driven",
            description: "Always at the forefront of technology, delivering future-proof solutions."
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Deep Domain Expertise",
            description: "Specialized knowledge across diverse industries for tailored solutions."
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Client-Centric Approach",
            description: "We partner with you every step of the way, focusing on your success."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Proven Results",
            description: "A track record of delivering tangible business growth and efficiency."
        }
    ];

    // Simplified list of industries for this page
    const industriesForSolutionsPage = [
        { icon: <Building2 className="w-6 h-6" />, title: "BFSI", slug: 'bfsi', description: "Revolutionizing banking, financial services, and insurance with secure and agile tech solutions." },
        { icon: <Cog className="w-6 h-6" />, title: "Manufacturing", slug: 'manufacturing', description: "Optimizing production, supply chain, and operations with smart factory and IoT solutions." },
        { icon: <GraduationCap className="w-6 h-6" />, title: "Education", slug: 'education', description: "Empowering learning with digital platforms, personalized education, and administrative efficiency." },
        { icon: <ShoppingCart className="w-6 h-6" />, title: "Retail & E-commerce", slug: 'retail-e-commerce', description: "Transforming customer experiences and sales with integrated online and offline strategies." },
        { icon: <Wrench className="w-6 h-6" />, title: "Engineering", slug: 'engineering', description: "Boosting design, development, and project management with advanced software and automation." },
        { icon: <Heart className="w-6 h-6" />, title: "Healthcare", slug: 'healthcare', description: "Innovating patient care, data management, and operational efficiency for a healthier future." }
    ];

    // Re-using dynamic styles for theme awareness
    const sectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const altSectionBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--card-background)';
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const taglineColor = theme === 'dark' ? 'var(--gray-200)' : 'black';

    const mainTitleGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-400), var(--purple-500))'
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))';

    const cardBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--card-background)';
    const cardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const cardTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const cardDescriptionColor = theme === 'dark' ? 'var(--gray-100)' : 'black';

    // Consolidated icon wrapper background for all sections (Pillars, Delivery Process, Differentiators)
    const iconWrapperBg = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-500), var(--purple-600))'
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))';
    const iconColor = 'var(--white)';

    const linkColor = theme === 'dark' ? 'var(--blue-400)' : 'var(--primary-color)';
    const linkHoverColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color-dark)';

    // Specific colors for benefits/features list
    const benefitCheckIconColor = theme === 'dark' ? 'var(--green-400)' : 'var(--green-500)';
    const benefitTextColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)';

    // New/Updated Styles for Core Solution Pillars Cards
    const pillarCardOverallClasses = `border border-2 border-gray-400 rounded-2xl p-4 flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-xl`;
    const pillarCardDynamicStyle = {
        backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: theme === 'dark' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
    };
    const pillarCardTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const pillarCardDescriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';


    return (
        <>
            {/* Main Solutions Overview Section */}
            <section id="solutions-overview" className="py-20 transition-colors duration-300 pt-28" style={{ backgroundColor: sectionBg }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 pt-16 pb-4">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                            Your Challenges, Our{' '}
                            <span style={{
                                backgroundImage: mainTitleGradient,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>Innovative Solutions</span>
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-12 transition-colors duration-300" style={{ color: taglineColor }}>
                            At Softbyte, we engineer comprehensive solutions that drive efficiency, foster innovation, and secure your future across every industry. We empower businesses to thrive in the digital era through strategic technology implementation and unwavering support.
                        </p>
                    </div>

                    {/* Core Solution Pillars Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 transition-colors duration-300" style={{ color: headingColor }}>
                            Our Core Solution Pillars
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutionPillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className={pillarCardOverallClasses}
                                    style={pillarCardDynamicStyle}
                                >
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{
                                        background: iconWrapperBg,
                                        color: iconColor
                                    }}>
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: pillarCardTitleColor }}>
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm mb-3 leading-relaxed transition-colors duration-300" style={{ color: pillarCardDescriptionColor }}>
                                        {pillar.description}
                                    </p>
                                    <ul className="space-y-1 mb-4">
                                        {pillar.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start space-x-2 text-xs transition-colors duration-300" style={{ color: benefitTextColor }}>
                                                <svg className="w-3 h-3 flex-shrink-0 mt-1" fill={benefitCheckIconColor} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions-by-industry-compact" className="py-20 transition-colors duration-300" style={{ backgroundColor: altSectionBg }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                            Tailored Solutions{' '}
                            <span style={{
                                backgroundImage: mainTitleGradient,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>for Your Sector</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                            Explore how Softbyte delivers impactful solutions customized for the unique demands of your industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industriesForSolutionsPage.map((industry, index) => (
                            <Link href={`/solutions/${industry.slug}`} key={index} passHref legacyBehavior>
                                <a className="block p-5 rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                                    style={{
                                        backgroundColor: cardBg,
                                        borderColor: cardBorder,
                                    }}>
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 flex-shrink-0 mr-3 rounded-full flex items-center justify-center" style={{
                                            background: iconWrapperBg,
                                            color: iconColor
                                        }}>
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold transition-colors duration-300" style={{ color: cardTitleColor }}>
                                            {industry.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm mb-3 leading-relaxed transition-colors duration-300" style={{ color: cardDescriptionColor }}>
                                        {industry.description}
                                    </p>
                                    <span className="inline-flex items-center text-md font-medium transition-transform duration-300 hover:translate-x-1" style={{ color: linkColor, ':hover': { color: linkHoverColor } }}>
                                        Learn More &rarr;
                                    </span>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Solutions Delivery Process Section */}
            <section id="delivery-process" className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                            Our Solutions{' '}
                            <span style={{
                                backgroundImage: mainTitleGradient,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>Delivery Process</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                            We follow a meticulously designed process to ensure every solution is delivered with precision, efficiency, and a focus on your long-term success.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                        {deliveryProcess.map((step, index) => (
                            <div key={index} className="p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: altSectionBg,
                                    borderColor: cardBorder
                                }}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                                    background: iconWrapperBg,
                                    color: iconColor
                                }}>
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 transition-colors duration-300" style={{ color: cardTitleColor }}>{step.title}</h3>
                                <p className="text-sm transition-colors duration-300" style={{ color: cardDescriptionColor }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Partner with Softbyte for Your Solutions? Section */}
            <section id="why-softbyte-solutions" className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                            Why Partner with Softbyte{' '}
                            <span style={{
                                backgroundImage: mainTitleGradient,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>for Your Solutions?</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                            Our commitment to excellence, deep industry understanding, and innovative approach set us apart as your ideal technology partner.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {differentiators.map((diff, index) => (
                            <div key={index} className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    backgroundColor: cardBg,
                                    borderColor: cardBorder
                                }}>
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{
                                    background: iconWrapperBg,
                                    color: iconColor
                                }}>
                                    {diff.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 transition-colors duration-300 text-center" style={{ color: cardTitleColor }}>{diff.title}</h3>
                                <p className="text-sm transition-colors duration-300 text-center" style={{ color: cardDescriptionColor }}>{diff.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection/>
        </>
    );
}