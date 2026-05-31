"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PlanetConfig } from "@/types";

interface PlanetProps {
  config: PlanetConfig;
  startAngle: number;
  onClick: () => void;
  onHover: (hovered: boolean) => void;
  isHovered: boolean;
}

export default function Planet({
  config,
  startAngle,
  onClick,
  onHover,
  isHovered,
}: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const [localHover, setLocalHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const angle = startAngle + t * config.orbitSpeed;

    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(angle) * config.orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * config.orbitRadius;
      // Slight bobbing
      groupRef.current.position.y = Math.sin(t * 0.5 + startAngle) * 0.2;
    }

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
      // Scale on hover
      const targetScale = isHovered || localHover ? 1.3 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Planet sphere */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setLocalHover(true);
          onHover(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setLocalHover(false);
          onHover(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[config.size, 32, 32]} />
        <meshStandardMaterial
          color={config.colors.primary}
          emissive={config.colors.primary}
          emissiveIntensity={isHovered || localHover ? 1.5 : 0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Glow ring */}
      <mesh>
        <sphereGeometry args={[config.size * 1.4, 16, 16]} />
        <meshBasicMaterial
          color={config.colors.secondary}
          transparent
          opacity={isHovered || localHover ? 0.15 : 0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Point light for glow effect */}
      <pointLight
        color={config.colors.primary}
        intensity={isHovered || localHover ? 1 : 0.3}
        distance={3}
      />
    </group>
  );
}
