"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef([]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills", hasDropdown: true },
        { name: "Career", href: "/career" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
    ];

    const activeIndex = navLinks.findIndex((link) =>
        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    );

    useEffect(() => {
        const el = linkRefs.current[activeIndex];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
        } else {
            setPillStyle((prev) => ({ ...prev, opacity: 0 }));
        }
    }, [activeIndex, pathname]);

    return (
        <>
            <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center w-full h-16 px-4 md:px-6">
                <div className="flex w-full max-w-[980px] items-center justify-between rounded-full bg-[#F5F5F5] border-[3px] border-[#DCDCDC] px-3 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 ml-3">
                        <img src="/Alphabit Skill Logo/Logo 1/1.png" alt="Logo" className=" h-9" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-7 -ml-6 relative">
                        {/* Animated glass pill for active link */}
                        <motion.span
                            className="absolute inset-y-0 rounded-full pointer-events-none"
                            style={{
                                background: `
                                    linear-gradient(
                                        170deg,
                                        rgba(255,255,255,0.55) 0%,
                                        rgba(200,180,255,0.28) 40%,
                                        rgba(124,58,237,0.18) 100%
                                    )
                                `,
                                boxShadow: `
                                    0 4px 24px rgba(124,58,237,0.18),
                                    0 1.5px 6px rgba(124,58,237,0.12),
                                    inset 0 1.5px 0 rgba(255,255,255,0.90),
                                    inset 0 -1px 0 rgba(124,58,237,0.10)
                                `,
                                backdropFilter: "blur(18px) saturate(1.8)",
                                WebkitBackdropFilter: "blur(18px) saturate(1.8)",
                                border: "1.5px solid rgba(255,255,255,0.60)",
                                outline: "1px solid rgba(124,58,237,0.18)",
                                outlineOffset: "-2px",
                            }}
                            animate={{
                                left: pillStyle.left - 10,
                                width: pillStyle.width + 20,
                                opacity: pillStyle.opacity,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 34,
                                opacity: { duration: 0.2 },
                            }}
                        />

                        {navLinks.map((link, i) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    ref={(el) => (linkRefs.current[i] = el)}
                                    className={`relative flex items-center text-[14px] font-[500] transition-colors tracking-wide px-1 py-1 ${
                                        isActive
                                            ? "text-[#7C3AED] font-[600]"
                                            : "text-[#444] hover:text-[#7C3AED]"
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className="ml-1 h-3.5 w-3.5 stroke-[2.5] opacity-50" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action Button */}
                    <div className="flex items-center gap-2 mr-1">
                        <Link
                            href="#join"
                            className="hidden lg:inline-flex h-[36px] items-center justify-center rounded-full bg-[#7143FE] px-6 text-[12px] font-[600] text-white transition-all hover:bg-[#682ad4] tracking-wide"
                        >
                            Join the Studio
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white border border-[#E5E5E5] text-[#222222]"
                        >
                            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-28 px-6 lg:hidden"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/"
                                        ? pathname === "/"
                                        : pathname.startsWith(link.href);

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                                            isActive
                                                ? "text-[#7C3AED]"
                                                : "text-zinc-900"
                                        }`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown className="h-5 w-5 stroke-[2.5]" />
                                        )}
                                    </Link>
                                );
                            })}
                            <div className="pt-4">
                                <Link
                                    href="#join"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-flex h-[46px] w-full max-w-[240px] items-center justify-center rounded-full bg-[#7C3AED] px-8 text-[15px] font-medium text-white"
                                >
                                    Join the Studio
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}