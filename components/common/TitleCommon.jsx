import React from "react";

const TitleCommon = ({ title, position }) => {
  return (
    <div className={` flex flex-col items-${position} }`}>
      <h3 className="text-combination-200 text-[40px] font-extrabold mt-2">
        {title}
      </h3>
      <hr className="w-24 h-[3px] bg-combination-100 mb-3" />
    </div>
  );
};

export default TitleCommon;
