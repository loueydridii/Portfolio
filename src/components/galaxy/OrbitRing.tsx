"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface OrbitRingProps {
  radius: number;
  color: string;
  isHighlighted: boolean;
}

export default function OrbitRing({
  radius,
  color,
  isHighlighted,
}: OrbitRingProps) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }
    return pts;
  }, [radius]);

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={isHighlighted ? 0.4 : 0.08}
        linewidth={1}
      />
    </line>
  );
}
