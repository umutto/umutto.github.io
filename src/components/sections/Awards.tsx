import { ShowcaseCard } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const awards = [
  {
    key: "odpt",
    image: "/images/odpt.webp",
    links: [
      {
        url: "https://umu.to/sounds-of-transport",
        icon: "Link" as const,
        title: "Demo",
      },
      {
        url: "https://tokyochallenge.odpt.org/2019/award/07.html#v",
        icon: "Medal" as const,
        title: "Website",
      },
      {
        url: "https://github.com/umutto/sounds-of-transport",
        icon: "Github" as const,
        title: "Repository",
      },
      {
        url: "https://www.youtube.com/watch?v=3T8Z85FUt2U",
        icon: "Youtube" as const,
        title: "Video",
      },
    ],
  },
  {
    key: "imagine_cup",
    image: "/images/cogostuff.webp",
    links: [
      {
        url: "https://en.wikipedia.org/wiki/Imagine_Cup",
        icon: "Info" as const,
        title: "Wikipedia",
      },
      {
        url: "/files/umut_karakulak-imagine_cup_yearbook.pdf",
        icon: "BookMarked" as const,
        title: "Excerpt",
        isFileDownload: true,
      },
    ],
  },
];

export default async function Awards({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "awards"]);

  return (
    <div className="pb-2 mx-2 grid gap-4">
      {awards.map((award) => (
        <ShowcaseCard
          orientation="horizontal"
          {...award}
          key={award.key}
          title={t(award.key).title}
          subtitle={t(award.key).subtitle}
          description={t(award.key).description}
        />
      ))}
    </div>
  );
}
