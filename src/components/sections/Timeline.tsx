"use client";

import React from "react";
import { GraduationCap, Code2, Rocket, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

export default function Timeline() {
  const roadmap = [
    {
      id: "edu",
      title: "Computer Science Engineering",
      subtitle: "Bangalore Institute of Technology (CGPA: 8.25)",
      time: "Current Student (Placement Prep)",
      desc: "Developing strong core foundations in Data Structures & Algorithms, Java object-oriented principles, and fundamental Database Management Systems (DBMS).",
      icon: GraduationCap,
      color: "border-blue-200 text-blue-600 bg-blue-50",
    },
    {
      id: "stack",
      title: "Full-Stack Development (TypeScript & Python)",
      subtitle: "Core Practice Projects",
      time: "Hands-on Experience",
      desc: "Built complete applications including the HireTrack TS monorepo validation platform, FastAPI local inference parsers, and optimistic UX state Kanban trackers.",
      icon: Code2,
      color: "border-indigo-200 text-accent-indigo bg-indigo-50",
    },
    {
      id: "java",
      title: "Current Learning: Backend Engineering",
      subtitle: "Independent Backend Study",
      time: "In Progress",
      desc: "Expanding knowledge into Spring Boot enterprise patterns, Redis caching, Docker container networking, and core microservice architectural patterns.",
      icon: BrainCircuit,
      color: "border-amber-200 text-amber-800 bg-amber-100",
    },
    {
      id: "career",
      title: "Career Objective",
      subtitle: "SDE-1 / Software Backend Placements",
      time: "Target Goal",
      desc: "Looking to join a backend or full-stack engineering team where I can contribute to scalable, well-architected systems. Committed to writing clean, maintainable code and continuously improving my understanding of system design and distributed architecture.",
      icon: Rocket,
      color: "border-teal-200 text-teal-600 bg-teal-50",
    },
  ];

  return (
    <section id="timeline" className="py-24 border-t border-b border-border-translucent bg-[#f8f9fc]/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-accent-indigo uppercase block mb-1 border-l-2 border-accent-indigo pl-3">
            My Journey
          </h2>
          <h3 className="text-3xl font-bold text-foreground tracking-tight mt-3">Timeline & Learning Path</h3>
          <div className="h-0.5 w-12 bg-accent-indigo mt-3.5"></div>
          <p className="text-muted text-sm md:text-base mt-4 max-w-xl">
            A transparent look at my current academic training, core stack development, and active backend learning journey.
          </p>
        </div>

        <div className="relative border-l border-border-translucent ml-4 md:ml-6 space-y-12">
          {roadmap.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Visual bullet node */}
                <div 
                  className={`
                    absolute -left-[17px] md:-left-[21px] top-1.5 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300
                    ${item.color} group-hover:scale-110 shadow-sm
                  `}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest block mb-1">
                    {item.time}
                  </span>
                  <h4 className="text-base font-bold text-foreground tracking-tight mb-0.5">
                    {item.title}
                  </h4>
                  <h5 className="text-sm font-semibold text-accent-indigo mb-3">
                    {item.subtitle}
                  </h5>
                  <p className="text-[13px] md:text-sm text-muted leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
