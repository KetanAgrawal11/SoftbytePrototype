import { Lightbulb, Server, Shield, Cloud, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function CoreServicesSection() {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Leverage cutting-edge AI for intelligent automation, analytics, and personalized experiences.",
      link: "/services/ai-ml-development"
    }, ,
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Solutions",
      description: "Scalable cloud and on-premise infrastructure designed for performance, security, and reliability.",
      link: "/services/it-infrastructure-solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description: "Comprehensive security audits, penetration testing, and compliance management for enterprise protection.",
      link: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless transition to cloud platforms with minimal downtime and maximum efficiency gains.",
      link: "/services/cloud-migration"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "System Integration",
      description: "Connect disparate systems and applications for unified business operations and data flow.",
      link: "/services/system-integration"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable IT Solutions",
      description: "Implement eco-friendly IT practices to reduce your environmental footprint and operational costs.",
      link: "/services/sustainable-it"
    }
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: 'var(--gray-900)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
            Core <span style={{
              background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>Services</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((feature, index) => (
            <div
              key={index}
              className="group border rounded-2xl p-8 transition-all duration-300
                     bg-[rgba(31,41,55,0.3)] hover:bg-[rgba(31,41,55,0.5)]
                     border-[var(--gray-700)] hover:border-[rgba(37,99,235,0.5)]"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                color: 'var(--white)'
              }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--white)' }}>{feature.title}</h3>
              <p className="leading-relaxed mb-6" style={{ color: 'var(--gray-400)' }}>{feature.description}</p>

              {/* New Learn More Link */}
              {feature.link && ( // Only render if link exists
                <Link href={feature.link} passHref>
                  <span className="inline-flex items-center text-[var(--blue-500)] hover:text-[var(--blue-400)] font-semibold transition-colors">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};
