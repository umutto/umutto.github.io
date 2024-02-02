import { CSSProperties } from "react";
import { IconName } from "@/components/Icon";

export type BadgeLinkProps = {
  url: string;
  icon: IconName;
  title?: string;
  isFileDownload?: boolean;
};

export type CodeLine = { prefix?: string; className?: string; code: string };

export type CSSPropertiesWithVars = CSSProperties &
  Record<`--${string}`, number | string>;
