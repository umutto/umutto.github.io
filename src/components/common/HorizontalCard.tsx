import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { BadgeLink, Carousel, CodeMockup } from "@/components";
import { BadgeLinkProps, CodeLine } from "@/types/props";
import { isCodeLineArray, isStringArray } from "@/utils/types";

type HorizontalCardProps = {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  image?: string | string[] | CodeLine[];
  links?: BadgeLinkProps[];
};

export default function HorizontalCard({
  title,
  subtitle,
  description,
  className,
  image,
  links,
}: HorizontalCardProps) {
  let cardImage;
  if (isStringArray(image)) {
    cardImage = (
      <figure className="bg-white p-2 min-h-24 md:w-1/3">
        <Carousel images={image} title={title} />
      </figure>
    );
  } else if (isCodeLineArray(image)) {
    cardImage = <CodeMockup lines={image} />;
  } else if (typeof image === "string") {
    cardImage = (
      <figure className="bg-white p-2 min-h-24">
        <Image src={image} alt={title} width={320} height={168} className="rounded" />
      </figure>
    );
  }

  return (
    <div className={twMerge("card lg:card-side bg-base-100 shadow-xl", className)}>
      {cardImage}
      <div className="card-body py-4 gap-1 lg:w-3/4">
        <div className="px-1">
          <h2 className="card-title">{title}</h2>
          <p className="font-thin text-sm">{subtitle}</p>
        </div>
        <p className="md:line-clamp-4">{description}</p>
        {links && (
          <div className="card-actions justify-center sm:justify-end mt-2">
            {links?.map((link, idx) => (
              <BadgeLink key={idx} {...link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
