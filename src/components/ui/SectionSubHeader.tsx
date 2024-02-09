import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionSubHeaderProps = {
  className?: string;
  children: ReactNode;
};

export default function SectionSubHeader({ className, children }: SectionSubHeaderProps) {
  return (
    <h3
      className={twMerge(
        "text-xl md:text-2xl text-base-content/60 text-center mb-3 mt-5",
        className
      )}
    >
      {children}
    </h3>
  );
}
