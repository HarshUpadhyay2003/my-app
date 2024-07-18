import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center caudex-bold-italic w-full bg-gray-300 p-5 md:p-10 mt-10">
        <Link href="/">
          <div className="flex flex-col text-center md:text-left mb-4 md:mb-0">
            <span className="text-xl md:text-2xl">AstraNex Services Pvt Ltd.</span>
            <span className="flex items-center justify-center md:justify-start">
              <CopyrightIcon className="mr-1" />
              AstraNex Services Pvt Ltd.
            </span>
          </div>
        </Link>
        <div className="list-none flex space-x-6">
          <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link href="https://www.instagram.com/astranexservices?igsh=MWV3NmJkenM1ZmQwcg==">
              <InstagramIcon />
            </Link>
          </li>
          <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link href="https://www.linkedin.com/company/103745245/admin/dashboard/">
              <LinkedInIcon />
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}
