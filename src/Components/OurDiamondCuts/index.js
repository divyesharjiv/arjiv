import brilliantcut from "Assets/Image/Diamondcuts/brilliant-cut.jpg";
import stepcut from "Assets/Image/Diamondcuts/step-cut.jpg";
import oldcut from "Assets/Image/Diamondcuts/old-cut.jpg";
import rosepotraitcut from "Assets/Image/Diamondcuts/rose-potrait-cut.jpg";
import exquiste from "Assets/Image/Diamondcuts/exquiste.jpg";
import fancycolor from "Assets/Image/Diamondcuts/fancy-color.jpg";

import Button from "Components/Button";
import { TRADE_ARJIV_URL } from "Common";

const OurDiamondCuts = () => {
  const diamondDetails = [
    {
      cutName: "Brilliant cut",
      detail:
        "A brilliant cut is simply a diamond or any other gemstone cut in a particular form with numerous facets so to ensure exceptional brilliance.",
      image: brilliantcut,
    },
    {
      cutName: "Step cut",
      detail:
        "Stones whose outlines are either square or rectangular and whose facets are rectilinear and arranged parallel to the girdle are known as step-cut stones.",
      image: stepcut,
    },
    {
      cutName: "Old Cut",
      detail:
        "These are one of the oldest cutting styles for diamonds. Modern jewellery designers are creating contemporary jewellery with an interesting old-world vibe by adding old cuts.",
      image: oldcut,
    },
    {
      cutName: "Rose Cut / Portrait Cut",
      detail:
        "The Rose Cut showcases a domed shape with triangular facets, creating a gentle, glowing brilliance. The Portrait Cut, with its flat surface and minimal facets, highlights clarity and a classic, elegant look. Both cuts offer timeless, vintage appeal.",
      image: rosepotraitcut,
    },
    {
      cutName: "Exquisite",
      detail:
        "Arjiv Exports is the home to the world's most exquisite diamonds that continue to underline the legacy.",
      image: exquiste,
    },
    {
      cutName: "Fancy Color",
      detail:
        "Natural fancy colored diamonds are as rare as they are exquisite. Arjiv Exports carries a variety of fancy colors in a range of shapes, sizes, and clarity.",
      image: fancycolor,
    },
  ];

  return (
    <section className="bg-offwhite">
      {diamondDetails.map((diamond, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse lg:flex-row items-center lg:py-0 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-4 xl:p-0">
            <div className="max-w-xl mx-auto">
              <div className="">
                <h3 className="relative pb-3 text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold uppercase text-dark font-poppins">
                  {diamond.cutName}
                  <span className="absolute bottom-0 left-0 w-[100px] border-b-2 border-black"></span>
                </h3>
              </div>
              <p className="text-base text-dark md:text-md my-2 md:my-3 lg:my-5">
                {diamond.detail}
              </p>
              <Button
                href={TRADE_ARJIV_URL}
                target="_blank"
                rel="noopener noreferrer"
                to={TRADE_ARJIV_URL}
              >
                Discover
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4 md:p-0">
            <img
              src={diamond.image}
              alt={diamond.cutName}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurDiamondCuts;
