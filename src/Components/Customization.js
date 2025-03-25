import React, { useState } from "react";
import CustomizationImg from "Assets/Image/Common/customize.webp";
import customizeTabImg from "Assets/Image/Common/customize-tab.webp";
import { getResponsiveImage } from "utility/utils";

import Button from "Components/Button";
import Modal from "Components/Modal";
import CustomizationOrder from "Components/CustomizationOrder";
// import CustomOrder from "Components/pages/customorder";

const Customization = () => {
  const [visible, setVisible] = useState(false);

  const currentImg = getResponsiveImage({
    desktop: CustomizationImg,
    tab: customizeTabImg,
    mobile: customizeTabImg,
  });

  const toggleModal = () => {
    setVisible((prev) => !prev);
  };

  return (
    <>
      <section className="customization-details relative w-full">
        <img src={currentImg} alt="Customization" className="w-full" />
        <div className="static lg:absolute lg:inset-0 bg-extradark lg:bg-transparent flex items-center justify-center lg:justify-start pl-0 lg:pl-5 py-6 md:py-6 lg:py-4">
          <div className="container px-4 max-w-xl">
            <div className="flex justify-start">
              <div className="text-offwhite">
                <h4 className="text-[8vw] sm:text-[7vw] md:text-[5vmax] lg:text-[3.5vmax] xl:text-[4vmax] tracking-[0.5px]">
                  Diamond Customization
                </h4>
                <p className="my-4 sm:my-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-[32px] font-normal">
                  With us, bring your unique ideas to life through
                  custom-crafted diamond designs, made exclusively to match your
                  creative vision.
                </p>

                <Button
                  className="sm:mt-6 mt-2 bg-transparent border border-white text-white py-3 sm:px-6 sm:text-xl tracking-widest"
                  onClick={toggleModal}
                >
                  Customize Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize Order */}
      <Modal
        size={"7xl"}
        isOpen={visible}
        onClose={toggleModal}
        title={"Diamond Customization"}
      >
        <CustomizationOrder />
      </Modal>
    </>
  );
};

export default Customization;
