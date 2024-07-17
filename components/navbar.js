"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "@/public/bgless.png";

export default function Navbar() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav
      className={
        color
          ? "nav-bg text-2xl caudex-bold-italic sticky top-0 z-10 p-5"
          : "nav-container text-2xl caudex-bold-italic sticky top-0 p-5"
      }
    >
      <Link to="" smooth={true} duration={500}>
        <div className="flex flex-col cursor-pointer">
          <div className='flex className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 0 duration-200"'>
            <Image src={logo} width={100} alt="logo" />
            <div className="flex flex-col ml-2 justify-center">
              <span>AstraNex Services Pvt Ltd.</span>
              <span>GSTIN No: 09ABACA3170B1Z7</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="list-none flex space-x-6">
        <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <Link to="home" smooth={true} duration={500}>
            <span>Home</span>
          </Link>
        </li>
        <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <Link to="products" smooth={true} offset={-200} duration={500}>
            <span>Products</span>
          </Link>
        </li>
        <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <Link to="contact" smooth={true} offset={-150} duration={500}>
            <span>Contact</span>
          </Link>
        </li>
      </div>
    </nav>
  );
}
