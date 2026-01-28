import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

// Required for the not-found page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      {children}
      {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
    </html>
  );
}
