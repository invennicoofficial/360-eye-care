import SubHeader from "../../../components/SubHeader";

const page = () => {
  const topData = [
    {
      description: [
        "You've heard the statement before. Eyeglasses are eyeglasses, right? It doesn't matter where you get them. Wrong. There is a significant qualitative and quantitative difference between custom digital ophthalmic lenses and generic stock lenses. Fitting stock lenses might be a quicker process to do but not necessarily a more affordable solution. When fitting stock lenses, there is usually one measurement involved which is to take the pupillary distance between the two eyes. Whereas customizable digital lenses, or custom lenses, require five measurements and a skilled optician to take those measurements and assist with the fitting.",
        "custom lenses torontoThe prescription your optometrist gives you is just one piece of the eyeglass puzzle. It determines your level of correction, or how well you will see with the final appliance. Other essential fitting measurements include the PD measurement that measures pupillary distance, as well as the OC, or optical centre, pantoscopic tilt, vertex distance, and frame wrap angle. Your pupillary distance is the space between the pupils of your eyes, while the OC is the geometric centre of a lens. Pantoscopic tilt, vertex distance, and frame wrap angle are measurements that maximize visual acuity and comfort in customized lenses. In other words, if you want eyeglasses that give you optimum visual correction, you will want to invest in custom lenses from a dispensary that follows a five measurement protocol administered by trained professionals.",
      ],
    },
  ];

  const bottomData = [
    {
      description: [
        "Custom lenses are fitted to each patient's frame and face. If you've ever borrowed someone else's eyeglasses, or tried someone's on for fun, you'll know how important proper fit, prescription, and measurement are. At 360 Eyecare, we make sure your frames are the right size for your face and your prescription and ensure your ultimately fabricated glasses will provide optimized sight. Digital custom lenses aren't just adjusted to fit. They are fabricated to suit your prescription and fit using computer-controlled surfacing equipment. The computer model is more accurate in implementing lens power and accounts for frame curvature, tilt and size than the conventional approach.",
        "360 Eyecare's custom lenses provide wider fields of view and give sharper image quality and better peripheral vision. Patients report that they can make out subtle differences in colours and shades of light and dark. Where discount eyeglass shops usually use pre-molded templates (stock lenses), 360 Eyecare's digital lenses are bespoke, and created for each patient's individual prescription, face and frame. We offer custom tints and anti-reflective treatments as well.",
        "Why spend money on glasses that don't fit 100 percent when digital custom lenses can give you optimized and potentially distortion-free sight? Give us a call today and set up your five point custom digital lens fitting.",
      ],
    },
  ];

  return (
    <main className="pt-[80px] md:pt-[110px] bg-[#F6F7F5] py-8 md:py-12">
      <SubHeader text="Custom Lenses" />
      <div className="max-w-7xl mx-auto mt-2 px-4 md:px-6 py-8 lg:px-8">
        {topData.map((item, index) => (
          <div key={index} className="w-full">
            {item.description.map((desc, descIndex) => (
              <div key={descIndex} className="mb-4 md:mb-6">
                <p className=" text-neutral-500 text-sm md:text-base">
                  {desc.replace("custom lenses toronto", "")}
                </p>
              </div>
            ))}
          </div>
        ))}

        <div className="w-full flex flex-col items-start justify-start my-4 md:my-6">
          <h3 className="text-combination-200 text-2xl md:text-3xl lg:text-[37px] font-extrabold font-poppins mb-2">
            Custom Lenses Are Fitted To Each Patient
          </h3>
          <hr className="w-16 md:w-20 h-[3px] bg-combination-100 mt-2 mb-4" />
        </div>

        {bottomData.map((item, index) => (
          <div key={index} className="w-full">
            {item.description.map((desc, descIndex) => (
              <div key={descIndex} className="mb-4 md:mb-6">
                <p className=" text-neutral-500 text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
