import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Planet",
  description: "Leadership, partnerships, entrepreneurship, and strategic growth.",
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
