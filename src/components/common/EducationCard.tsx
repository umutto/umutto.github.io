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
    <div className="card md:card-side bg-base-100 shadow-xl mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
      {image && (
        <figure className="bg-white">
          <Image
            className="my-4 mx-2 md:ml-6"
            src={image}
            alt={name}
            height={60}
            width={200}
          />
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
