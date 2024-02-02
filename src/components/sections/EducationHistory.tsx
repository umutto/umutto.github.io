import { EducationCard } from "@/components";

const educationInstitutions = [
  {
    name: "Yeditepe University",
    degree: "Bachelor's degree, Computer Science Engineering",
    graduation: new Date(2016, 1, 1),
    image: "/images/yeditepe.webp",
  },
];

export default function EducationHistory() {
  return (
    <div className="pb-2 mx-2">
      {educationInstitutions.map((institution) => (
        <EducationCard key={institution.name} {...institution} />
      ))}
    </div>
  );
}
