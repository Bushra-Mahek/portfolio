import { useState, useEffect, type ChangeEvent } from "react";
import {
  Terminal,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Database,
  Award,
  Trophy,
  Mail,
  FileText,
  Camera,
  RotateCcw,
  ChevronDown,
  Zap,
  CheckCircle2,
  GitBranch,
  Globe,
  ShieldCheck,
  Flame,
  Target,
  Menu,
  X,
} from "lucide-react";

/**
 * ============================================================================
 *  EASY CUSTOMIZATION ZONE — EDIT YOUR LINKS, PHOTO & DETAILS HERE!
 *  Everything below is wired directly into the UI. Just paste your URLs
 *  inside the quotes ("") whenever you're ready!
 * ============================================================================
 */

const PROFILE_CONFIG = {
  name: "Bushra Mahek",
  brandLogo: "BUSHRA.DEV",
  roleBadge: "Level 3 • Applied AI & Full-Stack Engineer",
  headline: "Building Production Agentic AI & Full-Stack Systems.",
  // TODO: INSERT YOUR PHOTO URL HERE (e.g., "/profile.jpg" or a hosted image link)
  // Leave as "" to display the built-in Cyber-Avatar frame + live local preview uploader!
  photoUrl: "",
  location: "India",
  availability: "Open to Applied AI & Full-Stack Engineering Roles",
  summary:
    "Applied AI & Production Full-Stack Engineer focused on Layer 3 AI Engineering—turning foundation LLMs into reliable, real-world software products. I bridge deterministic full-stack architecture (React, Node.js, Express, PostgreSQL) with autonomous agentic workflows (LangChain.js, LangGraph.js, Hybrid RAG, and structured-output pipelines) while sharpening algorithmic problem-solving on LeetCode and CodeChef.",
};

const CONTACT_LINKS = {
  github: "https://github.com/Bushra-Mahek",
  leetcode: "https://leetcode.com/u/Bushra_mahek_/",
  codechef: "https://www.codechef.com/users/bushramahek09",
  // TODO: INSERT YOUR LINKEDIN URL BELOW
  linkedin: "",
  // TODO: INSERT YOUR EMAIL ADDRESS BELOW (e.g., "bushra@example.com")
  email: "",
  // TODO: INSERT YOUR RESUME PDF / GOOGLE DRIVE LINK BELOW
  resumeUrl: "",
};

const PROJECTS_DATA = [
  {
    id: "routerag",
    title: "RouteRAG",
    tagline: "Citation-Grounded Web & Document Research Workspace",
    category: "Applied AI • Hybrid RAG",
    featured: true,
    description:
      "Full-stack AI research platform combining a real-time LCEL Web Search Agent with a private LightRAG document knowledge base. Engineered with source-grounded citations, cross-origin production security, and live cloud deployment.",
    techStack: ["React", "Node.js", "Express", "LangChain.js", "LightRAG", "Render"],
    // Live link already wired from your Render deployment!
    liveUrl: "https://routerag-client.onrender.com",
    // TODO: REPLACE WITH EXACT REPO URL IF NEEDED (currently points to your GitHub profile)
    repoUrl: "https://github.com/Bushra-Mahek",
  },
  {
    id: "evident-ai",
    title: "Evident.ai",
    tagline: "Evidence-Grounded AI Verification & Structured-Output Agent",
    category: "Agentic AI • LangGraph.js",
    featured: true,
    description:
      "Autonomous verification workflow built with LangGraph.js and structured-output schemas to extract, cross-check, and audit claims against verifiable evidence with deterministic JSON contracts.",
    techStack: ["LangGraph.js", "LangChain.js", "React", "Node.js", "Structured Outputs"],
    // TODO: INSERT LIVE DEMO URL FOR EVIDENT.AI (leave "" if local/repo-only)
    liveUrl: "",
    // TODO: INSERT EXACT GITHUB REPO URL FOR EVIDENT.AI
    repoUrl: "https://github.com/Bushra-Mahek",
  },
  {
    id: "outbox-scheduler",
    title: "Outbox Scheduler",
    tagline: "Fault-Tolerant Transactional Outbox & Task Scheduler",
    category: "Distributed Backend • Reliability",
    featured: false,
    description:
      "Backend reliability engine implementing the Transactional Outbox pattern with PostgreSQL and Node.js to guarantee at-least-once event delivery, retry backoff, and zero dual-write inconsistencies.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Transactional Outbox", "REST APIs"],
    // TODO: INSERT LIVE DEMO URL FOR OUTBOX SCHEDULER (if deployed)
    liveUrl: "",
    // TODO: INSERT EXACT GITHUB REPO URL FOR OUTBOX SCHEDULER
    repoUrl: "https://github.com/Bushra-Mahek",
  },
  {
    id: "web-blog",
    title: "Web Blog Platform",
    tagline: "Full-Stack Publishing & Developer Content Engine",
    category: "Full-Stack Web • React & Node",
    featured: false,
    description:
      "End-to-end full-stack blogging application featuring clean component architecture, RESTful CRUD endpoints, persistent database storage, and responsive dark-first reading UX.",
    techStack: ["React", "JavaScript (ES6+)", "Node.js", "Express", "PostgreSQL"],
    // TODO: INSERT LIVE DEMO URL FOR WEB BLOG (if deployed)
    liveUrl: "",
    // TODO: INSERT EXACT GITHUB REPO URL FOR WEB BLOG
    repoUrl: "https://github.com/Bushra-Mahek",
  },
];

