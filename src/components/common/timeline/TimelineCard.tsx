import Image from "next/image";
import Icon from "@/components/Icon";
import { localeKey } from "@/config";
import { TimelineCompany } from "@/types/props";
import TimelineCardEvent from "./TimelineCardEvent";
import TimelineCardFooter from "./TimelineCardFooter";

type TimelineCardProps = {
  locale: localeKey;
  timelineClass: string;
} & TimelineCompany;

export default async function TimelineCard({
  locale,
  timelineClass,
  name,
  location,
  image,
  events,
  footer,
}: TimelineCardProps) {
  return (
    <>
      <div className="timeline-middle">
        <Icon name="CircleDot" className="size-6" />
      </div>
      <div className={`timeline-box my-4 md:my-2 max-w-lg ${timelineClass}`}>
        <div className="flex pb-3 mb-3 mt-2 border-b items-center justify-center gap-2">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={60}
              height={60}
              className="rounded-full"
            />
          ) : (
            <Icon name="ContactRound" className="size-10 text-secondary" />
          )}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-center">{name}</h3>
            {location && (
              <div className="flex mx-auto items-center">
                <Icon name="MapPin" className="size-4 color-base-300" />
                <span className="font-thin text-sm">{location}</span>
              </div>
            )}
          </div>
        </div>
        {events.map((event, idx) => (
          <TimelineCardEvent key={idx} locale={locale} {...event} />
        ))}
        {footer && <TimelineCardFooter message={footer} />}
      </div>
    </>
  );
}
