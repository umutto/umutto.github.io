import "server-only";

import { localeKey, locales } from "@/config";

const dictionaries = Object.fromEntries(
  locales.map((locale) => [
    locale,
    () => import(`@/locales/${locale}.json`).then((module) => module.default),
  ])
);

export const getLocaleDictionary = async (locale: localeKey) => dictionaries[locale]?.();

export const getTranslator = async (locale: localeKey, namespace?: string[]) => {
  const dict = await getLocaleDictionary(locale);

  let dictNamespace = dict;
  namespace?.forEach((n) => (dictNamespace = dictNamespace[n]));

  const translator = (s: string) => dictNamespace[s] || s;

  return translator;
};
