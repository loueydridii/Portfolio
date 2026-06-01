import { TechProject } from "@/types";

export const techProjects: TechProject[] = [
  {
    id: "dar-el-behy",
    title: "Dar El Behy",
    tagline: "Smart home control system with voice commands & AI suggestions",
    category: "Java & IoT",
    categoryColor: "from-orange-400 to-amber-400",
    description:
      "A comprehensive JavaFX-based smart home control system featuring voice commands, real-time energy tracking, Islamic prayer times integration, and AI-powered energy-saving suggestions. Built with Java 25 and JavaFX 25.",
    techStack: ["Java 25", "JavaFX", "Speech Recognition", "Aladhan API", "CSS", "JSON"],
    skills: ["Desktop Development", "UI/UX Design", "Voice Control", "Energy Analytics", "API Integration"],
    github: "https://github.com/loueydridii/darelbehi-app",
    report: "/documents/projects/dar-el-behy-report.pdf",
    slides: "/documents/projects/dar-el-behy-slides.pdf",
    logo: "/images/projects/dar-el-behy-logo.png",
    duration: "Academic Semester",
    teamSize: 4,
    context: "Academic Project — Java & Object-Oriented Programming Course",
    problem:
      "Modern households struggle with fragmented device management, lack of energy visibility, and no centralized control system. Users need a unified interface to manage smart devices, monitor energy consumption, set automation rules, and receive intelligent recommendations — all in one place.",
    solution:
      "Dar El Behy provides a comprehensive JavaFX desktop application that centralizes smart home control. It integrates voice recognition for hands-free operation, a real-time energy dashboard with goal tracking and CSV export, Islamic prayer time alerts via the Aladhan API, parent/child modes with PIN-protected parental controls, and AI-powered energy-saving suggestions. The resizable UI adapts to user preferences, making the experience both powerful and intuitive.",
    contributions: [
      "Designed and implemented the main UI layout with resizable panels using JavaFX",
      "Built the voice control module integrating speech recognition for hands-free device management",
      "Developed the energy dashboard with real-time monitoring, goal tracking, and CSV report export",
      "Implemented parent/child mode with PIN-protected parental controls and child-friendly interface",
      "Integrated the Aladhan API for automatic Islamic prayer time notifications based on location",
      "Created the automation rules engine for scheduling device actions",
    ],
    features: [
      {
        title: "Core Features",
        items: [
          "Voice Control — Speech recognition for hands-free device control",
          "Device Management — Control lights, thermostats, TVs, doors, windows, and more",
          "Parent/Child Mode — PIN-protected parental controls with child-friendly UI",
          "Resizable UI — Drag dividers to resize main sections",
        ],
      },
      {
        title: "Energy & Analytics",
        items: [
          "Energy Dashboard — Real-time energy consumption monitoring",
          "Energy Goals — Set and track daily/weekly/monthly consumption targets",
          "Usage Reports — Export energy reports to CSV",
          "AI Suggestions — Smart recommendations for energy savings",
        ],
      },
      {
        title: "Smart Home Devices",
        items: [
          "💡 Lights (dimmable, color control)",
          "🌡️ Thermostats (temperature control)",
          "📺 Smart TVs",
          "🚪 Doors & Garage Doors",
          "🪟 Smart Windows",
          "🚨 Smoke & Gas Detectors",
          "🍳 Smart Oven",
          "🧊 Smart Fridge",
          "👁️ Motion Sensors",
        ],
      },
      {
        title: "Additional Features",
        items: [
          "Prayer Times — Automatic Islamic prayer times based on location (via Aladhan API)",
          "Configuration Persistence — Auto-save and load home configurations",
          "Automation Rules — Schedule device actions",
        ],
      },
    ],
  },
  {
    id: "flexi-income",
    title: "Flexi Income Intelligence Suite",
    tagline: "ETL pipeline & data warehouse for gig economy analytics",
    category: "Business Intelligence",
    categoryColor: "from-emerald-400 to-teal-400",
    description:
      "A comprehensive ETL pipeline and data warehouse solution for analyzing freelance job earnings across multiple gig economy platforms. Transforms raw, inconsistent freelance transaction data from 15,502 records into a clean, analytics-ready star schema optimized for business intelligence and data analysis.",
    techStack: ["Python", "Jupyter Notebook", "Pandas", "SQLite", "SQL", "CSV/JSON", "Star Schema"],
    skills: ["ETL Development", "Data Warehousing", "Data Quality", "Business Intelligence", "Dimensional Modeling"],
    github: "https://github.com/loueydridii/The-Flexi-Income-Intelligence-Suite",
    report: "/documents/projects/flexi-income-report.pdf",
    slides: "/documents/projects/flexi-income-slides.pdf",
    extraDocs: [
      { label: "Metrics Report", href: "/documents/projects/flexi-income-metrics.pdf" },
    ],
    duration: "Academic Semester",
    teamSize: 3,
    context: "Academic Project — Business Intelligence & Data Warehousing Course",
    problem:
      "The gig economy generates massive amounts of fragmented, inconsistent transaction data across platforms like Upwork, Fiverr, Freelancer, Toptal, and PeoplePerHour. Freelancers and analysts lack a unified way to track earnings patterns, compare regional cost-of-living vs. income, evaluate marketing spend effectiveness, and identify seasonal trends — making data-driven decisions nearly impossible.",
    solution:
      "The Flexi Income Intelligence Suite implements a full ETL pipeline in a 51-cell Jupyter notebook that extracts raw CSV/JSON data, cleans it (removing duplicates, handling missing values, standardizing text, validating referential integrity), transforms it into a normalized star schema with 1 fact table and 5 dimension tables, and loads it into a production-ready SQLite database with constraints, indexes, and predefined views — all ready for BI tool consumption.",
    contributions: [
      "Designed the star schema dimensional model with 1 fact table and 5 dimension tables",
      "Built the 51-cell ETL pipeline in Jupyter handling extraction, cleaning, and transformation",
      "Implemented data quality management: duplicate removal, missing value handling, text standardization",
      "Developed referential integrity validation and gap day flagging logic",
      "Created the SQLite database with constraints, indexes, and predefined analytical views",
      "Produced the Insights Report and Metrics documentation for stakeholder analysis",
    ],
    features: [
      {
        title: "ETL Pipeline",
        items: [
          "Automated ETL Pipeline — 51-cell Jupyter notebook with full data lifecycle",
          "Data Extraction — Load raw CSV/JSON files from multiple sources",
          "Data Cleaning — Remove duplicates, handle missing values, standardize text",
          "Referential Integrity — Validate foreign key relationships across tables",
        ],
      },
      {
        title: "Star Schema Design",
        items: [
          "1 Fact Table — fact_job_earnings with comprehensive metrics",
          "5 Dimension Tables — Worker, Platform, Region, Project, Date",
          "Full Normalization — Optimized dimensional model for analytics",
          "Time Series Ready — Date dimension with weekends, holidays, quarters",
        ],
      },
      {
        title: "Analytics & Metrics",
        items: [
          "Earnings Tracking — Revenue analysis across platforms and regions",
          "Success Rates — Job completion and client satisfaction metrics",
          "Marketing ROI — Evaluate marketing spend effectiveness",
          "Rehire Rates — Monitor client relationships and retention",
        ],
      },
      {
        title: "Multi-Platform Support",
        items: [
          "Upwork — Freelance marketplace data integration",
          "Fiverr — Service-based gig platform analytics",
          "Freelancer — Project bidding platform metrics",
          "Toptal — Premium talent network analysis",
          "PeoplePerHour — Hourly freelance data tracking",
        ],
      },
    ],
  },
  {
    id: "l2r",
    title: "Louey 2 Review (L2R)",
    tagline: "Mobile gaming market analysis using statistical learning & clustering",
    category: "Data Analysis",
    categoryColor: "from-violet-400 to-purple-400",
    description:
      "A data-driven analysis of the mobile gaming market using large-scale Kaggle datasets from Google Play Store and Apple App Store (18,000+ apps). Built a complete data analysis pipeline in R to uncover what actually drives success for indie game developers — revealing that price has almost no correlation with user ratings.",
    techStack: ["R", "ggplot2", "K-Means Clustering", "PCA", "Kaggle Datasets", "Statistical Analysis"],
    skills: ["Data Analysis", "Statistical Modeling", "Machine Learning", "Data Visualization", "Market Research"],
    report: "/documents/projects/l2r-report.pdf",
    duration: "Academic Semester",
    teamSize: 1,
    context: "Academic Project — BA 340: Data Analysis Course",
    problem:
      "Independent mobile game developers face a highly competitive market with over 18,000+ apps across Google Play and Apple App Store. Understanding what drives app success — whether it's pricing strategy, category choice, or platform — requires going beyond surface-level descriptive statistics to uncover actionable market patterns and segments.",
    solution:
      "L2R implements a complete data analysis pipeline in R using large-scale Kaggle datasets. Starting with data cleaning and stratified random sampling for fair cross-platform comparison, it applies exploratory and inferential analysis, PCA for dimensionality reduction, and K-Means clustering to identify distinct market segments — ultimately revealing three clear market positions for mobile games.",
    contributions: [
      "Designed and executed the full data analysis pipeline in R from data cleaning to final insights",
      "Implemented stratified random sampling for unbiased cross-platform comparison (Google Play vs. App Store)",
      "Performed exploratory and inferential statistical analysis on 18,000+ app records",
      "Applied PCA (Principal Component Analysis) to reduce complexity and identify key factors",
      "Built K-Means clustering models to identify three distinct market segments",
      "Produced a comprehensive technical report with methodology, visualizations, and actionable results",
    ],
    features: [
      {
        title: "Data Pipeline",
        items: [
          "Data Cleaning — Processing raw Kaggle datasets from two major app stores",
          "Stratified Sampling — Fair cross-platform comparison methodology",
          "Exploratory Analysis — Statistical distributions and trend identification",
          "Inferential Analysis — Hypothesis testing and correlation analysis",
        ],
      },
      {
        title: "Machine Learning",
        items: [
          "PCA — Dimensionality reduction to identify key success factors",
          "K-Means Clustering — Market segmentation into 3 distinct positions",
          "Correlation Analysis — Price vs. ratings correlation discovery",
          "Cross-Platform Comparison — Google Play vs. Apple App Store insights",
        ],
      },
      {
        title: "Key Findings",
        items: [
          "Price has almost no correlation with user ratings",
          "Free & viral games — High volume, broad audience segment",
          "Premium niche titles — Highly satisfied, targeted user base",
          "\"Dead zone\" — Low-priced paid games tend to underperform",
        ],
      },
      {
        title: "Datasets & Scope",
        items: [
          "18,000+ apps analyzed across two platforms",
          "Google Play Store — Android gaming market data",
          "Apple App Store — iOS gaming market data",
          "Kaggle — Large-scale, real-world datasets",
        ],
      },
    ],
  },
  {
    id: "docent-api",
    title: "DOCENT API",
    tagline: "Museum governance REST API with revolutionary security features",
    category: "Backend Development & API",
    categoryColor: "from-blue-400 to-indigo-400",
    description:
      "A comprehensive Flask-based REST API for museum governance, education, and engagement — built for Tunisian cultural institutions. Features 62 RESTful endpoints, a React frontend, PostgreSQL database with 21+ tables, and a revolutionary Contextual Artifact Verification (CAV) authentication system.",
    techStack: ["Flask", "Python", "React", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "Swagger"],
    skills: ["Backend Development", "API Design", "Database Architecture", "Security Engineering", "Full-Stack Development"],
    github: "https://github.com/loueydridii/DOCENT-RESTApi-Project-",
    report: "/documents/projects/docent-api-report.pdf",
    slides: "/documents/projects/docent-api-slides.pdf",
    duration: "Academic Semester",
    teamSize: 1,
    context: "Academic Project — REST API & Web Services Course",
    problem:
      "Tunisian cultural institutions lack a unified digital platform for museum operations — from artifact cataloging and visitor engagement to event management, guide scheduling, and governance tracking. Existing systems offer no domain-aware security, leaving sensitive cultural heritage data vulnerable to unauthorized access.",
    solution:
      "DOCENT delivers a full-stack museum management platform with 62 RESTful API endpoints, a React-based responsive frontend, and a PostgreSQL database with 21+ tables. Its standout innovation is Contextual Artifact Verification (CAV) — a revolutionary authentication system that requires museum administrators to prove knowledge of their collections before gaining access, making it phishing-resistant and brute-force protected.",
    contributions: [
      "Designed and implemented 62 RESTful API endpoints using Flask-RESTX with full Swagger documentation",
      "Architected the PostgreSQL database schema with 21+ tables covering artifacts, events, governance, and audit trails",
      "Built the Contextual Artifact Verification (CAV) security system — domain-aware, time-limited, brute-force protected",
      "Implemented multi-factor authentication with TOTP, QR code generation, and backup codes for admins",
      "Developed role-based access control with 4 roles: visitor, guide, museum_admin, platform_admin",
      "Configured Docker deployment with Gunicorn production WSGI server",
    ],
    features: [
      {
        title: "API & Backend",
        items: [
          "62 RESTful Endpoints — Complete museum operations coverage",
          "Swagger UI — Interactive API documentation at /docs",
          "Flask-RESTX — Auto-generated OpenAPI specification",
          "SQLAlchemy ORM — Type-safe database operations with migrations",
        ],
      },
      {
        title: "Security & Auth",
        items: [
          "CAV — Contextual Artifact Verification (domain-aware authentication)",
          "Multi-Factor Auth — TOTP, QR codes, backup codes, email/SMS OTP",
          "JWT Authentication — Role-based claims with secure token management",
          "Bcrypt Hashing — 12-round password protection with UUID primary keys",
        ],
      },
      {
        title: "Database & Architecture",
        items: [
          "21+ Tables — Core, events, content, governance, guides, security, audit",
          "Soft Delete Pattern — Full audit trail with governance tracking",
          "Role-Based Access — 4 roles: visitor, guide, museum_admin, platform_admin",
          "Docker Ready — Containerized deployment with Gunicorn",
        ],
      },
      {
        title: "Frontend & UX",
        items: [
          "React 18 — Modern responsive frontend with Vite build",
          "React Router — Multi-page SPA navigation",
          "Axios Integration — Seamless API communication",
          "CORS Protection — Secure cross-origin resource sharing",
        ],
      },
    ],
  },
  {
    id: "sidequest",
    title: "SideQuest: Life is a Quest",
    tagline: "AI-powered RPG Android app that turns your day into side quests",
    category: "Mobile Android Development",
    categoryColor: "from-green-400 to-lime-400",
    description:
      "An Android app that transforms daily life into a mini RPG — generating real-world side quests via Gemini AI, tracking XP, levels, and streaks, and showing nearby quest zones on an interactive map. Features profile management, daily reminders, and a Song of the Day soundtrack recommendation.",
    techStack: ["Kotlin", "Jetpack Compose", "Gemini AI", "Room DB", "Hilt", "DataStore", "WorkManager", "Material 3"],
    skills: ["Mobile Development", "AI Integration", "UI/UX Design", "Location Services", "Gamification"],
    github: "https://github.com/loueydridii/SideQuest-App",
    report: "/documents/projects/sidequest-report.pdf",
    slides: "/documents/projects/sidequest-slides.pdf",
    duration: "Academic Semester",
    teamSize: 4,
    context: "Academic Project — Mobile Android Development Course",
    problem:
      "Daily routines lack motivation and engagement. People struggle to build productive habits because traditional task management feels monotonous. There's no gamified system that leverages AI to generate personalized, real-world challenges while tracking progress through RPG-style mechanics like XP, levels, and streaks.",
    solution:
      "SideQuest turns your day into a mini RPG by using Gemini AI to generate short, actionable side quests completable in ~30 minutes. It tracks XP, levels, and streaks with a gamified progression system, shows nearby quest zones on an interactive map using FusedLocationProvider, sends daily reminders via WorkManager, and even recommends a Song of the Day with Spotify/YouTube integration.",
    contributions: [
      "Built the complete Android app using Kotlin and Jetpack Compose with Material 3 design",
      "Integrated Gemini AI API via Retrofit/OkHttp for intelligent quest generation",
      "Implemented Room database for local persistence of users, quests, and progression data",
      "Developed the gamification system: XP calculation, leveling, streaks, and quest log history",
      "Built the interactive map view with live location tracking and quest zone markers",
      "Set up WorkManager for daily reminder notifications and DataStore for encrypted session storage",
    ],
    features: [
      {
        title: "Quest System",
        items: [
          "AI Quest Generation — Gemini-powered quests completable in ~30 minutes",
          "Quest Progression — Active quests, details, completion, and abandonment",
          "Quest Log — Full history of completed and abandoned quests",
          "Daily Reminders — WorkManager notifications to nudge adventure",
        ],
      },
      {
        title: "RPG Mechanics",
        items: [
          "XP & Levels — Gamified progression shown on Home and Profile",
          "Streak Tracking — Consecutive day completion rewards",
          "Profile System — Local profiles with sign-in/restore capability",
          "Song of the Day — Daily soundtrack recommendation with Spotify/YouTube",
        ],
      },
      {
        title: "Location & Map",
        items: [
          "Live Location — FusedLocationProviderClient for real-time tracking",
          "Quest Zones — Nearby quest areas displayed on interactive map",
          "Location-Based Quests — Contextual quest generation based on surroundings",
          "Map View — Interactive map interface for quest exploration",
        ],
      },
      {
        title: "Architecture",
        items: [
          "Jetpack Compose — Modern declarative UI with Material 3",
          "Hilt DI — Clean dependency injection throughout the app",
          "Room Database — Type-safe local persistence for offline-first design",
          "DataStore — Encrypted session storage and preference caching",
        ],
      },
    ],
  },
  {
    id: "floucna",
    title: "Floucna Mina Fina",
    tagline: "Secure micro-lending portal with KYC and digital signatures",
    category: "Cybersecurity & FinTech",
    categoryColor: "from-red-400 to-rose-400",
    description:
      "An enhanced secure micro-lending platform featuring Keycloak/OIDC authentication with role-based access (Borrower & Admin), Didit KYC identity verification, PDF generation with digital signing and timestamping, and full audit logging — all deployed via Docker Compose.",
    techStack: ["Next.js", "TypeScript", "Java 17", "Javalin", "SQLite", "Keycloak", "Docker", "BouncyCastle"],
    skills: ["Cybersecurity", "Full-Stack Development", "Identity Management", "Digital Signatures", "Compliance"],
    github: "https://github.com/loueydridii/floucna-app",
    report: "/documents/projects/floucna-report.pdf",
    slides: "/documents/projects/floucna-slides.pdf",
    extraDocs: [
      { label: "System Design", href: "/documents/projects/floucna-systemdesign.pdf" },
    ],
    duration: "Academic Semester",
    teamSize: 4,
    context: "Academic Project — Cybersecurity & FinTech Course",
    problem:
      "Micro-lending platforms face critical security challenges: verifying borrower identity, securing loan agreements with tamper-proof signatures, ensuring regulatory compliance, and maintaining complete audit trails. Traditional approaches lack integrated KYC verification, digital document signing, and role-based governance — leaving both lenders and borrowers vulnerable.",
    solution:
      "Floucna Mina Fina implements a comprehensive micro-lending portal with Keycloak/OIDC authentication, Didit KYC identity verification with local fallback, a complete borrower loan submission and admin approval workflow, PDF generation with Apache PDFBox digital signing and timestamping, DSS-oriented compliance verification, and full audit logging for all critical actions — all containerized with Docker Compose.",
    contributions: [
      "Built the Next.js frontend with App Router and TypeScript for borrower and admin interfaces",
      "Implemented the Java 17 Javalin backend with SQLite persistence",
      "Configured Keycloak OIDC authentication with BORROWER and ADMIN roles",
      "Integrated Didit KYC identity verification with local fallback mode",
      "Developed PDF generation, digital signing, and timestamping using Apache PDFBox and BouncyCastle",
      "Set up Docker Compose deployment with persistent Keycloak and SQLite volumes",
    ],
    features: [
      {
        title: "Authentication & Identity",
        items: [
          "Keycloak OIDC — Enterprise-grade authentication with auto-imported realm",
          "Role-Based Access — BORROWER and ADMIN roles with granular permissions",
          "KYC Integration — Didit identity verification with local fallback",
          "Self-Registration — Borrower signup with email verification",
        ],
      },
      {
        title: "Loan Workflow",
        items: [
          "Loan Submission — Borrowers submit applications with required documentation",
          "Admin Approval — Dashboard for reviewing and approving/rejecting loans",
          "PDF Generation — Automated loan agreement document creation",
          "Digital Signing — BouncyCastle cryptographic signatures with timestamping",
        ],
      },
      {
        title: "Security & Compliance",
        items: [
          "DSS Compliance — Digital Signature Service-oriented verification flow",
          "Audit Logging — Complete trail for all critical actions",
          "Encryption — BouncyCastle cryptographic operations",
          "Tamper-Proof Documents — Signed and timestamped PDFs",
        ],
      },
      {
        title: "Deployment",
        items: [
          "Docker Compose — One-command full stack deployment",
          "Persistent Volumes — Keycloak DB and SQLite data preserved",
          "Ngrok Integration — Public webhook URL for KYC callbacks",
          "Environment Configuration — Flexible .env-based setup",
        ],
      },
    ],
  },
  {
    id: "sentinel-ai",
    title: "Sentinel AI Agent",
    tagline: "AI-powered intelligence platform with ADK engine & workflow automation",
    category: "AI Agent & Automation",
    categoryColor: "from-cyan-400 to-sky-400",
    description:
      "A unified AI intelligence platform featuring a FastAPI gateway, Google ADK (Agent Development Kit) intelligence engine, n8n workflow automation for gap analysis, and a Next.js frontend — all orchestrated via Docker Compose. Provides intelligent analysis, automated workflows, and a clean API-first architecture.",
    techStack: ["FastAPI", "Python", "Google ADK", "n8n", "Next.js", "Docker Compose", "REST API"],
    skills: ["AI Engineering", "API Design", "Workflow Automation", "Full-Stack Development", "System Architecture"],
    github: "https://github.com/loueydridii/sentinel-app",
    report: "/documents/projects/sentinel-ai-report.pdf",
    slides: "/documents/projects/sentinel-ai-slides.pdf",
    duration: "Academic Semester",
    teamSize: 4,
    context: "Academic Project — AI Agents & Automation Course",
    problem:
      "Organizations need intelligent systems that can analyze data, identify gaps, and automate complex workflows — but building such platforms requires integrating multiple AI services, workflow engines, and frontends into a cohesive architecture. Most solutions are fragmented, lacking a unified API gateway and orchestration layer.",
    solution:
      "Sentinel delivers a unified AI platform with four interconnected services: a public FastAPI gateway exposing /v1 endpoints with auto-generated Swagger docs, a Google ADK intelligence engine for AI-powered analysis, an n8n workflow engine for automated gap analysis pipelines, and a Next.js frontend — all containerized with Docker Compose for one-command deployment.",
    contributions: [
      "Designed the unified architecture connecting FastAPI gateway, ADK engine, n8n, and Next.js frontend",
      "Built the FastAPI public API gateway with /v1 endpoints and Swagger documentation",
      "Integrated Google ADK (Agent Development Kit) as the core intelligence engine",
      "Configured n8n workflow engine for automated gap analysis at /v1/analyze/gap",
      "Developed the Next.js frontend for user interaction and result visualization",
      "Orchestrated all services with Docker Compose for seamless deployment",
    ],
    features: [
      {
        title: "API Gateway",
        items: [
          "FastAPI — Public REST API at /v1 with auto-generated docs",
          "Swagger UI — Interactive API documentation at /docs",
          "Gap Analysis Endpoint — /v1/analyze/gap powered by n8n workflows",
          "Health Checks — Service monitoring across all components",
        ],
      },
      {
        title: "AI Intelligence",
        items: [
          "Google ADK — Agent Development Kit intelligence engine",
          "AI-Powered Analysis — Automated data analysis and insights",
          "Intelligent Responses — Context-aware AI-generated recommendations",
          "ADK Health Monitoring — Internal health endpoint for reliability",
        ],
      },
      {
        title: "Workflow Automation",
        items: [
          "n8n Engine — Visual workflow automation platform",
          "Gap Analysis — Automated pipeline for identifying data gaps",
          "Workflow Editor — Browser-based workflow design at port 5678",
          "Event-Driven — Trigger workflows via API calls",
        ],
      },
      {
        title: "Architecture & Deployment",
        items: [
          "Docker Compose — One-command deployment of all 4 services",
          "Next.js Frontend — Modern React-based user interface",
          "Unified Stack — Single repository, canonical backend stack",
          "Environment Config — .env-based configuration management",
        ],
      },
    ],
  },
  {
    id: "carnival-atlas",
    title: "Carnival at ATLAS",
    tagline: "Full-stack carnival-themed web app with role-based gameplay",
    category: "Full-Stack Web App",
    categoryColor: "from-yellow-400 to-orange-400",
    description:
      "A full-stack carnival-themed web application with two roles — Adventurer and Talacina (Admin). Built with Node.js, Express 5, and PostgreSQL via Prisma ORM, featuring JWT authentication, bcrypt hashing, role-based middleware, and enterprise-grade security with Helmet, CORS, and rate-limiting.",
    techStack: ["Node.js", "Express 5", "PostgreSQL", "Prisma ORM", "JWT", "Docker", "Helmet", "bcrypt"],
    skills: ["Full-Stack Development", "API Design", "Database Design", "Security", "Docker Deployment"],
    github: "https://github.com/loueydridii/Carnival-At-ATLAS",
    duration: "Academic Project",
    teamSize: 1,
    context: "Academic Project — Web Development Course",
    problem:
      "Student clubs and organizations need engaging, interactive platforms for carnival events — not just static registration pages. The challenge is building a secure, role-based system where players (Adventurers) can participate in games while administrators (Talacina) manage game catalogs, track scores, and seed content — all with production-grade security.",
    solution:
      "Carnival at ATLAS delivers a full-stack web application with a clean MVC architecture: controllers, services, middleware, and routes. It uses Express 5 with ES Modules, Prisma ORM for type-safe PostgreSQL operations, JWT authentication with 8-hour expiry, bcrypt password hashing, and comprehensive security middleware (Helmet, CORS, rate-limiting, input validation). Docker Compose enables one-command deployment.",
    contributions: [
      "Designed and built the complete backend API with Node.js and Express 5 (ES Modules)",
      "Architected the PostgreSQL database schema using Prisma ORM with seed scripts",
      "Implemented JWT authentication with bcrypt password hashing and role-based middleware",
      "Built enterprise-grade security: Helmet headers, CORS, rate-limiting, and input validation",
      "Configured Docker Compose for containerized deployment with PostgreSQL",
      "Created the MVC architecture with controllers, services, middleware, and route separation",
    ],
    features: [
      {
        title: "Backend Architecture",
        items: [
          "Express 5 — Modern Node.js framework with ES Modules",
          "MVC Pattern — Controllers, services, middleware, and routes",
          "Prisma ORM — Type-safe PostgreSQL operations with migrations",
          "Seed Scripts — Pre-populate games and admin accounts",
        ],
      },
      {
        title: "Authentication & Security",
        items: [
          "JWT Auth — 8-hour token expiry with role claims",
          "bcrypt Hashing — Secure password storage",
          "Role Middleware — Adventurer and Talacina (Admin) access control",
          "Security Stack — Helmet, CORS, rate-limiting, input validation",
        ],
      },
      {
        title: "Game System",
        items: [
          "Adventurer Role — Browse games, participate, and track scores",
          "Talacina Role — Admin dashboard for game and event management",
          "Game Catalog — Create, update, and manage carnival games",
          "Score Tracking — Real-time leaderboard and score management",
        ],
      },
      {
        title: "Deployment",
        items: [
          "Docker Compose — One-command full stack deployment",
          "PostgreSQL Container — Persistent database with auto-migration",
          "Environment Config — .env-based flexible configuration",
          "Response Helpers — Standardized API response utilities",
        ],
      },
    ],
  },
  {
    id: "vdo",
    title: "Visual Display Ontology (VDO)",
    tagline: "Semantic web ontology with AI-powered adaptive display recommendations",
    category: "Ontology & Semantic Web",
    categoryColor: "from-fuchsia-400 to-pink-400",
    description:
      "A semantic web project that models visual display systems as an interconnected knowledge graph using OWL 2 DL. Features a 4-layer architecture linking devices, technologies, components, and an AI awareness engine that automatically infers VR comfort levels, device risk categories, and adaptive display recommendations based on user health and hardware conditions.",
    techStack: ["OWL 2 DL", "Protégé", "SPARQL", "Knowledge Graphs", "Semantic Reasoning"],
    skills: ["Ontology Engineering", "Knowledge Modeling", "Semantic Web", "AI Reasoning", "System Design"],
    github: "https://github.com/loueydridii/VDO---Visual-Display-Ontology",
    slides: "/documents/projects/vdo-slides.pdf",
    duration: "Academic Semester",
    teamSize: 2,
    context: "Academic Project — Ontology & Knowledge Engineering Course",
    problem:
      "Visual display technology is growing increasingly complex — from monitors and VR headsets to neural interfaces. Understanding how devices, technologies, materials, and user health interact requires structured knowledge representation that can automatically infer risk categories, comfort levels, and adaptive recommendations without manual tagging.",
    solution:
      "VDO implements a 4-layer OWL 2 DL ontology: Device layer (monitors, VR headsets, neural interfaces), Technology layer (LCD, OLED), Component/Material layer (liquid crystals, organic compounds, pixel arrays), and a Context/AI layer that links human health states and hardware fatigue to recommend display modes. It uses property chains and datatype restrictions to automatically infer classifications like VR motion sickness risk (latency ≥ 20ms + refresh rate ≤ 90Hz).",
    contributions: [
      "Designed the 4-layer ontology architecture covering devices, technologies, components, and AI context",
      "Built the OWL 2 DL ontology file with all classes, properties, axioms, and individuals in Protégé",
      "Implemented automated inference rules using property chains and datatype restrictions",
      "Created the AI awareness engine for adaptive display mode recommendations",
      "Developed VR motion sickness risk classification based on latency and refresh rate thresholds",
      "Produced the ontology diagram and presentation slides for academic review",
    ],
    features: [
      {
        title: "4-Layer Architecture",
        items: [
          "Device Layer — Monitors, VR headsets, Neural Interfaces",
          "Technology Layer — LCD, OLED image production methods",
          "Component Layer — Liquid Crystals, Organic Compounds, Pixel Arrays",
          "AI Context Layer — Health states + hardware fatigue → display recommendations",
        ],
      },
      {
        title: "Automated Inference",
        items: [
          "Property Chains — Complex classification without manual tagging",
          "Datatype Restrictions — Threshold-based risk deduction",
          "VR Risk Classification — Motion sickness risk from latency + refresh rate",
          "OWL 2 DL Reasoning — Formal logic-based inference engine",
        ],
      },
      {
        title: "AI Awareness Engine",
        items: [
          "OLED Preservation — Auto-mode when pixel degradation reaches critical levels",
          "Eye-Strain Relief — Mode switch for fatigued users",
          "Adaptive Recommendations — System behavior dictated by health + hardware state",
          "Smart Display Modes — Context-aware display optimization",
        ],
      },
      {
        title: "Knowledge Graph",
        items: [
          "OWL 2 DL Ontology — Formal semantic web standard",
          "Protégé Editor — Industry-standard ontology development",
          "SPARQL Queries — Semantic querying of the knowledge graph",
          "Visual Diagram — Complete ontology architecture visualization",
        ],
      },
    ],
  },
];
