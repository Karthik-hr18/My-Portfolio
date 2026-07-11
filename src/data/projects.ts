export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  problem: string;
  features: string[];
  techStack: string[];
  challenges: string;
  solution: string;
  github?: string;
  live?: string;
  limitations: string[];
  improvements: string[];
  architecture?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "summarizer",
    title: "AI Document Summarizer",
    shortDesc: "FastAPI + React multi-format document parser with hybrid local LED / Groq cloud inference models.",
    fullDesc: "A complete document processing pipeline that parses PDFs, DOCX, and text files, handles token-limit overflows with recursive chunking, and produces structured analytical summaries.",
    problem: "Hiring managers and developers struggle to manually read dense PDFs or copy-paste text into standard LLMs, often running into token limits or risking data privacy leaks.",
    features: [
      "Dynamic file parser for PDF (PyPDF2), DOCX (python-docx), and raw Text/MD.",
      "Dual execution modes: high-speed cloud Llama-3.3 (Groq API) or private offline inference.",
      "Token-aware overlapping chunk boundaries to prevent structural sentence cuts.",
      "Recursive summarization loop that compresses combined summaries until they fit input windows.",
      "Stateless backend structure wrapped inside a production-grade Docker container."
    ],
    techStack: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Docker", "React", "Tailwind CSS", "Git", "Groq API"],
    challenges: "Running heavy text parsers and cloud requests synchronously in FastAPI blocks the single-threaded event loop, freezing access for other concurrent sessions.",
    solution: "Shifted all file writes, text extraction, and API calls to FastAPI's background thread pool using 'asyncio.to_thread', ensuring zero-latency route execution.",
    github: "https://github.com/Karthik-hr18/AI_DOCUMENT_SUMMARIZER.git",
    limitations: [
      "Uses local uploads folder which breaks horizontal auto-scaling nodes.",
      "Token stored in localStorage making it vulnerable to XSS.",
      "Synchronous REST client locks request sockets on extremely long files (200+ pages)."
    ],
    improvements: [
      "Decouple storage layer by streaming uploads directly to AWS S3 buckets using pre-signed URLs.",
      "Shift processing to a background task queue (Celery + Redis) with WebSocket status broadcasts.",
      "Configure httpOnly cookie transport for secure JWT session storage."
    ]
  },
  {
    id: "hiretrack",
    title: "HireTrack ATS Platform",
    shortDesc: "TypeScript monorepo applicant tracking system with shared Zod validation schemas and Cloudinary integration.",
    fullDesc: "A collaborative corporate platform for tracking applicants, scheduling technical rounds, submitting interview scorecards, and maintaining stage audit logs.",
    problem: "Recruiters and hiring managers lose candidate data and alignment when tracking applications via chaotic emails or standard flat lists.",
    features: [
      "Full-stack Monorepo structure with shared TypeScript package (@hiretrack/shared).",
      "Dynamic experience-gating rules that auto-reject applicants falling below minimum YOE.",
      "Polymorphic activity logging auditing candidates' history through pipelines.",
      "Collaborative scorecards tracking rating parameters, recommendations, and compensation.",
      "Direct binary buffer streaming to Cloudinary, avoiding disk clutter in stateless containers."
    ],
    techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Zod", "React", "Tailwind CSS", "Git", "Vitest", "Cloudinary"],
    challenges: "Client-side and server-side validation schemas can drift over time, causing database insertion crashes or false successes.",
    solution: "Compiled all schemas inside a shared workspace package (@hiretrack/shared) using Zod, ensuring compile-time constraints bind both React client and Express API.",
    github: "https://github.com/Karthik-hr18/HireTrack.git",
    live: "https://hire-track-client.vercel.app/",
    limitations: [
      "No integrated AI matching or resume parser modules.",
      "Mongoose populate operations run multiple database queries (no direct joins).",
      "Mongoose writes and activity logging are not encapsulated in transactions."
    ],
    improvements: [
      "Incorporate the AI Summarizer engine to parse resume text directly upon submission.",
      "Configure Mongoose transactions (session.withTransaction) to ensure activity log synchronization.",
      "Implement a Redis-backed message queue to trigger interview schedule reminders."
    ]
  },
  {
    id: "jobtracker",
    title: "JobTracker Dashboard",
    shortDesc: "Interactive drag-and-drop Kanban board optimized for touchscreens, featuring optimistic UI state sync.",
    fullDesc: "A personal dashboard for tracking active job applications, styled like a SaaS dashboard with fast interactive status pipelines.",
    problem: "Standard Kanban implementations are sluggish due to API request latencies, and drag gestures conflict with swipe scrolling on mobile web interfaces.",
    features: [
      "Fluid drag-and-drop column pipelines built with @dnd-kit/core.",
      "Optimistic React state updates that snap cards instantly, rolling back only on API failures.",
      "Touch sensor constraint tuning to isolate vertical page scrolling from cards dragging.",
      "Mobile-responsive fallback rendering column swiping tabs based on client swipe gesture listeners.",
      "Standard security headers integrated via Helmet.js and backend validation using Joi schemas."
    ],
    techStack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Joi", "React", "Tailwind CSS", "Git", "@dnd-kit", "Framer Motion"],
    challenges: "HTML5 drag-and-drop controls conflict with browser vertical scrolling on mobile touch screens, locking the page.",
    solution: "Tuned dnd-kit sensor parameters, adding a 250ms activation delay and 8px movement constraint on mobile touch triggers.",
    github: "https://github.com/Karthik-hr18/JobTracker.git",
    live: "https://job-tracker-git-master-karthik-hr18s-projects.vercel.app/",
    limitations: [
      "Validation schema duplication between frontend components and Joi backend rules.",
      "JWT storage in localStorage lacks HttpOnly cookie security.",
      "Does not support manual card sorting inside a specific stage column."
    ],
    improvements: [
      "Refactor backend validation to share unified TypeScript types.",
      "Add a sortOrder key to Mongoose schemas to support persistent relative card ordering.",
      "Add automated email alert hooks when status moves to 'Interview'."
    ]
  }
];

