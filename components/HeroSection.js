'use client';
import { Star, ArrowRight, Play } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen relative overflow-hidden pt-20" style={{
            background: 'linear-gradient(to bottom right, var(--gray-950), var(--gray-900), var(--blue-950))',
            color: 'var(--white)'
        }}>
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-30" style={{
                    backgroundColor: 'var(--blue-500)'
                }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20" style={{
                    backgroundColor: 'var(--purple-500)'
                }}></div>
            </div>

            <div className="relative z-10 px-6 lg:px-8 pt-20 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        <div className="inline-flex items-center space-x-2 border rounded-full px-4 py-2 mb-8" style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            borderColor: 'rgba(59, 130, 246, 0.2)'
                        }}>
                            <Star className="w-4 h-4" style={{ color: 'var(--blue-400)' }} />
                            <span className="text-sm" style={{ color: 'var(--blue-300)' }}>Trusted by 500+ Enterprise Clients</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
                            background: 'linear-gradient(to right, var(--white), var(--gray-100), var(--gray-300))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            Enterprise Software &<br />
                            <span style={{
                                background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}>
                                Hardware Solutions
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--gray-300)' }}>
                            Empowering businesses with cutting-edge technology solutions.<br />
                            From custom software development to enterprise infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                            <button className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2
                       bg-[var(--blue-600)] hover:bg-[var(--blue-700)]
                       shadow-md hover:shadow-2xl hover:shadow-[rgba(37,99,235,0.25)]"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group flex items-center space-x-3 transition-colors
                       text-[var(--gray-300)] hover:text-[var(--white)]"
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors
                        bg-white/10 group-hover:bg-white/20"
                                >
                                    <Play className="w-5 h-5 ml-1" />
                                </div>
                                <span className="font-medium">Watch Demo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};