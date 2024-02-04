import type { Metadata } from "next";

import AnimatedBackground from "@/components/AnimatedBackground";
import { defaultLocale, localeKey, locales } from "@/config";

import "../globals.css";
import { jsonLdProfilePage } from "@/utils/structuredData";

export async function generateStaticParams() {
  const availableLocales = locales
    .filter((l) => l !== defaultLocale)
    .map((l) => ({ locale: [l] }));
  return [...availableLocales, { locale: [""] }];
}

export const metadata: Metadata = {
  metadataBase: new URL("https://umu.to"),
  title: "Umut Karakulak's Portfolio: Web Development & Machine Learning",
  description:
    "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure. Explore my portfolio and feel free to say hi!",
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
    "Typescript",
    "Open Source",
    "Portfolio",
    "Tokyo",
    "Japan",
  ],
  openGraph: {
    title: "Umut Karakulak's Portfolio: Web Development & Machine Learning",
    description:
      "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure. Explore my portfolio and feel free to say hi!",
    url: "https://umu.to",
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
    locale: "en_US",
    type: "website",
  },
};

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
