import { icons } from "lucide-react";
import { memo } from "react";

export type IconName = keyof typeof icons;

export const isValidIconName = (e: string): e is IconName => {
  return !!icons[e as keyof typeof icons];
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

const Icon = memo(({ name, className, strokeWidth }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={className || "h-4 w-4 mx-1"}
      strokeWidth={strokeWidth || 2.5}
    />
  );
});

Icon.displayName = "Icon";

export default Icon;
