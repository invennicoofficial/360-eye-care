import { Eye } from "lucide-react";
export const InfoCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div
      className={`relative w-full md:max-w-[410px] border-solid md:border-white md:border-5 min-h-[215px] ${bgColor} flex flex-col md:flex-row items-center md:items-start p-6 md:p-9 gap-4 md:gap-8 mx-auto`}
    >
      {/* White Bar - Desktop version unchanged */}
      <div className="absolute hidden md:block top-[-10px] left-[50px] transform w-[80%] max-w-[280px] h-[10px] bg-white" />

      {/* White Bar - Mobile version improved */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-white md:hidden" />

      {/* Icon with container */}
      <div className="flex items-center justify-center w-14 h-14 mb-2 md:mb-0">
        <Icon size={42} className="text-white" />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left px-4 md:px-0">
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};
