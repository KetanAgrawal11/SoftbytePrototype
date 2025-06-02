import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(to bottom right, var(--blue-600), var(--purple-600))",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--white)" }}>
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-12 leading-relaxed" style={{ color: "var(--gray-100)" }}>
          Join 500+ enterprises who trust Softbyte for their digital transformation journey.
          Let&apos;s discuss how we can accelerate your growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Primary Button */}
          <button
            className="group px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            style={{
              backgroundColor: "var(--white)",
              color: "var(--blue-600)",
            }}
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary Button */}
          <button
            className="group flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            style={{
              color: "var(--white)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Us Now</span>

            {/* Tailwind hover via group */}
            <style jsx>{`
              .group:hover {
                background-color: rgba(255, 255, 255, 0.2);
                border-color: rgba(255, 255, 255, 0.5);
              }
            `}</style>
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex items-center justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--white)" }}>
              24/7
            </div>
            <div className="text-sm" style={{ color: "var(--gray-200)" }}>
              Support
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--white)" }}>
              99.9%
            </div>
            <div className="text-sm" style={{ color: "var(--gray-200)" }}>
              Uptime
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: "var(--white)" }}>
              ISO
            </div>
            <div className="text-sm" style={{ color: "var(--gray-200)" }}>
              Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
