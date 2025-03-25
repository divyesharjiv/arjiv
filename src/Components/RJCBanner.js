import React from "react";
import rjc from "Assets/Image/Common/RJC.webp";

const RJCBanner = () => {
  return (
    <section className="bg-dark text-white text-left md:py-14 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h3 className="mb-4 text-lg md:text-[22px] md:leading-[1.6] font-medium">
                  Arjiv Exports is a{" "}
                  <span className="text-highlight font-medium underline">
                    Certified Diamond Manufacturer
                  </span>{" "}
                  by the Responsible Jewellery Council. We proudly offer
                  ethically sourced diamonds, ensuring integrity and
                  sustainability from origin to brilliance and mine to
                  masterpiece.
                </h3>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src={rjc}
                  className="w-full max-w-xl"
                  alt="Responsible Jewellery Council"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RJCBanner;
