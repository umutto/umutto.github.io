import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/components";
import { CardLink } from "@/types/props";

type SquareCardProps = {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  image?: string;
  links?: CardLink[];
};

export default function SquareCard({
  title,
  subtitle,
  description,
  className,
  image,
  links,
}: SquareCardProps) {
  return (
    <div className={twMerge("card w-auto bg-base-100 shadow-xl", className)}>
      {image && (
        <figure className="bg-white">
          <Image src={image} alt={title} width={460} height={170} objectFit="contain" />
        </figure>
      )}
      <div className="card-body">
        <div className="-mx-2">
          <h2 className="card-title">{title}</h2>
          <span className="font-thin text-sm">{subtitle}</span>
        </div>
        <p className="text-sm lg:text-base">{description}</p>
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
                download={link.isFileDownload}
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