const SKILLS_GROUPS = [
  {
    title: "Applied AI & Agentic Systems (Level 3)",
    icon: "ai",
    accent: "pink",
    skills: [
      "LangChain.js",
      "LangGraph.js",
      "RAG & LightRAG",
      "Structured-Output Agents",
      "Tool Calling & Routing",
      "Context & Prompt Engineering",
      "Citation Grounding",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: "frontend",
    accent: "violet",
    skills: [
      "React.js (Hooks & State)",
      "JavaScript (ES6+ / OOP)",
      "HTML5 & Semantic UI",
      "CSS3 & Animations",
      "Tailwind CSS",
      "Responsive Bento Layouts",
    ],
  },
  {
    title: "Backend, Databases & Cloud",
    icon: "backend",
    accent: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RESTful API Design",
      "Transactional Outbox Pattern",
      "CORS & Production Security",
      "Git & Render Deployment",
    ],
  },
  {
    title: "CS Fundamentals & DSA",
    icon: "dsa",
    accent: "pink",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Time & Space Complexity",
      "Competitive Programming",
      "Debugging & Unit Testing",
    ],
  },
];

const CERTIFICATIONS_DATA = [
  {
    title: "React (Basic) Verified Skill Certificate",
    issuer: "HackerRank",
    date: "Verified Hands-On Assessment",
    details:
      "Validated core React component architecture, real-time state updates, prop flow, event handling, and automated test-suite compliance.",
    // TODO: INSERT YOUR HACKERRANK REACT CERTIFICATE VERIFICATION URL BELOW
    credentialUrl: "",
  },
  {
    title: "JavaScript Verified Skill Certificate",
    issuer: "HackerRank",
    date: "Verified Hands-On Assessment",
    details:
      "Demonstrated proficiency in ES6+ JavaScript, class inheritance, prototypes, closures, asynchronous execution, and DOM/Node.js logic.",
    // TODO: INSERT YOUR HACKERRANK JAVASCRIPT CERTIFICATE VERIFICATION URL BELOW
    credentialUrl: "",
  },
  {
    // TODO: REPLACE OR DUPLICATE THIS CARD WITH ANY EXTRA CERTIFICATE FROM YOUR RESUME
    title: "Additional Technical Certification",
    issuer: "Add Issuer / Platform",
    date: "Insert Year",
    details:
      "Edit CERTIFICATIONS_DATA at the top of App.jsx to add your cloud, AI, or university certification details and verification URL.",
    // TODO: INSERT CERTIFICATE VERIFICATION LINK BELOW
    credentialUrl: "",
  },
];

