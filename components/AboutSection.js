import {Award, Shield, TrendingUp, Users} from 'lucide-react';

export default function AboutSection() {
    const values = [
    { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "Uncompromising quality in every solution" },
    { icon: <Shield className="w-6 h-6" />, title: "Security", desc: "Enterprise-grade security at every level" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Innovation", desc: "Cutting-edge technology solutions" },
    { icon: <Users className="w-6 h-6" />, title: "Partnership", desc: "Long-term client relationships" }
];

return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--gray-900)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
                        About <span style={{
                            background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>Softbyte</span>
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--gray-400)' }}>
                        Founded in 1988, Softbyte has been at the forefront of enterprise technology transformation.
                        We combine deep industry expertise with cutting-edge technology to deliver solutions that drive business growth.
                    </p>
                    <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--gray-300)' }}>
                        Our team of certified professionals brings together decades of experience across multiple industries,
                        ensuring that every solution is tailored to meet specific business requirements while maintaining
                        the highest standards of security and performance.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                                    background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                                    color: 'var(--white)'
                                }}>
                                    {value.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1" style={{ color: 'var(--white)' }}>{value.title}</h3>
                                    <p className="text-sm" style={{ color: 'var(--gray-400)' }}>{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="relative z-10 backdrop-blur-sm border rounded-2xl p-8" style={{
                        backgroundColor: 'rgba(31, 41, 55, 0.5)',
                        borderColor: 'var(--gray-700)'
                    }}>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span style={{ color: 'var(--gray-300)' }}>Team Size</span>
                                <span className="font-bold text-xl" style={{ color: 'var(--white)' }}>50+ Experts</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span style={{ color: 'var(--gray-300)' }}>Global Presence</span>
                                <span className="font-bold text-xl" style={{ color: 'var(--white)' }}>15+ Countries</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span style={{ color: 'var(--gray-300)' }}>Client Retention</span>
                                <span className="font-bold text-xl" style={{ color: 'var(--white)' }}>98%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span style={{ color: 'var(--gray-300)' }}>Industry Experience</span>
                                <span className="font-bold text-xl" style={{ color: 'var(--white)' }}>30+ Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20" style={{
                        background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))'
                    }}></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20" style={{
                        background: 'linear-gradient(to right, var(--purple-500), var(--blue-500))'
                    }}></div>
                </div>
            </div>
        </div>
    </section>
);
}