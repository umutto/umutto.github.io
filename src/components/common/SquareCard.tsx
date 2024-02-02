import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BadgeLink } from "@/components";
import { BadgeLinkProps } from "@/types/props";

type SquareCardProps = {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  image?: string;
  links?: BadgeLinkProps[];
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
