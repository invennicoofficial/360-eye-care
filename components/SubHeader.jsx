const SubHeader = ({ text = "Optometrists" }) => {
  return (
    <div className="w-full bg-brand-subheader py-16 flex justify-center items-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
        {text}
      </h1>
    </div>
  );
};

export default SubHeader;
