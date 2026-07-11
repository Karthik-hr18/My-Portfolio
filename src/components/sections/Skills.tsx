"use client";

import React, { useState } from "react";
import { SKILLS, Skill } from "@/data/projects";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Settings } from "lucide-react";

interface SkillsSectionProps {
  onHoverSkill: (projectIds: string[] | null) => void;
  onHoverProject: (skills: string[] | null) => void;
  hoveredProjectIds: string[] | null;
  hoveredSkillNames: string[] | null;
}

// Helper lookup for custom SVG logos
function getSkillIcon(id: string) {
  const commonProps = "w-3.5 h-3.5 mr-2 shrink-0 text-slate-500 transition-colors";
  switch (id) {
    case "java":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 9.5c-.3 0-.6 0-.8.1-.3-.6-.7-1.1-1.2-1.5v.3c0 .8-.5 1.5-1.2 1.8.1-.2.2-.5.2-.8v-2c0-1.7-1.3-3.1-3-3.1h-.2c-1.7 0-3 1.4-3 3.1v2.1c0 .3.1.6.2.8-.7-.3-1.2-1-1.2-1.8v-.3c-.5.4-.9.9-1.2 1.5-.2-.1-.5-.1-.8-.1-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h11.2c1.4 0 2.5-1.1 2.5-2.5S20.9 9.5 19.5 9.5zM12 17.5c-3 0-5.5.8-5.5 1.8s2.5 1.8 5.5 1.8 5.5-.8 5.5-1.8-2.5-1.8-5.5-1.8z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm16.525 12.93c-.11-.375-.385-.688-.775-.825-.385-.125-.812-.015-1.1.285-.31.312-.41.775-.262 1.187.15.425.55.703 1 .71.745.023 1.3-.5 1.3-1.25V15.93zM15.4 12.16c-.34-.35-.85-.45-1.3-.26-.45.2-.74.65-.74 1.14v3.13c0 .8.65 1.45 1.45 1.45s1.45-.65 1.45-1.45v-3.13c0-.36-.14-.7-.41-.95l-.45-.43z" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm10.74 10.73h-1.8v1.36h1.8v-1.36zm2.84 0h-1.8v4.09h1.8v-4.09z" />
        </svg>
      );
    case "python":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1zm0-3c0 .28-.22.5-.5.5h-1c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3z" />
        </svg>
      );
    case "react":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "framer":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24v-8h8v8h-8zm-8-8V8h8v8H4zm8 0V8h8v8h-8zM4 8V0h16v8H4z" />
        </svg>
      );
    case "dndkit":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9l-3 3 3 3M19 9l3 3-3 3M9 5l3-3 3 3M9 19l3 3 3-3" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.5 14.25l-6.5 3.8-6.5-3.8V7.75l6.5-3.8 6.5 3.8v8.5z" />
        </svg>
      );
    case "express":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      );
    case "fastapi":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "mongodb":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c0 0-4.5 4.5-4.5 8.5 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5C16.5 6.5 12 2 12 2zm0 18v2" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "postgresql":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.66 0 3 1.34 3 3v3.58c0 .89.36 1.74 1 2.37v.44z" />
        </svg>
      );
    case "docker":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.937 0h2.119v-2.006h-2.119v2.006zm-2.94 0h2.12v-2.006h-2.12v2.006zm-2.94 0h2.119v-2.006H5.166v2.006zm-2.938 0h2.119v-2.006H2.228v2.006zm14.692-2.937h2.119v-2.006h-2.119v2.006zm-2.937 0h2.119v-2.006h-2.119v2.006zm-2.94 0h2.12v-2.006h-2.12v2.006zm11.753 5.875c-.143-.075-2.079-1.127-2.079-3.823h-2.119c0 3.738 2.651 4.887 2.685 4.902-.03.115-.412 1.321-1.968 1.321-.196 0-.395-.015-.59-.044-1.218-.175-2.119-1.319-2.119-2.61V9.072h-2.12v1.998H3.34V9.072H1.22v4.004c0 3.167 2.577 5.744 5.744 5.744h8.22c3.167 0 5.744-2.577 5.744-5.744 0-1.077-.311-2.083-.878-2.937z" />
        </svg>
      );
    case "git":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.697 11.238l9.083-9.082a1.644 1.644 0 0 1 2.327 0l1.724 1.724c.05.049.079.117.079.187v1.272a2.385 2.385 0 0 1-1.222 2.074l-2.029 1.157a2.394 2.394 0 0 1-2.176.046L7.142 9.074a.208.208 0 0 0-.294 0l-4.15 4.152a1.643 1.643 0 0 0 0 2.324l6.096 6.096a1.645 1.645 0 0 0 2.327 0l9.083-9.08a1.646 1.646 0 0 0 0-2.328l-1.724-1.723a.207.207 0 0 0-.294 0l-3.32 3.322c-.082.08-.216.08-.297-.002L11.536 9.873a.207.207 0 0 0-.293 0L2.697 18.423a1.643 1.643 0 0 0 0 2.326z" />
        </svg>
      );
    case "cloudinary":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    case "zod":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 10h6l-6 5h6" />
        </svg>
      );
    case "joi":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M9 11h6" />
        </svg>
      );
    case "vitest":
      return (
        <svg className={commonProps} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 2.2L12 9l-6.8-6.8L3 4.4 12 13.4l9-9z" />
          <path d="M12 14.2L5.2 7.4 3 9.6l9 9 9-9-2.2-2.2z" />
        </svg>
      );
    default:
      return <Settings className={commonProps} />;
  }
}

