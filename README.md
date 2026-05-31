# Louey's Galaxy — Personal Portfolio

An interactive 3D galaxy-themed portfolio built with Next.js, Three.js, and Framer Motion. Each section of my professional profile is represented as a planet orbiting a central star, creating an immersive space exploration experience.

## Preview

The portfolio features a fully interactive 3D galaxy scene where visitors can click on planets to navigate between different sections of my profile.

## Features

- **3D Galaxy Scene** — Interactive solar system built with Three.js and React Three Fiber, with orbiting planets, a star field, and glow effects
- **Planet Navigation** — Click on any planet to travel to that section with smooth zoom transitions
- **Responsive Design** — Full 3D experience on desktop with a graceful 2D fallback on mobile devices
- **Glassmorphism UI** — Modern frosted-glass aesthetic with smooth gradients and subtle animations
- **Dark Space Theme** — Curated color palette designed around a deep space aesthetic
- **Downloadable CV & Cover Letter** — Direct PDF downloads from the contact page

## Sections (Planets)

| Planet | Content |
|--------|---------|
| **Tech Planet** | Technical experience, internships, and skills |
| **Business Planet** | Growth strategy, B2B partnerships, and leadership |
| **Marketing Planet** | Graphic design, video editing, SEO, and digital campaigns |
| **Volunteer Planet** | ATLAS Future Leaders chapter involvement |
| **Education Planet** | BSBA at Tunis Business School, coursework, and languages |
| **Contact Station** | Email, LinkedIn, GitHub, phone, and document downloads |

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **3D**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Tailwind CSS v4
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Outfit + Space Mono (via `next/font`)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/loueydridii/Portfolio--Louey-s-Galaxy.git
cd Portfolio--Louey-s-Galaxy

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage with galaxy scene
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── globals.css         # Design system & global styles
│   └── planet/             # Individual planet pages
│       ├── tech/
│       ├── business/
│       ├── marketing/
│       ├── volunteer/
│       ├── education/
│       └── contact/
├── components/
│   ├── galaxy/             # 3D scene components
│   │   ├── GalaxyScene.tsx # Main Three.js canvas
│   │   ├── StarField.tsx   # Procedural star background
│   │   ├── OrbitRing.tsx   # Planet orbit paths
│   │   └── Planet.tsx      # Individual planet mesh
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data/                   # Static data files
│   ├── planets.ts          # Planet configuration
│   ├── skills.ts           # Technical skills
│   └── socials.ts          # Social/contact links
└── types/
    └── index.ts            # TypeScript interfaces
```

## Deployment

Build for production:

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com/) for the best Next.js experience, or any platform that supports Node.js.

## Author

**Louey Dridi**
- LinkedIn: [linkedin.com/in/louey-dridi](https://www.linkedin.com/in/louey-dridi/)
- GitHub: [github.com/loueydridii](https://github.com/loueydridii)
- Email: loueydriditbs@gmail.com

