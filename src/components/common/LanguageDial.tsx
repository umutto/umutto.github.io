import { twMerge } from "tailwind-merge";
import { CSSPropertiesWithVars } from "@/types/props";

type LanguageDialProps = {
  value: number;
  text?: string;
  className?: string;
};

export default function LanguageDial({ value, text, className }: LanguageDialProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center text-center gap-1 text-sm font-bold",
        className
      )}
    >
      <div
        className="radial-progress drop-shadow"
        style={{ "--value": value, "--thickness": "0.25rem" } as CSSPropertiesWithVars}
        role="progressbar"
        aria-label={text}
      >
        {`${value}%`}
      </div>
      {text}
    </div>
  );
}
