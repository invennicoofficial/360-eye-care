import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const BrandCommon = ({ data }) => {
  const id = slugify(data?.title || "", { lower: true });

  return (
    <div
      className="max-w-7xl mx-auto py-16 flex md:justify-between  md:flex-row flex-col"
      id={id}
    >
      <div className="md:w-[50%] w-full pr-2">
        <div className="w-full flex items-center justify-center">
          <Image
            src={data?.image}
            alt={data?.title || "Brand image"}
            className="object-cover w-[50%] mb-4"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-[50%]">
        <h3 className="text-combination-200 text-[40px] font-extrabold ">
          {data?.title}
        </h3>
        <hr className="w-16 h-[3px] bg-combination-100 mb-3" />
        <div>
          <p className="text-neutral-500 tracking-wider text-[15px] leading-relaxed">
            {data?.description || "Explore the collection."}
          </p>

          {data?.url && (
            <Link
              href={data.url}
              className="inline-block px-6 mt-3 sm:px-8 py-2 bg-combination-100 text-white font-bold rounded-full hover:bg-combination-200 transition-colors w-[180px] sm:w-auto text-center"
            >
              {data.title} Catalog
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandCommon;
