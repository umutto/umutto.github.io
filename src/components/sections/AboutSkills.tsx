import { SectionSubHeader } from "@/components";
import { SkillBadges, SpokenLanguages } from "@/components/sections";
import { SkillGroupKey } from "@/components/sections/SkillBadges";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const groupOrder: SkillGroupKey[] = [
  "web_backend",
  "ai_ml",
  "cloud_tooling",
  "architecture_leadership",
];

export default async function AboutSkills({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home"]);
  const tGroups = await getTranslator(locale, ["home", "skillGroups"]);

  return (
    <div className="flex flex-col lg:gap-10">
      <div className="lg:flex items-center mx-auto lg:gap-6 xl:gap-12 lg:mt-4 w-full xl:px-6">
        <SectionSubHeader className="lg:text-3xl xl:text-4xl lg:w-1/3 xl:text-end">
          {t("Languages")}
        </SectionSubHeader>
        <SpokenLanguages className="lg:w-2/3" locale={locale} />
      </div>
      {groupOrder.map((groupKey, idx) => (
        <div
          key={groupKey}
          className={`lg:flex justify-between items-center mx-auto lg:gap-6 xl:gap-12 w-full xl:px-6 ${
            idx === groupOrder.length - 1 ? "mb-4" : ""
          }`}
        >
          <SectionSubHeader className="lg:text-3xl xl:text-4xl lg:w-1/3 xl:text-end">
            {tGroups(groupKey)}
          </SectionSubHeader>
          <SkillBadges className="lg:w-2/3" locale={locale} group={groupKey} />
        </div>
      ))}
    </div>
  );
}
