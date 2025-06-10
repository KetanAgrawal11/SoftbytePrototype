'use client';
import { Award, Target, Shield, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function ExperienceSection() {
    const { theme } = useTheme();

    const stats = [
        { number: "30+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
        { number: "200+", label: "Projects Delivered", icon: <Target className="w-8 h-8" /> },
        { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-8 h-8" /> },
        { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> }
    ];

    // --- Dynamic Styles based on Theme ---
    const sectionBackground = theme === 'dark'
        ? 'linear-gradient(to top, var(--blue-950), var(--purple-950))' // Dark theme gradient
        : 'linear-gradient(to top, var(--primary-color-light), var(--primary-color))'; // Lighter, more subtle gradient for light theme

    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--white)'; // Heading remains white on gradient background
    const paragraphColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--white)'; // Slightly darker light gray for light theme

    // Stat Icon Container
    const iconContainerBg = theme === 'dark'
        ? 'bg-white/10 hover:bg-white/20' // Dark theme: semi-transparent white
        : 'bg-[var(--gray-800)] hover:bg-[var(--white)]'; // Light theme: semi-transparent primary color

    // Stat Icon Color
    const iconColor = theme === 'dark' ? 'var(--light-theme-accent-gradient-end)' : 'var(--primary-color)'; // Blue-400 for dark, primary for light

    // Stat Numbers and Labels
    const statNumberColor = theme === 'dark' ? 'var(--white)' : 'var(--white)'; // Numbers remain white on gradient
    const statLabelColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--white)'; // Labels remain light gray on gradient

    return (
        <section
            className="py-20 transition-all duration-300"
            style={{
                backgroundImage: sectionBackground // Use backgroundImage for gradients
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300"
                        style={{ color: headingColor }}
                    >
                        Proven Track Record
                    </h2>
                    <p
                        className="text-xl max-w-3xl mx-auto transition-colors duration-300"
                        style={{ color: paragraphColor }}
                    >
                        Over a decade of excellence in delivering enterprise-grade solutions
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div
                                className={`w-20 h-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200 ${iconContainerBg}`}
                            >
                                <div
                                    className="transition-colors duration-300"
                                    style={{ color: iconColor }}
                                >
                                    {stat.icon}
                                </div>
                            </div>

                            <div
                                className="text-4xl lg:text-5xl font-bold mb-2 transition-colors duration-300"
                                style={{ color: statNumberColor }}
                            >
                                {stat.number}
                            </div>
                            <div
                                className="font-medium transition-colors duration-300"
                                style={{ color: statLabelColor }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
