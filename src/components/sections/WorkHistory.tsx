import { Timeline } from "@/components";
import { localeKey } from "@/config";
import { getTranslator } from "@/utils/localization";

const timelineEvents = [
  {
    name: "DUNKSOFT Co.,Ltd",
    location: "Tokyo, Japan",
    image: "/images/dunksoft.webp",
    events: [
      {
        title: "Full Stack Engineer",
        dateFrom: new Date("2020-01-01"),
        dateTo: "present" as const,
        description: "Dunksoft full stack work description",
      },
      {
        title: "Data Scientist",
        dateFrom: new Date("2017-01-01"),
        dateTo: new Date("2020-01-01"),
        description: "Dunksoft data science work description",
      },
    ],
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
  },
];

export default async function WorkHistory({ locale }: { locale: localeKey }) {
  const t = await getTranslator(locale, ["home", "work"]);

  return (
    <div className="mx-1">
      <Timeline
        locale={locale}
        timeline={timelineEvents.map((c) => ({
          ...c,
          name: t(c.name),
          events: c.events.map((e) => ({
            ...e,
            title: t(e.title),
            description: t(e.description),
          })),
        }))}
      />
    </div>
  );
}
