import Link from "next/link";

const Banner = ({
  title = "Schedule Your Eye Exam Today",
  description = "Take the first step toward clearer vision and healthier eyes. Book your appointment now.",
  buttonText = "Book Now",
  buttonUrl = "/book-eye-exam",
  backgroundImage = "/newsletter-bg.webp",
  overlayColor = "rgba(30, 40, 95, 0.1)",
}) => {
  return (
    <div
      className="relative w-full py-16 h-[360px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-[40px] font-bold mb-3 text-white">{title}</h1>
        <p className="text-base mb-4 tracking-wide">{description}</p>
        <Link
          href={buttonUrl}
          className="inline-block px-[25px] py-[10px] bg-combination-100 text-white hover:text-combination-100 font-medium rounded hover:bg-combination-200 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
