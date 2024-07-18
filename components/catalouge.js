import Image from "next/image";
import img1 from "@/public/image2.jpg";
import { Button } from "@/components/ui/button";

function Catalouge() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center caudex-regular transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-105 duration-100">
      <div className="p-4 rounded-lg shadow-lg w-full sm:w-auto">
        <Image src={img1} alt="product" loading="lazy" className="w-full h-auto" />
        <h1 className="text-xl sm:text-3xl font-bold mt-4">Data Entry</h1>
        <h2 className="text-lg sm:text-2xl">Fill Efficiently</h2>
        <div className="flex flex-col sm:flex-row justify-between mb-4 items-center">
          <p className="text-gray-400 mb-2 sm:mb-0">RATING: 4.9/5</p>
          <Button variant="ghost" className="font-bold py-2 px-4 rounded">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Catalouge;
