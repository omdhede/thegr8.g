export const projects = [
  // AI & Audit Automation (featured)
  {
    id: "audit-evidence-api",
    title: "Audit Evidence Analyzer API",
    tagline: "Production REST API for automated exception detection in audit datasets",
    year: "2026",
    stack: ["Python", "FastAPI", "Pandas", "Pydantic", "Render"],
    category: "AI · Audit Automation",
    group: "ai-audit",
    description:
      "A production-grade REST API that ingests structured audit evidence datasets, executes automated statistical exception analysis, and returns risk-flagged records as structured JSON — reducing manual evidence review effort by ~60%.",
    metrics: [
      { label: "Review Effort Reduced", value: "~60%" },
      { label: "Response Time", value: "<300ms" },
      { label: "Docs", value: "Auto Swagger UI" },
    ],
    github: "https://github.com/omdhede",
    live: null,
    featured: true,
  },
  {
    id: "sox-compliance-assistant",
    title: "SOX Compliance AI Assistant",
    tagline: "GenAI conversational assistant for SOX, ITGC & audit framework queries",
    year: "2026",
    stack: ["Python", "Streamlit", "LangChain", "OpenAI API"],
    category: "GenAI · Compliance",
    group: "ai-audit",
    description:
      "A GenAI-powered conversational assistant answering SOX, ITGC, and audit framework queries with persistent multi-turn memory — enabling faster compliance readiness assessments and client onboarding support.",
    metrics: [
      { label: "Response Time", value: "<2s" },
      { label: "Memory", value: "Multi-turn" },
      { label: "Deployment", value: "Streamlit Cloud" },
    ],
    github: "https://github.com/omdhede",
    live: null,
    featured: true,
  },
  {
    id: "audit-rag-system",
    title: "Audit Policy Q&A System",
    tagline: "RAG pipeline over COBIT 2019 & CISA documents with semantic search",
    year: "2026",
    stack: ["Python", "LangChain", "ChromaDB", "OpenAI Embeddings", "Streamlit"],
    category: "RAG · Vector Search",
    group: "ai-audit",
    description:
      "A RAG pipeline ingesting COBIT 2019 and CISA policy documents into a ChromaDB vector store, enabling semantic search and AI-driven policy Q&A with contextually grounded, source-cited responses in under 5 seconds.",
    metrics: [
      { label: "Retrieval Speed", value: "<5s" },
      { label: "Source Citations", value: "Every response" },
      { label: "Docs Indexed", value: "COBIT + CISA" },
    ],
    github: "https://github.com/omdhede",
    live: null,
    featured: true,
  },
  // Full-Stack Engineering
  {
    id: "p2p-messaging",
    title: "P2P Secure Messaging",
    tagline: "Real-time secure messaging with OAuth 2.0 and automated Vercel deployment",
    year: "2024",
    stack: ["TypeScript", "Next.js 14", "OAuth 2.0", "Redis", "Vercel"],
    category: "Full-Stack · Security",
    group: "fullstack",
    description:
      "Secure real-time messaging platform with OAuth 2.0 authentication; system architecture designed to mitigate data breach and unauthorised access risks — applying access management principles from IT audit practice. Automated deployment pipelines reduced operational errors by 50%.",
    metrics: [
      { label: "Deploy Errors", value: "−50%" },
      { label: "Auth Protocol", value: "OAuth 2.0" },
      { label: "Infra", value: "Vercel + Redis" },
    ],
    github: "https://github.com/omdhede/realtime-chatting-app",
    live: null,
    featured: false,
  },
  {
    id: "digital-hippo",
    title: "Digital Hippo",
    tagline: "E-commerce platform for digital goods with one-time payments",
    year: "2024",
    stack: ["Next.js 14", "tRPC", "Payload CMS", "Tailwind CSS"],
    category: "Full-Stack · E-Commerce",
    group: "fullstack",
    description:
      "A full-stack e-commerce website to sell digital goods with one-time payment flows, built with Next.js 14, tRPC for type-safe APIs, and Payload CMS for content management.",
    metrics: [
      { label: "API Type Safety", value: "tRPC" },
      { label: "CMS", value: "Payload" },
      { label: "Framework", value: "Next.js 14" },
    ],
    github: "https://github.com/omdhede/digitalhippo",
    live: null,
    featured: false,
  },
  {
    id: "discord-clone",
    title: "Discord Clone",
    tagline: "Real-time gaming platform with server rooms and Socket.io messaging",
    year: "2023",
    stack: ["Next.js", "Socket.io", "Prisma", "MySQL", "Tailwind CSS"],
    category: "Full-Stack · Real-time",
    group: "fullstack",
    description:
      "A fully responsive Discord-inspired platform enabling gamers to create game rooms and servers with real-time messaging via Socket.io, Prisma ORM, and MySQL persistence.",
    metrics: [
      { label: "Messaging", value: "Real-time" },
      { label: "ORM", value: "Prisma" },
      { label: "DB", value: "MySQL" },
    ],
    github: "https://github.com/omdhede/discord-clone",
    live: null,
    featured: false,
  },
  {
    id: "innovate3d",
    title: "INNOVATE 3D",
    tagline: "Social media platform for 3D model creators with Firebase auth",
    year: "2023",
    stack: ["React.js", "Firebase", "JavaScript", "Blender", "CSS"],
    category: "Full-Stack · Social",
    group: "fullstack",
    description:
      "A social media website aimed at 3D model creators, featuring Firebase authentication, model showcasing, and community features built with React.js and JavaScript.",
    metrics: [
      { label: "Auth", value: "Firebase" },
      { label: "Target Users", value: "3D Creators" },
      { label: "Framework", value: "React.js" },
    ],
    github: "https://github.com/omdhede/Innovate3D",
    live: null,
    featured: false,
  },
  // ML / Data Science
  {
    id: "ai-mental-fitness",
    title: "AI Mental Fitness Tracker",
    tagline: "Machine learning system for mental fitness assessment and analysis",
    year: "2023",
    stack: ["Python", "Scikit-learn", "Jupyter Notebook", "Kaggle"],
    category: "ML · Data Science",
    group: "ml",
    description:
      "A machine learning system designed for mental fitness assessment, built during IBM SkillBuild using Python and Scikit-learn with Kaggle datasets for training and evaluation.",
    metrics: [
      { label: "Framework", value: "Scikit-learn" },
      { label: "Platform", value: "IBM SkillBuild" },
      { label: "Data", value: "Kaggle Dataset" },
    ],
    github: "https://github.com/omdhede/IBM-Skill-Build-AI-Mental-Fitness-Tracker",
    live: null,
    featured: false,
  },
] as const;

