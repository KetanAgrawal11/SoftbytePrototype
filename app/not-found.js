'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from './context/ThemeContext'; // Import useTheme

export default function NotFound() {
    const { theme } = useTheme(); // Get the current theme

    // Define dynamic colors for the page elements based on theme, excluding the button
    const containerBg = theme === 'dark' ? 'var(--gray-950)' : 'var(--background-primary)'; // Very dark for dark, white for light
    const textColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-secondary)'; // Light gray for dark, muted dark for light
    const headingColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color)'; // Vibrant blue for dark, primary blue for light
    const titleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)'; // White for dark, dark charcoal for light
    const paragraphColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)'; // Light gray for dark, muted dark for light

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center px-6 py-12 transition-colors duration-300"
            style={{
                backgroundColor: containerBg,
                color: textColor,
            }}
        >
            <div className="max-w-xl text-center">
                <h1
                    className="text-7xl md:text-8xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: headingColor }}
                >
                    404
                </h1>
                <h2
                    className="text-2xl md:text-3xl font-semibold mb-2 transition-colors duration-300"
                    style={{ color: titleColor }}
                >
                    Oops! Page Not Found
                </h2>
                <p
                    className="mb-8 text-lg leading-relaxed transition-colors duration-300" // Added text-lg and leading-relaxed
                    style={{ color: paragraphColor }}
                >
                    We&apos;re sorry, but the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    Please check the URL or return to our homepage.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                               bg-blue-600 hover:bg-blue-700 text-white // Hardcoded Tailwind classes for consistent button
                               transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" // Added focus states
                >
                    <ArrowLeft className="w-5 h-5" />
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}