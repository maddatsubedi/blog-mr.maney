import React from "react";

const Journey = ({ children, date, isLast }) => {
  return (
    <section className="section journeys p-0">
      <div className="container p-0">
        <div className="row justify-center m-0">
          <div className="lg:col-10 p-0">
            <div className={`row ${isLast ? "" : "pb-10"} m-0 lg:pb-0`}>
              <div className="date-section p-0 mb-4 lg:m-0 lg:col-3 lg:pr-7">
                <div className="sticky lg:mb-7 top-[25px] bg-[#f5f4fe] shadow-small-3 lg:w-auto rounded-md px-4 lg:py-4 justify-center items-center leading-none flex lg:flex-col gap-3 lg:gap-2 text-center">
                  <div className="m-0 font-bold py-4 lg:py-0 text-primary text-[1.1rem]">{date.year}</div>
                  <div className="lg:hidden h-[6px] w-[6px] bg-primary rounded-full"></div>
                  <div className="lg:leading-[1.1] py-4 lg:py-0 font-medium text-[0.9rem] lg:text-[0.875rem]">
                    {date.title}
                  </div>
                </div>
              </div>
              <div className={`border-[#e9e9e9] px-0 lg:col-9 lg:border-l-2 ${isLast ? "" : "lg:pb-20"} lg:pl-10`}>
                <div className="journeys-content rounded-xl bg-[white] p-6 shadow-lg lg:p-10 flex flex-col gap-5">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
