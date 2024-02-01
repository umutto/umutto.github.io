import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionHeaderProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function SectionHeader({ id, className, children }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={twMerge(
        "text-4xl md:text-5xl text-center drop-shadow mb-8 font-semibold",
        className
      )}
    >
      {children}
    </h2>
  );
}
