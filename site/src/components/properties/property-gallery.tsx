"use client";

import Image from "next/image";
import { isOptimizableImage } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const gallery = images.length ? images : ["/assets/landing-wide.png"];

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {gallery.map((src, index) => (
          <CarouselItem key={src + index}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-sand">
              <Image
                src={src}
                alt={`${title} - photo ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                unoptimized={!isOptimizableImage(src)}
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {gallery.length > 1 && (
        <>
          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </>
      )}
    </Carousel>
  );
}
