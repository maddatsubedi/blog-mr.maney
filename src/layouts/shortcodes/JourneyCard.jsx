import React from "react";

const Journey = ({ children, date, isLast }) => {
  return (
    <section className="section journeys p-0">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            <div className={`row ${isLast ? "" : "pb-10"} lg:mt-0 lg:pb-0`}>
              <div className="date-section lg:col-3">
                <h6 className="my-4 pl-7 text-lg lg:mt-0 lg:pl-0">{date}</h6>
              </div>
              <div className={`border-[#e9e9e9] lg:col-9 lg:border-l-2 ${isLast ? "" : "lg:pb-20"} lg:pl-10`}>
                <div className="journeys-content rounded-xl bg-white p-6 shadow-lg lg:p-10 flex flex-col gap-5">
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
