'use client';
import { Building2, Cog, GraduationCap, ShoppingCart, Wrench, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function IndustriesSection() {
    const { theme } = useTheme();

    const industries = [
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "BFSI",
            description: "Banking, Financial Services & Insurance solutions with robust security and compliance frameworks.",
            features: ["Core Banking Systems", "Risk Management", "Regulatory Compliance"],
            slug: 'bfsi'
        },
        {
            icon: <Cog className="w-8 h-8" />,
            title: "Manufacturing",
            description: "Industrial automation, IoT integration, and smart manufacturing solutions for Industry 4.0.",
            features: ["Process Automation", "Quality Control", "Supply Chain Management"],
            slug: 'manufacturing'
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Education",
            description: "EdTech platforms, learning management systems, and digital transformation for educational institutions.",
            features: ["LMS Development", "Student Portals", "Online Assessment"],
            slug: 'education'
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Retail & E-commerce",
            description: "Omnichannel retail solutions, inventory management, and customer experience platforms.",
            features: ["E-commerce Platforms", "Inventory Systems", "Customer Analytics"],
            slug: 'retail-e-commerce'
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Engineering",
            description: "CAD/CAM solutions, project management tools, and engineering workflow optimization.",
            features: ["Design Software", "Project Management", "Workflow Optimization"],
            slug: 'engineering'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Healthcare",
            description: "Healthcare IT solutions, patient management systems, and telemedicine platforms.",
            features: ["EMR Systems", "Telemedicine", "Healthcare Analytics"],
            slug: 'healthcare'
        }
    ];

    // --- Dynamic Styles based on Theme ---
    const sectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const taglineColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // "Transform" text gradient
    const transformGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-400), var(--purple-500))'
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))';

    // Industry Card styles
    const cardBorderColor = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const cardBgClasses = theme === 'dark'
        ? 'bg-[rgba(31,41,55,0.5)] hover:bg-[var(--gray-800)]' // Dark theme: semi-transparent dark, hover darker
        : 'bg-[var(--card-background)] hover:bg-[var(--gray-700)'; // Light theme: white card, hover light gray

    // Icon container inside card
    const iconContainerBg = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-500), var(--purple-600))'
        : 'var(--primary-color)'; // Light theme: solid primary color
    const iconColor = 'var(--white)'; // Icon itself remains white for contrast

    // Card title and description
    const cardTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const cardDescriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // Features list items
    const featureTextColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)';
    const featureIconColor = theme === 'dark' ? 'var(--green-400)' : 'var(--green-500)'; // Green icon for light theme

    // Explore Solutions Button
    const buttonBgClasses = theme === 'dark'
        ? 'bg-[var(--blue-600)] hover:bg-[var(--blue-700)]' // Dark theme blue
        : 'bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)]'; // Light theme primary
    const buttonTextColor = 'var(--white)'; // Button text remains white


    return (
        <section id="industries" className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                        Tailored Industry {' '}
                        <span style={{
                            backgroundImage: transformGradient, // Use backgroundImage for gradient
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Solutions</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                        Delivering specialized solutions across diverse industries with deep domain expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={`group backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 ${cardBgClasses}`}
                            style={{
                                borderColor: cardBorderColor
                            }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300" style={{
                                    background: iconContainerBg, // Use background for gradient
                                    color: iconColor
                                }}>
                                    {industry.icon}
                                </div>
                                <h3 className="text-2xl font-bold transition-colors duration-300" style={{ color: cardTitleColor }}>{industry.title}</h3>
                            </div>

                            <p className="mb-6 leading-relaxed text-lg transition-colors duration-300" style={{ color: cardDescriptionColor }}>
                                {industry.description}
                            </p>

                            <ul className="space-y-2 mb-8">
                                {industry.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center space-x-2 text-sm transition-colors duration-300" style={{ color: featureTextColor }}>
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: featureIconColor }} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/Solutions/${industry.slug}`} passHref>
                                <button
                                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-all transform hover:-translate-y-2 // Added a more pronounced translate-y for bounce
                                    shadow-none group-hover:shadow-lg group-hover:shadow-[rgba(37,99,235,0.25)]
                                    ${buttonBgClasses}`}
                                    style={{ color: buttonTextColor }}
                                >
                                    Explore Solutions
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
