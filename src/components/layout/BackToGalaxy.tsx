"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackToGalaxy() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full glass glass-hover text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-300 group"
        id="back-to-galaxy"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back to Galaxy</span>
      </Link>
    </motion.div>
  );
}
