"use client";

import { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        college: "",
        course: "",
        city: "",
        source: "Instagram",
        seminarBatch: "July 2026 Batch" // Default value as specified
    });

    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validations
        if (!formData.name || !formData.phone || !formData.email || !formData.college || !formData.course || !formData.city) {
            setStatus({ submitting: false, success: false, error: "Please fill out all fields." });
            return;
        }

        setStatus({ submitting: true, success: false, error: null });

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://skill-backend-admin.onrender.com";
            const response = await fetch(`${apiBaseUrl}/api/seminars/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngrok-skip-browser-warning": "true"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    college: "",
                    course: "",
                    city: "",
                    source: "Instagram",
                    seminarBatch: "July 2026 Batch"
                });
            } else {
                const data = await response.json().catch(() => ({}));
                console.error("Registration failed response data:", data);

                let errorMsg = "Failed to confirm seat. Please try again.";
                if (data.errors && Array.isArray(data.errors)) {
                    console.log("Detailed validation errors:", data.errors);
                    errorMsg = data.errors.map(err => {
                        if (typeof err === 'string') return err;
                        return err.message || err.msg || (err.path ? `${err.path}: ${err.msg}` : JSON.stringify(err));
                    }).join(" | ");
                } else if (data.message) {
                    errorMsg = data.message;
                } else if (data.error) {
                    errorMsg = typeof data.error === 'string' ? data.error : JSON.stringify(data.error);
                } else if (data.errors) {
                    errorMsg = typeof data.errors === 'object' ? Object.values(data.errors).join(", ") : JSON.stringify(data.errors);
                }

                setStatus({
                    submitting: false,
                    success: false,
                    error: errorMsg
                });
            }
        } catch (err) {
            setStatus({
                submitting: false,
                success: false,
                error: "Network error. Please check your connection and try again."
            });
        }
    };

    if (status.success) {
        return (
            <section className="w-full bg-[#F5F5F5] pb-[60px] md:pb-[100px] px-6 font-cabinet">
                <div className="max-w-[760px] mx-auto bg-white rounded-[32px] p-8 md:p-16 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] text-center relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-[28px] md:text-[34px] font-bold text-[#111] mb-4">
                        Seat Reserved Successfully!
                    </h2>
                    <p className="text-gray-500 max-w-[500px] text-[16px] leading-relaxed mb-6 font-medium">
                        Confirmation has been sent to your WhatsApp and email. We look forward to seeing you at the seminar!
                    </p>
                    <button
                        onClick={() => setStatus({ submitting: false, success: false, error: null })}
                        className="bg-[#7143FE] hover:bg-[#6336e8] text-white px-8 py-3 rounded-full font-bold text-[14px] transition-colors shadow-lg shadow-[#7143FE]/20"
                    >
                        Register Another Seat
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-[#F5F5F5] pb-[60px] md:pb-[100px] px-6 font-cabinet">
            <div className="max-w-[760px] mx-auto bg-white rounded-[32px] p-6 sm:p-10 md:p-12 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] relative">

                {/* Form Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-[30px] sm:text-[36px] md:text-[40px] leading-tight text-[#111] font-bold">
                        Reserve Your <span className="font-pp italic font-normal text-[#FF5622]">Seat</span>
                    </h2>
                    <p className="text-gray-500 text-[14px] sm:text-[15px] font-medium mt-2">
                        Takes less than a minute. Confirmation sent by WhatsApp & email.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {status.error && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-[14px] font-semibold border border-red-100 text-center">
                            ⚠️ {status.error}
                        </div>
                    )}

                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+91 XXXXX XXXXX"
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-bold text-[#111]">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                            required
                        />
                    </div>

                    {/* College & Course Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">College / School Name</label>
                            <input
                                type="text"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                placeholder="Your institute name"
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">Current Course / Stream</label>
                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="e.g. BCA, 12th Science"
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            />
                        </div>
                    </div>

                    {/* City & Source Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Your city"
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#111]">How did you hear about us?</label>
                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                className="w-full h-[52px] px-4 rounded-xl border border-gray-200 focus:border-[#7143FE] focus:ring-1 focus:ring-[#7143FE] outline-none text-[15px] text-[#333] transition-all bg-gray-50/50"
                                required
                            >
                                <option value="Instagram">Instagram</option>
                                <option value="Friend / Referral">Friend / Referral</option>
                                <option value="College Notice">College Notice</option>
                                <option value="Google Search">Google Search</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* WhatsApp Consent Checkbox */}
                    <div className="flex items-start gap-3 pt-2">
                        <input
                            type="checkbox"
                            id="consent"
                            className="mt-1 w-4 h-4 text-[#7143FE] focus:ring-[#7143FE] border-gray-300 rounded cursor-pointer shrink-0"
                            required
                            defaultChecked
                        />
                        <label htmlFor="consent" className="text-[13px] sm:text-[14px] text-gray-500 leading-normal font-medium cursor-pointer">
                            I agree to receive seminar updates on WhatsApp/email and accept the{" "}
                            <span className="text-[#7143FE] hover:underline font-semibold">terms & conditions</span>.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status.submitting}
                        className="w-full h-[56px] bg-[#7143FE] hover:bg-[#6336e8] disabled:bg-gray-400 text-white rounded-full text-[15px] font-bold transition-all shadow-lg shadow-[#7143FE]/20 flex items-center justify-center gap-2 mt-4"
                    >
                        {status.submitting ? "Confirming Seat..." : "Confirm My Seat →"}
                    </button>
                </form>

                {/* Footer Badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-[12px] sm:text-[13.5px] font-bold text-gray-500 border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-500 text-[16px]">✓</span> No cost, ever
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-500 text-[16px]">✓</span> Certificate included
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-emerald-500 text-[16px]">✓</span> 450+ already registered
                    </div>
                </div>

            </div>
        </section>
    );
}
