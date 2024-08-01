"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "@/public/bgless.png";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    // Check scroll position on initial load
    changeColor();

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        color ? "nav-bg" : "nav-container"
      } text-xl md:text-2xl caudex-bold-italic sticky top-0 z-10 p-4 md:p-5 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center">
        <Link to="" smooth={true} duration={500}>
          <div className="flex flex-col cursor-pointer">
            <div className="flex hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <Image
                src={logo}
                width={80}
                height={80}
                alt="logo"
                className="w-20 md:w-24"
              />
              <div className="flex flex-col ml-2 justify-center md:text-base">
                <span className="text-2xl">AstraNex Services Pvt Ltd.</span>
              </div>
            </div>
          </div>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black ml-24 pr-10 focus:ring-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${
                isOpen ? "hidden" : "block"
              } h-6 w-6 transition-transform transform hover:scale-125`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              className={`${
                isOpen ? "block" : "hidden"
              } h-6 w-6 transition-transform transform hover:scale-125`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
      >
        <ul className="list-none flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-indigo-600 hover:scale-110 duration-200">
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={300}
              onClick={() => setIsOpen(false)}
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-indigo-600 hover:scale-110 duration-200">
            <Link
              to="services"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              <span>Services</span>
            </Link>
          </li>
          <li className="hover:underline cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:text-indigo-600 hover:scale-110 duration-200">
            <Link
              to="contact"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
