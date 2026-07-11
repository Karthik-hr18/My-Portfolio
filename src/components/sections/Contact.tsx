"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, ExternalLink, Send, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "karthikhr676@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border-translucent bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN: Call to action text block */}
        <div className="space-y-5">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent-indigo uppercase block mb-1 border-l-2 border-accent-indigo pl-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-bold text-foreground tracking-tight mt-3">Let's Connect</h3>
          <div className="h-0.5 w-12 bg-accent-indigo mt-3.5"></div>
          
          <p className="text-muted text-sm md:text-base leading-relaxed max-w-md pt-2">
            I am actively seeking SDE-1 backend or full-stack placements. Feel free to reach out for roles, project collaborations, or technical discussions.
          </p>

          <div className="space-y-4 pt-6 text-sm md:text-base text-muted">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-accent-indigo shrink-0" />
              <span className="font-semibold text-slate-800">Bangalore, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent-indigo shrink-0" />
              <span className="font-semibold text-slate-800">{emailAddress}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent-indigo shrink-0" />
              <span className="font-semibold text-slate-800">+91 8088734096</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Action card copy email wrapper (balanced and visually heavier) */}
        <div className="flex flex-col justify-center">
          <div className="p-8 rounded-2xl border border-border-translucent bg-slate-50/50 shadow-sm space-y-6">
            
            {/* Card Header with Placement Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-translucent">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-accent-indigo" />
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Email Me</h4>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider shadow-xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                Open for placements
              </span>
            </div>

            <p className="text-xs md:text-sm text-muted leading-relaxed">
              Click below to copy my primary email address to your clipboard or open your default mail client.
            </p>

            <div className="flex items-center gap-2 p-3.5 rounded-xl border border-border-translucent bg-white justify-between shadow-xs">
              <span className="text-xs md:text-sm text-foreground truncate font-mono select-all font-semibold pl-1">
                {emailAddress}
              </span>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white border border-border-translucent text-muted hover:text-foreground hover:bg-slate-50 hover:border-accent-indigo/50 transition-all cursor-pointer shadow-xs"
                  title="Copy email address"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check className="w-4 h-4 text-accent-emerald" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Copy className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                <a
                  href={`mailto:${emailAddress}`}
                  className="p-2 rounded-lg bg-white border border-border-translucent text-muted hover:text-foreground hover:bg-slate-50 hover:border-accent-indigo/50 transition-all flex items-center justify-center shadow-xs"
                  title="Open mail app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer credits bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-20 pt-8 border-t border-border-translucent flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Karthik. All rights reserved.</p>
        <p className="mt-2 md:mt-0 font-mono text-[10px]">
          Designed & engineered with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
