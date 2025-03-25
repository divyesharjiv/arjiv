import React from "react";
import PAIR_CALIBRATED from "Assets/Image/Common/PAIR_CALIBRATED.webp";

const LayoutAndMatchPair = () => {
  return (
    <section className="py-0 px-0 bg-extradark">
      <div className="flex justify-center items-center">
        <img
          className="h-auto w-full md:w-auto"
          src={PAIR_CALIBRATED}
          alt="Perfectly Paired & Precisely Calibrated"
        />
      </div>
    </section>
  );
};

export default LayoutAndMatchPair;
