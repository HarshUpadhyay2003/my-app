import Catalouge from "@/components/catalouge";

export default function Products() {
  return (
    <>
      <div className="w-full h-screen p-4 md:p-10">
        <div className="flex caudex-bold justify-center text-xl md:text-3xl">
          <h1>Focus on What Matters - Leave the Data Entry to Us!</h1>
        </div>
        <div className="product caudex-regular m-4 md:m-10 text-lg md:text-2xl">
          <p>
            As a forward-thinking company, AstraNex is poised to expand its
            footprint in the industry, continually adapting to the evolving
            needs of businesses and embracing innovative solutions to drive
            success. 
            <br/><br/>
            Astranex Services, with a team boasting over 11 years of
            experience, specializes in accurate and efficient data entry and
            management services. We ensure high-quality data handling, from
            entry to processing and conversion, to support your business
            success.
          </p>
          <Catalouge />
        </div>
      </div>
    </>
  );
}
