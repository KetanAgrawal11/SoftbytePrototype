'use client';
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const CaseStudyCard = ({ caseStudy }) => {
    const { theme } = useTheme();

    // Define dynamic styles based on theme
    const cardBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--card-background)';
    const cardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)';
    // Define Tailwind classes for hover border and link text color based on theme
    const cardHoverBorderClass = theme === 'dark' ? 'group-hover:border-[var(--blue-600)]' : 'group-hover:border-[var(--primary-color-dark)]';
    const titleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const descriptionColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';
    const linkTextColorClass = theme === 'dark' ? 'text-[var(--blue-500)]' : 'text-[var(--primary-color)]';
    const linkHoverTextColorClass = theme === 'dark' ? 'group-hover:text-[var(--blue-400)]' : 'group-hover:text-[var(--primary-color-light)]';


    return (
        <Link
            href={caseStudy.link}
            // Added 'group' class to the Link for group-hover effects
            // All styling classes including hover effects are now on the Link component itself
            className={`group block rounded-xl shadow-xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-2
                       ${cardHoverBorderClass}`} // Apply the theme-aware hover border class
            style={{
                backgroundColor: cardBg,
                borderColor: cardBorder,
                borderWidth: '1px', // Ensure border-width is explicitly set for the transition
            }}
        >
            <img
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                className="w-full h-48 object-cover object-center rounded-t-xl"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/1e293b/d1d5db?text=Image+Error'; }}
            />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: titleColor }}>{caseStudy.title}</h3>
                <p className="text-sm line-clamp-3" style={{ color: descriptionColor }}>{caseStudy.description}</p>
                <span
                    className={`mt-4 inline-block font-semibold text-sm transition-colors duration-300
                                ${linkTextColorClass} ${linkHoverTextColorClass}`} // Apply theme-aware text and hover text color classes
                >
                    Read More &rarr;
                </span>
            </div>
        </Link>
    );
};

export default CaseStudyCard;
