"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactFormSection() {
    return (
        <>
            <section className="py-20 bg-[#F5F5F5] dark:bg-black relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-[1240px]">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-gray-900 dark:text-white mb-4">
                            Get in <span className="text-[#FF5622] italic font-serif">Touch</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Have a question about our programs or want to discuss a customized learning path? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 dark:border-gray-800 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[#F2EEFF] dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Our Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                                        813 - Runway Heights, Ayodhya Chowk,
                                        150 Ft Ring Road, Rajkot - 360006
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 dark:border-gray-800 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[#F2EEFF] dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                                        help@skillstudio.com

                                    </p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 dark:border-gray-800 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[rgba(255,86,34,0.1)] dark:bg-gray-800 rounded-2xl flex items-center justify-center text-[#FF5622] group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                                        +91 97140 40004 <br />
                                        Mon-Fri, 9am-6pm
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 dark:border-gray-800">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                        <input type="text" placeholder="John" className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] dark:bg-black border-none focus:ring-2 focus:ring-[#7143FE] transition-all outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] dark:bg-black border-none focus:ring-2 focus:ring-[#7143FE] transition-all outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] dark:bg-black border-none focus:ring-2 focus:ring-[#7143FE] transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                    <input type="text" placeholder="How can we help?" className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] dark:bg-black border-none focus:ring-2 focus:ring-[#7143FE] transition-all outline-none" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea rows="4" placeholder="Your message here..." className="w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] dark:bg-black border-none focus:ring-2 focus:ring-[#7143FE] transition-all outline-none resize-none"></textarea>
                                </div>

                                <button type="button" className="w-full bg-[#7143FE] hover:bg-[#5b32d6] text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#7143fe]/30">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section with Curve Effect */}
            <section className="relative w-full h-[450px] md:h-[800px] mb-[100px] md:mb-[120px] overflow-visible">
                {/* Curved Background */}
                <div
                    className="absolute inset-0 w-full bg-gradient-to-t from-[#7143FE] to-[#F5F5F5] dark:from-[#3a2283] dark:to-black z-0 pointer-events-none overflow-hidden"
                    style={{
                        clipPath: "ellipse(60% 60% at 50% 15%)"
                    }}
                >
                    {/* Background Glows for depth */}
                    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full -translate-y-1/2" />
                    <div className="absolute bottom-[50px] right-0 w-[400px] h-[400px] bg-white/30 dark:bg-white/10 blur-[100px] rounded-full" />
                </div>

                <div className="absolute top-[200px] md:top-[225px] left-0 w-full z-10">
                    <div className="container mx-auto px-4 md:px-6 max-w-[1240px]">
                        <div className="w-full h-[450px] rounded-[24px] overflow-hidden shadow-2xl border border-white/20 dark:border-gray-800">
                            <iframe
                                src="https://www.google.com/maps?q=22.3227457,70.7681992&hl=es;z=17&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="dark:invert dark:grayscale dark:contrast-[0.8]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
