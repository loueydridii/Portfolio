"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen space-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl mb-6"
        >
          
        </motion.div>

        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Lost in Space
        </h2>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for has drifted into an unknown
          part of the galaxy. Let&apos;s get you back to known coordinates.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-nebula-purple hover:bg-nebula-purple/80 text-white font-medium transition-all duration-200 glow-purple"
          id="not-found-home"
        >
          <Home className="w-4 h-4" />
          Return to Galaxy
        </Link>
      </motion.div>
    </div>
  );
}
