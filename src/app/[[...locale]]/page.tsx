import { Divider, SectionHeader } from "@/components";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import {
  AboutSkills,
  Awards,
  EducationHistory,
  Hero,
  Projects,
  Socials,
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
          <SectionHeader>{t("About")}</SectionHeader>
          <AboutSkills locale={locale} />
          <Divider />
          <SectionHeader>{t("Work")}</SectionHeader>
          <WorkHistory locale={locale} />
          <Divider />
          <SectionHeader>{t("Education")}</SectionHeader>
          <EducationHistory locale={locale} />
          <Divider />
        </section>
        <section id="projects" className="md:px-4 lg:px-8 xl:px-16">
          <SectionHeader>{t("Projects")}</SectionHeader>
          <Projects locale={locale} />
          <Divider />
          <SectionHeader>{t("Awards")}</SectionHeader>
          <Awards locale={locale} />
          <Divider />
        </section>
        <section
          id="contact"
          className="pb-8 md:pb-16 lg:pb-24 pt-4 md:px-4 lg:px-8 xl:px-16"
        >
          <SectionHeader className="pt-6 pb-10 font-bold">
            {t("Ready to say hello?")}
          </SectionHeader>
          <Socials />
        </section>
      </main>
      <Footer />
    </>
  );
}
