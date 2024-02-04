import { EducationCard } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const educationInstitutions = [
  {
    name: "Yeditepe University",
    degree: "Bachelor's degree, Computer Science Engineering",
    graduation: new Date(2016, 1, 1),
    image: "/images/yeditepe.webp",
  },
];

export default async function EducationHistory({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "education"]);

  return (
    <div className="pb-2 mx-2">
      {educationInstitutions.map((institution) => (
        <EducationCard
          key={institution.name}
          {...institution}
          name={t(institution.name)}
          degree={t(institution.degree)}
        />
      ))}
    </div>
  );
}
