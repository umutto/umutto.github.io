import { Icon } from "@/components";
import { localeKey } from "@/config";
import { TimelineEvent } from "@/types/props";
import { formatLocaleDate } from "@/utils/formatters";
import { getTranslator } from "@/utils/localization";

type TimelineCardEventProps = {
  locale: localeKey;
} & TimelineEvent;

export default async function TimelineCardEvent({
  locale,
  title,
  dateFrom,
  dateTo,
  description,
}: TimelineCardEventProps) {
  const t = await getTranslator(locale, ["home", "work"]);

  const dateFromFormatted = formatLocaleDate(locale, dateFrom);
  const dateToFormatted =
    dateTo instanceof Date ? formatLocaleDate(locale, dateTo) : t("Present");

  return (
    <div key={title} className="mb-4">
      <div className="text-lg font-bold -mb-1">{title}</div>
      <time className="font-mono italic text-sm inline-flex items-center">
        <Icon name="Clock3" className="size-3" />
        {`${dateFromFormatted} - ${dateToFormatted}`}
      </time>
      <p className="mt-3">{description}</p>
    </div>
  );
}
