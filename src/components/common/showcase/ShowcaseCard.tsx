import { twMerge } from "tailwind-merge";
import { BadgeLinkProps } from "@/types/props";
import ShowcaseCardFooter from "./ShowcaseCardFooter";
import ShowcaseCardImage from "./ShowcaseCardImage";

type ShowcaseCardProps = {
  orientation: "horizontal" | "vertical";
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  image?: string;
  links?: BadgeLinkProps[];
};

export default function ShowcaseCard({
  orientation,
  title,
  subtitle,
  description,
  className,
  image,
  links,
}: ShowcaseCardProps) {
  return (
    <div
      className={twMerge(
        "card bg-base-100 shadow-xl",
        orientation === "horizontal" ? "lg:card-side" : "w-auto",
        className
      )}
    >
      {image && (
        <ShowcaseCardImage orientation={orientation} image={image} title={title} />
      )}
      <div
        className={
          orientation === "horizontal" ? "card-body py-4 gap-1 lg:w-3/4" : "card-body"
        }
      >
        <div className={orientation === "horizontal" ? "px-1" : "-mx-2"}>
          <h2 className="card-title">{title}</h2>
          <span className="font-thin text-sm">{subtitle}</span>
        </div>
        <p
          className={
            orientation === "horizontal" ? "md:line-clamp-4" : "text-sm lg:text-base"
          }
        >
          {description}
        </p>
        {links && <ShowcaseCardFooter links={links} />}
      </div>
    </div>
  );
}
