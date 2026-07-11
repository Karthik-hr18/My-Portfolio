"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { X, ExternalLink, ShieldAlert, Code2, Cpu, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Prevent page scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Panel (Center pop-up modal) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-4xl h-[90vh] md:h-[85vh] bg-white border border-border-translucent rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-border-translucent bg-[#f8f9fc]/80 backdrop-blur-md">
          <div>
            <h3 className="text-xs font-semibold text-accent-indigo uppercase tracking-wider mb-1">
              Case Study Review
            </h3>
            <h2 className="text-xl font-bold text-foreground tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white border border-border-translucent text-muted hover:text-foreground hover:bg-slate-50 hover:border-accent-indigo/50 transition-all cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scroll Panel */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8 custom-scrollbar">
          {/* External Links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border-translucent text-xs font-medium text-muted hover:text-foreground hover:bg-slate-50 hover:border-accent-indigo/50 transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Repository
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-indigo text-xs font-medium text-white hover:bg-accent-indigo/90 transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4" /> Live System Demo
              </a>
            )}
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground border-l-2 border-accent-indigo pl-2">
              1. Overview
            </h4>
            <p className="text-muted text-sm leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground border-l-2 border-accent-indigo pl-2">
              2. Problem Statement
            </h4>
            <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground border-l-2 border-accent-indigo pl-2">
              3. Technology Matrix
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded bg-[#f8f9fc] border border-border-translucent text-[#6b7280] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground border-l-2 border-accent-indigo pl-2">
              4. Key Engineering Implementations
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                  <span className="text-accent-indigo font-bold mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottlenecks & Design Decisions */}
          <div className="p-5 rounded-xl bg-slate-50 border border-border-translucent space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent-indigo" />
              <h5 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Engineering Challenge & Decisions
              </h5>
            </div>
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase text-accent-indigo tracking-wider">
                Bottleneck Encountered:
              </div>
              <p className="text-xs text-muted leading-relaxed">{project.challenges}</p>
              <div className="text-xs font-bold uppercase text-accent-emerald tracking-wider pt-2">
                Implementation Solution:
              </div>
              <p className="text-xs text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tradeoffs & Limits (Brutally Honest Audit) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Limitations */}
            <div className="p-5 rounded-xl bg-red-50 border border-red-200/50 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-red-700">
                <ShieldAlert className="w-4 h-4" />
                <h5 className="text-xs font-semibold uppercase tracking-wider">
                  Current Sandbox Limitations
                </h5>
              </div>
              <ul className="space-y-2">
                {project.limitations.map((limit, idx) => (
                  <li key={idx} className="text-xs text-red-800 leading-relaxed flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Production improvements */}
            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200/50 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700">
                <Wrench className="w-4 h-4" />
                <h5 className="text-xs font-semibold uppercase tracking-wider">
                  Production Evolvement Path
                </h5>
              </div>
              <ul className="space-y-2">
                {project.improvements.map((imp, idx) => (
                  <li key={idx} className="text-xs text-emerald-800 leading-relaxed flex items-start gap-2">
                    <span className="text-accent-emerald">•</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interview Questions */}
          <div className="space-y-4 pt-4 border-t border-border-translucent">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Potential Technical Interview Questions
            </h4>
            <div className="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-border-translucent shadow-xs">
              {project.id === "summarizer" && (
                <>
                  <p className="text-foreground font-medium">Q: "FastAPI is single-threaded. How does it handle heavy processing like PDF extraction without locking up other users?"</p>
                  <p className="text-muted italic mt-1">A: "We execute synchronous, CPU-bound parsing operations (like PyPDF2 and docx reader) inside FastAPI's internal thread pool using asyncio.to_thread. This shifts processing off the main event loop so concurrent I/O operations are never blocked."</p>
                </>
              )}
              {project.id === "hiretrack" && (
                <>
                  <p className="text-foreground font-medium">Q: "What is the benefit of a Monorepo structure, and how did you configure npm workspaces for this project?"</p>
                  <p className="text-muted italic mt-1">A: "The main benefit is shared code validation. I defined an npm workspace mapping packages/shared. This allows the backend and frontend to import the exact same Zod validation schemas, ensuring complete API synchronization and preventing validation mismatches."</p>
                </>
              )}
              {project.id === "jobtracker" && (
                <>
                  <p className="text-foreground font-medium">Q: "How did you solve the problem of HTML5 drag-and-drop actions conflicting with page scrolling on mobile touch screens?"</p>
                  <p className="text-muted italic mt-1">A: "We configured custom Dnd-kit sensors: a MouseSensor for desktops, and a TouchSensor with a 250ms activation delay and an 8px movement constraint limit for mobile screens. This ensures scrolling happens normally unless a card is pressed and held."</p>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