const ACHIEVEMENTS_DATA = [
  {
    title: "Production Full-Stack AI Deployment",
    metric: "Live on Cloud",
    description:
      "Architected, debugged, and shipped RouteRAG—a hybrid LCEL web agent & LightRAG knowledge workspace—to live production on Render.",
    // TODO: OPTIONAL LINK TO LIVE DEMO OR POST
    linkUrl: "https://routerag-client.onrender.com",
  },
  {
    // TODO: REPLACE WITH YOUR EXACT RESUME ACHIEVEMENT #2 (Hackathon / Coding Rank / Academic Milestone)
    title: "Resume Achievement Highlight #2",
    metric: "Insert Rank / Metric",
    description:
      "Open ACHIEVEMENTS_DATA in App.jsx and paste your exact achievement bullet from your resume (e.g., hackathon finalist, coding contest rank, or GPA milestone).",
    linkUrl: "",
  },
  {
    // TODO: REPLACE WITH YOUR EXACT RESUME ACHIEVEMENT #3
    title: "Resume Achievement Highlight #3",
    metric: "Insert Milestone",
    description:
      "Open ACHIEVEMENTS_DATA in App.jsx and paste another standout achievement or leadership highlight from your resume.",
    linkUrl: "",
  },
];

/**
 * ============================================================================
 *  MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  // Controls the full-screen cyber-neon intro overlay before revealing dashboard
  const [introState, setIntroState] = useState("active"); // "active" | "exiting" | "done"
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [localPhotoPreview, setLocalPhotoPreview] = useState(PROFILE_CONFIG.photoUrl);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("projects");

  const fullSubtitle =
    "Applied AI & Full-Stack Engineer • Level 3 Agentic Systems";

  // Typewriter effect on the initial intro screen
  useEffect(() => {
    if (introState !== "active") return;
    setTypedSubtitle("");
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedSubtitle(fullSubtitle.slice(0, index));
      if (index >= fullSubtitle.length) {
        clearInterval(timer);
      }
    }, 28);
    return () => clearInterval(timer);
  }, [introState]);

  // Smoothly reveal the dashboard when hovering or clicking the portal button
  const handleEnterDashboard = () => {
    if (introState !== "active") return;
    setIntroState("exiting");
    setTimeout(() => {
      setIntroState("done");
    }, 650);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIntroState("active");
  };

  // Allows previewing a local photo right inside the browser before hardcoding the URL
  const handlePhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setLocalPhotoPreview(objectUrl);
  };

  const scrollToSection = (id : string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#05050A] text-slate-100 selection:bg-[#FF1E8A] selection:text-white relative overflow-x-hidden font-sans">
      {/* Custom Keyframes & Neon Cyber Grid Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          background-color: #05050A;
        }

        .font-mono-code {
          font-family: 'JetBrains Mono', monospace;
        }

        .cyber-grid-bg {
          background-size: 44px 44px;
          background-image: 
            linear-gradient(to right, rgba(255, 30, 138, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.06) 1px, transparent 1px);
        }

        .neon-pink-glow {
          box-shadow: 0 0 28px rgba(255, 30, 138, 0.35), inset 0 0 14px rgba(255, 30, 138, 0.15);
        }

        .neon-card-hover {
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.28s ease, box-shadow 0.28s ease;
        }

        .neon-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 30, 138, 0.65);
          box-shadow: 0 12px 36px -8px rgba(255, 30, 138, 0.28), 0 0 0 1px rgba(255, 30, 138, 0.25);
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.06); }
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes scanlineSweep {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .scanline-bar {
          animation: scanlineSweep 3.2s linear infinite;
        }
      `}</style>

      {/* ====================================================================
          1. FULL-SCREEN CYBER-NEON INTRO GATE (Hover or Click to Reveal)
         ==================================================================== */}
      {introState !== "done" && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05050A] cyber-grid-bg px-6 transition-all duration-700 ease-out ${
            introState === "exiting"
              ? "opacity-0 scale-105 pointer-events-none blur-sm"
              : "opacity-100 scale-100"
          }`}
        >
          {/* Ambient Neon Pink & Electric Violet Orbs */}
          <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#FF1E8A]/20 blur-[120px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-[#8B5CF6]/20 blur-[120px] animate-pulse-glow" />

          {/* Subtle Moving Neon Scanline */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF1E8A]/60 to-transparent scanline-bar" />

          <div className="relative z-10 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1E8A]/40 bg-[#FF1E8A]/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#FF1E8A] animate-ping" />
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF6BB5]">
                System Online // Workspace Ready
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#FF1E8A] via-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
                {PROFILE_CONFIG.name}
              </span>
            </h1>

            <p className="font-mono-code text-sm sm:text-base text-slate-300 min-h-[28px] mb-10">
              {typedSubtitle}
              <span className="inline-block w-2 h-4 ml-1 bg-[#FF1E8A] animate-pulse align-middle" />
            </p>

            {/* Hover OR Click Trigger Portal Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onMouseEnter={handleEnterDashboard}
                onClick={handleEnterDashboard}
                className="group relative inline-flex items-center gap-3 rounded-2xl border border-[#FF1E8A] bg-gradient-to-r from-[#FF1E8A] to-[#C026D3] px-8 py-4 text-base sm:text-lg font-bold text-white shadow-[0_0_35px_rgba(255,30,138,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(255,30,138,0.85)] focus:outline-none cursor-pointer"
              >
                <Sparkles className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span>Hover or Click to Enter Dashboard</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <span className="font-mono-code text-xs text-slate-500">
                [ hover over the portal button to unlock portfolio ]
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          2. STICKY CYBER-NEON TOP NAVBAR
         ==================================================================== */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05050A]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#FF1E8A]/50 bg-[#FF1E8A]/15 text-[#FF1E8A] font-mono-code font-bold text-sm group-hover:bg-[#FF1E8A] group-hover:text-white transition-colors">
              BM
            </span>
            <span className="font-mono-code text-base font-bold tracking-wider text-white">
              {PROFILE_CONFIG.brandLogo}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#FF1E8A] shadow-[0_0_10px_#FF1E8A]" />
          </a>

          {/* Desktop 5 Required Navlinks */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#0D0E17]/90 p-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer ${
                  activeNav === item.id
                    ? "bg-[#FF1E8A] text-white shadow-[0_0_16px_rgba(255,30,138,0.5)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Replay Intro Button + Mobile Drawer Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReplayIntro}
              title="Replay Intro Gate"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0D0E17] px-3 py-2 font-mono-code text-xs text-slate-300 hover:border-[#FF1E8A]/60 hover:text-[#FF6BB5] transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Intro</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden rounded-xl border border-white/10 bg-[#0D0E17] p-2 text-slate-200 hover:border-[#FF1E8A]/60"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0A0B12] px-4 py-3 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-[#FF1E8A]/15 hover:text-[#FF6BB5]"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ====================================================================
          3. MAIN DASHBOARD HERO (Photo Card + Career Summary Bento Grid)
         ==================================================================== */}
      <main id="top" className="relative cyber-grid-bg">
        {/* Subtle Top Background Glow */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-96 w-[42rem] max-w-full rounded-full bg-gradient-to-r from-[#FF1E8A]/15 via-[#A855F7]/15 to-[#38BDF8]/10 blur-[130px]" />

        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* LEFT COLUMN (4 Cols): Dedicated Neon Photo Card Slot */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative flex-1 rounded-3xl border border-[#FF1E8A]/35 bg-[#0D0E17]/90 p-5 backdrop-blur-xl neon-pink-glow flex flex-col justify-between">
                {/* Top Status Strip */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-code text-xs text-[#FF6BB5] flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FF1E8A] animate-pulse" />
                    PROFILE.IMG
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-code text-[11px] text-slate-400">
                    {PROFILE_CONFIG.location}
                  </span>
                </div>

                {/* Photo Container (Renders photoUrl if provided, otherwise stylish Cyber Frame + Preview Picker) */}
                <div className="relative mx-auto w-full aspect-square max-w-[280px] rounded-2xl border-2 border-dashed border-[#FF1E8A]/50 bg-gradient-to-b from-[#161829] to-[#090A10] overflow-hidden flex flex-col items-center justify-center group">
                  {localPhotoPreview ? (
                    <img
                      src={localPhotoPreview}
                      alt={PROFILE_CONFIG.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#FF1E8A]/40 bg-[#FF1E8A]/10 text-[#FF1E8A] shadow-[0_0_25px_rgba(255,30,138,0.25)]">
                        <Camera className="h-9 w-9" />
                      </div>
                      <p className="text-sm font-semibold text-white">
                        Your Photo Space
                      </p>
                      <p className="mt-1 font-mono-code text-[11px] text-slate-400 leading-relaxed">
                        Set <span className="text-[#FF6BB5]">PROFILE_CONFIG.photoUrl</span> in code or preview below
                      </p>
                    </div>
                  )}

                  {/* Quick Local Image Preview Trigger */}
                  <label className="absolute bottom-3 inset-x-3 flex items-center justify-center gap-1.5 rounded-xl border border-[#FF1E8A]/50 bg-[#05050A]/90 py-2 px-3 font-mono-code text-xs text-[#FF6BB5] hover:bg-[#FF1E8A] hover:text-white transition-colors cursor-pointer">
                    <Camera className="h-3.5 w-3.5" />
                    <span>{localPhotoPreview ? "Change Preview Photo" : "Preview Photo Here"}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoSelect}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Bottom Quick Identity Footer */}
                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <h2 className="text-lg font-bold text-white">{PROFILE_CONFIG.name}</h2>
                  <p className="font-mono-code text-xs text-[#38BDF8] mt-0.5">
                    {PROFILE_CONFIG.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (8 Cols): Career Portfolio Summary & Level 3 AI Positioning */}
            <div className="lg:col-span-8 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D0E17]/90 p-6 sm:p-9 backdrop-blur-xl relative overflow-hidden">
              {/* Decorative Corner Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF1E8A]/15 blur-3xl" />

              <div>
                {/* Layer 3 Applied AI Badge */}
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#FF1E8A]/40 bg-[#FF1E8A]/10 px-3.5 py-1.5 mb-5">
                  <Zap className="h-3.5 w-3.5 text-[#FF1E8A]" />
                  <span className="font-mono-code text-xs font-semibold text-[#FF6BB5]">
                    {PROFILE_CONFIG.roleBadge}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                  {PROFILE_CONFIG.headline.split("Agentic AI")[0]}
                  <span className="bg-gradient-to-r from-[#FF1E8A] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                    Agentic AI
                  </span>
                  {PROFILE_CONFIG.headline.split("Agentic AI")[1]}
                </h1>

                {/* Career Summary Paragraph */}
                <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                  {PROFILE_CONFIG.summary}
                </p>

                {/* 3-Layer AI Engineering Visual Pill Strip */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 opacity-60">
                    <div className="font-mono-code text-[11px] text-slate-400">LAYER 01</div>
                    <div className="text-xs font-semibold text-slate-300 mt-0.5">
                      Foundation Models & Research
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 opacity-60">
                    <div className="font-mono-code text-[11px] text-slate-400">LAYER 02</div>
                    <div className="text-xs font-semibold text-slate-300 mt-0.5">
                      ML Infra & Distributed Serving
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#FF1E8A]/60 bg-gradient-to-br from-[#FF1E8A]/15 to-[#8B5CF6]/15 p-3.5 shadow-[0_0_20px_rgba(255,30,138,0.18)]">
                    <div className="flex items-center justify-between font-mono-code text-[11px] text-[#FF6BB5] font-bold">
                      <span>LAYER 03 • MY FOCUS</span>
                      <span className="h-2 w-2 rounded-full bg-[#FF1E8A]" />
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      Applied AI & Product Engineering
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Live Social Quick-Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF1E8A] to-[#D946EF] px-5 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,30,138,0.4)] hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>Explore Projects</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <a
                    href={CONTACT_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#141625] px-5 py-3 text-sm font-semibold text-white hover:border-[#FF1E8A]/60 hover:text-[#FF6BB5] transition-colors"
                  >
                    <GitBranch className="h-4 w-4 text-[#FF1E8A]" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

                {/* Quick Metric Badges */}
                <div className="flex items-center gap-4 font-mono-code text-xs text-slate-400">
                  <div>
                    <span className="text-white font-bold">4</span> Core Builds
                  </div>
                  <span className="text-white/20">|</span>
                  <div>
                    <span className="text-[#FF6BB5] font-bold">LC + CC</span> DSA Track
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. SECTION 1: FEATURED PROJECTS (#projects)
           ================================================================== */}
        <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF1E8A]">
                01 // Production & Full-Stack Builds
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                Featured Projects
              </h2>
            </div>
            <p className="font-mono-code text-xs text-slate-400">
              Edit repo & live demo URLs inside <span className="text-[#FF6BB5]">PROJECTS_DATA</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project) => (
              <article
                key={project.id}
                className="neon-card-hover rounded-3xl border border-white/10 bg-[#0D0E17]/95 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  {/* Top Category & Featured Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 px-3 py-1 font-mono-code text-xs text-[#C4B5FD]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#FF1E8A]/40 bg-[#FF1E8A]/15 px-2.5 py-0.5 font-mono-code text-[11px] font-semibold text-[#FF6BB5]">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm font-medium text-[#FF6BB5] mt-1">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-[#141624] px-2.5 py-1 font-mono-code text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links (Live Demo + Source Code) */}
                <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF1E8A] px-4 py-2 text-xs font-bold text-white shadow-[0_0_18px_rgba(255,30,138,0.4)] hover:brightness-110 transition-all"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>Live Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span
                      title="Add liveUrl in PROJECTS_DATA at top of App.jsx"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-white/20 bg-white/[0.02] px-4 py-2 font-mono-code text-xs text-slate-400"
                    >
                      <Globe className="h-3.5 w-3.5 text-slate-500" />
                      <span>Live Link Slot (Add in Code)</span>
                    </span>
                  )}

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-[#141625] px-4 py-2 text-xs font-semibold text-slate-200 hover:border-[#FF1E8A]/60 hover:text-white transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5 text-[#38BDF8]" />
                      <span>Source Code</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-white/20 px-4 py-2 font-mono-code text-xs text-slate-500">
                      Repo Link Slot
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================================
            5. SECTION 2: TECHNICAL SKILLS MATRIX (#skills)
           ================================================================== */}
        <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-white/10">
          <div className="mb-10">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF1E8A]">
              02 // Engineering Stack
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_GROUPS.map((group) => {
              const IconComponent =
                group.icon === "ai"
                  ? Cpu
                  : group.icon === "frontend"
                  ? Layers
                  : group.icon === "backend"
                  ? Database
                  : Terminal;

              return (
                <div
                  key={group.title}
                  className="neon-card-hover rounded-3xl border border-white/10 bg-[#0D0E17]/95 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FF1E8A]/40 bg-[#FF1E8A]/10 text-[#FF1E8A]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#131524] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:border-[#FF1E8A]/50 hover:text-white transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF1E8A]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            6. SECTION 3: CERTIFICATIONS (#certifications)
           ================================================================== */}
        <section id="certifications" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF1E8A]">
                03 // Verified Credentials
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                Certifications
              </h2>
            </div>
            <p className="font-mono-code text-xs text-slate-400">
              Paste credential links in <span className="text-[#FF6BB5]">CERTIFICATIONS_DATA</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="neon-card-hover rounded-3xl border border-white/10 bg-[#0D0E17]/95 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#C4B5FD]">
                      <Award className="h-5 w-5" />
                    </div>
                    <span className="font-mono-code text-xs text-[#38BDF8]">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-mono-code text-[11px] text-slate-400 mt-1">
                    {cert.date}
                  </p>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6BB5] hover:text-[#FF1E8A]"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      <span>Verify Credential</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono-code text-xs text-slate-500">
                      <ShieldCheck className="h-4 w-4 text-slate-600" />
                      <span>Credential Link Slot (Add in Code)</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            7. SECTION 4: ACHIEVEMENTS & DSA ARENA (#achievements)
           ================================================================== */}
        <section id="achievements" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-white/10">
          <div className="mb-10">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF1E8A]">
              04 // Competitive Programming & Milestones
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
              Achievements & DSA Arena
            </h2>
          </div>

          {/* Dedicated LeetCode & CodeChef Tracker Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* LeetCode Card */}
            <a
              href={CONTACT_LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="neon-card-hover group rounded-3xl border border-[#FF1E8A]/35 bg-gradient-to-br from-[#0D0E17] to-[#170D1D] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#FF1E8A]/40 bg-[#FF1E8A]/15 px-3 py-1 font-mono-code text-xs font-bold text-[#FF6BB5]">
                    <Flame className="h-3.5 w-3.5" />
                    LEETCODE DSA TRACK
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#FF1E8A] transition-colors" />
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  @Bushra_mahek_
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Consistent Data Structures & Algorithms practitioner solving problems across arrays, trees, graphs, dynamic programming, and sliding window patterns.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-code text-xs text-[#FF6BB5]">
                  <Target className="h-4 w-4" />
                  <span>Target Milestone: 1600+ Rating</span>
                </div>
                <span className="font-mono-code text-xs font-semibold text-white group-hover:underline">
                  View Profile →
                </span>
              </div>
            </a>

            {/* CodeChef Card */}
            <a
              href={CONTACT_LINKS.codechef}
              target="_blank"
              rel="noreferrer"
              className="neon-card-hover group rounded-3xl border border-[#8B5CF6]/35 bg-gradient-to-br from-[#0D0E17] to-[#111024] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 px-3 py-1 font-mono-code text-xs font-bold text-[#C4B5FD]">
                    <Trophy className="h-3.5 w-3.5" />
                    CODECHEF COMPETITIVE
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#C4B5FD] transition-colors" />
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  @bushramahek09
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Competing in timed rated contests to sharpen speed, edge-case analysis, greedy optimizations, and mathematical problem-solving under pressure.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-code text-xs text-[#C4B5FD]">
                  <Target className="h-4 w-4" />
                  <span>Target Milestone: 5★ Coder</span>
                </div>
                <span className="font-mono-code text-xs font-semibold text-white group-hover:underline">
                  View Profile →
                </span>
              </div>
            </a>
          </div>

          {/* Additional Resume Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="neon-card-hover rounded-3xl border border-white/10 bg-[#0D0E17]/95 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#FF1E8A]" />
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-code text-[11px] text-[#38BDF8]">
                      {item.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono-code text-xs text-[#FF6BB5] hover:underline"
                  >
                    <span>View Live</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            8. SECTION 5: CONTACT & PROFILES (#contact)
           ================================================================== */}
        <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-24 border-t border-white/10">
          <div className="relative overflow-hidden rounded-3xl border border-[#FF1E8A]/40 bg-gradient-to-br from-[#0D0E17] via-[#120B18] to-[#0D0E17] p-8 sm:p-12 neon-pink-glow">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#FF1E8A]/20 blur-[110px]" />

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#FF1E8A]">
                05 // Connect & Collaborate
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
                Let&apos;s Build Something Impactful.
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Looking for an Applied AI or Full-Stack Engineer who can ship production React + Node.js systems and grounded LangGraph/RAG workflows? Reach out via any channel below.
              </p>
            </div>

            {/* Contact & Profile Links Grid */}
            <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* GitHub (Pre-wired) */}
              <a
                href={CONTACT_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#05050A]/80 px-5 py-4 hover:border-[#FF1E8A] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GitBranch className="h-5 w-5 text-[#FF1E8A]" />
                  <div>
                    <div className="text-sm font-bold text-white">GitHub</div>
                    <div className="font-mono-code text-xs text-slate-400">
                      @Bushra-Mahek
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>

              {/* LeetCode (Pre-wired) */}
              <a
                href={CONTACT_LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#05050A]/80 px-5 py-4 hover:border-[#FF1E8A] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-[#FF6BB5]" />
                  <div>
                    <div className="text-sm font-bold text-white">LeetCode</div>
                    <div className="font-mono-code text-xs text-slate-400">
                      @Bushra_mahek_
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>

              {/* CodeChef (Pre-wired) */}
              <a
                href={CONTACT_LINKS.codechef}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#05050A]/80 px-5 py-4 hover:border-[#FF1E8A] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-[#C4B5FD]" />
                  <div>
                    <div className="text-sm font-bold text-white">CodeChef</div>
                    <div className="font-mono-code text-xs text-slate-400">
                      @bushramahek09
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400" />
              </a>

              {/* LinkedIn Slot */}
              {CONTACT_LINKS.linkedin ? (
                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#05050A]/80 px-5 py-4 hover:border-[#FF1E8A] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#38BDF8]" />
                    <div>
                      <div className="text-sm font-bold text-white">LinkedIn</div>
                      <div className="font-mono-code text-xs text-slate-400">
                        Connect Profile
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </a>
              ) : (
                <div className="flex items-center justify-between rounded-2xl border border-dashed border-white/20 bg-[#05050A]/40 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-slate-500" />
                    <div>
                      <div className="text-sm font-semibold text-slate-300">LinkedIn</div>
                      <div className="font-mono-code text-[11px] text-slate-500">
                        Add CONTACT_LINKS.linkedin
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Slot */}
              {CONTACT_LINKS.email ? (
                <a
                  href={`mailto:${CONTACT_LINKS.email}`}
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#05050A]/80 px-5 py-4 hover:border-[#FF1E8A] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#FF1E8A]" />
                    <div>
                      <div className="text-sm font-bold text-white">Email</div>
                      <div className="font-mono-code text-xs text-slate-400">
                        {CONTACT_LINKS.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </a>
              ) : (
                <div className="flex items-center justify-between rounded-2xl border border-dashed border-white/20 bg-[#05050A]/40 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-500" />
                    <div>
                      <div className="text-sm font-semibold text-slate-300">Email Address</div>
                      <div className="font-mono-code text-[11px] text-slate-500">
                        Add CONTACT_LINKS.email
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Resume PDF Slot */}
              {CONTACT_LINKS.resumeUrl ? (
                <a
                  href={CONTACT_LINKS.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-[#FF1E8A]/40 bg-[#FF1E8A]/10 px-5 py-4 hover:bg-[#FF1E8A]/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#FF1E8A]" />
                    <div>
                      <div className="text-sm font-bold text-white">Resume PDF</div>
                      <div className="font-mono-code text-xs text-[#FF6BB5]">
                        View / Download
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#FF6BB5]" />
                </a>
              ) : (
                <div className="flex items-center justify-between rounded-2xl border border-dashed border-white/20 bg-[#05050A]/40 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-slate-500" />
                    <div>
                      <div className="text-sm font-semibold text-slate-300">Resume PDF</div>
                      <div className="font-mono-code text-[11px] text-slate-500">
                        Add CONTACT_LINKS.resumeUrl
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <footer className="mt-10 text-center font-mono-code text-xs text-slate-500">
            Engineered by {PROFILE_CONFIG.name} • Built with React &amp; Tailwind CSS
          </footer>
        </section>
      </main>
    </div>
  );
}