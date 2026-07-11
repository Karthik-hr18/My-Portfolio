"use client";

import React, { useState } from "react";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import CaseStudyModal from "@/components/project/CaseStudyModal";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Home() {
  const [hoveredProjectIds, setHoveredProjectIds] = useState<string[] | null>(null);
  const [hoveredSkillNames, setHoveredSkillNames] = useState<string[] | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleHoverSkill = (projectIds: string[] | null) => {
    setHoveredProjectIds(projectIds);
  };

  const handleHoverProject = (skills: string[] | null) => {
    setHoveredSkillNames(skills);
  };

  return (
    <div className="flex-1 flex flex-col relative bg-background text-foreground min-h-screen">
      {/* 🧭 NAVIGATION HEADER */}
      <header className="sticky top-0 left-0 w-full z-40 bg-white/85 backdrop-blur-md border-b border-border-translucent/80 shadow-sm shadow-slate-100/40 transition-all duration-300 hover:border-accent-indigo/35 hover:shadow-md select-none">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4.5 flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-extrabold tracking-tight text-foreground flex items-center gap-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-indigo"></span>
            Karthik.dev
          </motion.a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-2 text-[15px] font-semibold text-muted">
            <a href="#skills" className="px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-foreground transition-all duration-200">Skills</a>
            <a href="#projects" className="px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-foreground transition-all duration-200">Projects</a>
            <a href="#timeline" className="px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-foreground transition-all duration-200">Journey</a>
            <a href="#contact" className="px-3 py-2 rounded-xl hover:bg-slate-50 hover:text-foreground transition-all duration-200">Contact</a>
            <a 
              href="/assets/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-3 px-4 py-2 rounded-xl bg-accent-indigo text-white hover:bg-accent-indigo/90 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-bold shadow-sm"
            >
              Resume
            </a>
          </nav>

          {/* Social action widgets */}
          <div className="flex items-center gap-2 text-muted">
            <a 
              href="https://github.com/Karthik-hr18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground p-2 rounded-xl hover:bg-slate-50 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/karthik-h-r-71a9b1303/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground p-2 rounded-xl hover:bg-slate-50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="p-2 rounded-xl hover:bg-slate-50 hover:text-foreground transition-all"
              aria-label="Contact Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* 📐 SECTIONS RENDER */}
      <main className="flex-1">
        <Hero />
        <Skills 
          onHoverSkill={handleHoverSkill}
          onHoverProject={handleHoverProject}
          hoveredProjectIds={hoveredProjectIds}
          hoveredSkillNames={hoveredSkillNames}
        />
        <Projects 
          onHoverProject={handleHoverProject}
          hoveredProjectIds={hoveredProjectIds}
          onOpenCaseStudy={setActiveProject}
        />
        <Timeline />
        <Contact />
      </main>

      {/* 📑 DETAIL OVERLAY INTERFACE */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal 
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      {/* 🔎 STRUCTURED JSON-LD DATA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Karthik H R",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressCountry": "India"
            },
            "jobTitle": "Full-Stack Software Engineer",
            "alumniOf": "Bangalore Institute of Technology",
            "url": "https://github.com/Karthik-hr18",
            "knowsAbout": [
              "TypeScript",
              "JavaScript",
              "Python",
              "FastAPI",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Java",
              "Data Structures",
              "Algorithms"
            ]
          })
        }}
      />
    </div>
  );
}
