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
      <div className="flex caudex-bold justify-around items-center text-3xl w-full h-screen ">
        <div>
          <h1>AstraNex Services</h1>
          <p>Empowering Your Data with Excellence</p>
        </div>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-[500px] "
            opts={{ loop: true }}
          >
            <CarouselContent className="">
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy"/>
              </CarouselItem>
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy"/>
              </CarouselItem>
              <CarouselItem>
                <Image src={img} alt="image" loading="lazy"/>
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
