"use client";

import { useState, useCallback, Suspense, lazy } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { planets } from "@/data/planets";
import Navbar from "@/components/layout/Navbar";
import { Download, ChevronDown } from "lucide-react";

const GalaxyScene = lazy(
  () => import("@/components/galaxy/GalaxyScene")
);

// 2D Fallback for mobile / low-perf
function Galaxy2DFallback({
  onPlanetClick,
}: {
  onPlanetClick: (id: string) => void;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central star */}
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-nebula-purple to-nebula-magenta animate-pulse-glow flex items-center justify-center z-10">
        <span className="text-sm font-bold text-white">Louey</span>
      </div>

      {/* Planets */}
      {planets.map((planet, i) => {
        const angle = (i * 360) / planets.length;
        const radius = 28 + i * 5; // percentage from center
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.button
            key={planet.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
            onClick={() => onPlanetClick(planet.id)}
            className="absolute flex flex-col items-center gap-1 group cursor-pointer"
            style={{
              left: `calc(50% + ${x}%)`,
              top: `calc(50% + ${y}%)`,
              transform: "translate(-50%, -50%)",
            }}
            aria-label={`Navigate to ${planet.name}`}
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-125"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${planet.colors.secondary}, ${planet.colors.primary})`,
                boxShadow: `0 0 20px ${planet.colors.glow}, 0 0 40px ${planet.colors.glow}`,
              }}
            >
              {planet.icon}
            </div>
            <span className="text-[10px] sm:text-xs text-text-muted group-hover:text-text-primary transition-colors font-medium whitespace-nowrap">
              {planet.name.replace(" Planet", "").replace(" Station", "")}
            </span>
          </motion.button>
        );
      })}

      {/* Orbit rings (2D circles) */}
      {planets.map((planet, i) => {
        const radius = 28 + i * 5;
        return (
          <div
            key={`ring-${planet.id}`}
            className="absolute rounded-full border border-white/5"
            style={{
              width: `${radius * 2}%`,
              height: `${radius * 2}%`,
              left: `calc(50% - ${radius}%)`,
              top: `calc(50% - ${radius}%)`,
            }}
          />
        );
      })}
    </div>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [is3DSupported] = useState(() => {
    if (typeof window === "undefined") return true;
    // Detect mobile or low-end devices
    const isMobile = window.innerWidth < 768;
    return !isMobile;
  });

  const handlePlanetClick = useCallback(
    (planetId: string) => {
      setIsZooming(true);
      setTimeout(() => {
        router.push(`/planet/${planetId}`);
      }, 600);
    },
    [router]
  );

  const hoveredPlanetData = hoveredPlanet
    ? planets.find((p) => p.id === hoveredPlanet)
    : null;

  return (
    <div className="relative min-h-screen overflow-hidden space-bg">
      <Navbar />

      {/* Galaxy Canvas */}
      <div className="absolute inset-0 z-0">
        {is3DSupported ? (
          <Suspense
            fallback={<Galaxy2DFallback onPlanetClick={handlePlanetClick} />}
          >
            <GalaxyScene
              onPlanetClick={handlePlanetClick}
              hoveredPlanet={hoveredPlanet}
              onPlanetHover={setHoveredPlanet}
            />
          </Suspense>
        ) : (
          <Galaxy2DFallback onPlanetClick={handlePlanetClick} />
        )}
      </div>

      {/* Zoom-out overlay transition */}
      <AnimatePresence>
        {isZooming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-space-void"
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* Hero Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none px-4">
        {/* Top Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-auto mt-[6rem] sm:mt-[7rem]"
        >
          <p className="text-sm sm:text-base text-nebula-purple font-medium tracking-widest uppercase mb-3">
            Welcome to the
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">Louey</span>{" "}
            <span className="text-text-primary">Galaxy</span>
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-6">
            3rd-year Information Technology and Business Analytics student with hands-on experience in market analysis, growth strategy, and international partnerships.
          </p>
          <div className="flex items-center justify-center gap-3 pointer-events-auto">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-nebula-purple hover:bg-nebula-purple/80 text-white transition-all duration-200 glow-purple"
              id="hero-download-cv"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="/planet/contact"
              className="px-5 py-2.5 rounded-full text-sm font-medium glass glass-hover text-text-secondary hover:text-text-primary transition-all duration-200"
              id="hero-contact"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Hovered Planet Info */}
        <AnimatePresence>
          {hoveredPlanetData && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-32 sm:bottom-28 left-1/2 -translate-x-1/2 glass rounded-xl px-6 py-4 text-center min-w-[200px]"
            >
              <p className="text-lg font-semibold text-text-primary">
                {hoveredPlanetData.icon} {hoveredPlanetData.name}
              </p>
              <p className="text-sm text-text-secondary mt-1">
                {hoveredPlanetData.description}
              </p>
              <p className="text-xs text-nebula-purple mt-2 font-medium">
                Click to explore →
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mb-8 flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-xs tracking-wider uppercase">
            click on the planet to travel
          </span>
        </motion.div>
      </div>
    </div>
  );
}
