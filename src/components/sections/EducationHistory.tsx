import { EducationCard, SectionHeader } from "@/components";

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
    <>
      <SectionHeader>Education</SectionHeader>
      <div className="py-2 mx-2">
        {educationInstitutions.map((institution) => (
          <EducationCard key={institution.name} {...institution} />
        ))}
      </div>
    </>
  );
}
