const TitleCommon = ({ title, position = "start", css = "" }) => {
  return (
    <div className={`flex flex-col items-${position}`}>
      <h3
        className={`${css} text-combination-200 text-[40px] font-extrabold mt-2 mb-3 text-center leading-[1.2] font-poppins`}
      >
        {title}
      </h3>
      <hr className="w-24 h-[3px] bg-combination-100 mb-3" />
    </div>
  );
};

export default TitleCommon;
