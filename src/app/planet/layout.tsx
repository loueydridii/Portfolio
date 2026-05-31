import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToGalaxy from "@/components/layout/BackToGalaxy";

export default function PlanetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[4.5rem]">{children}</main>
      <BackToGalaxy />
      <Footer />
    </>
  );
}
