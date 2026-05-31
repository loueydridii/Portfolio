"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const coursework = [
  "Business Analytics",
  "Information Technology Management",
  "Database Management Systems",
  "Web Development",
  "Mobile Application Development",
  "Data Analysis",
  "Business Intelligence",
  "RESTful APIs",
  "UX/UI Design",
  "Digital Marketing",
];

const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Arabic", level: "Native or Bilingual" },
  { name: "French", level: "Professional Working" },
  { name: "German", level: "Limited Working" },
];

export default function EducationPlanetPage() {
  return (
    <div className="planet-bg-education min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-violet-400 mb-6">
              <GraduationCap className="w-4 h-4" />
              Education Planet — Learner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Learning &{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              My academic journey, certifications, and continuous pursuit
              of knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* University Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-violet-400 rounded-full" />
              University Journey
            </h2>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-400/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Bachelor of Science in Business Administration (BSBA)
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Major: Information Technology
                  </p>
                  <p className="text-text-secondary mt-1">
                    Tunis Business School - University of Tunis
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Expected Graduation: 2027
                  </p>
                </div>
              </div>

              {/* High School Journey */}
              <div className="flex items-start gap-4 mt-8">
                <div className="w-12 h-12 rounded-xl bg-violet-400/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Baccalaureate, Experimental Science
                  </h3>
                  <p className="text-text-secondary mt-1">
                    Siliana Pioneer Highschool
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    2019 - 2023
                  </p>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-text-secondary mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-xs rounded-full bg-violet-400/5 text-text-secondary border border-violet-400/10 hover:border-violet-400/30 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple-400 rounded-full" />
              Languages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={itemVariants}
                  className="glass rounded-xl p-5 hover:border-purple-400/20 transition-all duration-300 text-center"
                >
                  <h3 className="font-semibold text-text-primary mb-1">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
