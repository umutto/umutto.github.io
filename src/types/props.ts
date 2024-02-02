import { IconName } from "@/components/Icon";

export type BadgeLinkProps = {
  url: string;
  icon: IconName;
  title?: string;
  isFileDownload?: boolean;
};

export type CodeLine = { prefix?: string; className?: string; code: string };
