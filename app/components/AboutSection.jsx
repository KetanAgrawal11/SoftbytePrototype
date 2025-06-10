import { Award, Shield, TrendingUp, Users } from 'lucide-react';

export default function AboutSection() {
  const values = [
    { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Uncompromising quality in every solution" },
    { icon: <Shield className="w-6 h-6" />, title: "Security", desc: "Enterprise-grade security at every level" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", desc: "Cutting-edge technology solutions" },
    { icon: <Users className="w-6 h-6" />, title: "Partnership", desc: "Long-term client relationships" }
  ];

  return (
    <section
      id="about"
      className="py-20 transition-colors duration-300"
      // Use background-secondary for a slightly differentiated section background
      style={{ backgroundColor: 'var(--background-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-6"
              // Main headings use text-primary
              style={{ color: 'var(--text-primary)' }}
            >
              About{' '}
              <span
                style={{
                  // The gradient for "Softbyte" will now adapt based on the theme.
                  // For light theme, it'll be blue-focused. For dark, blue-purple.
                  background: 'linear-gradient(to right, var(--primary-color-light), var(--primary-color))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Softbyte
              </span>
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              // Primary paragraph text uses text-secondary for slight contrast
              style={{ color: 'var(--text-secondary)' }}
            >
              Founded in 1988, Softbyte has been at the forefront of enterprise technology transformation.
              We combine deep industry expertise with cutting-edge technology to deliver solutions that drive business growth.
            </p>
            <p
              className="text-lg mb-8 leading-relaxed"
              // Secondary paragraph text can use text-secondary or text-primary depending on desired contrast
              style={{ color: 'var(--text-secondary)' }}
            >
              Our team of certified professionals brings together decades of experience across multiple industries,
              ensuring that every solution is tailored to meet specific business requirements while maintaining
              the highest standards of security and performance.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      // Icon background now uses primary theme colors for gradients
                      background: 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))',
                      color: 'var(--white)' // White text on colored background (assuming var(--white) for text is always light)
                    }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold mb-1"
                      // Title of values use text-primary
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-sm"
                      // Description of values use text-secondary
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="relative z-10 backdrop-blur-sm border rounded-2xl p-8 transition-colors duration-300"
              // This is a card-like element, use card-background and border-color
              style={{
                backgroundColor: 'var(--card-background)', // Use the specific card background variable
                borderColor: 'var(--border-color)', // Use the border color variable
                boxShadow: '0 4px 8px var(--shadow-color)' // Add shadow for depth
              }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Team Size</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>50+ Experts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Global Presence</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>15+ Countries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Client Retention</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-secondary)' }}>Industry Experience</span>
                  <span className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>30+ Years</span>
                </div>
              </div>
            </div>

            {/* Background decoration (still uses gradients but now adapts to theme colors) */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 transition-colors duration-300"
              style={{
                // Gradients for decorative elements use primary theme colors
                background: 'linear-gradient(to right, var(--primary-color), var(--primary-color-dark))'
              }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20 transition-colors duration-300"
              style={{
                // Gradients for decorative elements use primary theme colors
                background: 'linear-gradient(to right, var(--primary-color-dark), var(--primary-color))'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}