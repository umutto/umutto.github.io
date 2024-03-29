import { Icon } from "@/components";
import { BadgeLinkProps } from "@/types/props";

export default function BadgeLink({ url, icon, title, isFileDownload }: BadgeLinkProps) {
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      className="btn-secondary btn btn-sm"
      title={title}
      download={isFileDownload}
    >
      {icon && <Icon name={icon} />} {title}
    </a>
  );
}
