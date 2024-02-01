import { Icon } from "@/components";

type TimelineProps = {
  events: {
    title: string;
    dateFrom: Date;
    dateTo: Date | "present";
    description: string;
  }[];
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      {events.map((event, idx) => {
        const dateFromFormatted = event.dateFrom.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
        });
        const dateToFormatted =
          event.dateTo === "present"
            ? event.dateTo
            : event.dateTo.toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
              });

        return (
          <li key={idx}>
            <div className="timeline-middle">
              <Icon name="Clock3" className="size-4" />
            </div>
            <div className="timeline-start mb-10 timeline-box">
              <time className="font-mono italic">{`${dateFromFormatted} - ${dateToFormatted}`}</time>
              <div className="text-lg font-bold">{event.title}</div>
              <div className="timeline-start timeline-box">First Macintosh computer</div>
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}
