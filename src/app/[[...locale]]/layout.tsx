import type { Metadata } from "next";

import AnimatedBackground from "@/components/AnimatedBackground";
import { defaultLocale, localeKey, locales } from "@/config";

import "../globals.css";

import { getTranslator } from "@/utils/localization";
import { jsonLdProfilePage } from "@/utils/structuredData";

export async function generateStaticParams() {
  const availableLocales = locales
    .filter((l) => l !== defaultLocale)
    .map((l) => ({ locale: [l] }));
  return [...availableLocales, { locale: [""] }];
}

export async function generateMetadata({
  params,
}: {
  params?: { locale: localeKey };
}): Promise<Metadata> {
  const locale = params?.locale || defaultLocale;
  const t = await getTranslator(locale, ["metadata"]);
  const localeUrl = locale === defaultLocale ? "https://umu.to" : `https://umu.to/${locale}`;

  return {
    metadataBase: new URL("https://umu.to"),
    title: t("Title"),
    description: t("Description"),
    alternates: {
      canonical: localeUrl,
      languages: {
        en: "https://umu.to",
        ja: "https://umu.to/ja",
      },
    },
    authors: {
      name: "Umut Karakulak",
    },
    keywords: [
      "Software Developer",
      "Machine Learning",
      "React",
      "Nextjs",
      "Web Frameworks",
      "SQL Databases",
      "GitHub",
      "Full Stack Development",
      "JavaScript",
      "Python",
      "SQL",
      "TypeScript",
      "Open Source",
      "Portfolio",
      "Tokyo",
      "Japan",
    ],
    openGraph: {
      title: t("Title"),
      description: t("Description"),
      url: localeUrl,
      siteName: "umu.to",
      images: [
        {
          url: "https://umu.to/logo_3x2_lg.png", // Must be an absolute URL
          width: 1800,
          height: 1200,
        },
        {
          url: "https://umu.to/logo_3x2.png", // Must be an absolute URL
          width: 900,
          height: 600,
        },
        {
          url: "https://umu.to/logo_3x2_sm.png", // Must be an absolute URL
          width: 600,
          height: 400,
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { locale: localeKey };
}>) {
  const locale = params?.locale || defaultLocale;
  return (
    <body lang={locale} className="bg-gradient-to-tl from-primary/25 min-h-screen">
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
      />
      <AnimatedBackground />
    </body>
  );
}
