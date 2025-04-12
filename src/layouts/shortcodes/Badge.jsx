import React from "react";

const DEFAULT_BADGE_COLOR = "#3a9cff";

const Badge = ({ color, children, iconClass }) => {
  return (
    <div className="badge-wrapper w-full relative flex flex-col items-center justify-center">
      <div
        className="badge flex flex-row items-center justify-center gap-[8px] max-w-[70%] text-center relative w-fit rounded-md px-[1rem] py-[0.45rem] text-[0.85rem] font-semibold text-white z-[200]"
        style={{
          backgroundColor: color || DEFAULT_BADGE_COLOR,
        }}>
        {iconClass && <i class={`${iconClass} text-[1rem]`}></i>}
        {children}
      </div>
      <div className="absolute h-[2.5px] w-full rounded-full bg-red-600 content-[''] z-[100]"
        style={{
          backgroundColor: color || DEFAULT_BADGE_COLOR,
        }}
      ></div>
    </div>
  );
};

export default Badge;
