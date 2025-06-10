'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext'; // Assuming this is the correct path

// Dummy data for blog posts with more diverse image URLs
const blogPosts = [
    { id: 1, title: 'The Future of AI in Enterprise Solutions', excerpt: 'Explore how artificial intelligence is reshaping business operations, enhancing decision-making, and driving innovation across industries.', imageUrl: 'https://placehold.co/600x400/A9CCE3/2c3e50?text=AI+Solutions', category: 'AI & ML', date: 'May 28, 2024', readTime: '8 min read', slug: 'future-ai-enterprise-solutions' },
    { id: 2, title: 'Blockchain Beyond Cryptocurrencies: Business Applications', excerpt: 'Dive into the practical applications of blockchain technology for supply chain management, data security, and transparent record-keeping in various sectors.', imageUrl: 'https://placehold.co/600x400/D7BDE2/2c3e50?text=Blockchain+Apps', category: 'Blockchain', date: 'May 20, 2024', readTime: '7 min read', slug: 'blockchain-business-applications' },
    { id: 3, title: 'Cloud Computing Trends to Watch in 2024', excerpt: 'Stay ahead of the curve with the latest trends in cloud computing, including hybrid cloud strategies, serverless architectures, and enhanced security measures.', imageUrl: 'https://placehold.co/600x400/A2D9CE/2c3e50?text=Cloud+Trends', category: 'Cloud', date: 'May 15, 2024', readTime: '10 min read', slug: 'cloud-computing-trends-2024' },
    { id: 4, title: 'Cybersecurity Best Practices for Small Businesses', excerpt: 'Protect your business from evolving cyber threats with essential tips and strategies for data protection, network security, and employee training.', imageUrl: 'https://placehold.co/600x400/FAD7A0/2c3e50?text=Cybersecurity', category: 'Cybersecurity', date: 'May 10, 2024', readTime: '6 min read', slug: 'cybersecurity-best-practices-smb' },
    { id: 5, title: 'IoT in Manufacturing: Smart Factories Revolution', excerpt: 'Discover how the Internet of Things (IoT) is transforming manufacturing processes, enabling predictive maintenance, and optimizing production lines.', imageUrl: 'https://placehold.co/600x400/BCCCDD/2c3e50?text=IoT+Factory', category: 'IoT', date: 'May 01, 2024', readTime: '9 min read', slug: 'iot-manufacturing-smart-factories' },
    { id: 6, title: 'The Rise of Quantum Computing: What Businesses Need to Know', excerpt: 'An introduction to quantum computing and its potential impact on various industries, from drug discovery to financial modeling.', imageUrl: 'https://placehold.co/600x400/D4AFB9/2c3e50?text=Quantum+Tech', category: 'Emerging Tech', date: 'April 25, 2024', readTime: '12 min read', slug: 'rise-quantum-computing' },
];

// Reusable Button component
const Button = ({ children, className = '', theme, ...props }) => (
    <button
        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
                    shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 
                    focus:ring-offset-2 ${theme === 'light'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white focus:ring-blue-500 focus:ring-offset-gray-100'
                : 'bg-gradient-to-r from-[var(--blue-600)] to-[var(--purple-600)] hover:from-[var(--blue-700)] hover:to-[var(--purple-700)] text-[var(--white)] focus:ring-[var(--blue-500)] focus:ring-offset-[var(--gray-950)]'
            } ${className}`}
        {...props}
    >
        {children}
    </button>
);

// Blog Post Card Component
const BlogPostCard = ({ post, isFeatured = false, theme }) => (
    <Link href={`/blog/${post.slug}`} className={`block rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-2
        ${theme === 'light'
            ? 'bg-white border border-gray-200'
            : 'bg-[var(--gray-800)] border border-[var(--gray-700)]'}`}
    >
        <div className="relative overflow-hidden rounded-t-xl">
            <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
            />
            <span className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full
                ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-[var(--blue-600)] text-[var(--white)]'}`}>
                {post.category}
            </span>
        </div>
        <div className="p-6">
            <h3 className={`text-xl font-bold mb-3 leading-tight ${theme === 'light' ? 'text-gray-800' : 'text-[var(--white)]'}`}>{post.title}</h3>
            <p className={`text-sm mb-4 line-clamp-3 ${theme === 'light' ? 'text-gray-600' : 'text-[var(--gray-400)]'}`}>{post.excerpt}</p>
            <div className={`flex justify-between items-center text-xs ${theme === 'light' ? 'text-gray-500' : 'text-[var(--gray-500)]'}`}>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
            </div>
        </div>
    </Link>
);

