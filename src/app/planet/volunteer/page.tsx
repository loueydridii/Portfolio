"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Calendar,
  Globe,
  Award,
  HandHeart,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const timelineItems = [
  {
    title: "Vice-President Marketing",
    organization: "ATLAS Future Leaders - TBS Chapter",
    date: "Dec 2023 - Jun 2024",
    description: "Led a dynamic marketing team to develop and execute strategies that drive engagement and growth. Oversaw multi-channel marketing campaigns including social media, email, and event promotions. Led marketing efforts for major events like AIvolution, Hackathon 6.0, and the small business exhibition.",
    icon: <Users className="w-4 h-4" />,
    tags: ["Strategic Planning", "Team Leadership", "Campaign Management", "Sponsor Relations"],
  },
  {
    title: "Alumnus",
    organization: "ATLAS Future Leaders - TBS Chapter",
    date: "Jul 2024 - Dec 2025",
    description: "Continued involvement as an alumnus, mentoring new members and supporting chapter initiatives and growth.",
    icon: <Award className="w-4 h-4" />,
    tags: ["Mentoring", "Community", "Leadership"],
  },
  {
    title: "Event Organization",
    organization: "ATLAS Future Leaders - TBS Chapter",
    date: "2023 - 2024",
    description: "Planning and executing events including AIvolution, Hackathon 6.0, and the small business exhibition. Enhanced digital presence with targeted social media strategies and data-driven marketing approaches.",
    icon: <Calendar className="w-4 h-4" />,
    tags: ["AIvolution", "Hackathon 6.0", "Small Business Exhibition"],
  },
];

export default function VolunteerPlanetPage() {
  return (
    <div className="planet-bg-volunteer min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-emerald-400 mb-6">
              <Heart className="w-4 h-4" />
              Volunteer Planet — Contributor
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Impact &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Building connections, leading organizations, and creating
              positive change beyond the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/40 via-emerald-400/20 to-transparent" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-emerald-400/20 border-2 border-emerald-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="glass rounded-xl p-5 hover:border-emerald-400/20 transition-all duration-300">
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      {item.icon}
                      <h3 className="font-semibold text-text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary mb-1 ml-6">
                      {item.organization}
                    </p>
                    <p className="text-xs text-text-muted mb-2 ml-6">
                      {item.date}
                    </p>
                    <p className="text-sm text-text-secondary mb-3 ml-6">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
