import { twMerge } from "tailwind-merge";

export default function Divider({ className }: { className?: string }) {
  return <div className={twMerge("divider h-px overflow-hidden lg:py-8", className)} />;
}