const SubscribeModal = ({ isOpen, onClose, theme }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribing with email:', email);
        alert(`Thank you for subscribing, ${email}!`);
        setEmail('');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className={`rounded-xl shadow-2xl p-8 max-w-md w-full border relative
                ${theme === 'light' ? 'bg-white border-gray-200' : 'bg-[var(--gray-800)] border-[var(--gray-700)]'}`}>
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 text-2xl ${theme === 'light' ? 'text-gray-500 hover:text-gray-800' : 'text-[var(--gray-400)] hover:text-[var(--white)]'}`}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <h3 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-900' : 'text-[var(--white)]'}`}>Subscribe to Our Newsletter</h3>
                <p className={`mb-6 text-center ${theme === 'light' ? 'text-gray-600' : 'text-[var(--gray-300)]'}`}>
                    Get the latest insights and updates delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={`w-full p-3 rounded-lg border focus:outline-none focus:border-blue-500
                            ${theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500' : 'bg-[var(--gray-700)] border-[var(--gray-600)] text-[var(--white)] placeholder-[var(--gray-400)]'}`}
                    />
                    <Button type="submit" className="w-full" theme={theme}>
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
    );
};


const BlogPage = () => {
    const { theme } = useTheme();
    const sectionRefs = useRef([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [showSubscribeModal, setShowSubscribeModal] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const addRef = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
        const matchesSearchTerm = searchTerm === '' ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    const featuredPosts = blogPosts.slice(0, 2);

    return (
        <div className={`min-h-screen overflow-hidden ${theme === 'light' ? 'bg-gray-50 text-gray-800' : 'bg-[var(--gray-950)] text-[var(--gray-100)]'}`}>
            {/* Blog Hero Banner */}
            <section ref={addRef} className="relative py-24 md:py-36 text-center overflow-hidden">
                <div className={`absolute inset-0 z-0 ${theme === 'light' ? 'bg-gradient-to-br from-white to-blue-200' : 'bg-gradient-to-br from-gray-950 to-gray-900'}`}></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up ${theme === 'light' ? 'text-gray-900' : 'text-[var(--white)]'}`}>
                        Insights & Innovations
                    </h1>
                    <p className={`text-xl md:text-2xl mb-10 animate-fade-in-up ${theme === 'light' ? 'text-gray-600' : 'text-[var(--gray-300)]'}`} style={{ animationDelay: '200ms' }}>
                        Stay updated with the latest in enterprise technology, expert opinions, and industry trends.
                    </p>
                    <Button theme={theme} className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <a href='#articles'>Explore All Articles</a>
                    </Button>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section ref={addRef} className={`py-20 px-6 md:px-12 ${theme === 'light' ? 'bg-white' : 'bg-[var(--gray-950)]'}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-5xl font-bold text-center mb-16 animate-fade-in-up ${theme === 'light' ? 'text-gray-900' : 'text-[var(--white)]'}`}>Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <BlogPostCard key={post.id} post={post} isFeatured={true} theme={theme} />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Blog Posts Grid */}
            <section ref={addRef} className={`py-20 px-6 md:px-12 ${theme === 'light' ? 'bg-gray-50' : 'bg-[var(--gray-900)]'}`} id='articles'>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-5xl font-bold text-center mb-16 animate-fade-in-up ${theme === 'light' ? 'text-gray-900' : 'text-[var(--white)]'}`}>Latest Posts</h2>

                    {/* Functional Search and Category Filter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full md:w-1/3 p-3 rounded-lg border focus:outline-none focus:border-blue-500
                                ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500' : 'bg-[var(--gray-800)] border-[var(--gray-700)] text-[var(--gray-100)] placeholder-[var(--gray-500)]'}`}
                        />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className={`w-full md:w-1/4 p-3 rounded-lg border focus:outline-none focus:border-blue-500
                                ${theme === 'light' ? 'bg-white border-gray-300 text-gray-900' : 'bg-[var(--gray-800)] border-[var(--gray-700)] text-[var(--gray-100)]'}`}
                        >
                            <option value="">All Categories</option>
                            <option value="AI & ML">AI & ML</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="IoT">IoT</option>
                            <option value="Emerging Tech">Emerging Tech</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} theme={theme} />
                            ))
                        ) : (
                            <p className={`text-center col-span-full ${theme === 'light' ? 'text-gray-500' : 'text-[var(--gray-400)]'}`}>No articles found matching your criteria.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section ref={addRef} className={`py-20 px-6 md:px-12 text-center animate-fade-in-up ${theme === 'light' ? 'bg-gradient-to-br from-blue-50 to-purple-100' : 'bg-gradient-to-br from-blue-800 to-purple-200'}`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${theme === 'light' ? 'text-gray-900' : 'text-[var(--white)]'}`}>
                        Ready to Dive Deeper?
                    </h2>
                    <p className={`text-lg md:text-xl mb-10 ${theme === 'light' ? 'text-gray-600' : 'text-[var(--gray-300)]'}`}>
                        Subscribe to our newsletter for exclusive insights and never miss an update.
                    </p>
                    <Button onClick={() => setShowSubscribeModal(true)} theme={theme}>Subscribe Now</Button>
                </div>
            </section>

            <SubscribeModal
                isOpen={showSubscribeModal}
                onClose={() => setShowSubscribeModal(false)}
                theme={theme}
            />

            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default BlogPage;