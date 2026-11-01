import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/components";
import { IconName } from "../Icon";

type ContactBadgeProps = {
  title: string;
  subtitle: string;
  icon: IconName;
  url: string;
  iconClassName?: string;
  className?: string;
};

export default function ContactBadge({
  title,
  subtitle,
  icon,
  url,
  iconClassName,
  className,
}: ContactBadgeProps) {
  const isMailto = url.startsWith("mailto:");

  return (
    <Link
      href={url}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noreferrer"}
      className={twMerge(
        "group flex items-center justify-between gap-4 w-full sm:w-64 px-5 py-4 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm hover:shadow-lg hover:border-primary/60 hover:-translate-y-0.5 transition-all duration-200",
        className
      )}
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className={twMerge(
            "p-2.5 rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-200",
            iconClassName || "bg-primary/15 text-primary"
          )}
        >
          <Icon name={icon} className="size-5 mx-0" />
        </div>
        <div className="text-start truncate">
          <div className="font-bold text-base-content text-sm leading-tight">
            {title}
          </div>
          <div className="text-xs text-base-content/50 truncate mt-0.5">
            {subtitle}
          </div>
        </div>
      </div>
      <Icon
        name="ArrowUpRight"
        className="size-4 mx-0 shrink-0 text-base-content/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
      />
    </Link>
  );
}
