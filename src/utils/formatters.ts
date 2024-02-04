import { localeKey } from "@/config";

export function formatLocaleDate(locale: localeKey, date?: Date) {
  if (!date) {
    return;
  }

  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
  });
}
