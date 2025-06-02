import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import React, { useState } from 'react';
export default function ContactForm() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20" style={{ backgroundColor: 'var(--gray-900)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--white)' }}>
                        Get In <span style={{
                            background: 'linear-gradient(to right, var(--blue-400), var(--purple-500))',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>Touch</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--gray-400)' }}>
                        Ready to start your digital transformation? Contact our experts today for a free consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                                color: 'var(--white)'
                            }}>
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--white)' }}>Phone</h3>
                                <p style={{ color: 'var(--gray-400)' }}>+1 (555) 123-4567</p>
                                <p style={{ color: 'var(--gray-400)' }}>+1 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                                color: 'var(--white)'
                            }}>
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--white)' }}>Email</h3>
                                <p style={{ color: 'var(--gray-400)' }}>info@Softbyte.com</p>
                                <p style={{ color: 'var(--gray-400)' }}>sales@Softbyte.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: 'linear-gradient(to right, var(--blue-500), var(--purple-600))',
                                color: 'var(--white)'
                            }}>
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1" style={{ color: 'var(--white)' }}>Address</h3>
                                <p style={{ color: 'var(--gray-400)' }}>123 Technology Drive</p>
                                <p style={{ color: 'var(--gray-400)' }}>Silicon Valley, CA 94025</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="font-semibold mb-4" style={{ color: 'var(--white)' }}>Follow Us</h3>
                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                                    <button
                                        key={index}
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 bg-[rgba(59,130,246,0.1)] text-[var(--blue-400)] hover:bg-[var(--blue-600)] hover:text-[var(--white)]"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </button>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="border rounded-2xl p-8" style={{
                            backgroundColor: 'var(--gray-800)',
                            borderColor: 'var(--gray-700)'
                        }}>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--gray-700)',
                                                borderColor: 'var(--gray-600)',
                                                color: 'var(--white)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--gray-700)',
                                                borderColor: 'var(--gray-600)',
                                                color: 'var(--white)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--gray-700)',
                                                borderColor: 'var(--gray-600)',
                                                color: 'var(--white)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                                            style={{
                                                backgroundColor: 'var(--gray-700)',
                                                borderColor: 'var(--gray-600)',
                                                color: 'var(--white)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                        Service Interest
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                                        style={{
                                            backgroundColor: 'var(--gray-700)',
                                            borderColor: 'var(--gray-600)',
                                            color: 'var(--white)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="custom-development">Custom Software Development</option>
                                        <option value="infrastructure">Infrastructure Solutions</option>
                                        <option value="cybersecurity">Cybersecurity Services</option>
                                        <option value="cloud-migration">Cloud Migration</option>
                                        <option value="system-integration">System Integration</option>
                                        <option value="support">Dedicated Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--gray-300)' }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                                        style={{
                                            backgroundColor: 'var(--gray-700)',
                                            borderColor: 'var(--gray-600)',
                                            color: 'var(--white)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--blue-500)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--gray-600)'}
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform bg-[var(--blue-600)] text-[var(--white)] hover:bg-[var(--blue-700)] hover:-translate-y-1 hover:shadow-lg"
                                >

                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
