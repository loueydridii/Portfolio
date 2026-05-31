"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Video,
  Megaphone,
  Image as ImageIcon,
  Sparkles,
  Handshake,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  {
    title: "Graphic Design",
    icon: <Palette className="w-5 h-5" />,
    color: "text-pink-400",
    description:
      "Visual identity creation, social media creatives, and brand asset development for campaigns and events.",
    items: [
      "Social Media Graphics",
      "Banners & Promotional Materials",
      "Branding & Visual Identity",
      "Event Collateral",
    ],
  },
  {
    title: "Video Editing & Content",
    icon: <Video className="w-5 h-5" />,
    color: "text-fuchsia-400",
    description:
      "Video content production for marketing campaigns, event promotion, and digital channels.",
    items: [
      "Marketing Campaign Videos",
      "Event Promotion Content",
      "Digital Channel Content",
      "Social Media Reels",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    icon: <Megaphone className="w-5 h-5" />,
    color: "text-rose-400",
    description:
      "SEO-optimized content, social media strategy, and multi-channel campaign execution.",
    items: [
      "SEO Content Strategy",
      "Social Media Management",
      "Campaign Execution",
      "Brand Visibility & Growth",
    ],
  },
  {
    title: "B2B & Partnerships",
    icon: <Handshake className="w-5 h-5" />,
    color: "text-purple-400",
    description:
      "Partnership acquisition, sponsor outreach, and professional engagement with event organizers and venues.",
    items: [
      "B2B Partnership Outreach",
      "Sponsorship Acquisition",
      "Venue & Organizer Engagement",
      "Market Research & Analysis",
    ],
  },
];

export default function MarketingPlanetPage() {
  return (
    <div className="planet-bg-marketing min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-nebula-pink mb-6">
              <Megaphone className="w-4 h-4" />
              Marketing Planet — Creator
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Communication &{" "}
              <span className="bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                Creativity
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Graphic design, video production, and strategic communication
              that makes ideas come alive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`${section.color} mt-1`}>{section.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{section.title}</h2>
                  <p className="text-sm text-text-secondary">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="glass rounded-xl p-4 hover:border-nebula-pink/20 transition-all duration-300 text-center"
                  >
                    <Sparkles className="w-4 h-4 text-nebula-pink mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Gallery Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ImageIcon className="w-5 h-5 text-nebula-pink" />
              Gallery
            </h2>
            <div className="glass rounded-2xl p-12 text-center">
              <ImageIcon className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <p className="text-text-muted">
                Design portfolio gallery coming soon.
              </p>
              <p className="text-sm text-text-muted mt-1">
                Add posters, branding, and videos to{" "}
                <code className="text-nebula-pink text-xs">
                  content/marketing/assets/
                </code>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
