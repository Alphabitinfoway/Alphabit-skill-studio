"use client";

import Link from "next/link";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { toSlug } from "@/data/skills";


/* ─── Dropdown data ──────────────────────────────────────────────── */
const skillsDropdown = {
    categories: [
        {
            id: "tech-coding",
            label: "Coding Programs",
            hoverColor: "#7C3AED",
            hoverBg: "rgba(124,58,237,0.10)",
            hoverBorder: "rgba(124,58,237,0.25)",
            hoverShadow: "inset 0 1px 0 rgba(255,255,255,0.80), 0 2px 8px rgba(124,58,237,0.12)",
            items: [
                "Full Stack Development",
                "Web Development",
                "Python for AI/ML",
                "Java Development",
                "Data Science & Analytics",
                "MERN Stack Development",
                ".NET Development",
                "Cyber Security",
                "Ethical Hacking",
                "QA Testing",
                "Gaming Development",
                "Cloud Computing",
                "Mobile App Development",
            ],
        },
        {
            id: "tech-noncoding",
            label: "Non-Coding Programs",
            hoverColor: "#34A853",
            hoverBg: "rgba(52,168,83,0.10)",
            hoverBorder: "rgba(52,168,83,0.28)",
            hoverShadow: "inset 0 1px 0 rgba(255,255,255,0.80), 0 2px 8px rgba(52,168,83,0.14)",
            items: [
                "UI/UX & Graphic Design",
                "ROR & Odoo & Golang",
                "E-Commerce (Shopify/WooCommerce)",
                "Digital Marketing",
                "Performance Marketing",
                "Social Media Marketing",
            ],
        },
        {
            id: "non-tech",
            label: "Non-Tech Field",
            hoverColor: "#FF5622",
            hoverBg: "rgba(255,86,34,0.10)",
            hoverBorder: "rgba(255,86,34,0.25)",
            hoverShadow: "inset 0 1px 0 rgba(255,255,255,0.80), 0 2px 8px rgba(255,86,34,0.12)",
            items: [
                "Human Resources (HR)",
                "Business Development Executive (BDE)",
                "Account Manager",
                "Sales Executive",
                "Marketing Manager",
                "Brand Manager",
                "Purchase Manager",
                "Digital Marketing Manager",
            ],
        },
    ],
};

