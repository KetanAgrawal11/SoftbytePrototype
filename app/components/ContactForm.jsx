'use client';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const { theme } = useTheme(); // Get the current theme

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to API)
        console.log('Form submitted:', formData);
        // You might want to add a success/error message here
    };

    // --- Dynamic Styles based on Theme ---
    const sectionBg = theme === 'dark' ? 'var(--gray-900)' : 'var(--background-secondary)';
    const headingColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const taglineColor = theme === 'dark' ? 'var(--gray-400)' : 'var(--text-secondary)';

    // "Get In Touch" title gradient (inline for this specific text)
    const getInTouchGradient = theme === 'dark'
        ? 'linear-gradient(to right, #60a5fa, #a855f7)' // Dark theme: blue-400 to purple-500
        : 'linear-gradient(to right, #007BFF, #0056b3)'; // Light theme: primary-color to primary-color-dark

    // Contact Info Icons & Text
    const infoIconContainerBg = theme === 'dark'
        ? 'linear-gradient(to right, #3b82f6, #9333ea)' // Dark theme: blue-500 to purple-600
        : 'var(--primary-color)'; // Light theme: solid primary color
    const infoIconColor = 'white'; // Icon itself remains white for contrast
    const infoTitleColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)';
    const infoDetailColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-primary)';

    // Follow Us Social Icons
    const socialIconClasses = theme === 'dark'
        ? 'bg-[rgba(59,130,246,0.1)] text-[var(--blue-400)] hover:bg-[var(--primary-color)] hover:text-white'
        : 'bg-[rgba(0,123,255,0.1)] text-[var(--primary-color)] hover:bg-[var(--primary-color-dark)] hover:text-white'; // Light theme: primary with opacity, hover darker primary

    // Contact Form Card
    const formCardBg = theme === 'dark' ? 'var(--gray-800)' : 'var(--card-background)'; // Dark theme: gray-800, Light theme: white card
    const formCardBorder = theme === 'dark' ? 'var(--gray-700)' : 'var(--border-color)'; // Dark theme: gray-700, Light theme: light border

    // Form Labels
    const labelColor = theme === 'dark' ? 'var(--gray-300)' : 'var(--text-primary)';

    // Form Inputs (Text, Email, Phone, Company, Select, Textarea)
    const inputBg = theme === 'dark' ? '#374151' : 'var(--gray-900)'; // Dark theme: gray-700, Light theme: very light gray
    const inputBorder = theme === 'dark' ? 'var(--gray-600)' : 'var(--border-color)'; // Dark theme: gray-600, Light theme: light border
    const inputTextColor = theme === 'dark' ? 'var(--white)' : 'var(--text-primary)'; // Dark theme: white, Light theme: dark charcoal
    const inputFocusBorderColor = theme === 'dark' ? 'var(--blue-500)' : 'var(--primary-color)'; // Focus border color

    // Submit Button
    const submitButtonClasses = theme === 'dark'
        ? 'bg-[var(--primary-color)] text-[var(--white)] hover:bg-[var(--primary-color-dark)]'
        : 'bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color-dark)]'; // Light theme: primary color, hover darker primary

    return (
        <section id="contact" className="py-20 transition-colors duration-300" style={{ backgroundColor: sectionBg }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: headingColor }}>
                        Get In{' '}
                        <span style={{
                            backgroundImage: getInTouchGradient, // Changed 'background' to 'backgroundImage'
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>Touch</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto transition-colors duration-300" style={{ color: taglineColor }}>
                        Ready to start your digital transformation? Contact our experts today for a free consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: infoIconContainerBg,
                                color: infoIconColor
                            }}>
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 transition-colors duration-300" style={{ color: infoTitleColor }}>Phone</h3>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>+1 (555) 123-4567</p>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>+1 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: infoIconContainerBg,
                                color: infoIconColor
                            }}>
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 transition-colors duration-300" style={{ color: infoTitleColor }}>Email</h3>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>info@Softbyte.com</p>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>sales@Softbyte.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{
                                background: infoIconContainerBg,
                                color: infoIconColor
                            }}>
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1 transition-colors duration-300" style={{ color: infoTitleColor }}>Address</h3>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>123 Technology Drive</p>
                                <p className="transition-colors duration-300" style={{ color: infoDetailColor }}>Silicon Valley, CA 94025</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="font-semibold mb-4 transition-colors duration-300" style={{ color: infoTitleColor }}>Follow Us</h3>
                            <div className="flex space-x-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md ${socialIconClasses}`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div
                            className="border rounded-2xl p-8 transition-colors duration-300"
                            style={{
                                backgroundColor: formCardBg,
                                borderColor: formCardBorder
                            }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2
                                            focus:ring-[${inputFocusBorderColor}] 
                                            bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                            `}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2
                                            focus:ring-[${inputFocusBorderColor}]
                                            bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                            `}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2
                                            focus:ring-[${inputFocusBorderColor}]
                                            bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                            `}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2
                                            focus:ring-[${inputFocusBorderColor}]
                                            bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                            `}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                        Service Interest
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2
                                        focus:ring-[${inputFocusBorderColor}]
                                        bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                        `}
                                    >
                                        <option className='text-black' value="">Select a service</option>
                                        <option className='text-black' value="custom-development">Custom Software Development</option>
                                        <option className='text-black' value="infrastructure">Infrastructure Solutions</option>
                                        <option className='text-black' value="cybersecurity">Cybersecurity Services</option>
                                        <option className='text-black' value="cloud-migration">Cloud Migration</option>
                                        <option className='text-black' value="system-integration">System Integration</option>
                                        <option className='text-black' value="support">Dedicated Support</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 transition-colors duration-300" style={{ color: labelColor }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none
                                        focus:ring-[${inputFocusBorderColor}]
                                        bg-[${inputBg}] border-[${inputBorder}] text-[${inputTextColor}]
                                        `}
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${submitButtonClasses}`}
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
