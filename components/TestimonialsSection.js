import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, FinTech Corp",
      company: "FinTech Corp",
      content: "Softbyte transformed our entire infrastructure. Their expertise in financial services helped us achieve 99.99% uptime and enhanced security compliance.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, ManufacturingPro",
      company: "ManufacturingPro",
      content: "The IoT integration and automation solutions provided by Softbyte increased our production efficiency by 40%. Outstanding technical expertise.",
      rating: 5
    },
    {
      name: "Dr. Emma Williams",
      role: "IT Director, HealthSystem Plus",
      company: "HealthSystem Plus",
      content: "Their healthcare IT solutions revolutionized our patient management system. The team's understanding of HIPAA compliance was exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--gray-800)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
            What Our <span style={{
              background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>Clients Say</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
            Trusted by industry leaders who value innovation and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 transition-all duration-300 hover:scale-105
                         bg-[rgba(17,24,39,0.5)] hover:bg-[var(--gray-900)]"
              style={{
                borderColor: 'var(--gray-700)'
              }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--yellow-400)' }} />
                ))}
              </div>

              <Quote className="w-8 h-8 mb-4" style={{ color: 'var(--blue-400)' }} />

              <p className="mb-6 leading-relaxed text-lg" style={{ color: 'var(--gray-300)' }}>
                `{testimonial.content}`
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{
                  background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                  color: 'var(--white)'
                }}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--white)' }}>{testimonial.name}</div>
                  <div className="text-sm" style={{ color: 'var(--gray-400)' }}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}