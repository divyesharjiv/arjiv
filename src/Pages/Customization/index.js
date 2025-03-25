import React, { useEffect, useState } from "react";
import { updateMetaTags } from "utility/utils";
// import OrderForm from "Components/pages/popup";

import BGcustomize from "Assets/Image/Customize/bg-customize.webp";
import Tailored from "Assets/Image/Customize/Tailored.webp";
import Modification from "Assets/Image/Customize/Modification.webp";
import Craftsmanship from "Assets/Image/Customize/Craftsmanship.webp";
import Delivery from "Assets/Image/Customize/Delivery.webp";

import Button from "Components/Button";
import Modal from "Components/Modal";
import CustomizationOrder from "Components/CustomizationOrder";

function Customization() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for opening/closing modal
  const toggleModal = () => setIsOpen((prev) => !prev);

  const ourCustomization = [
    {
      title: "Tailored to your vision",
      description:
        "Whether you’re looking for a classic shape or something truly one-of-a-kind, we offer a range of custom diamond shapes, sizes, and designs to match your exact specifications. From elegant cuts to intricate and unique designs, our craftsmen are experts at bringing your vision to life.",
      img: Tailored,
      reverse: false,
    },
    {
      title: "Modification",
      description:
        "Whether you’re modifying an existing diamond or creating something from scratch, we provide a wide range of shape modifications to suit your taste. Want to transform a traditional cut into a more modern shape? We can make it happen with precision and care.",
      img: Modification,
      reverse: true,
    },
    {
      title: "Precision Craftsmanship",
      description:
        "We use the latest diamond polishing technology, combined with expert craftsmanship, to create a perfect cut that enhances the brilliance and beauty of your diamond. Each diamond is polished to exacting standards to meet your design needs and exceed your expectations.",
      img: Craftsmanship,
      reverse: false,
    },
    {
      title: "Delivery",
      description:
        "After our meticulous polishing and quality assurance process, your custom diamond is ready to be delivered to you, polished to perfection.",
      img: Delivery,
      reverse: true,
    },
  ];
  useEffect(() => {
    updateMetaTags({
      title:
        "Custom Diamond Shapes and Cuts - Tailored to Your Vision | Arjiv Exports",
      description:
        "Discover how Arjiv Exports customizes diamond shapes and cuts to match your unique style and preferences. From brilliant to fancy cuts, we offer tailored solutions for your perfect diamond.",
      keywords:
        "custom diamond cuts, custom diamond order, personalized diamond shapes, diamond customization, diamond craftsmanship, bespoke diamonds, tailored diamond designs, diamond cutting services, unique diamond shapes, Arjiv Exports custom diamonds, fine diamond cuts, fancy diamond shapes, custom jewelry diamonds",
      canonical: "https://www.arjivexports.com/customization",
    });
  }, []);

  return (
    <section className="pt-0">
      {/* First Banner Section */}
      <div className="relative min-h-[50vh]">
        <div className="absolute inset-0 bg-black md:bg-opacity-25 bg-opacity-40" />
        <img
          loading="lazy"
          src={BGcustomize}
          alt="Customize diamonds"
          className="w-full object-cover xl:h-auto h-[55vh]"
        />
        {/* <OrderForm /> */}
        <div className="absolute container mx-auto inset-0 w-full h-full text-offwhite uppercase tracking-wide flex flex-col lg:items-start items-center md:justify-center justify-end px-4">
          <h1 className="lg:text-6xl text-5xl leading-[1.4!important] drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
            Arjiv
            <br />
            Creation
          </h1>
          <Button
            outline
            size="lg"
            className="mt-10 mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,1)]"
            onClick={toggleModal}
          >
            Customize Your Diamonds
          </Button>
        </div>
      </div>

      <h2 className="text-center sm:text-xl md:text-2xl text-lg capitalize px-2 py-4 font-medium text-primary max-w-6xl mx-auto">
        ARJIV EXPORTS manufactures Diamonds of all Shapes, Size, Color, Clarity
        and Measurements, perfectly suited for your Jewellery.
      </h2>

      <div className="sm:py-14 py-7 px-4 md:px-16 bg-primary">
        <div className="mx-auto">
          {ourCustomization.map((x, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                x.reverse ? "md:flex-row-reverse" : ""
              } items-stretch mb-6 gap-6 last:mb-0`}
            >
              {/* Image Content (60%) */}
              <div className="w-full md:w-3/5">
                <img
                  src={x.img}
                  alt={x.title}
                  className="w-full h-full object-cover drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Detail Content (40%) */}
              <div className="w-full md:w-2/5 flex">
                <div className="bg-white p-6 md:p-8 flex flex-col justify-center h-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                  <h3 className="text-lg sm:text-xl lg:text-[28px] font-poppins font-extrabold text-primary uppercase md:mb-7 mb-4 md:pb-2 relative before:content-[''] before:absolute before:bottom-[-8px] before:left-0 before:w-full before:max-w-[75px] before:h-[2px] before:bg-primary">
                    {x.title}
                  </h3>
                  <p className="text-sm sm:text-sm lg:text-xl xl:leading-normal">
                    {x.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        size={"7xl"}
        isOpen={isOpen}
        onClose={toggleModal}
        title={"Diamond Customization"}
      >
        <CustomizationOrder />
      </Modal>
    </section>
  );
}

export default Customization;
