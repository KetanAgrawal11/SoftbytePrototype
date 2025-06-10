'use client';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();

    // Define dynamic styles based on the theme
    const footerBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-secondary)';
    const footerBorder = theme === 'dark' ? 'var(--gray-800)' : 'var(--border-color)';
    const logoTextColor = 'var(--text-primary)';
    const paragraphColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // --- NEW: Social icons dynamic classes (using hover:) ---
    const socialIconClasses = theme === 'dark'
        ? 'bg-[var(--gray-800)] hover:bg-[var(--primary-color)] text-[var(--gray-400)] hover:text-white'
        : 'bg-[var(--background-tertiary)] hover:bg-[var(--primary-color)] text-[var(--text-secondary)] hover:text-white'; // Light theme: bg tertiary, hover primary, text secondary, hover white

    // Heading colors (Services, Industries, Company)
    const headingTextColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';

    // --- NEW: List link dynamic classes (using hover:) ---
    const listLinkClasses = theme === 'dark'
        ? 'text-[var(--gray-400)] hover:text-white'
        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'; // Light theme: default text-secondary, hover text-primary

    // Copyright text
    const copyrightColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    return (
        <footer
            className="transition-colors duration-300"
            style={{
                backgroundColor: footerBg,
                borderTop: `1px solid ${footerBorder}`
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        {/* Logo */}
                        <div className="flex items-center space-x-2 mb-6 italic">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))',
                                }}
                            >
                                <span className="text-lg font-bold text-white">SB</span>
                            </div>
                            <span
                                className="text-xl font-bold transition-colors duration-300"
                                style={{ color: logoTextColor }}
                            >
                                Softbyte
                            </span>
                        </div>
                        <p
                            className="mb-6 transition-colors duration-300"
                            style={{ color: paragraphColor }}
                        >
                            Empowering businesses with cutting-edge software and hardware solutions for the digital age.
                        </p>
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#" // Replace with actual social links
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md ${socialIconClasses}`} // Applied dynamic socialIconClasses
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3
                            className="text-lg font-semibold mb-6 transition-colors duration-300"
                            style={{ color: headingTextColor }}
                        >
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Software Development</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Infrastructure Solutions</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Cloud Migration</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Cybersecurity</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>System Integration</Link></li>
                        </ul>
                    </div>

                    {/* Industries Column */}
                    <div>
                        <h3
                            className="text-lg font-semibold mb-6 transition-colors duration-300"
                            style={{ color: headingTextColor }}
                        >
                            Industries
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>BFSI</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Manufacturing</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Healthcare</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Education</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Retail & E-commerce</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3
                            className="text-lg font-semibold mb-6 transition-colors duration-300"
                            style={{ color: headingTextColor }}
                        >
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>About Us</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Careers</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Blog</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Case Studies</Link></li>
                            <li><Link href="#" className={`transition-colors duration-300 ${listLinkClasses}`}>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and Policy Links */}
                <div
                    className="pt-8 transition-colors duration-300"
                    style={{ borderTop: `1px solid ${footerBorder}` }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div
                            className="text-sm transition-colors duration-300"
                            style={{ color: copyrightColor }}
                        >
                            © {currentYear} Softbyte. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <Link href="#" className={`text-sm transition-colors duration-300 ${listLinkClasses}`}>Privacy Policy</Link>
                            <Link href="#" className={`text-sm transition-colors duration-300 ${listLinkClasses}`}>Terms of Service</Link>
                            <Link href="#" className={`text-sm transition-colors duration-300 ${listLinkClasses}`}>Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}