import Image from "next/image";
import dataEntry from "@/public/data-entry.png";
import audit from "@/public/freight-audit.png";
import bill from "@/public/freight-billing.png";
import pod from "@/public/pod.png";
import rate from "@/public/freight-rate.png";
import mortage from "@/public/data-mortage.png";
import data from "@/public/image-data.png";
import typing from "@/public/typing.png";

export default function Catalouge() {
  return (
    <div className="mt-20">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex  items-center justify-center h-12 w-12">
              <Image src={dataEntry} alt="data-entry" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Document Data Entry
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Accurate and efficient entry of information from various documents
            into digital formats.
          </dd>
        </div>

        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={mortage} alt="moratge-data" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Mortgage Data Entry
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Specialized data entry services for processing and managing
            mortgage-related information.
          </dd>
        </div>

        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={data} alt="image-data" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Image Data Entry
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Conversion and entry of data from images into structured digital
            formats.
          </dd>
        </div>

        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={typing} alt="typing" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Typing Services
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Professional transcription of handwritten or printed documents into
            digital text.
          </dd>
        </div>

        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={audit} alt="freight-audit" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Freight Audit
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Comprehensive review and verification of freight invoices to ensure
            accuracy and cost savings.
          </dd>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={bill} alt="freight-bill" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Freight Billing
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Responsible for 30% of all LTL bills of lading in North America,
            Astranex&apos;s freight billing experts serve in dedicated teams to
            capture and process bill of lading data.
          </dd>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={rate} alt="freight-rate" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              Freight Rate Auditing
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Astranex&apos;s freight back office experts examine, adjust and verify
            carrier rates for accuracy after the bill entry process is complete
            to ensure successful invoicing.
          </dd>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 ">
              <Image src={pod} alt="pod" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
              POD Processing
            </p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">
            Secure and Agile Proof Of Delivery processing and image retrieval.
            Maintain visibility and keep the most valuable information at your
            fingertips.
          </dd>
        </div>
      </dl>
    </div>
  );
}
