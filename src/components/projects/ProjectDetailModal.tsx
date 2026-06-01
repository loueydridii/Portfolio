"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TechProject } from "@/types";
import {
  X,
  CodeXml,
  FileText,
  Presentation,
  ArrowUpRight,
  Users,
  Clock,
  BookOpen,
  Lightbulb,
  Wrench,
  CheckCircle2,
  Layers,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectDetailModalProps {
  project: TechProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!project) return null;

  const hasRichContent = !!(
    project.problem ||
    project.solution ||
    project.features ||
    project.contributions
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-space-void/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
          >
            <div
              className="relative w-full max-w-4xl glass rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient strip */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.categoryColor}`}
              />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-white hover:border-white/20 transition-all duration-200"
                id={`close-modal-${project.id}`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-5 mb-8">
                  {project.logo && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 bg-space-deep">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.categoryColor} bg-clip-text text-transparent border border-white/10 mb-2`}
                    >
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                      {project.title}
                    </h2>
                    <p className="text-sm text-text-muted italic">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Meta badges */}
                {(project.duration || project.teamSize || project.context) && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.context && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-dark/60 border border-white/5 text-xs text-text-secondary">
                        <BookOpen className="w-3.5 h-3.5 text-nebula-blue" />
                        {project.context}
                      </div>
                    )}
                    {project.duration && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-dark/60 border border-white/5 text-xs text-text-secondary">
                        <Clock className="w-3.5 h-3.5 text-nebula-cyan" />
                        {project.duration}
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-dark/60 border border-white/5 text-xs text-text-secondary">
                        <Users className="w-3.5 h-3.5 text-nebula-purple" />
                        Team of {project.teamSize}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Problem & Solution */}
                {(project.problem || project.solution) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.problem && (
                      <div className="rounded-2xl bg-space-dark/40 border border-red-500/10 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          <h3 className="text-sm font-semibold text-red-300">
                            Problem
                          </h3>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="rounded-2xl bg-space-dark/40 border border-emerald-500/10 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-4 h-4 text-emerald-400" />
                          <h3 className="text-sm font-semibold text-emerald-300">
                            Solution
                          </h3>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-nebula-orange" />
                      <h3 className="text-base font-semibold text-text-primary">
                        Features
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((group, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl bg-space-dark/30 border border-white/5 p-4"
                        >
                          <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-nebula-blue/60" />
                            {group.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {group.items.map((item, i) => (
                              <li
                                key={i}
                                className="text-xs text-text-secondary flex items-start gap-2"
                              >
                                <span className="mt-0.5 w-1 h-1 rounded-full bg-nebula-blue/40 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contributions */}
                {project.contributions && project.contributions.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-4 h-4 text-nebula-cyan" />
                      <h3 className="text-base font-semibold text-text-primary">
                        My Contributions
                      </h3>
                    </div>
                    <div className="rounded-xl bg-space-dark/30 border border-white/5 p-5">
                      <ul className="space-y-2.5">
                        {project.contributions.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-text-secondary flex items-start gap-3"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-nebula-cyan to-nebula-blue flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-nebula-purple" />
                    <h3 className="text-base font-semibold text-text-primary">
                      Tech Stack
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-lg bg-nebula-blue/8 text-blue-300/90 border border-nebula-blue/15 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-4 h-4 text-nebula-magenta" />
                    <h3 className="text-base font-semibold text-text-primary">
                      Skills Demonstrated
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs rounded-lg bg-nebula-purple/8 text-purple-300/90 border border-nebula-purple/15 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                      id={`modal-${project.id}-github`}
                    >
                      <CodeXml className="w-4 h-4" />
                      View on GitHub
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  )}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                      id={`modal-${project.id}-report`}
                    >
                      <FileText className="w-4 h-4" />
                      Technical Report
                    </a>
                  )}
                  {project.slides && (
                    <a
                      href={project.slides}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                      id={`modal-${project.id}-slides`}
                    >
                      <Presentation className="w-4 h-4" />
                      Presentation Slides
                    </a>
                  )}
                  {project.extraDocs?.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                      id={`modal-${project.id}-extra-${i}`}
                    >
                      <FileText className="w-4 h-4" />
                      {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
