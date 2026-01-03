import { SectionSubHeader } from "@/components";
import { SkillBadges, SpokenLanguages, ToolBadges } from "@/components/sections";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

export default async function AboutSkills({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home"]);

  return (
    <div className="flex flex-col lg:gap-12">
      <div className="lg:flex items-center mx-auto lg:gap-6 xl:gap-12 lg:mt-4 w-full xl:px-6">
        <SectionSubHeader className="lg:text-4xl lg:w-1/3 xl:text-end">
          {t("Languages")}
        </SectionSubHeader>
        <SpokenLanguages className="lg:w-2/3" locale={locale} />
      </div>
      <div className="lg:flex justify-between items-center mx-auto lg:gap-6 xl:gap-12 w-full xl:px-6">
        <SectionSubHeader className="lg:text-4xl lg:w-1/3 xl:text-end">
          {t("Skills")}
        </SectionSubHeader>
        <SkillBadges className="lg:w-2/3" locale={locale} />
      </div>
      <div className="lg:flex justify-between items-center mx-auto lg:gap-6 xl:gap-12 mb-4 w-full xl:px-6">
        <SectionSubHeader className="lg:text-4xl lg:w-1/3 xl:text-end">
          {t("Tools")}
        </SectionSubHeader>
        <ToolBadges className="lg:w-2/3" locale={locale} />
      </div>
    </div>
  );
}
