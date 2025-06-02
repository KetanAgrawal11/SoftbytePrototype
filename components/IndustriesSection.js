'use client';
import { Building2, Cog, GraduationCap, ShoppingCart, Wrench, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesSection() {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "BFSI",
      description: "Banking, Financial Services & Insurance solutions with robust security and compliance frameworks.",
      features: ["Core Banking Systems", "Risk Management", "Regulatory Compliance"],
      slug: 'bfsi'
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Industrial automation, IoT integration, and smart manufacturing solutions for Industry 4.0.",
      features: ["Process Automation", "Quality Control", "Supply Chain Management"],
      slug: 'manufacturing'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "EdTech platforms, learning management systems, and digital transformation for educational institutions.",
      features: ["LMS Development", "Student Portals", "Online Assessment"],
      slug: 'education'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description: "Omnichannel retail solutions, inventory management, and customer experience platforms.",
      features: ["E-commerce Platforms", "Inventory Systems", "Customer Analytics"],
      slug: 'retail-e-commerce'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Engineering",
      description: "CAD/CAM solutions, project management tools, and engineering workflow optimization.",
      features: ["Design Software", "Project Management", "Workflow Optimization"],
      slug: 'engineering'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Healthcare IT solutions, patient management systems, and telemedicine platforms.",
      features: ["EMR Systems", "Telemedicine", "Healthcare Analytics"],
      slug: 'healthcare'
    }
  ];

  return (
    <section id="industries" className="py-20" style={{ backgroundColor: 'var(--gray-900)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
            Industries We <span style={{
              background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>Transform</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group backdrop-blur-sm rounded-2xl p-8 transition-all duration-300
                         border-[var(--gray-700)] bg-[rgba(31,41,55,0.5)] // Initial state
                         hover:border-[rgba(37,99,235,0.5)] hover:bg-[var(--gray-800)]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{
                  background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                  color: 'var(--white)'
                }}>
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--white)' }}>{industry.title}</h3>
              </div>

              <p className="mb-6 leading-relaxed" style={{ color: 'var(--gray-400)' }}>
                {industry.description}
              </p>

              <ul className="space-y-2 mb-8">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm" style={{ color: 'var(--gray-300)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--green-400)' }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/industries/${industry.slug}`} passHref>
              <button
                className="w-full font-semibold py-3 px-6 rounded-lg transition-all
                           bg-[var(--blue-600)] shadow-none // Initial state
                           group-hover:bg-[var(--blue-700)] group-hover:shadow-lg group-hover:shadow-[rgba(37,99,235,0.25)]"
                style={{ color: 'var(--white)' }}
              >
                Explore Solutions
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};