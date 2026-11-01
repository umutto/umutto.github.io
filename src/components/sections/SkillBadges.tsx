import { twMerge } from "tailwind-merge";
import { Badge } from "@/components";
import { IconName } from "@/components/Icon";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

export type SkillGroupKey =
  | "web_backend"
  | "ai_ml"
  | "cloud_tooling"
  | "architecture_leadership";

type SkillItem = {
  title: string;
  icon: IconName;
};

export const skillGroups: Record<SkillGroupKey, SkillItem[]> = {
  web_backend: [
    { title: "TypeScript", icon: "Code" },
    { title: "JavaScript", icon: "Code" },
    { title: "Python", icon: "Code" },
    { title: "Go", icon: "Code" },
    { title: "Node.js", icon: "Server" },
    { title: "React", icon: "Wallpaper" },
    { title: "Next.js", icon: "Wallpaper" },
    { title: "NestJS", icon: "Server" },
    { title: "FastAPI", icon: "Server" },
    { title: "tRPC", icon: "Cable" },
    { title: "gRPC", icon: "Cable" },
    { title: "Tailwind CSS", icon: "Palette" },
    { title: "SQL", icon: "Database" },
    { title: "MongoDB", icon: "Database" },
    { title: "Redis", icon: "Database" },
  ],
  ai_ml: [
    { title: "RAG", icon: "BrainCircuit" },
    { title: "LLM Ops", icon: "Workflow" },
    { title: "Machine Learning", icon: "BrainCircuit" },
    { title: "NLP", icon: "BrainCircuit" },
    { title: "Computer Vision", icon: "BrainCircuit" },
    { title: "TensorFlow", icon: "BrainCircuit" },
    { title: "Keras", icon: "BrainCircuit" },
    { title: "NumPy", icon: "Variable" },
    { title: "Pandas", icon: "TableProperties" },
    { title: "AR / VR", icon: "Box" },
  ],
  cloud_tooling: [
    { title: "AWS / GCP / Azure", icon: "ServerCog" },
    { title: "Docker", icon: "Box" },
    { title: "CI/CD", icon: "GitBranchPlus" },
    { title: "New Relic", icon: "Binoculars" },
    { title: "Sentry", icon: "Binoculars" },
    { title: "WorkOS / Auth0", icon: "ContactRound" },
    { title: "ClickHouse", icon: "Database" },
  ],
  architecture_leadership: [
    { title: "System Design", icon: "Workflow" },
    { title: "Microservices", icon: "Boxes" },
    { title: "Realtime Systems", icon: "Activity" },
    { title: "DevOps", icon: "Workflow" },
    { title: "Automated Testing", icon: "CircleCheckBig" },
    { title: "AI-Native SDLC", icon: "BrainCircuit" },
    { title: "Management", icon: "Users" },
    { title: "Recruitment", icon: "Users" },
  ],
};

export default async function SkillBadges({
  locale,
  group = "web_backend",
  className,
}: {
  locale: localeKey;
  group?: SkillGroupKey;
  className?: string;
}) {
  const t = await getTranslator(locale, ["home", "skills"]);
  const items = skillGroups[group];

  return (
    <div className={twMerge("flex justify-center gap-1 flex-wrap py-2", className)}>
      {items.map((skill, idx) => (
        <Badge key={idx} title={t(skill.title)} icon={skill.icon} />
      ))}
    </div>
  );
}
