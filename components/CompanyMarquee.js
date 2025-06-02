
export default function CompanyMarquee() {
    const companies = [
        "Microsoft", "Google", "Amazon", "IBM", "Oracle", "SAP", "Salesforce",
        "Adobe", "Cisco", "Intel", "Dell", "HP", "VMware", "ServiceNow"
    ];

    return (
        <section className="py-16 overflow-hidden" style={{ backgroundColor: 'var(--gray-900)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-center mb-12" style={{ color: 'var(--gray-400)' }}>Trusted by industry leaders worldwide</p>

                <div className="relative">
                    <div className="flex animate-marquee space-x-16">
                        {[...companies, ...companies].map((company, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 text-2xl font-bold transition-colors whitespace-nowrap text-[var(--gray-500)] hover:text-[var(--white)]"
                            // This comment was the issue, moved outside the string
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};
