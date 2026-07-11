# Karthik H R | Software Development Engineer (SDE) Portfolio

A premium, recruiter-facing personal portfolio website designed to showcase full-stack engineering expertise, core systems study, and product-minded design decisions.

**Live Site:** [https://karthikhr.vercel.app/](https://karthikhr.vercel.app/)

---

## 🚀 Key Features

* **Interactive Skills Matrix:** A fluidly synced tech stack grid where hovering over a technology highlights the projects utilizing it (and vice versa), illustrating relational full-stack architectures.
* **Deep-Dive Case Study Center:** Custom centered technical reviews outlining real-world architectural decisions, database schemas, API design, challenges, engineering trade-offs, and typical recruiter interview questions.
* **Backend Study Timeline:** A transparent learning roadmap mapping academic achievements at Bangalore Institute of Technology (CGPA: 8.25), core full-stack practice, and active studies in Java backend architectures (Spring Boot, Redis caching, Docker containerization).
* **Modern Premium Visual Layer:** Engineered using standard `max-w-6xl` container spacing, alternating rhythm sections, code-themed terminal mockups, smooth scroll physics, and dark-on-light accessible contrast tokens (`bg-amber-100 text-amber-800`).
* **100% Mobile Responsive:** All multi-column layouts stack fluidly below the `md` breakpoint, with touch sensor delay adjustments for Kanban drag-and-drop actions.

---

## 🛠️ Technology Stack & Architecture

* **Framework:** [Next.js (App Router)](https://nextjs.org/) + React + TypeScript
* **Styling:** Vanilla Tailwind CSS (v4 configuration)
* **Animations:** Framer Motion (orchestrated exit/entry fades and translations)
* **Scroll Engine:** Lenis Smooth Scroll (integrated client-side provider)
* **Icons:** Lucide React + optimized inline brand SVGs (React, Node, Postgres, Docker, Git)
* **Performance & Safety:** Fully type-safe data components, compiled with Next.js Turbopack compiler, optimized with static page pre-rendering.

---

## 📂 Core Projects Featured

### 1. AI Document Summarizer
* **Stack:** FastAPI, Python, React, Tailwind CSS, LangChain
* **Overview:** A file processing service utilizing local LLM inference engines and semantic chunking to summarize large document payloads.

### 2. HireTrack ATS Platform
* **Stack:** TypeScript Monorepo, Node.js, Express.js, MongoDB, Mongoose, Zod, React, Cloudinary
* **Overview:** A collaborative applicant tracking system featuring shared workspace validation schemas (`@hiretrack/shared`) and diskless binary buffer uploads.

### 3. JobTracker Dashboard
* **Stack:** JavaScript, Node.js, Express.js, MongoDB, Joi, React, @dnd-kit, Framer Motion
* **Overview:** A touch-responsive personal job tracking pipeline with optimistic state synchronization and gesture isolation.

---

## 💻 Local Setup & Installation

Follow these steps to run the portfolio website locally on your system:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Karthik-hr18/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:3000](http://localhost:3000) in your browser to view the hot-reloading development preview.*

4. **Compile Production Build:**
   To test type safety and compile optimized static pages:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The site is configured for automatic CI/CD deployment on Vercel, tracking pushes to the `master` and `main` branches.

* **Production URL:** [https://karthikhr.vercel.app/](https://karthikhr.vercel.app/)
* **Platform:** Vercel (Next.js serverless architecture)
