import { EducationCard } from "@/components";
import { localeKey } from "@/config";
import { formatLocaleDate } from "@/utils/formatters";
import { getTranslator } from "@/utils/localization";

export default async function EducationHistory({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "education"]);

  return (
    <div className="pb-2 mx-2">
      <EducationCard
        name="Yeditepe University"
        degree={t("Bachelor's degree, Computer Science Engineering")}
        graduation={formatLocaleDate(locale, new Date(2016, 1, 1))}
        image="/images/yeditepe.webp"
      />
    </div>
  );
}
