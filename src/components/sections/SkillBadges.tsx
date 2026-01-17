import { twMerge } from "tailwind-merge";
import { Badge } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const skills = [
  {
    title: "Javascript",
    icon: "Code" as const,
  },
  {
    title: "Typescript",
    icon: "Code" as const,
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
    title: "HTML / CSS",
    icon: "FileCodeCorner" as const,
  },
  {
    title: "Tailwind CSS",
    icon: "Palette" as const,
  },
  {
    title: "SQL",
    icon: "Database" as const,
  },
  {
    title: "MongoDB",
    icon: "Database" as const,
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
    title: "NumPy",
    icon: "Variable" as const,
  },
  {
    title: "Pandas",
    icon: "TableProperties" as const,
  },
  {
    title: "Tensorflow",
    icon: "BrainCircuit" as const,
  },
  {
    title: "RAG",
    icon: "BrainCircuit" as const,
  },
  {
    title: "LLMs",
    icon: "BrainCircuit" as const,
  },
  {
    title: "NLP",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Computer Vision",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Machine Learning",
    icon: "BrainCircuit" as const,
  },
  {
    title: "AR / VR",
    icon: "Box" as const,
  },
  {
    title: "Infrastructure",
    icon: "ServerCog" as const,
  },
  {
    title: "System Design",
    icon: "Workflow" as const,
  },
  {
    title: "DevOps",
    icon: "Workflow" as const,
  },
  {
    title: "Mentorship",
    icon: "Users" as const,
  },
  {
    title: "Management",
    icon: "Users" as const,
  },
  {
    title: "Recruitment",
    icon: "Users" as const,
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
