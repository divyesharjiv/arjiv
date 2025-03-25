import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { isMiniTab } from "utility/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_OF_ARJIV } from "utility/commonData";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const scrollWidth =
        horizontalRef.current.scrollWidth - containerBounds.width;

      // Kill previous ScrollTrigger instances
      ScrollTrigger.killAll();

      if (!isMiniTab()) {
        gsap.fromTo(
          horizontalRef.current,
          { x: 0 }, // Start from 0
          {
            x: -scrollWidth,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: horizontalRef.current,
              start: "top top",
              end: () => `+=${scrollWidth}`,
              pin: true,
              scrub: 2,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    };

    updateScroll();

    window.addEventListener("resize", updateScroll);
    return () => window.removeEventListener("resize", updateScroll);
  }, []);

  return (
    <main className="w-full bg-dark text-offwhite">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex md:w-max md:flex-row flex-col items-start md:gap-14 sm:gap-4 gap-8 lg:px-36 md:px-24 sm:px-8 px-4 mx-auto md:mt-2 sm:mt-14 mt-20"
        >
          {STORY_OF_ARJIV.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer md:h-screen h-auto max-w-[600px] rounded-lg sm:p-6 p-2 flex flex-col justify-center items-center gap-4 group"
            >
              <div className="sm:w-48 w-32 sm:h-48 h-32 flex items-center justify-center md:p-6 p-2">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>

              <span className="text-2xl md:text-4xl font-mont bg-offwhite text-dark rounded-md inline-block px-6 py-2">
                {item.year}
              </span>

              <h4 className="text-2xl md:text-3xl font-semibold font-poppins text-center w-full md:text-nowrap md:border-b-2 border-dashed border-[#555] md:pb-4">
                {item.title}
              </h4>

              <p className="text-base md:text-lg text-justify md:min-h-60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HorizontalScroll;
