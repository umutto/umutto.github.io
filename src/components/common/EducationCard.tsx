import Image from "next/image";
import { Icon } from "@/components";

type EducationCardProps = {
  name: string;
  degree: string;
  image?: string;
  graduation?: Date;
};

export default function EducationCard({
  name,
  degree,
  image,
  graduation,
}: EducationCardProps) {
  const formattedGraduation = graduation?.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
      {image && (
        <figure className="ml-8">
          <Image src={image} alt={name} height={60} width={120} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{degree}</p>
        {formattedGraduation && (
          <div className="card-actions justify-end">
            <time className="flex items-center text-thin">
              <Icon name="GraduationCap" />
              {formattedGraduation}
            </time>
          </div>
        )}
      </div>
    </div>
  );
}
