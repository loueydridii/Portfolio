export interface PlanetConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  route: string;
  colors: {
    primary: string;
    secondary: string;
    glow: string;
  };
  orbitRadius: number;
  size: number;
  orbitSpeed: number;
  icon: string;
  bgClass: string;
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  duration: string;
  category: string;
  teamSize: number;
  context: string;
  problem: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  report?: string;
  slides?: string;
  video?: string;
  screenshots?: string[];
  featured: boolean;
  order: number;
}

export interface TechProject {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categoryColor: string;
  description: string;
  techStack: string[];
  skills: string[];
  github?: string;
  report?: string;
  slides?: string;
  logo?: string;
  duration?: string;
  teamSize?: number;
  context?: string;
  problem?: string;
  solution?: string;
  contributions?: string[];
  features?: { title: string; items: string[] }[];
  screenshots?: string[];
  extraDocs?: { label: string; href: string }[];
}
