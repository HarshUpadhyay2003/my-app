"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import img from "@/public/image1.jpg";

export default function MainPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center text-3xl w-full h-screen p-4">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl">AstraNex Services</h1>
          <p className="text-lg md:text-xl">Empowering Your Data with Excellence</p>
        </div>
        <div className="w-full md:w-[500px]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy" className="w-full h-auto" />
              </CarouselItem>
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy" className="w-full h-auto" />
              </CarouselItem>
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy" className="w-full h-auto" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
