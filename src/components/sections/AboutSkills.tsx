import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";
import { SkillBadges, SpokenLanguages } from ".";

export default async function AboutSkills({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home"]);

  return (
    <>
      <h3 className="text-xl md:text-2xl text-bold text-neutral/90 text-center mb-3">
        {t("Languages")}
      </h3>
      <SpokenLanguages locale={locale} />
      <h3 className="text-xl md:text-2xl text-bold text-neutral/90 text-center mb-3 mt-6">
        {t("Skills")}
      </h3>
      <SkillBadges locale={locale} />
    </>
  );
}
