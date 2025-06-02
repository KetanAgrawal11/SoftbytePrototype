'use client';

import React, { useEffect, useRef, useState } from 'react'; // Import useState
import Link from 'next/link';

// Dummy data for blog posts with more diverse image URLs
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Solutions',
    excerpt: 'Explore how artificial intelligence is reshaping business operations, enhancing decision-making, and driving innovation across industries.',
    imageUrl: 'https://placehold.co/600x400/1e293b/d1d5db?text=AI+Solutions',
    category: 'AI & ML',
    date: 'May 28, 2024',
    readTime: '8 min read',
    slug: 'future-ai-enterprise-solutions',
  },
  {
    id: 2,
    title: 'Blockchain Beyond Cryptocurrencies: Business Applications',
    excerpt: 'Dive into the practical applications of blockchain technology for supply chain management, data security, and transparent record-keeping in various sectors.',
    imageUrl: 'https://placehold.co/600x400/1f2937/d1d5db?text=Blockchain+Apps',
    category: 'Blockchain',
    date: 'May 20, 2024',
    readTime: '7 min read',
    slug: 'blockchain-business-applications',
  },
  {
    id: 3,
    title: 'Cloud Computing Trends to Watch in 2024',
    excerpt: 'Stay ahead of the curve with the latest trends in cloud computing, including hybrid cloud strategies, serverless architectures, and enhanced security measures.',
    imageUrl: 'https://placehold.co/600x400/111827/d1d5db?text=Cloud+Trends',
    category: 'Cloud',
    date: 'May 15, 2024',
    readTime: '10 min read',
    slug: 'cloud-computing-trends-2024',
  },
  {
    id: 4,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Protect your business from evolving cyber threats with essential tips and strategies for data protection, network security, and employee training.',
    imageUrl: 'https://placehold.co/600x400/030712/d1d5db?text=Cybersecurity',
    category: 'Cybersecurity',
    date: 'May 10, 2024',
    readTime: '6 min read',
    slug: 'cybersecurity-best-practices-smb',
  },
  {
    id: 5,
    title: 'IoT in Manufacturing: Smart Factories Revolution',
    excerpt: 'Discover how the Internet of Things (IoT) is transforming manufacturing processes, enabling predictive maintenance, and optimizing production lines.',
    imageUrl: 'https://placehold.co/600x400/172554/d1d5db?text=IoT+Factory',
    category: 'IoT',
    date: 'May 01, 2024',
    readTime: '9 min read',
    slug: 'iot-manufacturing-smart-factories',
  },
  {
    id: 6,
    title: 'The Rise of Quantum Computing: What Businesses Need to Know',
    excerpt: 'An introduction to quantum computing and its potential impact on various industries, from drug discovery to financial modeling.',
    imageUrl: 'https://placehold.co/600x400/581c87/d1d5db?text=Quantum+Tech',
    category: 'Emerging Tech',
    date: 'April 25, 2024',
    readTime: '12 min read',
    slug: 'rise-quantum-computing',
  },
];

// Reusable Button component
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out
               bg-gradient-to-r from-[var(--blue-600)] to-[var(--purple-600)] hover:from-[var(--blue-700)] hover:to-[var(--purple-700)]
               text-[var(--white)] shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2
               focus:ring-offset-2 focus:ring-[var(--blue-500)] focus:ring-offset-[var(--gray-950)] ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Blog Post Card Component
