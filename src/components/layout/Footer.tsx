import Link from "next/link";
import { CodeXml, Link2, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass-border" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span>© {new Date().getFullYear()} Louey Galaxy</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/loueydridii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub profile"
              id="footer-github"
            >
              <CodeXml className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/louey-dridi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn profile"
              id="footer-linkedin"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:loueydriditbs@gmail.com"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200"
              aria-label="Send email"
              id="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <Link
            href="/"
            className="text-sm text-text-muted hover:text-nebula-purple transition-colors"
            id="footer-home"
          >
            Return to Galaxy →
          </Link>
        </div>
      </div>
    </footer>
  );
}
