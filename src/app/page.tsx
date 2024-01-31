import NavBar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

const navigationRoutes = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <NavBar routes={navigationRoutes} />
      <Hero />
      <main className="container mx-auto"></main>
    </>
  );
}
