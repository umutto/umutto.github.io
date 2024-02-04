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
import { defaultLocale, localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const navigationRoutes = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default async function Home({ params }: { params?: { locale: localeKey } }) {
  const locale = params?.locale || defaultLocale;
  const t = await getTranslator(locale, ["home"]);

  return (
    <>
      <NavBar
        locale={locale}
        routes={navigationRoutes.map((r) => ({ ...r, name: t("navigation")[r.name] }))}
      />
      <Hero locale={locale} />
      <main className="container mx-auto py-8 gap-6">
        <section id="about" className="md:px-4 lg:px-8 xl:px-16">
          <SectionHeader>{t("Skills")}</SectionHeader>
          <SkillBadges locale={locale} />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>{t("Languages")}</SectionHeader>
          <SpokenLanguages locale={locale} />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>{t("Work")}</SectionHeader>
          <WorkHistory locale={locale} />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>{t("Education")}</SectionHeader>
          <EducationHistory locale={locale} />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="projects" className="md:px-4 lg:px-8 xl:px-16">
          <SectionHeader>{t("Projects")}</SectionHeader>
          <Projects locale={locale} />
          <div className="divider h-px overflow-hidden" />
          <SectionHeader>{t("Awards")}</SectionHeader>
          <Awards locale={locale} />
          <div className="divider h-px overflow-hidden" />
        </section>
        <section id="contact" className="pb-16 pt-4 md:px-4 lg:px-8 xl:px-16">
          <SectionHeader className="py-6 font-bold">
            {t("Ready to say hello?")}
          </SectionHeader>
          <Socials />
        </section>
      </main>
      <Footer />
    </>
  );
}
