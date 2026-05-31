"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Link2,
  CodeXml,
  Phone,
  Download,
  ExternalLink,
  Satellite,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const contactLinks = [
  {
    name: "Email",
    value: "loueydriditbs@gmail.com",
    href: "mailto:loueydriditbs@gmail.com",
    icon: Mail,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "hover:border-blue-400/30",
    description: "Best for professional inquiries",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/louey-dridi",
    href: "https://www.linkedin.com/in/louey-dridi/",
    icon: Link2,
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    borderColor: "hover:border-sky-400/30",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    value: "github.com/loueydridii",
    href: "https://github.com/loueydridii",
    icon: CodeXml,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "hover:border-purple-400/30",
    description: "View my code & projects",
  },
  {
    name: "Phone",
    value: "+216 93902600",
    href: "tel:+21693902600",
    icon: Phone,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "hover:border-emerald-400/30",
    description: "For urgent matters",
  },
];

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-text-muted hover:text-text-primary"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export default function ContactStationPage() {
  return (
    <div className="planet-bg-contact min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-nebula-blue mb-6">
              <Satellite className="w-4 h-4" />
              Contact Station — Connect
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Ready to collaborate, chat, or explore opportunities?
              Here&apos;s how to reach me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className={`glass rounded-xl p-5 ${link.borderColor} transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${link.bgColor} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${link.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-text-primary">
                          {link.name}
                        </h3>
                      </div>
                      <p className="text-sm text-text-muted truncate">
                        {link.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <CopyButton value={link.value} />
                      <a
                        href={link.href}
                        target={
                          link.name === "LinkedIn" || link.name === "GitHub"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.name === "LinkedIn" || link.name === "GitHub"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`p-1.5 rounded-md hover:bg-white/5 transition-colors ${link.color}`}
                        aria-label={`Open ${link.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CV & Cover Letter Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/cv.pdf"
              download
              className="flex-1 flex items-center justify-center gap-3 w-full py-4 rounded-xl glass glass-hover text-text-primary font-medium transition-all duration-300 group hover:border-nebula-purple/30"
              id="contact-download-cv"
            >
              <Download className="w-5 h-5 text-nebula-purple group-hover:scale-110 transition-transform" />
              Download Full CV (PDF)
            </a>
            <a
              href="/CoverLetter.pdf"
              download
              className="flex-1 flex items-center justify-center gap-3 w-full py-4 rounded-xl glass glass-hover text-text-primary font-medium transition-all duration-300 group hover:border-nebula-purple/30"
              id="contact-download-cover"
            >
              <Download className="w-5 h-5 text-nebula-purple group-hover:scale-110 transition-transform" />
              Download Cover Letter (PDF)
            </a>
          </motion.div>

          {/* Availability Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-text-muted mt-8"
          >
            Interested in technology consulting and roles that combine business understanding with analytical problem solving.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
