import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umut Karakulak's Portfolio: : Web Development & Machine Learning",
  description:
    "Someone who is passionate about experimenting with innovative, state of the art technologies. Currently working as a full-stack developer with a touch of machine learning for good measure. Explore my portfolio and feel free to say hi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tl from-primary/15 min-h-screen">{children}</body>
    </html>
  );
}
