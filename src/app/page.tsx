import { SectionHeader } from "@/components";
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
          <SectionHeader>Skills</SectionHeader>
          <SkillBadges />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>Languages</SectionHeader>
          <SpokenLanguages />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>Work History</SectionHeader>
          <WorkHistory />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>Education</SectionHeader>
          <EducationHistory />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="projects" className="md:px-4 lg:px-8 xl:px-16">
          <SectionHeader>Projects</SectionHeader>
          <Projects />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>Awards</SectionHeader>
          <Awards />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="contact" className="pb-16 pt-4 md:px-4 lg:px-8 xl:px-16">
          <SectionHeader className="py-6 font-bold">Ready to say hello?</SectionHeader>
          <Socials />
        </section>
      </main>
      <Footer />
    </>
  );
}
