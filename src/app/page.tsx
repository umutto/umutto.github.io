import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import {
  Awards,
  EducationHistory,
  Hero,
  Projects,
  SkillBadges,
  Socials,
  SpokenLanguages,
  WorkHistory,
} from "@/components/sections";

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
        <section id="about" className="md:px-4 lg:px-8 xl:px-16">
          <SkillBadges />
          <div className="divider h-px overflow-hidden" />
          <SpokenLanguages />
          <div className="divider h-px overflow-hidden" />
          <WorkHistory />
          <div className="divider h-px overflow-hidden" />
          <EducationHistory />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="projects" className="md:px-4 lg:px-8 xl:px-16">
          <Projects />
          <div className="divider h-px overflow-hidden" />
          <Awards />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="contact" className="pb-16 md:px-4 lg:px-8 xl:px-16">
          <Socials />
        </section>
      </main>
      <Footer />
    </>
  );
}
