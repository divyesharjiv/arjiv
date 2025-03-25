import { useEffect, useState } from "react";
import mine from "Assets/Image/Common/mine-source.jpg";
import quote from "Assets/Icons/quote.svg";

const Quote = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.3);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="md:py-36 py-20 bg-cover relative"
      style={{
        backgroundImage: `url(${mine})`,
        backgroundPosition: `center ${-offsetY}px`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="md:text-4xl text-xl font-medium text-white leading-snug">
            <span
              className="quote-icon mr-2 inline-block md:w-12 md:h-12 w-8 h-8 bg-contain"
              style={{ backgroundImage: `url(${quote})` }}
            ></span>
            In the art of diamond polishing, we don’t just shape stones — we
            shape brilliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
