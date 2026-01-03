import { twMerge } from "tailwind-merge";
import Icon, { IconName } from "../Icon";

export type BadgeProps = {
  title: string;
  icon?: IconName;
  className?: string;
};

export default function Badge({ title, icon, className }: BadgeProps) {
  return (
    <div className={twMerge("badge md:badge-lg p-5 border-b-accent text-sm", className)}>
      {icon && <Icon name={icon} />}
      <span className="font-semibold">{title}</span>
    </div>
  );
}
