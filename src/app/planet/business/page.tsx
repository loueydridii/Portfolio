"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  Handshake,
  CalendarDays,
  Rocket,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "Business Development",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-orange-400",
    borderColor: "border-orange-400/20",
    items: [
      {
        title: "B2B Partnership Outreach",
        description: "Engaging event organizers, venues, and collaborators to grow the platform ecosystem across multiple markets.",
        icon: <Handshake className="w-4 h-4" />,
      },
      {
        title: "Market Analysis & Expansion",
        description: "Supporting expansion efforts and market analysis across Saudi Arabia, UAE, Egypt, Morocco, and other regional markets.",
        icon: <Target className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Management & Leadership",
    icon: <Users className="w-5 h-5" />,
    color: "text-amber-400",
    borderColor: "border-amber-400/20",
    items: [
      {
        title: "Team Leadership",
        description: "Guiding and mentoring a dedicated marketing team at ATLAS Future Leaders TBS Chapter.",
        icon: <Users className="w-4 h-4" />,
      },
      {
        title: "Campaign Management",
        description: "Overseeing multi-channel marketing campaigns including social media, email, and event promotions.",
        icon: <CalendarDays className="w-4 h-4" />,
      },
      {
        title: "Event Organization",
        description: "Leading marketing efforts for major events like AIvolution, Hackathon 6.0, and the small business exhibition.",
        icon: <CalendarDays className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Startup & Innovation",
    icon: <Lightbulb className="w-5 h-5" />,
    color: "text-yellow-400",
    borderColor: "border-yellow-400/20",
    items: [
      {
        title: "500 Global Accelerator",
        description: "Represented Declic as part of the 500 Global program, gaining hands-on exposure to startup scaling, product-market fit, and growth strategy.",
        icon: <Rocket className="w-4 h-4" />,
      },
      {
        title: "Product Thinking",
        description: "Approaching problems from a product perspective with a focus on user needs, market fit, and value creation.",
        icon: <Lightbulb className="w-4 h-4" />,
      },
    ],
  },
];

const businessExperiences = [
  {
    title: "Marketing & Growth Associate",
    company: "Declic Inc. (500 Global, Blossom x TikTok, Misk, Launch)",
    location: "Multiple Markets",
    date: "Jun 2025 - Dec 2025",
    description: "Contributed to growth, marketing, and brand operations for a live social events startup. Represented Declic as part of the 500 Global accelerator. Supported expansion across Saudi Arabia, UAE, Egypt, and Morocco. Led B2B partnership outreach, managed social media strategy, produced video content, and designed visual assets aligned with brand identity.",
  },
  {
    title: "Marketing & Partnerships Lead Intern",
    company: "Declic Inc.",
    location: "Multiple Markets",
    date: "Apr 2025 - May 2025",
    description: "Supported the marketing team in campaign execution, outreach, and content preparation. Assisted in B2B partnerships research and prospecting. Participated in brainstorming, ideation, and execution of marketing initiatives.",
  },
  {
    title: "Game Content & Copywriting Intern",
    company: "Damdoum",
    location: "Tunis, Tunisia",
    date: "Oct 2025 - Dec 2025",
    description: "Created and curated game content and copy for a quiz-based mobile game, ensuring clarity, engagement, and consistency. Managed and structured game databases, organizing questions, answers, and metadata for accuracy and scalability. Contributed to improving user experience through well-structured content and logical progression.",
  },
  {
    title: "Digital Marketing Intern",
    company: "360 Marketing",
    location: "Tunis, Tunisia",
    date: "Aug 2024 - Oct 2024",
    description: "Assisted in the creation and execution of digital marketing campaigns. Designed visual content for social media, web, and print. Developed SEO-optimized content and enhanced social media strategies to boost brand visibility.",
  },
];

export default function BusinessPlanetPage() {
  return (
    <div className="planet-bg-business min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-nebula-orange mb-6">
              <Briefcase className="w-4 h-4" />
              Business Planet — Strategist
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Growth &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Strategy
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Beyond code — leadership, partnerships, and entrepreneurial vision
              that drives impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className={section.color}>{section.icon}</span>
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className={`glass rounded-xl p-5 hover:${section.borderColor} transition-all duration-300`}
                  >
                    <div className={`${section.color} mb-3`}>{item.icon}</div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4 pb-24" id="business-experience-section">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-8 bg-orange-400 rounded-full" />
            Business & Marketing Experience
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {businessExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:border-orange-400/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-orange-400">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-secondary mb-1">
                  {exp.company}
                </p>
                <p className="text-xs text-text-muted mb-3">
                  {exp.location}
                </p>
                <p className="text-sm text-text-muted">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
