import React from "react";

const Journey = ({ children, date, isLast }) => {
  return (
    <section className="section journeys p-0">
      <div className="container p-0">
        <div className="row justify-center m-0">
          <div className="lg:col-10 p-0">
            <div className={`row ${isLast ? "" : "pb-10"} m-0 lg:pb-0`}>
              <div className="date-section px-4 mb-4 lg:m-0 lg:col-3 lg:pr-4 lg:pl-0">
                <h6 className="m-0 pl-7 text-lg lg:pl-0">{date}</h6>
              </div>
              <div className={`border-[#e9e9e9] px-0 lg:col-9 lg:border-l-2 ${isLast ? "" : "lg:pb-20"} lg:pl-10`}>
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
