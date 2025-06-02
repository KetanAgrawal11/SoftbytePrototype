'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--gray-950)] text-[var(--gray-300)] px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-[var(--blue-500)] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--white)] mb-2">Page Not Found</h2>
        <p className="text-[var(--gray-400)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-colors
            bg-[var(--blue-600)] hover:bg-[var(--blue-700)] text-[var(--white)]"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
