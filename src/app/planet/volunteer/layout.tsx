import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer Planet",
  description: "Community involvement, club leadership, events, and social impact initiatives.",
};

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
