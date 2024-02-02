import { SkillBadge } from "@/components";

const skills = [
  {
    title: "Python",
    icon: "Code" as const,
  },
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
    title: "Node.js",
    icon: "Server" as const,
  },
  {
    title: "Next.js",
    icon: "Server" as const,
  },
  {
    title: "React",
    icon: "AppWindow" as const,
  },
  {
    title: "AWS",
    icon: "ServerCog" as const,
  },
  {
    title: "Django",
    icon: "Server" as const,
  },
  {
    title: "Flask",
    icon: "Server" as const,
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
    title: "Machine Learning",
    icon: "BrainCircuit" as const,
  },
  {
    title: "AR / VR",
    icon: "Box" as const,
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
    title: "Keras",
    icon: "BrainCircuit" as const,
  },
  {
    title: "Data Visualization",
    icon: "AreaChart" as const,
  },
  {
    title: "Linux",
    icon: "Computer" as const,
  },
  {
    title: "Git",
    icon: "GitBranchPlus" as const,
  },
  {
    title: "Web Design",
    icon: "DraftingCompass" as const,
  },
  {
    title: "HTML",
    icon: "FileCode2" as const,
  },
  {
    title: "CSS",
    icon: "FileCode2" as const,
  },
];

export default function SkillBadges() {
  return (
    <div className="flex justify-center gap-1 flex-wrap py-2">
      {skills.map((skill, idx) => (
        <SkillBadge key={idx} {...skill} />
      ))}
    </div>
  );
}