const BlogPostCard = ({ post, isFeatured = false }) => (
  <Link href={`/blog/${post.slug}`} className={`block rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-2
    ${isFeatured ? 'bg-[var(--gray-800)] border border-[var(--gray-700)]' : 'bg-[var(--gray-800)] border border-[var(--gray-700)]'}`}
  >
    <div className="relative overflow-hidden rounded-t-xl">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-56 object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
      />
      <span className="absolute bottom-3 left-3 bg-[var(--blue-600)] text-[var(--white)] text-xs font-semibold px-3 py-1 rounded-full">
        {post.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[var(--white)] mb-3 leading-tight">{post.title}</h3>
      <p className="text-[var(--gray-400)] text-sm mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex justify-between items-center text-xs text-[var(--gray-500)]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </Link>
);

const SubscribeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this email to your backend/newsletter service
    console.log('Subscribing with email:', email);
    alert(`Thank you for subscribing, ${email}!`); // Simple alert for demonstration
    setEmail(''); // Clear email input
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--gray-800)] rounded-xl shadow-2xl p-8 max-w-md w-full border border-[var(--gray-700)] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--gray-400)] hover:text-[var(--white)] text-2xl"
          aria-label="Close modal"
        > 
          &times;
        </button>
        <h3 className="text-3xl font-bold text-[var(--white)] mb-6 text-center">Subscribe to Our Newsletter</h3>
        <p className="text-[var(--gray-300)] mb-6 text-center">
          Get the latest insights and updates delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-[var(--gray-700)] border border-[var(--gray-600)] text-[var(--white)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--blue-500)]"
          />
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};


const BlogPage = () => {
  const sectionRefs = useRef([]);
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState(''); // Empty string for "All Categories"
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

  // Filter logic for blog posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    const matchesSearchTerm = searchTerm === '' ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const featuredPosts = blogPosts.slice(0, 2); // Featured posts remain static for this example

  return (
    <div className="min-h-screen bg-[var(--gray-950)] text-[var(--gray-100)] overflow-hidden">
      {/* Blog Hero Banner */}
      <section ref={addRef} className="relative py-24 md:py-36 text-center bg-[var(--gray-900)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-950)]/50 via-[var(--purple-950)]/50 to-[var(--gray-950)]/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--white)] leading-tight mb-6 animate-fade-in-up">
            Insights & Innovations
          </h1>
          <p className="text-xl md:text-2xl text-[var(--gray-300)] mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Stay updated with the latest in enterprise technology, expert opinions, and industry trends.
          </p>
          <Button className="animate-fade-in-up" style={{ animationDelay: '400ms'}}>
            <a href='#articles'>Explore All Articles</a> 
          </Button>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-950)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} isFeatured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-[var(--gray-900)]" id='articles'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-[var(--white)] text-center mb-16 animate-fade-in-up">Latest Posts</h2>

          {/* Functional Search and Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 p-3 rounded-lg bg-[var(--gray-800)] border border-[var(--gray-700)] text-[var(--gray-100)] placeholder-[var(--gray-500)] focus:outline-none focus:border-[var(--blue-500)]"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/4 p-3 rounded-lg bg-[var(--gray-800)] border border-[var(--gray-700)] text-[var(--gray-100)] focus:outline-none focus:border-[var(--blue-500)]"
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
                <BlogPostCard key={post.id} post={post} />
              ))
            ) : (
              <p className="text-[var(--gray-400)] text-center col-span-full">No articles found matching your criteria.</p>
            )}
          </div>

          {/* Optional: Pagination (placeholder) */}
          {/*
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button>Load More</Button>
          </div>
          */}
        </div>
      </section>

      {/* CTA Section (similar to About Us) */}
      <section ref={addRef} className="py-20 px-6 md:px-12 bg-gradient-to-br from-[var(--blue-950)] to-[var(--purple-950)] text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--white)] mb-8 leading-tight">
            Ready to Dive Deeper?
          </h2>
          <p className="text-lg md:text-xl text-[var(--gray-300)] mb-10">
            Subscribe to our newsletter for exclusive insights and never miss an update.
          </p>
          <Button onClick={() => setShowSubscribeModal(true)}>Subscribe Now</Button>
        </div>
      </section>
      
      <SubscribeModal
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
      />

      <style jsx global>{`
        /* Keep global animations from globals.css or ensure they are present */
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

        /* Adjust animation delay for sections if needed, or rely on useRef for observer */
      `}</style>
    </div>
  );
};

export default BlogPage;
