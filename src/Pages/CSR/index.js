import React from "react";
import earthImg from "Assets/Image/Common/earth.jpeg";
import arjivShapeBGImg from "Assets/Image/Common/arjiv-shapes-bg.png";

import expeditions from "Assets/Image/CSR/expeditions.jpg";
import bloodCamp from "Assets/Image/CSR/blood-camp.jpg";
import greenEnergy from "Assets/Image/CSR/green-energy.jpg";
import sports from "Assets/Image/CSR/sports.jpg";
import treePlanting from "Assets/Image/CSR/tree-planting.webp";

import HeroHeading from "Components/HeroHeading";

const CSR = () => {
  const ourCsr = [
    {
      title: "Powering a Sustainable Future",
      desc: "Our state-of-the-art solar system installation demonstrates our commitment to renewable energy and reducing our carbon footprint in diamond manufacturing.",
      img: greenEnergy,
    },
    {
      title: "Life Flows Through Us",
      desc: "Regular blood donation camps organized by our company bring employees together to contribute to community healthcare and save lives.",
      img: bloodCamp,
    },
    {
      title: "Growing Together, Naturally",
      desc: "We participate in tree planting initiatives help combat climate change while creating green spaces for future generations. Every sapling represents our promise to environmental stewardship.",
      img: treePlanting,
    },
    {
      title: "Championship Spirit",
      desc: "Annual cricket tournaments foster team spirit and healthy competition among our employees, promoting wellness and camaraderie beyond the workplace.",
      img: sports,
    },
    {
      title: "Reaching New Heights",
      desc: "Company-organized Mountain trekking expeditions build leadership, teamwork, and resilience while connecting our team with nature.",
      img: expeditions,
    },
  ];

  return (
    <main className="pt-0">
      <HeroHeading img={earthImg} title="Corporate Social Responsibilities" />

      {/* CSR Section */}
      <section
        className="CSR py-4 sm:py-8 md:py-12 bg-repeat bg-left bg-offwhite"
        style={{ backgroundImage: `url(${arjivShapeBGImg})` }}
      >
        <div className="container mx-auto px-4 max-w-[1360px]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-8 gap-4">
            {ourCsr.map((x, index) => (
              <div
                key={index}
                className="group flex flex-col items-center bg-white overflow-hidden shadow-2xl"
              >
                {/* Image Wrapper with overflow-hidden */}
                <div className="w-full h-34 md:h-96 overflow-hidden">
                  <img
                    src={x.img}
                    alt={x.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 text-left w-full text-primary">
                  <h4 className="text-accent md:text-2xl text-xl font-bold mb-2 font-poppins">
                    {x.title}
                  </h4>
                  <p className="text-medium sm:text-lg text-sm">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CSR;
