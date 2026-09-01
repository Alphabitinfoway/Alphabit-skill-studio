"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Users, Eye, Sparkles, TrendingUp, ShieldCheck, X, Activity } from "lucide-react";
import { API_BASE_URL } from "@/config/api";

/**
 * Ultra-Interactive Visitor Counter Widget
 */
export default function VisitorCounter({
  placement = "inline",
  variant = "dark",
  showLive = true,
  label = "Total Visitors",
  icon = "users",
  apiEndpoint,
  hideOnError = false,
  className = "",
}) {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isNewVisitor, setIsNewVisitor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorCount() {
      setIsLoading(true);
      setHasError(false);

      try {
        const targetUrl = apiEndpoint || `${API_BASE_URL}/api/visitors/count`;
        const res = await fetch(targetUrl, { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}`);
        }

        const data = await res.json();
        const count = data?.totalCount ?? data?.count ?? data?.totalVisitors ?? null;

        if (isMounted) {
          if (typeof count === "number") {
            setVisitorCount(count);
            if (data?.isNewVisitor) {
              setIsNewVisitor(true);
            }
          } else {
            setHasError(true);
          }
        }
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
        if (isMounted) {
          setHasError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, [apiEndpoint]);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (hasError && hideOnError) {
    return null;
  }

  const isFloating = placement === "bottom-right" || placement === "bottom-left";
  const placementClasses = {
    "bottom-right": "fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6",
    "bottom-left": "fixed bottom-5 left-5 z-50 sm:bottom-6 sm:left-6",
    "inline": "relative inline-flex z-30",
  }[placement] || "relative inline-flex z-30";

  const isDarkTheme = variant === "dark";
  const IconComponent = icon === "eye" ? Eye : Users;

  return (
    <div className={`${placementClasses} ${className}`} ref={popoverRef}>
      {/* Main Interactive Badge */}
      <motion.button
        type="button"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="relative group focus:outline-none"
      >
        {/* Breathing Neon Outer Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6C4FF6] via-[#F5673B] to-[#9333EA] rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-500 group-hover:duration-200 animate-pulse" />

        {/* Badge Container */}
        <div className="relative flex items-center gap-3 bg-[#121216] border border-[#6C4FF6]/40 hover:border-[#6C4FF6] shadow-[0_4px_25px_rgba(108,79,246,0.25)] rounded-full px-4 py-2 sm:px-4.5 sm:py-2.5 transition-all duration-300">
          
          {/* Icon Badge with Gradient Pulse */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#6C4FF6] to-[#A78BFA] text-white shadow-md shadow-purple-500/30 group-hover:rotate-12 transition-transform duration-300">
            <IconComponent className="w-4 h-4 stroke-[2.4]" />
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20" />
          </div>

          {/* Text & Count Info */}
          <div className="flex flex-col text-left justify-center">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider font-sans text-gray-300 group-hover:text-white transition-colors">
                {label}
              </span>

              {showLive && (
                <span className="inline-flex items-center gap-1 bg-[#F5673B]/20 text-[#FF7A50] border border-[#F5673B]/40 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-tight">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5673B] opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F5673B]"></span>
                  </span>
                  LIVE
                </span>
              )}
            </div>

            {/* Counter Number */}
            <div className="mt-0.5 flex items-center gap-2 leading-none">
              {isLoading ? (
                <div className="h-4 w-12 bg-gray-700/60 animate-pulse rounded my-0.5" />
              ) : hasError ? (
                <span className="text-sm font-bold text-gray-400 font-sans">—</span>
              ) : (
                <CountUpNumber value={visitorCount} />
              )}

              {/* Sparkle micro badge */}
              <Sparkles className="w-3 h-3 text-[#F5673B] opacity-80 group-hover:scale-125 transition-transform" />
            </div>
          </div>
        </div>
      </motion.button>

      {/* Interactive Popover Dialog */}
      <AnimatePresence>
        {isPopoverOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute bottom-full mb-3 left-0 sm:left-auto sm:right-0 w-72 sm:w-80 bg-[#16161c] border border-[#6C4FF6]/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-2xl p-4 text-white z-50 backdrop-blur-xl`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#6C4FF6]/20 flex items-center justify-center text-[#A78BFA]">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white font-sans uppercase tracking-wider">
                    Community Traffic
                  </h4>
                  <p className="text-[10px] text-gray-400">Real-time Verified Visitor Insights</p>
                </div>
              </div>
              <button
                onClick={() => setIsPopoverOpen(false)}
                className="w-6 h-6 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stats Card Body */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#6C4FF6]" />
                  <span className="text-xs text-gray-300 font-sans">Unique Learners</span>
                </div>
                <span className="text-sm font-extrabold text-white font-sans">
                  {visitorCount !== null ? visitorCount.toLocaleString() : "—"}
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-gray-300 font-sans">Tracking Method</span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                  Unique IP Verified
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#F5673B]" />
                  <span className="text-xs text-gray-300 font-sans">Status</span>
                </div>
                <span className="text-[11px] font-semibold text-[#F5673B]">
                  {isNewVisitor ? "🎉 You are a new visitor!" : " Welcome back!"}
                </span>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-3 pt-2.5 border-t border-gray-800/80 flex items-center justify-between text-[10px] text-gray-400">
              <span>Alphabit Skill Studio</span>
              <span className="flex items-center gap-1 text-[#A78BFA]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CountUpNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-US")
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof value === "number") {
      animate(count, value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, value]);

  return (
    <motion.span
      ref={ref}
      className="text-sm sm:text-base font-extrabold tracking-tight font-sans text-white"
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}
