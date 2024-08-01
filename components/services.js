"use client";
import Catalouge from "./catalouge";
import { Button } from "@/components/ui/button";

export default function Services() {
  function handleRedirect() {
    window.location.href = "https://forms.gle/7xbEF83Gsh3s7g6u5";
  }
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 lg:px-8 flex flex-col">
          <div className="text-center">
            <h2 className=" caudex-bold text-3xl uppercase">
              Focus on What Matters - Leave the Data Entry to Us!
            </h2>
          </div>
          <Catalouge />
          <Button
            variant="ghost"
            onClick={handleRedirect}
            className="w-32 caudex-regular text-xl mt-10 self-center"
          >
            Book Now
          </Button>
        </div>
      </div>
    </>
  );
}
