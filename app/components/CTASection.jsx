'use client';
import { ArrowRight, Phone } from "lucide-react";
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function CTASection() {
    const { theme } = useTheme();

    // Define dynamic styles based on the current theme
    const sectionBackground = theme === 'dark'
        ? 'linear-gradient(to bottom right, #2563eb, #9333ea)' // Dark theme gradient
        : 'linear-gradient(to bottom right, var(--primary-color), var(--primary-color-dark))'; // Light theme primary gradient

    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--white)'; // Heading usually stays white on dark/gradient background
    const paragraphColor = theme === 'dark' ? 'var(--gray-100)' : 'var(--white)'; // Paragraph usually stays light on dark/gradient background

    // Primary Button classes
    const primaryButtonClasses = theme === 'dark'
        ? 'bg-white text-[#2563eb] ' // Dark theme: white bg, blue text, lighter gray hover
        : 'bg-white text-[var(--primary-color)] hover:bg-[var(--background-tertiary)]'; // Light theme: white bg, primary text, lighter bg hover

    // Secondary Button classes
    const secondaryButtonClasses = theme === 'dark'
        ? 'text-white bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)]'
        : 'text-white bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)]';
        // Keeping secondary button somewhat consistent with transparent white overlay for effect on gradients

    // Stats text colors
    const statsNumberColor = theme === 'dark' ? 'var(--white)' : 'var(--white)'; // Numbers stay white
    const statsLabelColor = theme === 'dark' ? 'var(--gray-200)' : 'var(--white)'; // Labels stay light gray


    return (
        <section
            className="py-20 transition-all duration-300"
            style={{
                background: sectionBackground,
            }}
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <h2
                    className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300"
                    style={{ color: headingColor }}
                >
                    Ready to Transform Your Business?
                </h2>
                <p
                    className="text-xl mb-12 leading-relaxed transition-colors duration-300"
                    style={{ color: paragraphColor }}
                >
                    Join 500+ enterprises who trust Softbyte for their digital transformation journey.
                    Let&apos;s discuss how we can accelerate your growth.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    {/* Primary Button */}
                    <button
                        className={`group px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer
                           ${primaryButtonClasses}
                        `}
                    >
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    {/* Secondary Button */}
                    <button
                        className={`group flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer
                           ${secondaryButtonClasses}
                        `}
                    >
                        <Phone className="w-5 h-5" />
                        <span>Call Us Now</span>
                    </button>
                </div>

                {/* Stats Section */}
                <div className="mt-12 flex items-center justify-center space-x-8">
                    <div className="text-center">
                        <div
                            className="text-2xl font-bold transition-colors duration-300"
                            style={{ color: statsNumberColor }}
                        >
                            24/7
                        </div>
                        <div
                            className="text-sm transition-colors duration-300"
                            style={{ color: statsLabelColor }}
                        >
                            Support
                        </div>
                    </div>
                    <div className="text-center">
                        <div
                            className="text-2xl font-bold transition-colors duration-300"
                            style={{ color: statsNumberColor }}
                        >
                            99.9%
                        </div>
                        <div
                            className="text-sm transition-colors duration-300"
                            style={{ color: statsLabelColor }}
                        >
                            Uptime
                        </div>
                    </div>
                    <div className="text-center">
                        <div
                            className="text-2xl font-bold transition-colors duration-300"
                            style={{ color: statsNumberColor }}
                        >
                            ISO
                        </div>
                        <div
                            className="text-sm transition-colors duration-300"
                            style={{ color: statsLabelColor }}
                        >
                            Certified
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
