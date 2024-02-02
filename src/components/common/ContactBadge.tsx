import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/components";
import { IconName } from "../Icon";

type ContactBadgeProps = {
  title: string;
  icon: IconName;
  url: string;
  className?: string;
};

export default function ContactBadge({ title, icon, url, className }: ContactBadgeProps) {
  return (
    <Link
      href={url}
      className={twMerge(
        "btn btn-outline btn-accent border-4 bg-base-100 md:btn-lg rounded-full btn-wide shadow-md",
        className
      )}
      rel="noreferrer"
    >
      <Icon name={icon} className="size-6" />
      {title}
    </Link>
  );
}
