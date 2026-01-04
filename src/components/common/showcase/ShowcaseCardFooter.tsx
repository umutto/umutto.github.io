import { BadgeLink } from "@/components";
import { BadgeLinkProps } from "@/types/props";

type ShowcaseCardFooterProps = { links: BadgeLinkProps[] };

export default function ShowcaseCard({ links }: ShowcaseCardFooterProps) {
  return (
    <div className="card-actions justify-center sm:justify-end mt-2">
      {links?.map((link, idx) => (
        <BadgeLink key={idx} {...link} />
      ))}
    </div>
  );
}
