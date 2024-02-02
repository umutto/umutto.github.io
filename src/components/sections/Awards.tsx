import { SectionHeader, ShowcaseCard } from "@/components";

const awards = [
  {
    title:
      "Tokyo Public Transportation Open Data Challenge INIAD special innovation award",
    subtitle: "Issued by Tokyo ODPT, INIAD · Dec 2019",
    image: "/images/odpt.webp",
    description:
      "The railway system in Tokyo can be overwhelming and intimidating at first glance. Speaking from personal experience, this is particularly true for foreigners visiting for the first time. This engaging web app aims to showcase the intricate harmony of this complex system by utilizing train schedules provided by ODPT and customizable map triggers to generate music.",
    links: [
      {
        url: "https://sounds.umu.to/",
        icon: "Link" as const,
        title: "Demo",
      },
      {
        url: "https://tokyochallenge.odpt.org/2019/award/07.html#v",
        icon: "Medal" as const,
        title: "ODPT",
      },
      {
        url: "https://github.com/umutto/sounds-of-transport",
        icon: "Github" as const,
        title: "Source",
      },
      {
        url: "https://www.youtube.com/watch?v=3T8Z85FUt2U",
        icon: "Youtube" as const,
        title: "Video",
      },
    ],
  },
  {
    title: "Imagine Cup 2009 World Finalist",
    subtitle: "Issued by Microsoft · Jul 2009",
    image: "/images/cogostuff.webp",
    description:
      "Co-developer of CogoStuff, winner of Imagine Cup Turkey 2009 in software development branch, world finalist.",
    links: [
      {
        url: "https://en.wikipedia.org/wiki/Imagine_Cup",
        icon: "Info" as const,
        title: "Wikipedia",
      },
      {
        url: "/files/imagine_cup_yearbook.pdf",
        icon: "BookMarked" as const,
        title: "Excerpt",
        isFileDownload: true,
      },
    ],
  },
];

export default function Awards() {
  return (
    <>
      <SectionHeader>Awards</SectionHeader>
      <div className="py-2 mx-2 grid gap-4">
        {awards.map((award, idx) => (
          <ShowcaseCard orientation="horizontal" key={idx} {...award} />
        ))}
      </div>
    </>
  );
}
