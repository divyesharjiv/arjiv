import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import FloatingDiamonds from "Components//FloatingDiamonds";

import mine from "Assets/Image/Common/mine-source.webp";
import building from "Assets/Image/Common/building.webp";
import Employee from "Assets/Image/Common/Employee.webp";
import grading from "Assets/Image/Common/grading.webp";

import sourceIcon from "Assets/Icons/source.svg";
import gradingIcon from "Assets/Icons/grading.svg";
import expertiseIcon from "Assets/Icons/expertise.svg";
import greenBuildingIcon from "Assets/Icons/green-building.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliderData = [
  {
    src: mine,
    title: "Sustainable, Ethical & Traceable Sourcing",
    caption:
      "Responsibly sourced diamonds, ensuring transparency, traceability, and ethical practices from mine to masterpiece.",
    icon: sourceIcon,
  },
  {
    src: building,
    title: "Green Building & Sustainable Excellence",
    caption:
      "Our green-certified facility reflects our commitment to sustainability and environmental responsibility.",
    icon: greenBuildingIcon,
  },
  {
    src: Employee,
    title: "Precision, Expertise & Dedication",
    caption:
      "Skilled artisans and cutting-edge technology come together to craft brilliance with perfection.",
    icon: expertiseIcon,
  },
  {
    src: grading,
    title: "Beyond Traditional Grading System",
    caption:
      "Along with standard 4Cs, we apply our own advanced criteria to ensure the highest brilliance, symmetry, and light performance.",
    icon: gradingIcon,
  },
];

const sliderSettings = {
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  effect: "fade",
  speed: 1500,
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: false,
  pagination: { clickable: true },
  loading: "lazy",
};

const Banner = () => {
  return (
    <main className="pt-0 h-screen w-full">
      <section className="h-screen overflow-hidden relative">
        <Swiper {...sliderSettings} className="h-full">
          <FloatingDiamonds />
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="hidden swiper-lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <img
                    src={slide.icon}
                    alt="icon"
                    className="w-24 h-24 md:w-32 md:h-32 swiper-lazy"
                    loading="lazy"
                  />
                  <h2 className="text-white text-3xl md:leading-none md:text-[50px] md:my-10 my-5 font-[serif] font-bold uppercase">
                    {slide.title}
                  </h2>
                  <p className="text-white text-md md:text-[22px] max-w-3xl tracking-wider">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Banner;
