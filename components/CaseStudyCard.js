// components/CaseStudyCard.js
'use client';
import React from 'react';
import Link from 'next/link';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <Link
      href={caseStudy.link}
      className="block bg-[var(--gray-800)] rounded-xl shadow-xl border border-[var(--gray-700)]
                 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:border-[var(--blue-600)]"
    >
      <img
        src={caseStudy.imageUrl}
        alt={caseStudy.title}
        className="w-full h-48 object-cover object-center rounded-t-xl"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/1e293b/d1d5db?text=Image+Error'; }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[var(--white)] mb-2 leading-tight">{caseStudy.title}</h3>
        <p className="text-[var(--gray-400)] text-sm line-clamp-3">{caseStudy.description}</p>
        <span className="mt-4 inline-block text-[var(--blue-500)] hover:text-[var(--blue-400)] font-semibold text-sm">
          Read More &rarr;
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
