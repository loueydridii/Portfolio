import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Planet",
  description: "Graphic design, video editing, and creative communication work.",
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
