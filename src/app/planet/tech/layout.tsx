import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Planet",
  description: "Explore my technical projects, skills, and engineering expertise.",
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
