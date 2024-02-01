import { twMerge } from "tailwind-merge";
import Icon, { IconName } from "../Icon";

type SkillBadgeProps = {
  title: string;
  icon?: IconName;
  className?: string;
};

export default function SkillBadge({ title, icon, className }: SkillBadgeProps) {
  return (
    <div className={twMerge("badge badge-lg p-5 border-b-accent", className)}>
      {icon && <Icon name={icon} />}
      <span className="font-semibold">{title}</span>
    </div>
  );
}
