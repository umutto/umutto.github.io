import { icons } from "lucide-react";
import { memo } from "react";
import { twMerge } from "tailwind-merge";

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
      className={twMerge("size-4 mx-1", className)}
      strokeWidth={strokeWidth || 2.5}
      aria-label={name}
    />
  );
});

Icon.displayName = "Icon";

export default Icon;
