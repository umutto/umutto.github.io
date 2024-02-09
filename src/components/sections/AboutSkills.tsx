import { SectionSubHeader } from "@/components";
import { SkillBadges, SpokenLanguages } from "@/components/sections";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

export default async function AboutSkills({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home"]);

  return (
    <>
      <SectionSubHeader>{t("Languages")}</SectionSubHeader>
      <SpokenLanguages locale={locale} />
      <SectionSubHeader>{t("Skills")}</SectionSubHeader>
      <SkillBadges locale={locale} />
    </>
  );
}
