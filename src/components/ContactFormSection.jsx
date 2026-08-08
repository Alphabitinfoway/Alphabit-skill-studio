"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        subject: "",
        message: ""
    });

    const [fieldErrors, setFieldErrors] = useState({});
    const [touched, setTouched] = useState({});

    const [status, setStatus] = useState({
        submitting: false,
        success: null,
        error: null
    });

    const validateField = (name, value) => {
        let error = "";
        const val = value ? value.trim() : "";

        switch (name) {
            case "firstName":
                if (!val) {
                    error = "First name is required.";
                } else if (val.length < 2) {
                    error = "First name must be at least 2 characters.";
                } else if (!/^[a-zA-Z\s'-]+$/.test(val)) {
                    error = "First name can only contain letters.";
                }
                break;
            case "lastName":
                if (val && val.length > 50) {
                    error = "Last name cannot exceed 50 characters.";
                }
                break;
            case "email":
                if (!val) {
                    error = "Email address is required.";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                    error = "Please enter a valid email address.";
                }
                break;
            case "contactNumber":
                const digits = val.replace(/[\s\-()+]/g, "");
                if (!val) {
                    error = "Contact number is required.";
                } else if (digits.length < 10 || digits.length > 15) {
                    error = "Please enter a valid 10-digit phone number.";
                } else if (!/^[0-9+]+$/.test(val.replace(/[\s\-()]/g, ""))) {
                    error = "Contact number contains invalid characters.";
                }
                break;
            case "subject":
                if (!val) {
                    error = "Subject is required.";
                } else if (val.length < 3) {
                    error = "Subject must be at least 3 characters.";
                }
                break;
            case "message":
                if (!val) {
                    error = "Message content is required.";
                } else if (val.length < 10) {
                    error = "Message must be at least 10 characters long.";
                }
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Prevent typing non-phone characters in contact number field
        if (name === "contactNumber" && value && !/^[0-9+\s\-()]*$/.test(value)) {
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (touched[name]) {
            const err = validateField(name, value);
            setFieldErrors((prev) => ({
                ...prev,
                [name]: err
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        const err = validateField(name, value);
        setFieldErrors((prev) => ({
            ...prev,
            [name]: err
        }));
    };

    const validateAll = () => {
        const errors = {};
        Object.keys(formData).forEach((key) => {
            const err = validateField(key, formData[key]);
            if (err) errors[key] = err;
        });
        setFieldErrors(errors);
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            contactNumber: true,
            subject: true,
            message: true
        });

        const errors = validateAll();
        if (Object.keys(errors).length > 0) {
            setStatus({
                submitting: false,
                success: null,
                error: "Please correct the highlighted errors in the form before submitting."
            });
            return;
        }

        setStatus({ submitting: true, success: null, error: null });

        try {
            const response = await fetch(`${API_BASE_URL}/api/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                let errorMsg = data.message || "Failed to send message. Please try again.";
                if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
                    errorMsg = data.errors.map((err) => err.msg).join(", ");
                }
                throw new Error(errorMsg);
            }

            setStatus({
                submitting: false,
                success: "Thank you! Your message has been sent successfully. We will contact you soon.",
                error: null
            });

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                subject: "",
                message: ""
            });
            setFieldErrors({});
            setTouched({});
        } catch (err) {
            setStatus({
                submitting: false,
                success: null,
                error: err.message || "An unexpected error occurred. Please try again."
            });
        }
    };

    return (
        <>
            <section className="bg-[#F5F5F5] relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 max-w-[1240px]">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold font-cabinet text-gray-900 mb-4">
                            Get in <span className="text-[#FF5622] italic font-pp">Touch</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Have a question about our programs or want to discuss a customized learning path? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[#F2EEFF] rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Our Location</h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">
                                        701 - Runway Heights, Ayodhya Chowk,
                                        150 Ft Ring Road, Rajkot - 360006
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[#F2EEFF] rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Email Us</h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">
                                        alphabitskillstudio@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 bg-[rgba(255,86,34,0.1)] rounded-2xl flex items-center justify-center text-[#FF5622] group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-gray-900">Call Us</h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">
                                        +91 9409207327 <br />
                                        +91 8866549495 <br />
                                        Mon-Fri, 9am-6pm
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                            {status.success && (
                                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-medium">
                                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                                    <span>{status.success}</span>
                                </div>
                            )}

                            {status.error && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center gap-3 text-sm font-medium">
                                    <AlertCircle size={20} className="text-red-500 shrink-0" />
                                    <span>{status.error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* First Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="John"
                                            className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.firstName && fieldErrors.firstName
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.firstName && fieldErrors.firstName && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.firstName}</p>
                                        )}
                                    </div>

                                    {/* Last Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Doe"
                                            className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.lastName && fieldErrors.lastName
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.lastName && fieldErrors.lastName && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="john@example.com"
                                            className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.email && fieldErrors.email
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.email && fieldErrors.email && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.email}</p>
                                        )}
                                    </div>

                                    {/* Contact Number */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Contact Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            maxLength={15}
                                            placeholder="+91 98765 43210"
                                            className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.contactNumber && fieldErrors.contactNumber
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.contactNumber && fieldErrors.contactNumber && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.contactNumber}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="How can we help?"
                                        className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.subject && fieldErrors.subject
                                                ? "border-red-500 ring-2 ring-red-100"
                                                : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                            }`}
                                    />
                                    {touched.subject && fieldErrors.subject && (
                                        <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.subject}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your message here (at least 10 characters)..."
                                        className={`w-full px-5 py-4 rounded-2xl bg-[#F5F5F5] border transition-all outline-none resize-none ${touched.message && fieldErrors.message
                                                ? "border-red-500 ring-2 ring-red-100"
                                                : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                            }`}
                                    ></textarea>
                                    {touched.message && fieldErrors.message && (
                                        <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full bg-[#7143FE] hover:bg-[#5b32d6] disabled:bg-purple-300 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#7143fe]/30 cursor-pointer disabled:cursor-not-allowed"
                                >
                                    {status.submitting ? (
                                        <>
                                            Sending... <Loader2 size={20} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send size={20} />
                                        </>
                                    )}
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
                    className="absolute inset-0 w-full bg-gradient-to-t from-[#7143FE] to-[#F5F5F5] z-0 pointer-events-none overflow-hidden"
                    style={{
                        clipPath: "ellipse(60% 60% at 50% 15%)"
                    }}
                >
                    {/* Background Glows for depth */}
                    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full -translate-y-1/2" />
                    <div className="absolute bottom-[50px] right-0 w-[400px] h-[400px] bg-white/30 blur-[100px] rounded-full" />
                </div>

                <div className="absolute top-[200px] md:top-[225px] left-0 w-full z-10">
                    <div className="container mx-auto px-4 md:px-6 max-w-[1240px]">
                        <div className="w-full h-[450px] rounded-[24px] overflow-hidden shadow-2xl border border-white/20">
                            <iframe
                                src="https://www.google.com/maps?q=22.3227457,70.7681992&hl=es;z=17&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
