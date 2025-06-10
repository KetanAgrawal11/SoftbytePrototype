'use client';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function CompanyOverviewSection() { // Renamed component from AboutSection
    const { theme } = useTheme();

    const values = [
        { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Uncompromising quality in every solution" },
        { icon: <Shield className="w-6 h-6" />, title: "Security", desc: "Enterprise-grade security at every level" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", desc: "Cutting-edge technology solutions" },
        { icon: <Users className="w-6 h-6" />, title: "Partnership", desc: "Long-term client relationships" }
    ];

    // --- Dynamic Styles based on Theme ---
    const sectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)'; // Light background for light theme
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const paragraphColor1 = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)'; // First paragraph
    const paragraphColor2 = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-primary)'; // Second paragraph, slightly darker for light theme

    // "Softbyte" text gradient
    const softbyteGradient = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-400), var(--purple-500))' // Dark theme gradient
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))'; // Light theme: primary to darker primary

    // Value icons background and text
    const valueIconBg = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-500), var(--purple-600))' // Dark theme gradient
        : 'var(--primary-color)'; // Light theme: solid primary color
    const valueIconColor = 'var(--white)'; // Always white for contrast on gradient/primary background
    const valueTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const valueDescColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // Info card with stats
    const infoCardBg = theme === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'var(--card-background)'; // Semi-transparent for dark, solid for light
    const infoCardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    const infoStatLabelColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)'; // Labels
    const infoStatValueColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)'; // Numbers

    // Background decoration circles
    const decorationGradient1 = theme === 'dark'
        ? 'linear-gradient(to right, var(--blue-500), var(--purple-600))'
        : 'linear-gradient(to right, var(--primary-color-light), var(--primary-color))'; // Lighter/Subtler for light theme
    const decorationGradient2 = theme === 'dark'
        ? 'linear-gradient(to right, var(--purple-500), var(--blue-500))'
        : 'linear-gradient(to right, var(--primary-color), var(--primary-color-light))'; // Lighter/Subtler for light theme


    return (
        <section id="company-overview" className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                            About{' '}
                            <span style={{
                                backgroundImage: softbyteGradient, // Using backgroundImage for proper gradient
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                WebkitTextFillColor: 'transparent', // Ensure text color is transparent
                                display: 'inline-block' // Needed for background-clip: text to work
                            }}>Softbyte</span>
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed transition-colors duration-300" style={{ color: paragraphColor1 }}>
                            Founded in 1988, Softbyte has been at the forefront of enterprise technology transformation.
                            We combine deep industry expertise with cutting-edge technology to deliver solutions that drive business growth.
                        </p>
                        <p className="text-lg mb-8 leading-relaxed transition-colors duration-300" style={{ color: paragraphColor2 }}>
                            Our team of certified professionals brings together decades of experience across multiple industries,
                            ensuring that every solution is tailored to meet specific business requirements while maintaining
                            the highest standards of security and performance.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                                        background: valueIconBg, // Using background for gradient
                                        color: valueIconColor
                                    }}>
                                        {value.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1 transition-colors duration-300" style={{ color: valueTitleColor }}>{value.title}</h3>
                                        <p className="text-sm transition-colors duration-300" style={{ color: valueDescColor }}>{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 backdrop-blur-sm border rounded-2xl p-8 transition-colors duration-300" style={{
                            backgroundColor: infoCardBg,
                            borderColor: infoCardBorder
                        }}>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="transition-colors duration-300" style={{ color: infoStatLabelColor }}>Team Size</span>
                                    <span className="font-bold text-xl transition-colors duration-300" style={{ color: infoStatValueColor }}>50+ Experts</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="transition-colors duration-300" style={{ color: infoStatLabelColor }}>Global Presence</span>
                                    <span className="font-bold text-xl transition-colors duration-300" style={{ color: infoStatValueColor }}>15+ Countries</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="transition-colors duration-300" style={{ color: infoStatLabelColor }}>Client Retention</span>
                                    <span className="font-bold text-xl transition-colors duration-300" style={{ color: infoStatValueColor }}>98%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="transition-colors duration-300" style={{ color: infoStatLabelColor }}>Industry Experience</span>
                                    <span className="font-bold text-xl transition-colors duration-300" style={{ color: infoStatValueColor }}>30+ Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20" style={{
                            background: decorationGradient1 // Using background for gradient
                        }}></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20" style={{
                            background: decorationGradient2 // Using background for gradient
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