export default function Skills({
  onHoverSkill,
  onHoverProject,
  hoveredProjectIds,
  hoveredSkillNames,
}: SkillsSectionProps) {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const categories = [
    { id: "languages", name: "Languages", icon: Code2, color: "text-blue-500 border-blue-500/20" },
    { id: "frontend", name: "Frontend", icon: Layout, color: "text-pink-500 border-pink-500/20" },
    { id: "backend", name: "Backend", icon: Server, color: "text-accent-indigo border-accent-indigo/20" },
    { id: "databases", name: "Databases", icon: Database, color: "text-amber-500 border-amber-500/20" },
    { id: "devops", name: "DevOps & Tools", icon: Settings, color: "text-teal-500 border-teal-500/20" },
  ];

  const handleSkillMouseEnter = (skill: Skill) => {
    setActiveSkillId(skill.id);
    onHoverSkill(skill.projectIds);
  };

  const handleSkillMouseLeave = () => {
    setActiveSkillId(null);
    onHoverSkill(null);
  };

  const isSkillDimmed = (skill: Skill) => {
    if (hoveredSkillNames !== null) {
      return !hoveredSkillNames.includes(skill.name);
    }
    if (activeSkillId !== null && activeSkillId !== skill.id) {
      return true;
    }
    return false;
  };

  return (
    <section id="skills" className="py-24 border-t border-b border-border-translucent bg-[#f8f9fc]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Title eyebrow restyle */}
        <div className="mb-10">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent-indigo uppercase block mb-1 border-l-2 border-accent-indigo pl-3">
            Technical Matrix
          </h2>
          <h3 className="text-3xl font-bold text-foreground tracking-tight mt-3">Interactive Skill Relationships</h3>
          <div className="h-0.5 w-12 bg-accent-indigo mt-3.5"></div>
          <p className="text-muted text-sm md:text-base mt-4 max-w-xl">
            Hover over a technology to highlight which projects use it, or view the project grid below to see its specific stack dependencies.
          </p>
        </div>

        {/* 🟢 Proficiency Legend Row */}
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-8 pb-4 border-b border-border-translucent">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>Core Stack</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
            <span>Actively Learning</span>
          </div>
        </div>

        {/* Categories Rows Grid Layout - Collapse below md */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const catSkills = SKILLS.filter((s) => s.category === cat.id);
            const Icon = cat.icon;

            return (
              <div 
                key={cat.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-b border-border-translucent/65 pb-6 last:border-0 last:pb-0"
              >
                {/* Category Header (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-3 py-1">
                  <div className="p-2 rounded-xl bg-white border border-border-translucent shadow-xs">
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    {cat.name}
                  </span>
                </div>

                {/* Category Wrapping Tag Row (9 cols) */}
                <div className="md:col-span-9 flex flex-wrap gap-2.5">
                  {catSkills.map((skill) => {
                    const dimmed = isSkillDimmed(skill);
                    const isCoreSelected = activeSkillId === skill.id || (hoveredSkillNames && hoveredSkillNames.includes(skill.name));
                    const isExploring = skill.id === "java"; // Java is the exploring one from our timeline study path

                    return (
                      <motion.div
                        key={skill.id}
                        onMouseEnter={() => handleSkillMouseEnter(skill)}
                        onMouseLeave={handleSkillMouseLeave}
                        animate={{ 
                          opacity: dimmed ? 0.35 : 1,
                          scale: isCoreSelected ? 1.03 : 1
                        }}
                        transition={{ duration: 0.2 }}
                        className={`
                          flex items-center text-xs md:text-sm px-3.5 py-2.5 rounded-xl border transition-all duration-300 cursor-default select-none shadow-xs
                          ${isCoreSelected 
                            ? "bg-indigo-50 border-accent-indigo text-accent-indigo font-semibold shadow-sm"
                            : "bg-white border-border-translucent text-muted hover:border-accent-indigo/55 hover:text-foreground hover:bg-slate-50 hover:shadow-sm"
                          }
                        `}
                      >
                        {/* Inline tech icon */}
                        {getSkillIcon(skill.id)}
                        
                        {/* Name */}
                        <span className="mr-2">{skill.name}</span>

                        {/* Status dot indicator */}
                        {isExploring ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" title="Actively Learning" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Core Stack" />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
