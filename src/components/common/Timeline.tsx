import Image from "next/image";
import { Icon } from "@/components";
import { localeKey } from "@/config";
import { formatLocaleDate } from "@/utils/formatters";
import { getTranslator } from "@/utils/localization";

type TimelineEvent = {
  title: string;
  dateFrom: Date;
  dateTo: Date | "present";
  description: string;
};

type TimelineProps = {
  locale: localeKey;
  timeline: {
    name: string;
    location?: string;
    image?: string;
    events: TimelineEvent[];
  }[];
};

export default async function Timeline({ locale, timeline }: TimelineProps) {
  const t = await getTranslator(locale, ["home", "work"]);

  return (
    <ul className="timeline max-md:timeline-compact timeline-vertical">
      {timeline.map((company, idx) => {
        const events = company.events.map((event, idy) => {
          const dateFromFormatted = formatLocaleDate(locale, event.dateFrom);
          const dateToFormatted =
            event.dateTo instanceof Date
              ? formatLocaleDate(locale, event.dateTo)
              : t("Present");

          return (
            <div key={idy} className="mb-4">
              <div className="text-lg font-bold -mb-1">{event.title}</div>
              <time className="font-mono italic text-sm inline-flex items-center">
                <Icon name="Clock3" className="size-3" />
                {`${dateFromFormatted} - ${dateToFormatted}`}
              </time>
              <p className="mt-3">{event.description}</p>
            </div>
          );
        });

        return (
          <li key={idx}>
            {idx !== 0 && <hr />}
            <div className="timeline-middle">
              <Icon name="CircleDot" className="size-6" />
            </div>
            <div
              className={`timeline-box my-4 md:my-2 max-w-lg ${
                idx % 2 ? "timeline-end" : "timeline-start md:text-end"
              }`}
            >
              <div className="flex pb-3 mb-3 mt-2 border-b items-center justify-center gap-2">
                {company.image ? (
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <Icon name="Contact2" className="size-10 text-secondary" />
                )}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-center">{company.name}</h3>
                  {company.location && (
                    <div className="flex mx-auto items-center">
                      <Icon name="MapPin" className="size-4 color-base-300" />
                      <span className="font-thin text-sm">{company.location}</span>
                    </div>
                  )}
                </div>
              </div>
              {events}
            </div>
            {idx !== timeline.length - 1 && <hr />}
          </li>
        );
      })}
    </ul>
  );
}
