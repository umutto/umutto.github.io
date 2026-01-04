import Image from "next/image";

type ShowcaseCardImageProps = {
  orientation: "horizontal" | "vertical";
  image: string;
  title?: string;
};

export default function ShowcaseCard({
  orientation,
  image,
  title,
}: ShowcaseCardImageProps) {
  return (
    <figure
      className={
        orientation === "horizontal"
          ? "p-2 min-h-24"
          : "bg-white border-b border-gray-100"
      }
    >
      <Image
        src={image}
        alt={title || "project image"}
        width={orientation === "horizontal" ? 320 : 460}
        height={170}
        className="rounded rounded-b-none"
      />
    </figure>
  );
}
