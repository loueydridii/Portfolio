"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import StarField from "./StarField";
import CentralStar from "./CentralStar";
import Planet from "./Planet";
import OrbitRing from "./OrbitRing";
import { planets } from "@/data/planets";

interface GalaxySceneProps {
  onPlanetClick: (planetId: string) => void;
  hoveredPlanet: string | null;
  onPlanetHover: (planetId: string | null) => void;
}

export default function GalaxyScene({
  onPlanetClick,
  hoveredPlanet,
  onPlanetHover,
}: GalaxySceneProps) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 8, 14], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.15} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#7B2FF7" />
          <pointLight position={[10, 5, 10]} intensity={0.5} color="#3B82F6" />

          {/* Stars */}
          <StarField />

          {/* Central "Louey" Star */}
          <CentralStar />

          {/* Orbit Rings */}
          {planets.map((planet) => (
            <OrbitRing
              key={`orbit-${planet.id}`}
              radius={planet.orbitRadius}
              color={planet.colors.primary}
              isHighlighted={hoveredPlanet === planet.id}
            />
          ))}

          {/* Planets */}
          {planets.map((planet, index) => (
            <Planet
              key={planet.id}
              config={planet}
              startAngle={(index * Math.PI * 2) / planets.length}
              onClick={() => onPlanetClick(planet.id)}
              onHover={(hovered) =>
                onPlanetHover(hovered ? planet.id : null)
              }
              isHovered={hoveredPlanet === planet.id}
            />
          ))}

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
