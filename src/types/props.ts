import { CSSProperties } from "react";
import { IconName } from "@/components/Icon";

export type TimelineCompany = {
  name: string;
  location?: string;
  image?: string;
  events: TimelineEvent[];
  footer?: string;
};

export type TimelineEvent = {
  title: string;
  dateFrom: Date;
  dateTo: Date | "present";
  description: string;
};

export type BadgeLinkProps = {
  url: string;
  icon: IconName;
  title?: string;
  isFileDownload?: boolean;
};

export type CodeLine = { prefix?: string; className?: string; code: string };

export type CSSPropertiesWithVars = CSSProperties &
  Record<`--${string}`, number | string>;
