"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        preferredCourse: "",
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
            case "preferredCourse":
                if (!val) {
                    error = "Please select your preferred course.";
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

        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            contactNumber: true,
            preferredCourse: true,
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
            const payload = {
                ...formData,
                subject: formData.preferredCourse || "Course Inquiry"
            };

            const response = await fetch(`${API_BASE_URL}/api/contacts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
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

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                preferredCourse: "",
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
            <section className="bg-[#F5F5F5] py-10 sm:py-16 md:py-20 relative overflow-hidden font-cabinet">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                            Get in <span className="text-[#FF5622] italic font-pp">Touch</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                            Have a question about our programs, fees, or a custom learning path for your team? We're here to help — reach us any of the ways below, or drop your details in the form and we'll get back to you within a day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-4 sm:gap-5">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-[#F2EEFF] rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Our Location</h3>
                                    <p className="text-gray-600 text-xs sm:text-[15px] leading-relaxed">
                                        701, Runway Heights, Ayodhya Chowk, 150 Ft Ring Road, Rajkot – 360006, Gujarat
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-4 sm:gap-5">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-[#F2EEFF] rounded-2xl flex items-center justify-center text-[#7143FE] group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Email Us</h3>
                                    <p className="text-gray-600 text-xs sm:text-[15px] leading-relaxed break-all sm:break-normal">
                                        <a href="mailto:alphabitskillstudio@gmail.com" className="hover:underline transition-colors">
                                            alphabitskillstudio@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(113,67,254,0.1)] transition-all duration-300 border border-gray-100 group flex items-start gap-4 sm:gap-5">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-[rgba(255,86,34,0.1)] rounded-2xl flex items-center justify-center text-[#FF5622] group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-1 text-gray-900">Call Us</h3>
                                    <p className="text-gray-600 text-xs sm:text-[15px] leading-relaxed">
                                        <a href="tel:+919409207327" className="hover:underline transition-colors block">
                                            +91 94092 07327
                                        </a>
                                        <a href="tel:+918866549495" className="hover:underline transition-colors block">
                                            +91 88665 49495
                                        </a>
                                        <span className="text-gray-500 mt-1 block">Mon–Fri, 9 AM – 6 PM</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 bg-white p-5 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
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

                            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-700">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="John"
                                            className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.firstName && fieldErrors.firstName
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.firstName && fieldErrors.firstName && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.firstName}</p>
                                        )}
                                    </div>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Doe"
                                            className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.lastName && fieldErrors.lastName
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.lastName && fieldErrors.lastName && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-700">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="john@example.com"
                                            className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.email && fieldErrors.email
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.email && fieldErrors.email && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.email}</p>
                                        )}
                                    </div>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs sm:text-sm font-medium text-gray-700">
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
                                            className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${touched.contactNumber && fieldErrors.contactNumber
                                                    ? "border-red-500 ring-2 ring-red-100"
                                                    : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                                }`}
                                        />
                                        {touched.contactNumber && fieldErrors.contactNumber && (
                                            <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.contactNumber}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                                        Preferred Course <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="preferredCourse"
                                        value={formData.preferredCourse}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none ${formData.preferredCourse ? "text-gray-900" : "text-gray-500"
                                            } ${touched.preferredCourse && fieldErrors.preferredCourse
                                                ? "border-red-500 ring-2 ring-red-100"
                                                : "border-transparent focus:ring-2 focus:ring-[#7143FE]"
                                            }`}
                                    >
                                        <option value="" disabled>
                                            Select Preferred Course
                                        </option>
                                        <option value="Full Stack Development">Full Stack Development</option>
                                        <option value="AI & Data Science">AI & Data Science</option>
                                        <option value="UI/UX & Graphic Design">UI/UX & Graphic Design</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="Not sure yet">Not sure yet</option>
                                    </select>
                                    {touched.preferredCourse && fieldErrors.preferredCourse && (
                                        <p className="text-xs text-red-500 font-medium pl-1">{fieldErrors.preferredCourse}</p>
                                    )}
                                </div>

                                <div className="space-y-1.5 sm:space-y-2">
                                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Your message here (at least 10 characters)..."
                                        className={`w-full px-4 py-3 sm:px-5 sm:py-4 text-sm rounded-xl sm:rounded-2xl bg-[#F5F5F5] border transition-all outline-none resize-none ${touched.message && fieldErrors.message
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
                                    className="w-full bg-[#7143FE] hover:bg-[#5b32d6] disabled:bg-purple-300 text-white font-semibold py-3.5 sm:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-[#7143fe]/30 cursor-pointer disabled:cursor-not-allowed"
                                >
                                    {status.submitting ? (
                                        <>
                                            Sending... <Loader2 size={20} className="animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative w-full py-8 md:py-12 bg-[#F5F5F5] font-cabinet">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
                    <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-xl border border-gray-200/80">
                        <iframe
                            src="https://www.google.com/maps?q=22.3227457,70.7681992&hl=es;z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Alphabit Skill Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
