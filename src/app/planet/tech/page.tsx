"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import {
  CodeXml,
  ExternalLink,
  FileText,
  Presentation,
  Play,
  Code2,
  Cpu,
  Smartphone,
  Globe,
  Database,
  Brain,
  Server,
  Wrench,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code2 className="w-5 h-5" />,
  "Mobile Development": <Smartphone className="w-5 h-5" />,
  "Web Development": <Globe className="w-5 h-5" />,
  "Backend Development": <Server className="w-5 h-5" />,
  "AI & Data": <Brain className="w-5 h-5" />,
  Databases: <Database className="w-5 h-5" />,
  "Tools & Platforms": <Wrench className="w-5 h-5" />,
  "Domain Expertise": <Cpu className="w-5 h-5" />,
  "Languages": <Globe className="w-5 h-5" />,
};

const experiences = [
  {
    title: "Web Development Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    date: "July 2025",
    description: "Designed and developed responsive web pages using HTML, CSS, and JavaScript. Collaborated on full-stack projects and optimized user experiences. Followed Agile development practices and submitted weekly task reports.",
  },
  {
    title: "IT Intern",
    company: "Tunisie Telecom",
    location: "Siliana, Tunisia",
    date: "July 2025",
    description: "Gained hands-on exposure to IT infrastructure, cybersecurity basics, and system maintenance within a large-scale telecommunications environment. Assisted with IT operations including access control management, system updates, and technical support. Observed financial, HR, and commercial workflows using enterprise Oracle systems.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechPlanetPage() {
  return (
    <div className="planet-bg-tech min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-nebula-blue mb-6">
              <Cpu className="w-4 h-4" />
              Tech Planet — Builder
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Experience &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Web development, IT infrastructure, cybersecurity, and
              hands-on technical experience across real-world environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 px-4" id="experience-section">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-8 bg-nebula-blue rounded-full" />
            Technical Experience
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass rounded-2xl p-6 hover:border-nebula-blue/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-nebula-blue">
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

      {/* Skills Grid */}
      <section className="py-12 px-4 pb-24" id="skills-section">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-8 bg-nebula-cyan rounded-full" />
            Technical Skills
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {Object.entries(skills).map(([category, data]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="glass rounded-xl p-5 hover:border-nebula-cyan/20 transition-all duration-300"
                id={`skill-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-nebula-cyan">
                    {categoryIcons[category] || (
                      <Code2 className="w-5 h-5" />
                    )}
                  </span>
                  <h3 className="font-semibold text-sm text-text-primary">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-nebula-cyan/5 text-text-secondary border border-nebula-cyan/10 hover:border-nebula-cyan/30 hover:text-text-primary transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
