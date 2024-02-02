import { IconName } from "@/components/Icon";

export type CardLink = {
  url: string;
  icon: IconName;
  title?: string;
  isFileDownload?: boolean;
};

export type CodeLine = { prefix?: string; className?: string; code: string };
