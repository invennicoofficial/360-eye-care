import React from "react";

const PreventingDryEye = () => {
  return (
    <div className=" bg-brand-blue">
      <div className="mx-auto max-w-7xl text-white p-10 rounded-lg">
        <h1 className="text-[37px] font-extrabold mb-4 text-white">
          Preventing Dry Eye
        </h1>

        <div className="border-t-2 border-cyan-400 w-48 mb-6"></div>

        <p className="mb-8 ">
          Dry eye, while treatable, is a condition many would rather avoid
          altogether. The good news is, there are steps you can take to keep
          your eyes lubricated and comfortable:
        </p>

        <ul className="space-y-8">
          <li className="flex ml-6">
            <span className="text-lg mr-2 mb-10">•</span>
            <div>
              <span className="font-bold">Proper Hydration:</span> Dry eyes
              crave hydration, so staying well-hydrated is important. Drink
              plenty of water throughout the day, even if you don't feel
              thirsty. Eight glasses a day is a good starting point, but you
              might need to adjust based on your climate and activity level.
            </div>
          </li>

          <li className="flex ml-6 ">
            <span className="text-lg mr-2">•</span>
            <div>
              <span className="font-bold">Blink Exercises:</span> We blink
              naturally to spread tears across our eyes and keep them
              lubricated. However, staring at screens for extended periods can
              decrease our blink rate. Make a conscious effort to blink
              frequently, especially when using digital devices. You can also
              try the 20-20-20 rule: every 20 minutes, look away from your
              screen for 20 seconds at something 20 feet away. This gives your
              eyes a chance to relax and rehydrate.
            </div>
          </li>

          <li className="flex flex-col mt-6">
            <div className="flex">
              <span className="text-lg mr-2">•</span>
              <div>
                <span className="font-bold">Ergonomic Adjustments:</span> Long
                computer sessions can contribute to dry eye. Here are some
                ergonomic tips:
              </div>
            </div>

            <ul className="ml-8 mt-4 space-y-4">
              <li className="flex">
                <span className="text-lg mr-2">•</span>
                <div>
                  <span className="font-bold">Position your screen:</span> Your
                  computer screen should be slightly below eye level. This helps
                  prevent you from opening your eyes too wide, which can
                  accelerate tear evaporation.
                </div>
              </li>

              <li className="flex">
                <span className="text-lg mr-2">•</span>
                <div>
                  <span className="font-bold">Adjust the lighting:</span> Reduce
                  glare on your screen by adjusting the room lighting or using a
                  dimmer switch.
                </div>
              </li>

              <li className="flex">
                <span className="text-lg mr-2">•</span>
                <div>
                  <span className="font-bold">Take breaks:</span> Get up and
                  move around every 30 minutes to an hour. Stretching your legs
                  and giving your eyes a break from the screen can help reduce
                  discomfort.
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PreventingDryEye;
