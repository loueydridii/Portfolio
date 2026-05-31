import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Station",
  description: "Get in touch — email, LinkedIn, GitHub, and more.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
