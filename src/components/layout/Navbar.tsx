"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Rocket } from "lucide-react";
import { planets } from "@/data/planets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            id="nav-logo"
          >
            <Rocket className="w-5 h-5 text-nebula-purple group-hover:text-nebula-cyan transition-colors duration-300" />
            <span className="text-lg font-bold gradient-text">
              Louey Galaxy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {planets.map((planet) => (
              <Link
                key={planet.id}
                href={planet.route}
                className="px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200"
                id={`nav-${planet.id}`}
              >
                <span className="mr-1.5">{planet.icon}</span>
                {planet.name.replace(" Planet", "").replace(" Station", "")}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-nebula-purple/20 text-nebula-purple border border-nebula-purple/30 hover:bg-nebula-purple/30 transition-all duration-200"
              id="nav-download-cv"
            >
              <Download className="w-4 h-4" />
              CV
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
              id="nav-mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-glass-border overflow-hidden"
            id="mobile-nav-menu"
          >
            <div className="px-4 py-4 space-y-1">
              {planets.map((planet) => (
                <Link
                  key={planet.id}
                  href={planet.route}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-200"
                  id={`mobile-nav-${planet.id}`}
                >
                  <span className="text-lg">{planet.icon}</span>
                  <div>
                    <div className="font-medium text-text-primary">
                      {planet.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {planet.description}
                    </div>
                  </div>
                </Link>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-nebula-purple hover:bg-nebula-purple/10 transition-all duration-200"
                id="mobile-nav-cv"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