export const experience = [
  {
    company: "BSR & Co. LLP (KPMG India)",
    role: "Analyst — IT Risk & Technology Consulting",
    type: "Full-Time · Promoted",
    period: "Jul 2025 – Present",
    location: "Pune, MH",
    current: true,
    highlights: [
      "Executed end-to-end SOX-compliant ITGC, ITAC, and IPE testing across 14+ enterprise client engagements in BFSI, Manufacturing, and IT/SaaS",
      "Evaluated access management, change management, and SoD controls across SAP S/4HANA, SAP ECC, and Microsoft D365 — 100+ controls per engagement cycle",
      "Developed Python scripts to automate evidence validation workflows, reducing manual testing effort by ~30%",
      "Collaborated with C-suite stakeholders to deliver structured remediation roadmaps aligned to SOX and regulatory compliance standards",
    ],
    tags: ["SOX", "ITGC", "ITAC", "SAP S/4HANA", "Python", "IT Risk"],
  },
  {
    company: "BSR & Co. LLP (KPMG India)",
    role: "Academic Intern — IT Risk & Technology Consulting",
    type: "Internship",
    period: "Jan 2025 – Jul 2025",
    location: "Pune, MH",
    current: false,
    highlights: [
      "Supported ITGC/ITAC testing through documentation review, evidence collection, and supervised control walkthroughs",
      "Worked across multiple client engagements using SAP, SQL, and Advanced Excel",
      "Converted to full-time Analyst within 6 months based on performance",
    ],
    tags: ["ITGC", "ITAC", "SAP", "SQL", "Evidence Collection"],
  },
  {
    company: "IBM",
    role: "Machine Learning Intern",
    type: "Internship",
    period: "Jun 2023 – Jul 2023",
    location: "Pune, MH",
    current: false,
    highlights: [
      "Designed and deployed a Python/Scikit-learn ML model achieving 97% classification accuracy for anomaly and risk detection",
      "Packaged model as a reusable inference pipeline across structured enterprise datasets",
      "Presented actionable model insights to 100+ stakeholders, translating ML outputs into business-relevant findings",
    ],
    tags: ["Python", "Scikit-learn", "ML", "Anomaly Detection", "Inference Pipeline"],
  },
] as const;

