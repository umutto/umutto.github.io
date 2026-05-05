import { twMerge } from "tailwind-merge";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";
import Badge from "../common/Badge";

const tools = [
  {
    title: "Git",
    icon: "GitBranchPlus" as const,
  },
  {
    title: "Linux",
    icon: "Computer" as const,
  },
  {
    title: "Docker",
    icon: "Box" as const,
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
    title: "GCP",
    icon: "ServerCog" as const,
  },
  {
    title: "NewRelic",
    icon: "Binoculars" as const,
  },
  {
    title: "Sentry",
    icon: "Binoculars" as const,
  },
  {
    title: "WorkOS / Auth0",
    icon: "ContactRound" as const,
  },
];

export default async function ToolBadges({
  locale,
  className,
}: {
  locale: localeKey;
  className?: string;
}) {
  const t = await getTranslator(locale, ["home", "tools"]);

  return (
    <div className={twMerge("flex justify-center gap-1 flex-wrap py-2", className)}>
      {tools.map((tool, idx) => (
        <Badge key={idx} title={t(tool.title)} icon={tool.icon} />
      ))}
    </div>
  );
}
