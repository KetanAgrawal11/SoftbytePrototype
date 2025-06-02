import { Award, Target, Shield, Clock } from 'lucide-react';

export default function ExperienceSection() {
  const stats = [
    { number: "30+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "200+", label: "Projects Delivered", icon: <Target className="w-8 h-8" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8" /> }
  ];

  return (
    <section className="py-20" style={{
      background: 'linear-gradient(to top, var(--blue-950), var(--purple-950))'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
            Proven Track Record
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-300)' }}>
            Over a decade of excellence in delivering enterprise-grade solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-20 h-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-200 bg-white/10 hover:bg-white/20"
              >
                <div className="text-blue-400">
                  {stat.icon}
                </div>
              </div>

              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: 'var(--white)' }}>
                {stat.number}
              </div>
              <div className="font-medium" style={{ color: 'var(--gray-300)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
