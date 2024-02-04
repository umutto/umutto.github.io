export const themes = { light: "emerald", dark: "sunset" };

export const locales = ["en", "ja"] as const;
export type localeKey = (typeof locales)[number];
export const defaultLocale = "en";
