const SubHeader = ({ text = "Optometrists" }) => {
  return (
    <div className="w-full bg-brand-subheader py-14 flex justify-center items-center">
      <h1 className="text-white text-3xl md:text-[40px] font-bold text-center font-poppins leading-[46px] ">
        {text}
      </h1>
    </div>
  );
};

export default SubHeader;
