import Image from "next/image";
import growCustomer from "@/public/chart.png";
import costCut from "@/public/reduce-costs.png";
import customerBase from "@/public/demand.png";
import accuracy from "@/public/accuracy.png";
import payment from "@/public/fast-payments.png";

export default function MainPage() {
  return (
    <>
      <div className="flex flex-col text-3xl w-full h-full mt-20 p-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-0 md:text-left">
          <h1 className="text-2xl md:text-4xl text-center caudex-bold">
            AstraNex Services
          </h1>
          <p className="text-lg md:text-2xl text-center caudex-regular">
            Empowering Your Data with Excellence
          </p>
        </div>
        <div className="text-center mt-10 caudex-regular">
          <h2 className="text-2xl text-indigo-600">
            AstraNex Services, a fresh and dynamic player in the data entry
            industry.
            <br />
            What sets us apart from our competitors is our youthful vigor
            combined with a relentless dedication to excellence.
          </h2>
        </div>
        <div className="mt-20">
          <h1 className="text-center caudex-bold text-4xl">What we Offer</h1>
          <dl className="space-y-10 md:space-y-0 mt-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 ">
                  <Image src={growCustomer} alt="Customer Growth" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
                  Scale Confidently
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                With our reliable, scalable team of freight billing experts
                behind you, you can confidently allocate your internal staff to
                core competencies while ensuring business continuity.
              </dd>
            </div>

            <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 ">
                  <Image src={payment} alt="Fast Payments" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
                  Expedite Accounts Receivables
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our rapid processing speed drives tangible efficiencies so your
                organization can reduce DSO and get paid faster.
              </dd>
            </div>

            <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 ">
                  <Image src={customerBase} alt="Customer Base" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
                  Retain and Grow Your Customer Base
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Nurture customer relationships with faster, more accurate
                billing, that outperforms the competition.
              </dd>
            </div>

            <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 ">
                  <Image src={costCut} alt="Reduce Costs" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
                  Cut Expenses and Increase Margins
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our partners experience immediate cost savings of 40-60% on
                average, with locked in cost containment to protect against
                unforeseen circumstances.
              </dd>
            </div>

            <div className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 ">
                  <Image src={accuracy} alt="Accuracy" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-indigo-600 text-gray-900">
                  Boost Accuracy and Optimize Your Operations
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Slash errors and gain visibility with quality metrics that
                ensure accuracy and keep your business running smoothly.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
