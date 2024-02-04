import { ShowcaseCard } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const projects = [
  {
    key: "wearee",
    image: "/images/wearee.webp",
    links: [
      {
        url: "https://wearee.jp",
        icon: "Link" as const,
        title: "Website",
      },
    ],
  },
  {
    key: "crypto_tax",
    image: "/images/crypto.webp",
    links: [
      {
        url: "https://github.com/umutto/crypto-tax",
        icon: "Github" as const,
        title: "Repository",
      },
    ],
  },
  {
    key: "buddy_19",
    image: "/images/buddy.webp",
    links: [
      {
        url: "https://buddy.umu.to",
        icon: "Link" as const,
        title: "Demo",
      },
      {
        url: "https://github.com/umutto/buddy-19",
        icon: "Github" as const,
        title: "Repository",
      },
    ],
  },
  {
    key: "computer_vision",
    image: "/images/cv.webp",
  },
  {
    key: "natural_language",
    image: "/images/nlp.webp",
  },
  {
    key: "music_generation",
    image: "/images/graduation_project.webp",
    links: [
      {
        url: "/files/umut_karakulak-graduation_paper.pdf",
        icon: "GraduationCap" as const,
        title: "Paper",
        isFileDownload: true,
      },
    ],
  },
];

export default async function Projects({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "projects"]);

  return (
    <div className="py-2 mx-2 grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-4 xl:gap-6">
      {projects.map((project) => (
        <ShowcaseCard
          {...project}
          key={project.key}
          orientation="vertical"
          title={t(project.key).title}
          subtitle={t(project.key).subtitle}
          description={t(project.key).description}
        />
      ))}
    </div>
  );
}
