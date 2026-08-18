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
    id: "pricing",
    title: "AI Dynamic Pricing & Demand Forecasting Platform",
    shortDesc: "FastAPI backend and React frontend dynamic pricing platform integrating offline machine learning models (Prophet, XGBoost) and heuristic guardrails to optimize prices based on demand forecasting.",
    fullDesc: "A real-time price optimization engine integrating predictive machine learning models, custom background task workers, and robust inventory boundary control to maximize yields while minimizing stockout risk.",
    problem: "E-commerce and SaaS platforms lose revenue due to static pricing systems that fail to dynamically respond to volatile demand shifts, inventory limits, and market anomalies.",
    features: [
      "Multi-model forecasting pipeline caching offline-trained Prophet & XGBoost model inference states.",
      "Real-time heuristic pricing engine implementing inventory boundary checks & margin protection.",
      "Asynchronous worker process handling background ingestion, metrics computation, and anomaly alerting.",
      "Responsive React glassmorphic dashboard showcasing real-time price updates and demand forecasts.",
      "Containerized orchestration (Docker Compose) with isolated bridge networking and automated health checks."
    ],
    techStack: ["React", "FastAPI", "MongoDB", "Docker", "Python", "TypeScript", "XGBoost", "Prophet", "Scikit-learn", "Pandas"],
    challenges: "Loading multiple heavy pre-trained model artifacts dynamically during runtime blocks event loops, leading to request timeouts and resource starvation.",
    solution: "Created a memory-cached, thread-isolated model loading manager in FastAPI using asyncio.to_thread and Python's global interpreter state management to ensure zero-latency routing.",
    live: "https://ai-powered-dynamic-pricing-and-dema-psi.vercel.app/",
    limitations: [
      "Machine learning models are trained offline (Google Colab) and must be manually updated.",
      "Model state is stored in memory which does not persist across container scale-ups.",
      "Basic user management with mock credentials (JWT session validation is not fully integrated with Auth0/OAuth)."
    ],
    improvements: [
      "Integrate MLflow registry for automated, remote model versioning and online retraining loops.",
      "Move model artifact caching to Redis or shared object store (S3) for horizontal scaling.",
      "Implement enterprise role-based access control (RBAC) with OAuth2 / OpenID Connect."
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
  },
  {
    id: "expense",
    title: "MERN Expense Tracker",
    shortDesc: "Full-stack MERN expense tracker with per-user authentication, responsive analytics charts, and a modern dashboard.",
    fullDesc: "A personal finance management platform designed with user-level data isolation, secure authentication, and interactive visual charts (Recharts) to track income, expenses, and monthly financial summaries.",
    problem: "Users struggle to easily visualize their monthly income vs expense distribution and monitor real-time balance trends across customizable transaction categories.",
    features: [
      "Secure per-user registration and login with bcrypt hashing and JWT session tokens.",
      "Full CRUD operations on income and expense entries mapped to specific user accounts.",
      "Interactive data visualizations including bar charts, pie charts, and monthly trend lines via Recharts.",
      "Protected routes redirecting unauthorized guests to authentication pages.",
      "Efficient backend API pagination and category-based filtering using Express and Mongoose schemas."
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bootstrap", "Recharts", "Git"],
    challenges: "Ensuring secure, isolated per-user queries for all endpoints without polluting controllers with repetitive verification logic.",
    solution: "Developed a centralized JWT authentication middleware that extracts and verifies token payloads, injecting user identifiers directly into the request object to scope all database queries automatically.",
    github: "https://github.com/Karthik-hr18/Expense-tracker.git",
    live: "https://expense-tracker-dusky-seven-10.vercel.app/",
    limitations: [
      "Does not support multiple currencies or custom exchange rate updates.",
      "JWT tokens stored in localStorage are susceptible to XSS if client scripts are compromised.",
      "No automated receipt scanner or OCR parsing capability."
    ],
    improvements: [
      "Implement Secure HTTP-Only cookies to store session JWTs and mitigate XSS risks.",
      "Integrate an OCR engine (like Tesseract.js) to automate expense logging via receipt images.",
      "Add support for automated email reports and monthly budget limit alerts."
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
  { id: "typescript", name: "TypeScript", category: "languages", projectIds: ["hiretrack", "pricing"] },
  { id: "python", name: "Python", category: "languages", projectIds: ["pricing"] },
  
  // Frontend
  { id: "react", name: "React", category: "frontend", projectIds: ["pricing", "hiretrack", "jobtracker", "expense"] },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", projectIds: ["pricing", "hiretrack", "jobtracker"] },
  { id: "framer", name: "Framer Motion", category: "frontend", projectIds: ["jobtracker"] },
  { id: "dndkit", name: "@dnd-kit", category: "frontend", projectIds: ["jobtracker"] },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "backend", projectIds: ["hiretrack", "jobtracker", "expense"] },
  { id: "express", name: "Express.js", category: "backend", projectIds: ["hiretrack", "jobtracker", "expense"] },
  { id: "fastapi", name: "FastAPI", category: "backend", projectIds: ["pricing"] },
  
  // Databases
  { id: "mongodb", name: "MongoDB", category: "databases", projectIds: ["pricing", "hiretrack", "jobtracker", "expense"] },
  { id: "postgresql", name: "PostgreSQL", category: "databases", projectIds: [] },
  
  // DevOps / Tools
  { id: "docker", name: "Docker", category: "devops", projectIds: ["pricing"] },
  { id: "git", name: "Git", category: "devops", projectIds: ["pricing", "hiretrack", "jobtracker", "expense"] },
  { id: "cloudinary", name: "Cloudinary", category: "devops", projectIds: ["hiretrack"] },
  { id: "zod", name: "Zod", category: "devops", projectIds: ["hiretrack"] },
  { id: "joi", name: "Joi", category: "devops", projectIds: ["jobtracker"] },
  { id: "vitest", name: "Vitest", category: "devops", projectIds: ["hiretrack"] }
];
