import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => {
      const horizontalScrollWidth =
        horizontalRef.current.scrollWidth - window.innerWidth;

      // Kill previous instances to avoid duplication
      ScrollTrigger.killAll();

      gsap.to(horizontalRef.current, {
        x: -horizontalScrollWidth,
        ease: "power1.inOut", // Smoother and consistent ease
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${horizontalScrollWidth * 1.2}`, // Scale end for consistent speed
          pin: true,
          scrub: 1, // More balanced scrolling speed
          anticipatePin: 0.5, // Fine-tuned pinning
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();

    window.addEventListener("resize", updateScroll);
    return () => window.removeEventListener("resize", updateScroll);
  }, []);

  return (
    <main className="w-full main-content bg-dark">
      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="overflow-hidden">
        <div ref={horizontalRef} className="flex w-max gap-4">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className="w-[45vw] h-[300px] bg-blue-500 flex items-center justify-center text-white text-2xl font-bold hover:bg-blue-700 transition duration-300"
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Scroll Section */}
      <div className="h-screen flex items-center justify-center bg-red-500">
        <h1 className="text-5xl text-white">Vertical Page 1</h1>
      </div>
      <div className="h-screen flex items-center justify-center bg-yellow-500">
        <h1 className="text-5xl text-black">Vertical Page 2</h1>
      </div>
    </main>
  );
};

export default HorizontalScroll;
