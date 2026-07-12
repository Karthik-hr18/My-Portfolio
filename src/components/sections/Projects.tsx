"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface ProjectsProps {
  onHoverProject: (skills: string[] | null) => void;
  hoveredProjectIds: string[] | null;
  onOpenCaseStudy: (project: Project) => void;
}

// Function to map a project id to a specific gradient banner layout
function getProjectBanner(id: string, title: string) {
  let gradient = "from-indigo-500 via-purple-500 to-pink-500";
  let patternCode = "AI_SUMMARIZER_PIPELINE";

  if (id === "hiretrack") {
    gradient = "from-blue-600 via-indigo-500 to-sky-500";
    patternCode = "ATS_TRACKING_AUDIT_LOG";
  } else if (id === "jobtracker") {
    gradient = "from-emerald-500 via-teal-500 to-indigo-500";
    patternCode = "OPTIMISTIC_KANBAN_SYNC";
  }

  return (
    <div className={`h-32 w-full bg-gradient-to-br ${gradient} relative flex items-center justify-between p-5 text-white/95 overflow-hidden border-b border-border-translucent select-none`}>
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
      
      {/* Mock Visual Code Structure in Banner */}
      <div className="z-10 font-mono text-[9px] text-white/70 space-y-1">
        <div>$ npm run build:{id}</div>
        <div className="text-emerald-300 font-semibold">&gt; [OK] {patternCode}</div>
      </div>
      
      <div className="z-10 font-mono text-[28px] font-extrabold text-white/10 select-none">
        {title.split(" ")[0]}
      </div>
    </div>
  );
}

export default function Projects({
  onHoverProject,
  hoveredProjectIds,
  onOpenCaseStudy,
}: ProjectsProps) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const handleMouseEnter = (project: Project) => {
    setActiveProjectId(project.id);
    onHoverProject(project.techStack);
  };

  const handleMouseLeave = () => {
    setActiveProjectId(null);
    onHoverProject(null);
  };

  const isProjectDimmed = (project: Project) => {
    if (hoveredProjectIds !== null) {
      return !hoveredProjectIds.includes(project.id);
    }
    if (activeProjectId !== null && activeProjectId !== project.id) {
      return true;
    }
    return false;
  };

  return (
    <section id="projects" className="py-24 border-t border-border-translucent bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Eyebrow kicker header */}
        <div className="mb-12">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent-indigo uppercase block mb-1 border-l-2 border-accent-indigo pl-3">
            Projects Grid
          </h2>
          <h3 className="text-3xl font-bold text-foreground tracking-tight mt-3">Core Application Portfolio</h3>
          <div className="h-0.5 w-12 bg-accent-indigo mt-3.5"></div>
          <p className="text-muted text-sm md:text-base mt-4 max-w-xl">
            Click on any project card for a detailed technical breakdown, including architecture decisions, trade-offs, and key implementation details.
          </p>
        </div>

        {/* Collapses to single-column stack below md breakpoint */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const dimmed = isProjectDimmed(project);
            const isHighlighted = activeProjectId === project.id || (hoveredProjectIds && hoveredProjectIds.includes(project.id));

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
                animate={{ 
                  opacity: dimmed ? 0.35 : 1,
                  y: isHighlighted ? -8 : 0
                }}
                transition={{ duration: 0.25 }}
                onClick={() => onOpenCaseStudy(project)}
                className={`
                  relative rounded-2xl border bg-white overflow-hidden cursor-pointer flex flex-col justify-between select-none shadow-sm transition-all duration-300 min-h-[420px]
                  ${isHighlighted 
                    ? "border-accent-indigo shadow-[0_12px_40px_rgba(108,99,255,0.12)]"
                    : "border-border-translucent hover:border-accent-indigo/60 hover:shadow-md"
                  }
                `}
              >
                {/* Visual Header Banner */}
                {getProjectBanner(project.id, project.title)}

                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  {/* Title & Copy */}
                  <div>
                    <h4 className="text-lg font-extrabold text-slate-950 tracking-tight mb-2 group-hover:text-accent-indigo transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-[13px] md:text-sm text-muted leading-relaxed line-clamp-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech stack wrapping pills list (compact padding, fully visible) */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200/60 text-slate-600 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Call to action line */}
                    <div className="flex items-center justify-between text-sm font-semibold text-accent-indigo pt-3.5 border-t border-[#f1f3f9]">
                      <span className="flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200">
                        Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <div className="flex items-center gap-1">
                        {project.github && (
                          <span 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, "_blank");
                            }}
                            className="text-muted hover:text-foreground p-1.5 rounded-lg hover:bg-slate-50 transition-all"
                            title="GitHub Code"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </span>
                        )}
                        {project.id !== "summarizer" && project.live && (
                          <span 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.live, "_blank");
                            }}
                            className="text-muted hover:text-foreground p-1.5 rounded-lg hover:bg-slate-50 transition-all"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
