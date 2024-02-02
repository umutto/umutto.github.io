import Image from "next/image";
import { twMerge } from "tailwind-merge";

type CarouselProps = {
  images: string[];
  title: string;
  className?: string;
};

export default function Carousel({ images, title, className }: CarouselProps) {
  const uniqueRefId = Math.random().toString(16).slice(2);

  return (
    <div className={twMerge("carousel w-full min-h-36", className)}>
      {images.map((image, idx) => {
        const currentId = `${uniqueRefId}-slide-${idx}`;
        const nextId = `${uniqueRefId}-slide-${idx === images.length - 1 ? 0 : idx + 1}`;
        const prevId = `${uniqueRefId}-slide-${idx === 0 ? images.length - 1 : idx - 1}`;

        return (
          <div key={idx} id={currentId} className="carousel-item relative w-full">
            <Image src={image} className="w-full" fill alt={title} objectFit="contain" />
            <div className="absolute flex justify-between -translate-y-1/2 inset-x-5 top-1/2">
              <a href={`#${nextId}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#${prevId}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
