import { ContactBadge } from "@/components";

const links = [
  {
    title: "Email",
    subtitle: "hi@umu.to",
    icon: "MailOpen" as const,
    url: "mailto:hi@umu.to",
    iconClassName: "bg-emerald-500/15 text-emerald-500",
  },
  {
    title: "GitHub",
    subtitle: "@umutto",
    icon: "Github" as const,
    url: "https://github.com/umutto",
    iconClassName: "bg-base-content/10 text-base-content",
  },
  {
    title: "LinkedIn",
    subtitle: "in/umutto",
    icon: "Linkedin" as const,
    url: "https://www.linkedin.com/in/umutto/",
    iconClassName: "bg-blue-500/15 text-blue-500",
  },
  {
    title: "Wantedly",
    subtitle: "umut_karakulak",
    icon: "Waypoints" as const,
    url: "https://www.wantedly.com/id/umut_karakulak",
    iconClassName: "bg-cyan-500/15 text-cyan-500",
  },
  {
    title: "Stack Overflow",
    subtitle: "u/826970",
    icon: "Link" as const,
    url: "https://stackoverflow.com/users/826970/umutto",
    iconClassName: "bg-orange-500/15 text-orange-500",
  },
];

export default function Socials() {
  return (
    <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto py-2 px-4">
      {links.map((link, idx) => (
        <ContactBadge key={idx} {...link} />
      ))}
    </div>
  );
}