export const skillGroups = [
  {
    category: "Audit & Compliance",
    color: "amber",
    skills: [
      "SOX", "ITGC", "ITAC", "IPE", "COBIT 2019",
      "Access Management", "Change Management", "SoD",
      "Risk Assessment", "SAP S/4HANA", "SAP ECC", "Microsoft D365",
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "blue",
    skills: [
      "Python", "Scikit-learn", "Pandas", "NumPy",
      "ML Fundamentals", "Supervised Learning",
      "Classification Models", "Anomaly Detection", "Pydantic", "joblib",
    ],
  },
  {
    category: "Generative AI & LLMs",
    color: "violet",
    skills: [
      "LangChain", "OpenAI API", "Prompt Engineering",
      "Agentic AI Systems", "Conversational AI", "NLU",
      "LLM Orchestration", "Streamlit",
    ],
  },
  {
    category: "RAG & Vector Search",
    color: "cyan",
    skills: [
      "RAG Pipelines", "ChromaDB", "OpenAI Embeddings",
      "Semantic Search", "Document Ingestion", "Vector Stores",
    ],
  },
  {
    category: "MLOps & DevOps",
    color: "emerald",
    skills: [
      "Docker", "GitHub Actions CI/CD", "Render", "AWS Lambda",
      "Model Versioning", "Health-check Endpoints", "pytest", "flake8",
    ],
  },
  {
    category: "Cloud & Data",
    color: "orange",
    skills: [
      "AWS Cloud Practitioner", "GCP (BigQuery, Vertex AI)", "Azure",
      "Snowflake", "Power BI", "Advanced Excel", "SQL",
    ],
  },
  {
    category: "Full-Stack & APIs",
    color: "pink",
    skills: [
      "TypeScript", "Next.js 14", "React", "FastAPI",
      "Redis", "OAuth 2.0", "REST APIs", "Vercel", "Git",
    ],
  },
] as const;

export const certifications = [
  { name: "CISA — Certified Information Systems Auditor", issuer: "ISACA", status: "In Progress", date: "Q3 2026" },
  { name: "COBIT 2019 Foundation", issuer: "ISACA", status: "In Progress", date: "Q2 2026" },
  { name: "McKinsey Forward Program — Digital Learning", issuer: "McKinsey & Company", status: "Ongoing", date: "2026" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", status: "Completed", date: "2024" },
  { name: "IBM DevOps & Software Engineering", issuer: "IBM / Coursera", status: "Completed", date: "2024" },
  { name: "JP Morgan Excel & Software Engineering Simulation", issuer: "Forage", status: "Completed", date: "2024" },
] as const;

export const aiLabItems = [
  {
    title: "Enterprise Agentic Audit Bot",
    description:
      "Multi-agent AI system that autonomously executes ITGC walkthroughs, collects evidence, flags exceptions, and drafts remediation findings.",
    status: "planned",
    tags: ["Agentic AI", "LangChain", "FastAPI", "Multi-agent"],
  },
  {
    title: "AI-Powered SoD Conflict Detector",
    description:
      "ML classifier trained on SAP role matrices to automatically detect Segregation of Duties violations across enterprise access populations.",
    status: "in-progress",
    tags: ["ML Classification", "SAP", "Risk Automation", "Python"],
  },
  {
    title: "Control Testing Automation Framework",
    description:
      "Generalized Python framework to automate evidence extraction, validation, and exception reporting for SOX ITGC/ITAC testing cycles.",
    status: "in-progress",
    tags: ["Python", "Pandas", "FastAPI", "SOX Automation"],
  },
  {
    title: "RAG Audit Workpaper Generator",
    description:
      "RAG system that reads prior-year workpapers and auto-generates structured current-year audit templates with risk context and control mappings.",
    status: "planned",
    tags: ["RAG", "ChromaDB", "OpenAI", "Document Generation"],
  },
  {
    title: "AI Risk Assessment Copilot",
    description:
      "LLM-powered copilot that assists risk managers in drafting IT risk assessments, mapping controls to COBIT, and identifying framework gaps.",
    status: "planned",
    tags: ["GenAI", "COBIT", "Risk Management", "LLM"],
  },
  {
    title: "MLOps Pipeline for Audit Analytics",
    description:
      "End-to-end MLOps infrastructure: model training, versioning, deployment to AWS Lambda, and monitoring for audit anomaly detection models.",
    status: "planned",
    tags: ["MLOps", "AWS Lambda", "Docker", "Model Monitoring"],
  },
] as const;

export const writings = [
  {
    title: "RAG Architecture for Enterprise Knowledge Retrieval",
    description:
      "A deep-dive into building production RAG systems — embedding pipelines, vector store selection, retrieval strategies, and handling enterprise-scale policy documents.",
    tags: ["RAG", "LangChain", "ChromaDB", "Architecture"],
    readTime: "8 min read",
  },
  {
    title: "AI Automation in IT Audit: Where the Value Is",
    description:
      "How AI tools can realistically automate evidence collection, exception flagging, and walkthrough documentation in enterprise audit engagements — from a practitioner's perspective.",
    tags: ["AI", "IT Audit", "Automation", "SOX"],
    readTime: "6 min read",
  },
  {
    title: "From SOX Controls to AI Systems: Why the Overlap Is Real",
    description:
      "Exploring the surprising parallels between IT General Controls frameworks and ML system governance — and how one informs the other.",
    tags: ["SOX", "AI Governance", "MLOps", "Compliance"],
    readTime: "5 min read",
  },
  {
    title: "Prompt Engineering for Compliance Use Cases",
    description:
      "Practical patterns for building LLM applications in regulated industries — how to structure prompts for audit, compliance, and risk management domains.",
    tags: ["Prompt Engineering", "LLM", "Compliance", "GenAI"],
    readTime: "7 min read",
  },
] as const;

export const stats = [
  { value: "14+", label: "Enterprise Clients" },
  { value: "16+", label: "Months Consulting" },
  { value: "100+", label: "Controls / Engagement" },
  { value: "4", label: "AI Tools Shipped" },
] as const;
