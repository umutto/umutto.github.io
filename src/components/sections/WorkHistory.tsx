import { TimelineCard } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const timelineEvents = [
  {
    name: "Wevnal Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/wevnal.webp",
    events: [
      {
        title: "Engineering Manager",
        dateFrom: new Date("2025-09-01"),
        dateTo: "present" as const,
        description: "Wevnal engineering manager work description",
      },
      {
        title: "Tech Lead AICALL",
        dateFrom: new Date("2025-03-01"),
        dateTo: "present" as const,
        description: "Wevnal botchan AICALL work description",
      },
      {
        title: "Tech Lead AI",
        dateFrom: new Date("2024-05-01"),
        dateTo: "present" as const,
        description: "Wevnal botchan AI work description",
      },
    ],
    footer: "Wevnal responsibilities",
  },
  {
    name: "DUNKSOFT Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/dunksoft.webp",
    events: [
      {
        title: "Full Stack Engineer",
        dateFrom: new Date("2020-01-01"),
        dateTo: new Date("2024-04-30"),
        description: "Dunksoft full stack work description",
      },
      {
        title: "Data Scientist",
        dateFrom: new Date("2017-01-01"),
        dateTo: new Date("2020-01-01"),
        description: "Dunksoft data science work description",
      },
    ],
    footer: "Dunksoft responsibilities",
  },
  {
    name: "obase",
    location: "Istanbul, Turkey",
    image: "/images/obase.webp",
    events: [
      {
        title: "Software Engineering Intern",
        dateFrom: new Date("2015-08-01"),
        dateTo: new Date("2015-11-01"),
        description: "obase intern description",
      },
    ],
    footer: "obase responsibilities",
  },
  {
    name: "DUNKSOFT Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/dunksoft.webp",
    events: [
      {
        title: "Software Engineering Intern",
        dateFrom: new Date("2011-09-01"),
        dateTo: new Date("2011-11-01"),
        description: "Dunksoft intern description",
      },
    ],
    footer: "Dunksoft internship responsibilities",
  },
  {
    name: "Freelance",
    location: "Istanbul, Turkey",
    events: [
      {
        title: "Software Developer",
        dateFrom: new Date("2007-01-01"),
        dateTo: new Date("2010-01-01"),
        description: "Freelance work description",
      },
    ],
    footer: "Freelance responsibilities",
  },
];

export default async function WorkHistory({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "work"]);

  return (
    <div className="mx-1">
      <ul className="timeline max-md:timeline-compact timeline-vertical">
        {timelineEvents.map((c, idx) => {
          const company = {
            ...c,
            name: t(c.name),
            events: c.events.map((e) => ({
              ...e,
              title: t(e.title),
              description: t(e.description),
            })),
            footer: t(c.footer),
          };

          return (
            <li key={idx}>
              {idx !== 0 && <hr />}
              <TimelineCard
                key={idx}
                locale={locale}
                timelineClass={idx % 2 ? "timeline-end" : "timeline-start md:text-end"}
                {...company}
              />
              {idx !== timelineEvents.length - 1 && <hr />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
