"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center py-20 bg-white overflow-hidden">
      {/* Subtle Background Accent Blob */}
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Info (Spans 7 columns on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 space-y-6 z-10"
          >
            {/* Profile Avatar + Placement Kicker row */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pb-2 select-none">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200/80 bg-slate-50 shadow-sm shrink-0 flex items-center justify-center">
                <img 
                  src="/assets/photo.jpg" 
                  alt="Karthik Profile"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-lg font-extrabold text-accent-indigo">K</span>
              </div>
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent-indigo uppercase border-l-2 border-border-translucent pl-5 py-3">
                Actively Preparing for SDE-1 Placements
              </h2>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              Hi, I'm <span className="text-accent-indigo bg-gradient-to-r from-accent-indigo to-indigo-500 bg-clip-text text-transparent">Karthik H R</span>.
              <br />
              I build structured, performant web applications.
            </motion.h1>

            {/* Short value statement */}
            <motion.p 
              variants={itemVariants} 
              className="text-muted text-sm md:text-[15px] leading-relaxed max-w-xl"
            >
              I am a Computer Science student based in Bangalore, focused on full-stack development and system design fundamentals. I design and build database-backed services, implement robust input validation and API logic, and create responsive, production-quality user interfaces. I enjoy writing clean, modular code and continuously learning new technologies to build scalable software.
            </motion.p>

            {/* Action Button Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-indigo font-semibold text-xs text-white hover:bg-accent-indigo/95 transition-all shadow-[0_4px_20px_rgba(108,99,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#timeline"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-border-translucent font-semibold text-xs text-muted hover:text-foreground hover:border-accent-indigo/50 transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                My Learning Journey
              </a>
            </motion.div>

            {/* Quick Social Connections */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-6 border-t border-border-translucent w-fit">
              <a
                href="https://github.com/Karthik-hr18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-h-r-71a9b1303/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:karthikhr676@gmail.com"
                className="text-muted hover:text-foreground transition-colors"
                title="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Code-themed Interactive Terminal Mockup (Spans 5 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-5 flex justify-center md:justify-end z-10 w-full"
          >
            <div className="w-full max-w-[400px] md:max-w-none rounded-2xl overflow-hidden border border-slate-800 bg-[#0d0d11] shadow-xl flex flex-col font-mono text-[11px] md:text-xs">
              {/* Terminal Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#13131a] border-b border-slate-800 select-none">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">karthik.ts</span>
                <span className="w-10"></span>
              </div>
              
              {/* Terminal Window Contents */}
              <div className="p-5 space-y-4 text-slate-300 leading-relaxed overflow-x-auto custom-scrollbar">
                <div>
                  <span className="text-indigo-400">const</span> <span className="text-sky-300">developer</span> = &#123;
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-400">"Karthik H R"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span> <span className="text-emerald-400">"Backend & Full-Stack Systems"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span> <span className="text-emerald-400">"Open to SDE-1 Opportunities"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span> &#123;
                    <div className="pl-4">
                      <span className="text-slate-400">languages:</span> [<span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Python"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">databases:</span> [<span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"MongoDB"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">frameworks:</span> [<span className="text-emerald-400">"Spring Boot"</span>, <span className="text-emerald-400">"FastAPI"</span>, <span className="text-emerald-400">"React"</span>]
                    </div>
                    <div className="pl-2">&#125;,</div>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span> <span className="text-emerald-400">"Bangalore, IN"</span>
                  </div>
                  &#125;;
                </div>
                
                <div className="border-t border-slate-800/60 pt-3">
                  <span className="text-slate-500">&gt; npm run deploy:portfolio</span>
                  <div className="text-emerald-400 mt-1">✓ Build completed successfully.</div>
                  <div className="text-slate-400">✓ Page status: Live & interactive.</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
