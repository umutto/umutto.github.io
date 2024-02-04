"use server";

import Link from "next/link";
import { Icon } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

export default async function LocaleSwitch({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["common", "locale"]);

  return (
    <Link
      className="btn btn-neutral btn-outline rounded-full"
      href={locale === "en" ? "/ja" : "/"}
    >
      <Icon name="Globe" className="size-5" />
      {locale === "en" ? t("ja") : t("en")}
    </Link>
  );
}
