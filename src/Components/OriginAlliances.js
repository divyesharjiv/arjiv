import React from "react";

// ORIGINS
import CANADAMARK from "Assets/Image/ALLIANCE/CANADAMARK.png";
import GIA from "Assets/Image/ALLIANCE/GIA.png";
import RJC from "Assets/Image/ALLIANCE/RJC.png";
import TRACR from "Assets/Image/ALLIANCE/TRACR.png";
import ITRACEIT from "Assets/Image/ALLIANCE/ITRACEIT.png";

// MEMBERS
import IGBC from "Assets/Image/ALLIANCE/IGBC.png";
import GJEPC from "Assets/Image/ALLIANCE/GJEPC.png";
import SDB from "Assets/Image/ALLIANCE/SDB.png";
import BDB from "Assets/Image/ALLIANCE/BDB.png";
import Heading from "Components/Heading";

const OriginAlliance = () => {
  const origins = [
    { src: CANADAMARK, key: "CANADAMARK" },
    { src: GIA, key: "GIA" },
    { src: RJC, key: "RJC" },
    { src: TRACR, key: "TRACR" },
    { src: ITRACEIT, key: "ITRACEIT" },
  ];

  const members = [
    { src: IGBC, key: "IGBC" },
    { src: GJEPC, key: "GJEPC" },
    { src: SDB, key: "SDB" },
    { src: BDB, key: "BDB" },
  ];

  return (
    <section className="py-8 lg:py-16 px-4 bg-dark">
      <div className="container mx-auto text-center">
        <Heading theme="dark" size="text-4xl">
          Alliance | Origin
        </Heading>

        {/* Origins */}
        <div className="flex flex-wrap justify-evenly md:justify-between md:gap-8 gap-5 my-8 md:my-12 lg:my-24">
          {origins.map((x, index) => (
            <div key={index} className="flex justify-between">
              <img
                className={`object-contain md:w-24 w-24 ${
                  x.key === "RJC" ? "lg:w-80 md:w-36" : "w-28 md:w-32 lg:w-38"
                }`}
                src={x.src}
                alt={`${x.key} Origin`}
              />
            </div>
          ))}
        </div>

        {/* Members */}
        <div className="flex flex-wrap justify-around gap-6">
          {members.map((x, index) => (
            <div key={index} className="flex justify-between">
              <img
                className="w-28 md:w-32 lg:w-36"
                src={x.src}
                alt={`${x.key} Member`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginAlliance;
