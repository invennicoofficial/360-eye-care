export const InfoCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div
      className={`relative w-full md:max-w-[410px]  border-solid  border-white md:border-5   min-h-[215px] ${bgColor} flex flex-col md:flex-row items-center md:items-start p-5 md:p-9 gap-4 md:gap-8 mx-auto`}
    >
      {/* White Bar */}
      <div className="absolute hidden md:block top-[-10px] left-1/2 transform -translate-x-1/2 w-[50%] max-w-[250px] h-[10px] bg-white" />

      {/* Icon with container */}
      <div className="flex items-center justify-center w-[52px] h-[52px] mb-2 md:mb-0">
        <Icon size={42} className="text-white" />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <p className="text-white text-lg font-semibold mb-2">{title}</p>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};
