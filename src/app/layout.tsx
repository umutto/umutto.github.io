import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

// Required for the not-found page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      {children}
      <GoogleAnalytics gaId="G-04PH07ZCQE" />
    </html>
  );
}
