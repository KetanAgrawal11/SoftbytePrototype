'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Sun, Moon, ChevronDown, ChevronUp } from 'lucide-react'; // Added Chevron icons
import { useTheme } from '../context/ThemeContext'; // Assuming this context exists

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // activeSubmenu state is now PRIMARILY for mobile menu expansion.
    // Desktop hover will be handled by CSS group-hover.
    const [activeSubmenu, setActiveSubmenu] = useState(null); 
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { label: 'About', href: '/about' },
        {
            label: 'Solutions',
            href: '/solutions',
            submenu: [
                { name: 'BFSI', href: '/solutions/bfsi' },
                { name: 'Manufacturing', href: '/solutions/manufacturing' },
                { name: 'Engineering', href: '/solutions/engineering' },
                { name: 'Education', href: '/solutions/education' },
                { name: 'Healthcare', href: '/solutions/healthcare' },
                { name: 'Retail & E-commerce', href: '/solutions/retail-e-commerce  ' },
            ]
        },
        {
            label: 'Services',
            href: '/services',
            submenu: [
                { name: 'Renovation', href: '/services/renovation' },
                { name: 'Repair Services', href: '/services/repair' },
                { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
                { name: 'Cloud Services', href: '/services/cloud' },
                { name: 'Artificial Intelligence', href: '/services/ai' },
                { name: 'Consultation', href: '/services/consultation' },
            ]
        },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href) => {
        if (pathname === '/') {
            return false;
        }
        const isHashLink = href.startsWith('#');
        if (isHashLink) {
            return false;
        } else {
            return pathname.startsWith(href);
        }
    };

    const linkBaseClasses = `
        relative transition-colors duration-300
        ${theme === 'light' ? 'text-gray-950 hover:text-[var(--primary-color)]' : 'text-gray-100 hover:text-[var(--primary-color-light)]'}
    `;

    const underlineClasses = `
    before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-0.5
    before:bg-[var(--primary-color)] before:transition-all before:duration-300 before:w-0
    hover:before:w-full
    `;

    const getNavbarBackground = () => {
        if (scrolled) {
            return `rgba(var(--background-secondary-rgb), 0.9)`;
        } else {
            return 'transparent';
        }
    };

    const getNavbarBorderColor = () => {
        if (scrolled) {
            return 'var(--border-color)';
        } else {
            return 'transparent';
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all pt-1 duration-300 ${scrolled ? 'backdrop-blur-md border-b' : ''}`}
            style={{
                backgroundColor: getNavbarBackground(),
                borderColor: getNavbarBorderColor(),
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(to right, var(--primary-color), var(--blue-400))',
                                }}
                            >
                                <span className="text-lg font-bold text-white">SB</span>
                            </div>
                            <span className="italic text-xl font-bold text-[var(--text-primary)]"> Softbyte</span>
                        </Link>
                    </div>

                    {/* Desktop Nav - THIS IS THE MODIFIED SECTION */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const hasSubmenu = item.submenu && item.submenu.length > 0;
                            // `isSubmenuOpen` from activeSubmenu state is now only relevant for mobile.
                            // We are removing its direct control over desktop visibility here.
                            // const isSubmenuOpen = activeSubmenu === item.label; // <-- NOT USED FOR DESKTOP VISIBILITY NOW

                            // Handle hash links for non-homepage paths
                            let finalHref = item.href;
                            const isHashLink = item.href.startsWith('#');
                            if (isHashLink && pathname !== '/') {
                                finalHref = `/${item.href}`;
                            }

                            return (
                                <div
                                    key={item.label}
                                    // This div is the 'group' for Tailwind's group-hover.
                                    // It now contains BOTH the Link and the submenu div.
                                    className="relative group"
                                    // *** IMPORTANT: REMOVED onMouseEnter and onMouseLeave from here ***
                                    // Desktop submenu visibility is now purely controlled by Tailwind's group-hover classes.
                                >
                                    <Link
                                        href={finalHref}
                                        className={`${linkBaseClasses} ${underlineClasses} flex items-center ${isActive(item.href) ? 'text-[var(--primary-color)] before:w-full' : ''}`}
                                        onClick={() => {
                                            if (isHashLink && pathname === '/') {
                                                const targetElement = document.querySelector(item.href);
                                                if (targetElement) {
                                                    targetElement.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                            // Keep this for consistency if a top-level item with a submenu is clicked
                                            // (though for desktop hover, it won't typically be clicked to open/close)
                                            if (hasSubmenu) setActiveSubmenu(null);
                                        }}
                                    >
                                        {item.label}
                                        {/* ChevronDown will now rotate purely based on group-hover */}
                                        {hasSubmenu && <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />}
                                    </Link>
                                    {hasSubmenu && (
                                        <div
                                            // Apply group-hover classes directly for visibility and animation.
                                            // This div is a direct child of the "group" div.
                                            className={`
                                                absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg py-1
                                                transition-all duration-300 transform origin-top
                                                // Default (hidden) state
                                                scale-95 opacity-0 max-h-0 pointer-events-none overflow-hidden
                                                // Hover state (visible)
                                                group-hover:scale-100 group-hover:opacity-100 group-hover:max-h-96 group-hover:pointer-events-auto
                                            `}
                                            style={{
                                                backgroundColor: 'var(--card-background)',
                                                border: '1px solid var(--border-color)',
                                                zIndex: 60,
                                            }}
                                        >
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm transition-colors duration-200
                                                    text-[var(--text-secondary)] hover:text-[var(--text-primary)]
                                                    hover:bg-[var(--background-tertiary)]"
                                                    onClick={() => {
                                                        setActiveSubmenu(null); // Close submenu on click
                                                        setIsMenuOpen(false); // Close mobile menu if open
                                                    }}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-colors duration-300
                            bg-[var(--card-background)] text-[var(--text-primary)]
                            hover:bg-[var(--background-tertiary)]"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className="group flex items-center space-x-3 px-4 py-2 rounded-xl text-md transition-all bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-white cursor-pointer duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call Us Now</span>
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden"
                        style={{ color: 'var(--text-primary)' }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu (remains unchanged) */}
                <div
                    className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            border-t border-[var(--border-color)]
          `}
                    style={{
                        backgroundColor: 'var(--background-secondary)',
                    }}
                >
                    <div className="flex flex-col space-y-4 pt-4 px-2">
                        {navItems.map((item) => {
                            const hasSubmenu = item.submenu && item.submenu.length > 0;
                            const isSubmenuMobileOpen = activeSubmenu === item.label;

                            let finalHref = item.href;
                            const isHashLink = item.href.startsWith('#');
                            if (isHashLink && pathname !== '/') {
                                finalHref = `/${item.href}`;
                            }

                            return (
                                <React.Fragment key={item.label}>
                                    <Link
                                        href={finalHref}
                                        className={`${linkBaseClasses} ${underlineClasses} flex items-center justify-between py-2`}
                                        onClick={(e) => {
                                            if (hasSubmenu) {
                                                e.preventDefault(); // Prevent default link behavior for mobile submenu toggle
                                                setActiveSubmenu(isSubmenuMobileOpen ? null : item.label);
                                            } else {
                                                setIsMenuOpen(false); // Close main menu on link click
                                                if (isHashLink && pathname === '/') {
                                                    const targetElement = document.querySelector(item.href);
                                                    if (targetElement) {
                                                        targetElement.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        {item.label}
                                        {hasSubmenu && (isSubmenuMobileOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                                    </Link>
                                    {hasSubmenu && isSubmenuMobileOpen && (
                                        <div
                                            className="flex flex-col space-y-2 pl-4 py-2 transition-all duration-300"
                                            style={{
                                                backgroundColor: 'var(--background-tertiary)',
                                                borderLeft: '2px solid var(--primary-color)'
                                            }}
                                        >
                                            {item.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-2 py-1 text-sm transition-colors duration-200
                                                    text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                                    onClick={() => {
                                                        setIsMenuOpen(false); // Close main menu on sub-link click
                                                        setActiveSubmenu(null); // Also close active submenu
                                                    }}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                        {/* Mobile Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="px-4 py-2 text-md rounded-lg transition-all duration-300
                            bg-[var(--card-background)] text-[var(--text-primary)] text-left"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5 inline-block mr-2" /> : <Moon className="w-5 h-5 inline-block mr-2" />}
                            <span>Toggle Theme</span>
                        </button>
                        {/* Mobile CTA */}
                        <button className="px-4 py-2 text-md rounded-lg transition-all duration-300 bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] text-[var(--white)] text-left">
                            <Phone className="w-5 h-5 inline-block mr-2" />
                            <span>Call Us Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}