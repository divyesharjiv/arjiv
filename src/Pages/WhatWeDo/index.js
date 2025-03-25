import React, { useEffect, useRef } from "react";
import { updateMetaTags } from "utility/utils";
import GridBanner from "Components/GridBanner";

import Sawing from "Assets/Video/sawing-grid.mp4";
import Marking from "Assets/Video/marking-grid.mp4";
import Grading from "Assets/Video/grading-grid.mp4";
import Bruting from "Assets/Video/Bruting.mp4";
import Planning from "Assets/Video/Planning2.mp4";
import Polishing from "Assets/Video/Polishing.mp4";
import sorting from "Assets/Image/Common/Sorting.webp";
import Heading from "Components/Heading";

function WhatWeDo() {
  const videoRefs = useRef([]);

  const processes = [
    {
      key: "sorting",
      title: "Sorting",
      img: sorting,
      descriptions: [
        "Our expert team carefully evaluates each rough diamond, measuring and assessing its characteristics. We separate exceptional stones for our Flawless collection and direct other quality diamonds to specialized processing. Each stone is individually evaluated for size, clarity, and potential value to determine its optimal manufacturing path.",
      ],
    },
    {
      key: "planning",
      title: "Planning",
      video: Planning,
      descriptions: [
        "Using advanced 3D scanning and modeling technology, our planners analyze each rough diamond's internal and external characteristics. We determine the optimal cut to maximize the stone's value, considering factors like crystal orientation, inclusions, and potential yield. This technical assessment ensures we achieve the best possible size and quality from each rough diamond.",
      ],
    },
    {
      key: "marking",
      title: "Marking",
      video: Marking,
      descriptions: [
        "Our skilled markers use precision 3D laser technology to map out the cutting points on each rough diamond. We carefully mark the stone according to its natural crystal structure and internal characteristics. This crucial step determines how we'll divide the rough to achieve optimal clarity, weight retention, and final value.",
      ],
    },
    {
      key: "sawing",
      title: "Sawing",
      video: Sawing,
      descriptions: [
        "We use state-of-the-art laser cutting technology to precisely divide rough diamonds along the marked lines. For specific stones, we employ traditional blade sawing techniques when they better suit the diamond's characteristics. Our sawing process ensures clean, precise separation while minimizing any potential damage to the stone.",
      ],
    },
    {
      key: "bruting",
      title: "Blocking & Bruting",
      video: Bruting,
      descriptions: [
        "During this phase, we shape the diamond using specialized machines that rotate the stone against diamond-coated disks. For round brilliants, our bruting process carefully grinds the stone to achieve perfect roundness. We continuously monitor symmetry and proportions throughout this stage to ensure precise geometric alignment.",
      ],
    },
    {
      key: "polishing",
      title: "Polishing",
      video: Polishing,
      descriptions: [
        "In the final stage, our master polishers cut and polish each facet using precision-controlled machines with diamond-coated wheels. We carefully angle each facet to maximize light return and brilliance. Regular quality checks during polishing ensure we maintain exact angles and achieve optimal symmetry for maximum sparkle and fire.",
      ],
    },
    {
      key: "grading",
      title: "Grading",
      video: Grading,
      descriptions: [
        "Our comprehensive grading process evaluates diamonds beyond the standard 4Cs (Cut, Color, Clarity, and Carat). We employ advanced optical scanning technology to assess light performance, measuring factors like brilliance, fire, and scintillation. Each stone undergoes microscopic examination by expert gemologists who evaluate additional characteristics such as crystal strain patterns and precise symmetry measurements. Following our internal assessment, diamonds are sent to leading international laboratories for independent certification, ensuring each stone meets both industry standards and our elevated quality criteria.",
      ],
    },
  ];


  useEffect(() => {
    updateMetaTags({
      title:
        "What We Do - From Rough Diamonds to Polished Perfection | Arjiv Exports",
      description:
        "Learn about the process at Arjiv Exports, where rough diamonds are sorted, cut, polished, and graded to create the finest polished diamonds. From sorting and planning to polishing and certification, we ensure the highest standards in diamond craftsmanship.",
      keywords:
        "diamond manufacturing process, diamond sorting, diamond cutting, diamond polishing, diamond grading, rough diamonds, polished diamonds, diamond craftsmanship, diamond certification, diamond planning, diamond sawing, diamond bruting, Arjiv Exports diamond process",
      canonical: "https://www.arjivexports.com/what-we-do",
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video instanceof Element) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video instanceof Element) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <section className="bg-primary">
      <GridBanner />
      <div className="container mx-auto px-4 max-w-[1180px] text-offwhite md:py-16 py-8">
        <Heading className="md:mb-14 mb-6 text-center tracking-wide">
          Our Diamond Manufacturing Process
        </Heading>

        {processes.map((x, index) => (
          <div
            key={x.key}
            id={x.key}
            className={`flex flex-col md:flex-row items-center md:mb-12 mb-8 mb-4 xl:gap-0 gap-5 border-b-2 border-[#555] border-dashed pb-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 max-w-[500px] mx-auto">
              {x.img ? (
                <img
                  src={x.img}
                  alt={x.title}
                  className="w-full h-auto object-cover aspect-square object-left"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={x.video}
                  loop
                  muted
                  className="w-full h-auto object-cover aspect-square"
                />
              )}
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-md font-medium font-poppins pb-2 border-b-2 border-white max-w-max">
                {x.title}
              </h3>
              {x.descriptions.map((desc, idx) => (
                <p
                  key={idx}
                  className="lg:text-xl md:text-md text-sm md:mt-6 sm:mt-4 mt-3 inline-block leading-[1.4] text-justify"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center sm:mt-12 mt-6">
          <p className="md:text-lg text-sm max-w-4xl mx-auto">
            "Each diamond undergoes strict quality control between stages,
            ensuring it meets our exacting standards before proceeding to the
            next step. Our entire process is designed to maximize the beauty and
            value of every stone while maintaining the highest quality standards
            in the industry."
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
