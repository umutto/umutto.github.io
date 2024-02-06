import { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://umu.to"),
  title: "umu.to | Page not found",
};

export default async function NotFound() {
  return (
    <body>
      <div className="flex h-screen flex-col items-center justify-center md:flex-row">
        <h1 className="inline-block pt-6 align-top text-8xl font-medium md:mr-5 md:border-e md:pb-6 md:pr-6 drop-shadow">
          404
        </h1>
        <div className="inline-flex flex-col gap-2 text-center">
          <span className="font-thin">Page not found</span>
          <Link
            href="/"
            className="link link-hover text-secondary border-t md:border-t-0 pt-4 mt-4 md:pt-0 md:mt-0"
          >
            <h2 className="text-xl">Return back to index</h2>
          </Link>
        </div>
      </div>
      <AnimatedBackground />
    </body>
  );
}
