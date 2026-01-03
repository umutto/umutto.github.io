import { twMerge } from "tailwind-merge";
import { Badge } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const skills = [
  {
    title: "SQL",
    icon: "Database" as const,
  },
  {
    title: "Javascript",
    icon: "Code" as const,
  },
  {
    title: "Typescript",
    icon: "Code" as const,
  },
  {
    title: "Next.js",
    icon: "Wallpaper" as const,
  },
  {
    title: "React",
    icon: "Wallpaper" as const,
  },
  {
    title: "tRPC",
    icon: "Cable" as const,
  },
  {
    title: "Node.js",
    icon: "Server" as const,
  },
  {
    title: "NestJS",
    icon: "Server" as const,
  },
  {
    title: "Python",
    icon: "Code" as const,
  },
  {
    title: "FastAPI",
    icon: "Server" as const,
  },
  {
    title: "Azure",
    icon: "ServerCog" as const,
  },
  {
    title: "AWS",
    icon: "ServerCog" as const,
  },
  {
    title: "Docker",
    icon: "Box" as const,
  },
  {
    title: "Tailwind CSS",
    icon: "Palette" as const,
  },
  {
    title: "Pandas",
    icon: "TableProperties" as const,
  },
  {
    title: "NumPy",
    icon: "Variable" as const,
  },
  {
    title: "Tensorflow",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Machine Learning",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Computer Vision",
    icon: "BrainCircuit" as const,
  },
  {
    title: "NLP",
    icon: "BrainCircuit" as const,
  },
  {
    title: "AR / VR",
    icon: "Box" as const,
  },
  {
    title: "HTML",
    icon: "FileCodeCorner" as const,
  },
  {
    title: "CSS",
    icon: "FileCodeCorner" as const,
  },
];

export default async function SkillBadges({
  locale,
  className,
}: {
  locale: localeKey;
  className?: string;
}) {
  const t = await getTranslator(locale, ["home", "skills"]);

  return (
    <div className={twMerge("flex justify-center gap-1 flex-wrap py-2", className)}>
      {skills.map((skill, idx) => (
        <Badge key={idx} title={t(skill.title)} icon={skill.icon} />
      ))}
    </div>
  );
}
