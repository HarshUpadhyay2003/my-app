'use client'
import Image from "next/image";
import img1 from "@/public/image2.jpg";
import { Button } from "@/components/ui/button";


function Catalouge() {
  function handleRedirect(){
    window.location.href = 'https://forms.gle/7xbEF83Gsh3s7g6u5';
  }
  return (
    <div className="flex justify-center items-center caudex-regular transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-200 duration-100">
      <div className=" p-4 rounded-lg shadow-lg">
        <Image src={img1} width={500} alt="product" loading="lazy" />
        <h1 className="text-3xl font-bold mt-4">Data Entry</h1>
        <h2 className="text-2xl ">Fill Efficiently</h2>
        <div className="flex justify-between mb-4 items-center">
          <p className="text-gray-400">RATING: 4.9/5</p>
          <Button variant="ghost" onClick = {handleRedirect} className="font-bold py-2 px-4 rounded">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Catalouge;
