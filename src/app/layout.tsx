import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";

import { Person, WithContext } from "schema-dts";

import "./globals.css";

import AnimatedBackground from "@/components/AnimatedBackground";

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

const jsonLdPerson: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Umut Karakulak",
  familyName: "Karakulak",
  givenName: "Umut",
  nationality: "Turkish",
  image: "https://umu.to/umut.webp",
  jobTitle: "Software Developer",
  worksFor: "DUNKSOFT Co.,Ltd",
  workLocation: "Tokyo, Japan",
  url: "https://umu.to",
  email: "hi@umu.to",
  knowsLanguage: ["Turkish", "English", "Japanese"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "hi@umu.to",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/umutto/",
    "https://github.com/umutto",
    "https://stackoverflow.com/users/826970/umutto",
  ],
  description:
    "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure.",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Yeditepe University",
    },
  ],
  award: [
    "Tokyo Public Transportation Open Data Challenge INIAD special innovation award",
    "Microsoft Imagine Cup 2009 World Finalist",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tl from-primary/25 min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <AnimatedBackground />
      </body>
      <GoogleAnalytics gaId="G-04PH07ZCQE" />
    </html>
  );
}
