import React from "react";

const DEFAULT_BADGE_COLOR = "#3a9cff";

const Badge = ({ color, children }) => {
  return (
    <div className="badge-wrapper w-full relative flex flex-col items-center justify-center">
      <div
        className="badge relative w-fit rounded-md px-[0.8rem] py-[0.45rem] text-xs font-semibold text-white z-[200]"
        style={{
          backgroundColor: color || DEFAULT_BADGE_COLOR,
        }}>
        {children}
      </div>
      <div className="absolute h-[2px] w-full rounded-full bg-red-600 content-[''] z-[100]"
        style={{
          backgroundColor: color || DEFAULT_BADGE_COLOR,
        }}
      ></div>
    </div>
  );
};

export default Badge;
