"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Users,
  Award,
  Megaphone,
  Camera,
  Tv,
  Zap,
  Ticket,
  Shield,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Role {
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface Organization {
  name: string;
  logo: string;
  color: string;
  borderColor: string;
  bgColor: string;
  roles: Role[];
}

const organizations: Organization[] = [
  {
    name: "ATLAS Future Leaders — TBS Chapter",
    logo: "/images/organizations/ATLAS.png",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/20",
    bgColor: "bg-emerald-400",
    roles: [
      {
        title: "Member",
        date: "Oct 2023 – Dec 2023",
        description:
          "Joined as an active member, contributing to club events, workshops, and team activities. Participated in organizing sessions and supporting the club's mission of fostering future leaders.",
        tags: ["Teamwork", "Event Support", "Networking"],
      },
      {
        title: "Vice-President of Marketing",
        date: "Dec 2023 – Jun 2024",
        description:
          "Led a dynamic marketing team to develop and execute strategies that drive engagement and growth. Oversaw multi-channel marketing campaigns including social media, email, and event promotions. Led marketing efforts for major events like AIvolution, Hackathon 6.0, and the small business exhibition.",
        tags: [
          "Strategic Planning",
          "Team Leadership",
          "Campaign Management",
          "Sponsor Relations",
        ],
      },
      {
        title: "Alumnus",
        date: "Jul 2024 – Present",
        description:
          "Continued involvement as an alumnus, mentoring new members and supporting chapter initiatives and growth. Providing guidance on marketing strategy and organizational development.",
        tags: ["Mentoring", "Community", "Leadership"],
      },
    ],
  },
  {
    name: "MERIT TBS Club",
    logo: "/images/organizations/MERIT.jpg",
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    bgColor: "bg-blue-400",
    roles: [
      {
        title: "Media Member",
        date: "2 years",
        description:
          "Contributed to media production and content creation for the club over two years. Designed promotional materials, managed visual communications, and supported marketing campaigns for club events and initiatives.",
        tags: ["Media Production", "Content Creation", "Visual Design"],
      },
    ],
  },
  {
    name: "3 zero TBS campus club",
    logo: "/images/organizations/3zero.jpg",
    color: "text-amber-400",
    borderColor: "border-amber-400/20",
    bgColor: "bg-amber-400",
    roles: [
      {
        title: "Media Member",
        date: "",
        description:
          "Supported media and communication efforts for the 3 Zero initiative. Created visual content and contributed to the club's digital presence and outreach activities.",
        tags: ["Social Impact", "Media", "Communication"],
      },
    ],
  },
  {
    name: "Youth Club",
    logo: "/images/organizations/youth club.jpg",
    color: "text-rose-400",
    borderColor: "border-rose-400/20",
    bgColor: "bg-rose-400",
    roles: [
      {
        title: "Media Member",
        date: "",
        description:
          "Contributed to media production and visual communications for the Youth Club. Designed graphics, managed social media content, and helped amplify the club's message and activities.",
        tags: ["Youth Engagement", "Graphic Design", "Social Media"],
      },
    ],
  },
  {
    name: "IEEE TBS Student Branch",
    logo: "/images/organizations/ieee.jpg",
    color: "text-cyan-400",
    borderColor: "border-cyan-400/20",
    bgColor: "bg-cyan-400",
    roles: [
      {
        title: "Founding Member",
        date: "",
        description:
          "Part of the founding team that established the IEEE Student Branch at Tunis Business School. Helped build the organizational foundation, recruit initial members, and set the vision for bridging technology and business education.",
        tags: ["Founding Team", "IEEE", "Technology", "Organization Building"],
      },
    ],
  },
  {
    name: "Club Tunivisions Siliana Pioneer School",
    logo: "/images/organizations/Tunivisions.jpg",
    color: "text-purple-400",
    borderColor: "border-purple-400/20",
    bgColor: "bg-purple-400",
    roles: [
      {
        title: "Marketing Chief",
        date: "",
        description:
          "Led the marketing division for Tunivision at Siliana Pioneer School. Developed and executed marketing strategies, managed promotional campaigns, and coordinated the team to boost visibility and engagement for school events and initiatives.",
        tags: [
          "Marketing Leadership",
          "Strategy",
          "Campaign Management",
          "Team Coordination",
        ],
      },
    ],
  },
];

export default function VolunteerPlanetPage() {
  return (
    <div className="planet-bg-volunteer min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-emerald-400 mb-6">
              <Heart className="w-4 h-4" />
              Volunteer Planet — Contributor
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Impact &{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Building connections, leading organizations, and creating
              positive change beyond the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-12 px-4" id="organizations-section">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full" />
            Organizations & Roles
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {organizations.map((org) => (
              <motion.div
                key={org.name}
                variants={itemVariants}
                className={`glass rounded-2xl overflow-hidden hover:${org.borderColor} transition-all duration-300`}
                id={`org-${org.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                {/* Org Header */}
                <div className="px-6 py-4 flex items-center gap-4 border-b border-white/5">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden bg-white/5`}
                  >
                    <Image
                      src={org.logo}
                      alt={`${org.name} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary text-lg">
                      {org.name}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {org.roles.length}{" "}
                      {org.roles.length === 1 ? "role" : "roles"}
                    </p>
                  </div>
                </div>

                {/* Roles */}
                <div className="divide-y divide-white/5">
                  {org.roles.map((role, idx) => (
                    <div
                      key={role.title}
                      className="px-6 py-5 hover:bg-white/[0.02] transition-colors duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <ChevronRight
                          className={`w-4 h-4 mt-1 ${org.color} flex-shrink-0`}
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                            <h4 className="font-semibold text-text-primary">
                              {role.title}
                            </h4>
                            {role.date && (
                              <span
                                className={`text-xs font-medium ${org.color} mt-0.5 sm:mt-0`}
                              >
                                {role.date}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                            {role.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {role.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`px-2.5 py-0.5 text-xs rounded-full ${org.bgColor}/10 ${org.color} border ${org.borderColor}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
