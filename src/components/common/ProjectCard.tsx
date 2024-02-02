import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { Carousel, CodeMockup } from "@/components";
import Icon, { IconName } from "@/components/Icon";
import { CodeLine } from "../ui/CodeMockup";

type MockupImage = { mobile: string; browser: string };

type ProjectLink = { url: string; icon: IconName; title?: string };

type ProjectCardProps = {
  title: string;
  role: string;
  description: string;
  className?: string;
  image?: string | string[] | MockupImage | CodeLine[];
  links?: ProjectLink[];
};

function isStringArray(o: unknown): o is string[] {
  return !!o && Array.isArray(o) && o.every((e) => typeof e === "string");
}

function isMockupImage(o: unknown): o is MockupImage {
  return !!o && typeof o === "object" && "mobile" in o && "browser" in o;
}

function isCodeLineArray(o: unknown): o is CodeLine[] {
  return !!o && Array.isArray(o) && o.every((e) => typeof e === "object" && "code" in e);
}

export default function ProjectCard({
  title,
  role,
  description,
  className,
  image,
  links,
}: ProjectCardProps) {
  let cardImage;
  if (isStringArray(image)) {
    cardImage = <Carousel images={image} title={title} />;
  } else if (isMockupImage(image)) {
    cardImage = (
      <div>
        {image.browser && (
          <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input">{title}</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
              <Image src={image.browser} alt={title} fill />
            </div>
          </div>
        )}
        {image.mobile && (
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <Image src={image.mobile} alt={title} fill />
              </div>
            </div>
          </div>
        )}
      </div>
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
          <p className="font-thin text-sm">{role}</p>
        </div>
        <p className="md:line-clamp-4">{description}</p>
        {links && (
          <div className="card-actions justify-end mt-2">
            {links?.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                rel="noreferrer"
                target="_blank"
                className="btn-secondary btn btn-sm"
                title={link.title}
              >
                {link.icon && <Icon name={link.icon} />} {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
