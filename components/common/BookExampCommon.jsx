import Link from "next/link";

const BookExamCommon = ({
  icon,
  title,
  phones,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-full bg-combination-100 py-8 md:py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        {/* Left: Icon + Title + Phone Numbers */}
        <div className="flex flex-col items-center md:flex-row md:items-start gap-3 md:gap-4 text-white text-center md:text-left w-full md:w-auto">
          <div className="text-4xl md:text-5xl lg:text-6xl mb-2 md:mb-0">
            {icon}
          </div>
          <div className="w-full md:w-auto">
            <h2 className="text-xl md:text-1xl font-light leading-tight text-white">
              {title}
            </h2>
            {phones?.map((phone, index) => (
              <p
                key={index}
                className="mt-1 text-base md:text-lg font-semibold"
              >
                {phone.label}:{" "}
                <a
                  href={`tel:${phone.number.replace(/\D/g, "")}`}
                  className="font-normal hover:underline"
                >
                  {phone.number}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Center: Description */}
        <div className="text-white text-center md:text-left max-w-md lg:max-w-xl my-4 md:my-0">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right: CTA Button */}
        <div className="w-full md:w-auto text-center shrink-0">
          <Link href={buttonLink || "#"}>
            <button className="w-full md:w-auto bg-combination-200 hover:bg-white hover:text-combination-100 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-full transition-colors duration-200 shadow-md text-sm md:text-base">
              {buttonText || "Book an Exam"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookExamCommon;
