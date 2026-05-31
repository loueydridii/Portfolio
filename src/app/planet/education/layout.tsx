import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Planet",
  description: "Academic journey, certifications, awards, and continuous learning.",
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
