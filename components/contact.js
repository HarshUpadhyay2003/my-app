import { Button } from "@/components/ui/button";

export default function Contact() {
  const url =
    "https://docs.google.com/forms/d/1-qNruPTAtIscj4K2XreCG7_DgUr7PNbp7xxE1oEl_1s/formResponse";
  return (
    <>
      <div className="contact-container md:divide-x-2 divide-black divide-solid caudex-regular flex flex-col md:flex-row">
        <div className="p-5 md:pl-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex-1">
          <h1 className="text-xl md:text-3xl">AstraNex Services Pvt Ltd.</h1>
          <br />
          <h1 className="text-xl md:text-3xl">Contact Person - Uddeshya Gupta</h1>
          <p className="text-lg md:text-2xl">contact@astranexservices.com</p>
          <br />
          <h1 className="text-xl md:text-3xl">Address</h1>
          <p className="text-lg md:text-2xl">
            Venue: B-308, Logix Technova Sector-132 Noida
          </p>
        </div>
        <div className="flex-1 p-5 md:p-0 text-lg md:text-3xl">
          <form className="mt-5 md:ml-10" method="POST" action={url}>
            <h1 className="text-center text-xl md:text-3xl">Talk To Us</h1>
            <br />
            <input
              className="w-full md:w-auto mr-0 md:mr-10 focus:bg-black focus:text-white mb-3 md:mb-0"
              name="entry.196314300"
              placeholder="Enter Your Name"
            />
            <input
              className="w-full md:w-auto focus:bg-black focus:text-white mb-3 md:mb-0"
              placeholder="Enter Your Email"
              name="entry.1891215123"
            />
            <textarea
              className="w-full md:min-w-[780px] min-h-24 mt-5 focus:bg-black focus:text-white"
              placeholder="Enter Your Message"
              name="entry.598856177"
            />
            <br />
            <div className="text-center">
              <Button className="text-xl md:text-2xl mt-5" variant="ghost">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
