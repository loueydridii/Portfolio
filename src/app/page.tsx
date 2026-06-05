"use client";

import { useState, useCallback, Suspense, lazy } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { planets } from "@/data/planets";
import Navbar from "@/components/layout/Navbar";
import { Download } from "lucide-react";

const GalaxyScene = lazy(
  () => import("@/components/galaxy/GalaxyScene")
);

// CSS orbit sizes (vmin-based so they scale with the smaller screen dimension)
const ORBIT_SIZES_VMIN = [22, 30, 38, 46, 54, 62];
// Duration for each orbit in seconds (outer = slower)
const ORBIT_DURATIONS = [18, 26, 34, 44, 56, 70];

// ── Tablet+ orbit scene (sm and above) ─────────────────────────────────────
function Galaxy2DOrbit({
  onPlanetClick,
}: {
  onPlanetClick: (id: string) => void;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Central star */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="absolute w-20 h-20 rounded-full flex items-center justify-center z-20"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #a855f7, #7B2FF7, #4c1d95)",
          boxShadow:
            "0 0 30px rgba(123,47,247,0.7), 0 0 60px rgba(123,47,247,0.4), 0 0 100px rgba(123,47,247,0.2)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      >
        <span className="text-xs font-bold text-white tracking-wide">
          Louey
        </span>
      </motion.div>

      {/* Orbit rings + planets */}
      {planets.map((planet, i) => {
        const orbitSize = ORBIT_SIZES_VMIN[i];
        const duration = ORBIT_DURATIONS[i];
        const label = planet.name
          .replace(" Planet", "")
          .replace(" Station", "");

        return (
          <div
            key={planet.id}
            className="absolute rounded-full border border-white/[0.06]"
            style={{
              width: `${orbitSize}vmin`,
              height: `${orbitSize}vmin`,
              animation: `orbit-slow ${duration}s linear infinite`,
            }}
          >
            {/* Counter-rotate so the planet label stays upright */}
            <div
              className="absolute"
              style={{
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: `orbit-slow ${duration}s linear infinite reverse`,
              }}
            >
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring" }}
                onClick={() => onPlanetClick(planet.id)}
                className="flex flex-col items-center gap-0.5 group cursor-pointer touch-manipulation"
                aria-label={`Navigate to ${planet.name}`}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-transform duration-300 group-hover:scale-125 group-active:scale-110"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${planet.colors.secondary}, ${planet.colors.primary})`,
                    boxShadow: `0 0 14px ${planet.colors.glow}, 0 0 28px ${planet.colors.glow}`,
                  }}
                >
                  {planet.icon}
                </div>
                <span className="text-[11px] text-text-muted group-hover:text-text-primary group-active:text-text-primary transition-colors font-medium whitespace-nowrap bg-space-void/60 px-1 rounded">
                  {label}
                </span>
              </motion.button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Mobile planet grid (xs only, < sm) ─────────────────────────────────────
// Rendered as a sibling of the hero overlay at z-20 so nothing can block taps.
function MobilePlanetGrid({
  onPlanetClick,
}: {
  onPlanetClick: (id: string) => void;
}) {
  return (
    <div className="sm:hidden absolute inset-x-0 bottom-0 z-20 flex justify-center pb-6 px-4 pointer-events-auto">
      <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
        {planets.map((planet, i) => {
          const label = planet.name
            .replace(" Planet", "")
            .replace(" Station", "");
          return (
            <motion.button
              key={planet.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
              onClick={() => onPlanetClick(planet.id)}
              className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border border-white/10 backdrop-blur-md touch-manipulation active:scale-95 transition-transform"
              style={{
                background: `radial-gradient(ellipse at top, ${planet.colors.primary}22, transparent 70%), rgba(10,10,30,0.6)`,
              }}
              aria-label={`Navigate to ${planet.name}`}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${planet.colors.secondary}, ${planet.colors.primary})`,
                  boxShadow: `0 0 12px ${planet.colors.glow}, 0 0 24px ${planet.colors.glow}`,
                }}
              >
                {planet.icon}
              </div>
              <span className="text-[10px] font-semibold text-text-secondary leading-tight text-center">
                {label}
              </span>
            </motion.button>
          );
        })}
      </div>
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
    if (isMobile) return false;
    // Also check if WebGL is actually available
    try {
      const canvas = document.createElement("canvas");
      const ctx =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!ctx) return false;
    } catch {
      return false;
    }
    return true;
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

      {/* Galaxy Canvas (tablet+: full 2D orbit or 3D) */}
      <div className="absolute inset-0 z-0">
        {is3DSupported ? (
          <Suspense
            fallback={<Galaxy2DOrbit onPlanetClick={handlePlanetClick} />}
          >
            <GalaxyScene
              onPlanetClick={handlePlanetClick}
              hoveredPlanet={hoveredPlanet}
              onPlanetHover={setHoveredPlanet}
            />
          </Suspense>
        ) : (
          <Galaxy2DOrbit onPlanetClick={handlePlanetClick} />
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

      {/* Hero Overlay (pointer-events-none so galaxy/grid taps pass through) */}
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
            tap a planet to travel
          </span>
        </motion.div>
      </div>

      {/* Mobile planet grid — rendered above everything on xs screens */}
      <MobilePlanetGrid onPlanetClick={handlePlanetClick} />
    </div>
  );
}