export interface Skill {
  id: string;
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "devops";
  projectIds: string[];
}

export const SKILLS: Skill[] = [
  // Languages
  { id: "java", name: "Java", category: "languages", projectIds: [] },
  { id: "javascript", name: "JavaScript", category: "languages", projectIds: ["jobtracker"] },
  { id: "typescript", name: "TypeScript", category: "languages", projectIds: ["hiretrack"] },
  { id: "python", name: "Python", category: "languages", projectIds: ["summarizer"] },
  
  // Frontend
  { id: "react", name: "React", category: "frontend", projectIds: ["summarizer", "hiretrack", "jobtracker"] },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", projectIds: ["summarizer", "hiretrack", "jobtracker"] },
  { id: "framer", name: "Framer Motion", category: "frontend", projectIds: ["jobtracker"] },
  { id: "dndkit", name: "@dnd-kit", category: "frontend", projectIds: ["jobtracker"] },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", projectIds: ["hiretrack", "jobtracker"] },
  { id: "express", name: "Express.js", category: "backend", projectIds: ["hiretrack", "jobtracker"] },
  { id: "fastapi", name: "FastAPI", category: "backend", projectIds: ["summarizer"] },
  
  // Databases
  { id: "mongodb", name: "MongoDB", category: "databases", projectIds: ["hiretrack", "jobtracker"] },
  { id: "postgresql", name: "PostgreSQL", category: "databases", projectIds: ["summarizer"] },
  
  // DevOps / Tools
  { id: "docker", name: "Docker", category: "devops", projectIds: ["summarizer"] },
  { id: "git", name: "Git", category: "devops", projectIds: ["summarizer", "hiretrack", "jobtracker"] },
  { id: "cloudinary", name: "Cloudinary", category: "devops", projectIds: ["hiretrack"] },
  { id: "zod", name: "Zod", category: "devops", projectIds: ["hiretrack"] },
  { id: "joi", name: "Joi", category: "devops", projectIds: ["jobtracker"] },
  { id: "vitest", name: "Vitest", category: "devops", projectIds: ["hiretrack"] }
];
