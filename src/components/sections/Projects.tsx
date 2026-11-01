import { ShowcaseCard } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const projects = [
  {
    key: "botchan_aicall",
    image: "/images/aicall.webp",
    links: [
      {
        url: "https://botchan.chat/product/aicall",
        icon: "Link" as const,
        title: "Website",
      },
    ],
  },
  {
    key: "botchan_ai",
    image: "/images/ai.webp",
    links: [
      {
        url: "https://botchan.chat/product/ai",
        icon: "Link" as const,
        title: "Website",
      },
    ],
  },
  {
    key: "wearee_builder",
    image: "/images/wearee.webp",
  },
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
    key: "birdwatcher",
    image: "/images/birdwatcher.webp",
    links: [
      {
        url: "https://github.com/umutto/birdwatcher",
        icon: "Github" as const,
        title: "Repository",
      },
    ],
  },
  {
    key: "oto_navi",
    image: "/images/otonavi.webp",
    links: [
      {
        url: "https://oto-navi.jp",
        icon: "Link" as const,
        title: "Website",
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
          orientation="vertical"
          {...project}
          key={project.key}
          title={t(project.key).title}
          subtitle={t(project.key).subtitle}
          description={t(project.key).description}
        />
      ))}
    </div>
  );
}