/* ─── Skills Mega Dropdown ───────────────────────────────────────── */
function SkillsMegaDropdown() {
    const [activeCategory, setActiveCategory] = useState("tech-coding");

    const active = skillsDropdown.categories.find((c) => c.id === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-50"
            style={{ width: "680px" }}
        >
            {/* arrow tip — glass-tinted */}
            <div className="flex justify-center -mb-px">
                <div
                    className="w-3 h-3 rotate-45"
                    style={{
                        background: "rgba(245,245,248,0.85)",
                        borderLeft: "1px solid rgba(255,255,255,0.6)",
                        borderTop: "1px solid rgba(255,255,255,0.6)",
                        boxShadow: "-1px -1px 4px rgba(0,0,0,0.06)",
                    }}
                />
            </div>

            {/* ── Glassmorphism panel ── */}
            <div
                className="rounded-2xl overflow-hidden flex border"
                style={{
                    height: "440px",
                    background: "rgba(245,245,248,0.72)",
                    backdropFilter: "blur(24px) saturate(1.6)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                    border: "1px solid rgba(255,255,255,0.55)",
                    boxShadow:
                        "0 8px 48px rgba(0,0,0,0.14), 0 2px 12px rgba(0,0,0,0.08), inset 0 1.5px 0 rgba(255,255,255,0.80)",
                }}
            >
                {/* ── Left sidebar ── */}
                <div
                    className="w-[210px] flex-shrink-0 py-5 px-3 flex flex-col gap-1"
                    style={{
                        background: "rgba(235,235,240,0.60)",
                        borderRight: "1px solid rgba(255,255,255,0.50)",
                    }}
                >
                    <p className="text-[11px] font-[700] text-[#E53935] uppercase tracking-widest mb-2 px-2">
                        Fields
                    </p>

                    <div className="text-[11px] font-[700] text-[#7C3AED] uppercase tracking-widest px-2 mt-2 mb-1 select-none">
                        Tech Field
                    </div>

                    {skillsDropdown.categories.slice(0, 2).map((cat) => {
                        const isActive = activeCategory === cat.id;
                        const hex = cat.hoverColor.replace("#", "");
                        const r = parseInt(hex.substring(0, 2), 16);
                        const g = parseInt(hex.substring(2, 4), 16);
                        const b = parseInt(hex.substring(4, 6), 16);
                        const activeBg = `rgba(${r},${g},${b},0.12)`;
                        const activeBorder = `rgba(${r},${g},${b},0.22)`;

                        return (
                            <button
                                key={cat.id}
                                onMouseEnter={() => setActiveCategory(cat.id)}
                                onClick={() => setActiveCategory(cat.id)}
                                className="flex items-center justify-between w-full text-left pl-5 pr-3 py-2 rounded-xl text-[13px] transition-all duration-150 group"
                                style={{
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? cat.hoverColor : "#555",
                                    background: isActive ? activeBg : "transparent",
                                    backdropFilter: isActive ? "blur(8px)" : "none",
                                    border: isActive ? `1px solid ${activeBorder}` : "1px solid transparent",
                                    boxShadow: isActive ? "inset 0 1px 0 rgba(255,255,255,0.70)" : "none",
                                }}
                            >
                                <span>{cat.label}</span>
                                <ChevronRight
                                    className={`h-3.5 w-3.5 transition-opacity ${isActive ? "opacity-70" : "opacity-0 group-hover:opacity-40"
                                        }`}
                                />
                            </button>
                        );
                    })}

                    {skillsDropdown.categories.slice(2).map((cat) => {
                        const isActive = activeCategory === cat.id;
                        const hex = cat.hoverColor.replace("#", "");
                        const r = parseInt(hex.substring(0, 2), 16);
                        const g = parseInt(hex.substring(2, 4), 16);
                        const b = parseInt(hex.substring(4, 6), 16);
                        const activeBg = `rgba(${r},${g},${b},0.12)`;
                        const activeBorder = `rgba(${r},${g},${b},0.22)`;

                        return (
                            <button
                                key={cat.id}
                                onMouseEnter={() => setActiveCategory(cat.id)}
                                onClick={() => setActiveCategory(cat.id)}
                                className="flex items-center justify-between w-full text-left px-3 py-2.5 rounded-xl text-[13.5px] transition-all duration-150 group mt-4"
                                style={{
                                    fontWeight: isActive ? 600 : 500,
                                    color: isActive ? cat.hoverColor : "#555",
                                    background: isActive ? activeBg : "transparent",
                                    backdropFilter: isActive ? "blur(8px)" : "none",
                                    border: isActive ? `1px solid ${activeBorder}` : "1px solid transparent",
                                    boxShadow: isActive ? "inset 0 1px 0 rgba(255,255,255,0.70)" : "none",
                                }}
                            >
                                <span>{cat.label}</span>
                                <ChevronRight
                                    className={`h-3.5 w-3.5 transition-opacity ${isActive ? "opacity-70" : "opacity-0 group-hover:opacity-40"
                                        }`}
                                />
                            </button>
                        );
                    })}

                </div>

                {/* ── Right panel: items ── */}
                <div className="flex-1 py-5 px-5 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -6 }}
                            transition={{ duration: 0.15 }}
                        >
                            <div>
                                <p className="text-[11px] font-[700] text-[#E53935] uppercase tracking-widest mb-3">
                                    {active?.label}
                                </p>
                                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                                    {active?.items?.map((item) => (
                                        <Link
                                            key={item}
                                            href={`/skills/${toSlug(item)}`}
                                            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-[12.5px] font-[500] text-[#374151] transition-all duration-150"
                                            style={{
                                                background: "rgba(210,210,218,0.45)",
                                                backdropFilter: "blur(8px)",
                                                WebkitBackdropFilter: "blur(8px)",
                                                borderTop: "1px solid rgba(255,255,255,0.65)",
                                                borderLeft: "1px solid rgba(255,255,255,0.65)",
                                                borderRight: "1px solid rgba(255,255,255,0.65)",
                                                borderBottom: "2px solid rgba(0,0,0,0.10)",
                                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.80), 0 1px 3px rgba(0,0,0,0.06)",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = active.hoverBg;
                                                e.currentTarget.style.borderTop = `1px solid ${active.hoverBorder}`;
                                                e.currentTarget.style.borderLeft = `1px solid ${active.hoverBorder}`;
                                                e.currentTarget.style.borderRight = `1px solid ${active.hoverBorder}`;
                                                e.currentTarget.style.borderBottom = `2px solid ${active.hoverColor}`;
                                                e.currentTarget.style.boxShadow = active.hoverShadow;
                                                e.currentTarget.style.color = active.hoverColor;
                                                const dot = e.currentTarget.querySelector(".skill-dot");
                                                if (dot) { dot.style.background = active.hoverColor; dot.style.opacity = "1"; }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(210,210,218,0.45)";
                                                e.currentTarget.style.borderTop = "1px solid rgba(255,255,255,0.65)";
                                                e.currentTarget.style.borderLeft = "1px solid rgba(255,255,255,0.65)";
                                                e.currentTarget.style.borderRight = "1px solid rgba(255,255,255,0.65)";
                                                e.currentTarget.style.borderBottom = "2px solid rgba(0,0,0,0.10)";
                                                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.80), 0 1px 3px rgba(0,0,0,0.06)";
                                                e.currentTarget.style.color = "#374151";
                                                const dot = e.currentTarget.querySelector(".skill-dot");
                                                if (dot) { dot.style.opacity = "0"; }
                                            }}
                                        >
                                            <span
                                                className="skill-dot w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity"
                                                style={{ opacity: 0, background: active.hoverColor }}
                                            />
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Navbar ─────────────────────────────────────────────────────── */
export default function Navbar() {
    const pathname = usePathname();
    if (pathname === "/skills/curriculum") return null;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [skillsOpen, setSkillsOpen] = useState(false);
    const [mobileSkillsOpen, setMobileSkillsOpen] = useState(false);
    const [activeMobileCategory, setActiveMobileCategory] = useState("tech-coding");
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef([]);
    const dropdownRef = useRef(null);

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

    const isRegisterActive = pathname === "/register";

    useEffect(() => {
        const el = linkRefs.current[activeIndex];
        if (el) {
            const { offsetLeft, offsetWidth } = el;
            setPillStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
        } else {
            setPillStyle((prev) => ({ ...prev, opacity: 0 }));
        }
    }, [activeIndex, pathname]);

    /* close dropdown when clicking outside */
    useEffect(() => {
        function handleClick(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setSkillsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <>
            <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center w-full h-16 px-3 sm:px-6">
                <div className="flex w-full max-w-[980px] items-center justify-between rounded-full bg-[#F5F5F5] border-[3px] border-[#DCDCDC] px-3 sm:px-5 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 ml-1 sm:ml-2 shrink-0">
                        <img src="https://res.cloudinary.com/dir8eqqnk/image/upload/v1785216931/1_wou0fw.webp" alt="Logo" className="h-8 lg:h-9" />
                    </Link>

                    {/* Desktop Links (1024px+) */}
                    <div className="hidden lg:flex items-center justify-center flex-1 space-x-4 lg:space-x-6 relative">
                        {/* Animated glass pill */}
                        <motion.span
                            className="absolute h-[34px] my-auto top-0 bottom-0 rounded-full pointer-events-none"
                            style={{
                                background: `linear-gradient(170deg,rgba(255,255,255,0.55) 0%,rgba(200,180,255,0.28) 40%,rgba(124,58,237,0.18) 100%)`,
                                boxShadow: `0 4px 24px rgba(124,58,237,0.18), 0 1.5px 6px rgba(124,58,237,0.12), inset 0 1.5px 0 rgba(255,255,255,0.90), inset 0 -1px 0 rgba(124,58,237,0.10), inset 0 0 0 1px rgba(124,58,237,0.15)`,
                                backdropFilter: "blur(18px) saturate(1.8)",
                                WebkitBackdropFilter: "blur(18px) saturate(1.8)",
                                border: "1.5px solid rgba(255,255,255,0.60)",
                            }}
                            animate={{
                                left: pillStyle.left - 8,
                                width: pillStyle.width + 16,
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
                                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                            if (link.hasDropdown) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        ref={(el) => {
                                            dropdownRef.current = el;
                                            linkRefs.current[i] = el;
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onMouseEnter={() => setSkillsOpen(true)}
                                            onMouseLeave={() => setSkillsOpen(false)}
                                            onClick={() => setSkillsOpen(false)}
                                            className={`relative flex items-center text-[14px] font-[500] transition-colors tracking-wide px-1 py-1 ${isActive
                                                ? "text-[#7C3AED] font-[600]"
                                                : "text-[#444] hover:text-[#7C3AED]"
                                                }`}
                                        >
                                            {link.name}
                                            <motion.span
                                                animate={{ rotate: skillsOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="inline-flex ml-1"
                                            >
                                                <ChevronDown className="h-3.5 w-3.5 stroke-[2.5] opacity-50" />
                                            </motion.span>
                                        </Link>

                                        {/* Mega dropdown wrapper — keep open on hover */}
                                        <div
                                            onMouseEnter={() => setSkillsOpen(true)}
                                            onMouseLeave={() => setSkillsOpen(false)}
                                            className="absolute top-full left-1/2 -translate-x-1/2"
                                        >
                                            <AnimatePresence>
                                                {skillsOpen && <SkillsMegaDropdown />}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    ref={(el) => (linkRefs.current[i] = el)}
                                    className={`relative flex items-center text-[14px] font-[500] transition-colors tracking-wide px-1 py-1 ${isActive
                                        ? "text-[#7C3AED] font-[600]"
                                        : "text-[#444] hover:text-[#7C3AED]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action Button & Hamburger */}
                    <div className="flex items-center gap-2 mr-1 shrink-0">
                        <Link
                            href="/register"
                            className={`hidden lg:flex h-[36px] items-center justify-center rounded-full px-4 sm:px-6 text-[12px] font-[600] tracking-wide transition-all duration-150 ease-out shadow-[0_2px_8px_rgba(113,67,254,0.18)] active:translate-y-[2px] active:scale-[0.97] whitespace-nowrap ${isRegisterActive
                                    ? "bg-[#6E42F8] text-white ring-2 ring-[#7143FE] ring-offset-2 ring-offset-[#F5F5F5] translate-y-[2px] scale-[0.97]"
                                    : "bg-[#7143FE] text-white hover:bg-[#7143FE]/20 hover:text-[#7143FE] active:bg-[#6E42F8] active:text-white"
                                }`}
                        >
                            Join the Studio
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white border border-[#E5E5E5] text-[#222222] shrink-0"
                        >
                            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile / Tablet Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-28 px-6 lg:hidden overflow-y-auto pb-10"
                    >
                        <div className="flex flex-col space-y-2 text-center">
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                                if (link.hasDropdown) {
                                    return (
                                        <div key={link.name}>
                                            <button
                                                onClick={() => setMobileSkillsOpen((v) => !v)}
                                                className={`text-xl font-semibold flex items-center justify-center gap-2 transition-colors w-full ${isActive ? "text-[#7C3AED]" : "text-zinc-900"
                                                    }`}
                                            >
                                                {link.name}
                                                <motion.span
                                                    animate={{ rotate: mobileSkillsOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown className="h-5 w-5 stroke-[2.5]" />
                                                </motion.span>
                                            </button>

                                            <AnimatePresence>
                                                {mobileSkillsOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="overflow-hidden mt-3.5 mb-2 flex flex-col items-center w-full px-1"
                                                    >
                                                        {/* Category Segmented Control Pills */}
                                                        <div className="flex justify-center items-center gap-1.5 p-1 bg-gray-100/90 rounded-full border border-gray-200/60 max-w-full overflow-x-auto no-scrollbar">
                                                            {skillsDropdown.categories.map((cat) => {
                                                                const isActiveCat = activeMobileCategory === cat.id;
                                                                const shortLabel = cat.id === "tech-coding" ? "Coding" : cat.id === "tech-noncoding" ? "Non-Coding" : "Non-Tech";

                                                                return (
                                                                    <button
                                                                        key={cat.id}
                                                                        onClick={() => setActiveMobileCategory(cat.id)}
                                                                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                                                                            isActiveCat
                                                                                ? "bg-[#7C3AED] text-white shadow-sm"
                                                                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200/50"
                                                                        }`}
                                                                    >
                                                                        {shortLabel}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>

                                                        {/* Skill Items 2-Column Grid */}
                                                        <div className="grid grid-cols-2 gap-1.5 w-full mt-3">
                                                            {skillsDropdown.categories
                                                                .find((c) => c.id === activeMobileCategory)
                                                                ?.items.map((item) => {
                                                                    const itemSlug = toSlug(item);
                                                                    const isCurrentSkill = pathname === `/skills/${itemSlug}`;

                                                                    return (
                                                                        <Link
                                                                            key={item}
                                                                            href={`/skills/${itemSlug}`}
                                                                            onClick={() => {
                                                                                setMobileMenuOpen(false);
                                                                                setMobileSkillsOpen(false);
                                                                            }}
                                                                            className={`flex items-center justify-between p-2.5 rounded-xl text-[12px] font-medium leading-snug text-left transition-all duration-200 border ${
                                                                                isCurrentSkill
                                                                                    ? "bg-[#7C3AED]/10 text-[#7C3AED] font-bold border-[#7C3AED]/30"
                                                                                    : "bg-white/90 text-gray-800 border-gray-200/70 hover:border-[#7C3AED]/40 hover:bg-white"
                                                                            }`}
                                                                        >
                                                                            <span className="line-clamp-2">{item}</span>
                                                                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ml-1 ${isCurrentSkill ? "text-[#7C3AED]" : "text-gray-400"}`} />
                                                                        </Link>
                                                                    );
                                                                })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-xl font-semibold flex items-center justify-center gap-2 transition-colors ${isActive ? "text-[#7C3AED]" : "text-zinc-900"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            <div className="pt-4">
                                <Link
                                    href="/register"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`inline-flex h-[46px] w-full max-w-[240px] items-center justify-center rounded-full px-8 text-[15px] font-[600] transition-all duration-150 ease-out shadow-[0_2px_8px_rgba(113,67,254,0.18)] active:translate-y-[2px] active:scale-[0.97] ${isRegisterActive
                                            ? "bg-[#6E42F8] text-white ring-2 ring-[#7143FE] ring-offset-2 ring-offset-white translate-y-[2px] scale-[0.97]"
                                            : "bg-[#7143FE] text-white hover:bg-[#7143FE]/20 hover:text-[#7143FE] active:bg-[#6E42F8] active:text-white"
                                        }`}
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