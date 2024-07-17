"use client";
import Catalouge from "@/components/catalouge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Products() {
  return (
    <>
      <div className="w-full h-screen ">
        <div className="flex caudex-bold justify-center text-3xl">
          <h1>Focus on What Matters - Leave the Data Entry to Us!</h1>
        </div>
        <div className="flex justify-center mt-24">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className=" "
            opts={{ loop: true }}
          >
            <CarouselContent className="w-[1300px] ">
              <CarouselItem className="basis-1/3">
                <Catalouge />
              </CarouselItem>
              <CarouselItem className="basis-1/3 ">
                <Catalouge />
              </CarouselItem>
              <CarouselItem className="basis-1/3 ">
                <Catalouge />
              </CarouselItem>
              <CarouselItem className="basis-1/3 ">
                <Catalouge />
              </CarouselItem>
              <CarouselItem className="basis-1/3 ">
                <Catalouge />
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
