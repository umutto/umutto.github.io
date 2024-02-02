import { ContactBadge, SectionHeader } from "@/components";

const links = [
  {
    title: "Email",
    icon: "MailOpen" as const,
    url: "mailto:hi@umu.to",
  },
  {
    title: "GitHub",
    icon: "Github" as const,
    url: "https://github.com/umutto",
  },
  {
    title: "Stack Overflow",
    icon: "Link" as const,
    url: "https://stackoverflow.com/users/826970/umutto",
  },
  {
    title: "LinkedIn",
    icon: "Linkedin" as const,
    url: "https://www.linkedin.com/in/umutto/",
  },
];

export default function Socials() {
  return (
    <>
      <SectionHeader>Contact</SectionHeader>
      <div className="flex justify-center gap-3 flex-wrap py-2">
        {links.map((link, idx) => (
          <ContactBadge key={idx} {...link} />
        ))}
      </div>
    </>
  );
}
