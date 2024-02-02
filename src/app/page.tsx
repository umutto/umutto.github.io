import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { EducationHistory, Hero, SkillBadges, WorkHistory } from "@/components/sections";

const navigationRoutes = [
  { name: "About", href: "#about" }, // Work, education, skills, languages
  { name: "Projects", href: "#projects" }, // Achievements, Projects
  { name: "Contact", href: "#contact" }, // Contact, socials
];

export default function Home() {
  return (
    <>
      <NavBar routes={navigationRoutes} />
      <Hero />
      <main className="container mx-auto py-8 gap-6">
        <section id="about" className="pb-10 md:px-4 lg:px-8 xl:px-16">
          <SkillBadges />
          <div className="divider" />
          <EducationHistory />
          <div className="divider" />
          <WorkHistory />
        </section>
      </main>
      <Footer />
    </>
  );
}
