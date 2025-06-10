'use client';
import { Lightbulb, Server, Shield, Cloud, Zap, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function CoreServicesSection() {
    const { theme } = useTheme();

    const services = [
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "AI & Machine Learning",
            description: "Leverage cutting-edge AI for intelligent automation, analytics, and personalized experiences.",
            link: "/services/ai-ml-development"
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "Infrastructure Solutions",
            description: "Scalable cloud and on-premise infrastructure designed for performance, security, and reliability.",
            link: "/services/it-infrastructure-solutions"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Cybersecurity Services",
            description: "Comprehensive security audits, penetration testing, and compliance management for enterprise protection.",
            link: "/services/cybersecurity"
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: "Cloud Migration",
            description: "Seamless transition to cloud platforms with minimal downtime and maximum efficiency gains.",
            link: "/services/cloud-migration"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "System Integration",
            description: "Connect disparate systems and applications for unified business operations and data flow.",
            link: "/services/system-integration"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Sustainable IT Solutions",
            description: "Implement eco-friendly IT practices to reduce your environmental footprint and operational costs.",
            link: "/services/sustainable-it"
        }
    ];

    // --- Dynamic Styles based on Theme (now using hardcoded hex values where gradients/specific colors were problematic) ---
    const sectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const taglineColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // Card specific styles
    const cardBgClasses = theme === 'dark'
        ? 'bg-[rgba(31,41,55,0.3)] hover:bg-[rgba(31,41,55,0.5)]' // Dark theme: Semi-transparent dark gray
        : 'bg-[var(--card-background)] hover:bg-white'; // Light theme: White card, light gray hover
    const cardBorderClasses = theme === 'dark'
        ? 'border-[var(--gray-700)] hover:border-[rgba(37,99,235,0.5)]' // Dark theme: Dark gray border, blue hover
        : 'border-[var(--border-color)] hover:border-[var(--primary-color)]'; // Light theme: Light border, primary color hover

    const cardTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const cardDescriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // Icon container background (now hardcoded hex values)
    const iconContainerBackground = theme === 'dark'
        ? 'linear-gradient(to right, #3b82f6, #9333ea)' // Dark theme: blue-500 to purple-600
        : '#007BFF'; // Light theme: primary-color (vibrant blue)
    const iconColor = 'white'; // Icon itself remains white for contrast

    // "Core Services" title gradient (now hardcoded hex values)
    const coreServicesGradient = theme === 'dark'
        ? 'linear-gradient(to right, #60a5fa, #a855f7)' // Dark theme: blue-400 to purple-500
        : 'linear-gradient(to right, #007BFF, #0056b3)'; // Light theme: primary-color to primary-color-dark

    // Learn More Link styles (now hardcoded hex values and using Tailwind hover classes)
    const learnMoreLinkClasses = theme === 'dark'
        ? 'text-[#3b82f6] hover:text-[#60a5fa]' // Dark theme: blue-500 to blue-400
        : 'text-[#007BFF] hover:text-[#0056b3]'; // Light theme: primary-color to primary-color-dark


    return (
        <section
            id="services"
            className="py-20 transition-colors duration-300"
            style={{ backgroundColor: sectionBg }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300"
                        style={{ color: headingColor }}
                    >
                        Core{' '}
                        <span style={{
                            backgroundImage: coreServicesGradient, // Changed 'background' to 'backgroundImage'
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Services</span>
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto transition-colors duration-300"
                        style={{ color: taglineColor }}
                    >
                        Comprehensive technology solutions designed to accelerate your business growth
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((feature, index) => (
                        <div
                            key={index}
                            className={`group border rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${cardBgClasses} ${cardBorderClasses}`}
                        >
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center md:mx-0 mb-6"
                                style={{
                                    background: iconContainerBackground,
                                    color: iconColor
                                }}
                            >
                                {feature.icon}
                            </div>
                            <h3
                                className="text-xl font-bold mb-4 transition-colors duration-300"
                                style={{ color: cardTitleColor }}
                            >
                                {feature.title}
                            </h3>
                            <p
                                className="leading-relaxed mb-6 transition-colors duration-300"
                                style={{ color: cardDescriptionColor }}
                            >
                                {feature.description}
                            </p>

                            {/* Learn More Link */}
                            {feature.link && (
                                <Link
                                    href={feature.link}
                                    className={`inline-flex items-center font-semibold transition-colors duration-300 ${learnMoreLinkClasses}`}
                                >
                                    <span>Learn More</span>
                                    <ArrowRight
                                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
