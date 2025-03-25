import React, { useEffect } from "react";
import polishing from "Assets/Image/Common/polishing.jpeg";
import HeroHeading from "Components/HeroHeading";
import { updateMetaTags } from "utility/utils";

// Import CSS module
import styles from "./grading.module.scss";
import {
  CARAT_RANGES,
  CLARITY,
  COLOR,
  CUT_DATA,
  EXTRA_FACET_DATA,
  EXTRA_FACET_LABELS,
  FLUORESCENCE_DATA,
  HEART_ARROW_DATA,
  INCLUSIONS,
  INCLUSION_CRITERIA,
  INCLUSION_TABLE,
  LUSTER_DATA,
  LUSTER_LABELS,
  OPEN_INCLUSION,
  OPEN_INCLUSION_SEPARATION,
  POLISH_DATA,
  SHADE_DATA,
  SYMMETRY_DATA,
  WHITE_INCLUSION,
  blackInclusionDetail,
} from "Pages/Grading/GradingData";
import Cut from "Assets/Image/Cut/Cut.png";

const Grading = () => {

  useEffect(() => {
    updateMetaTags({
      title: "Diamond Grading – Cut, Color, Clarity & Carat | Arjiv Exports",
      description:
        "Learn about diamond grading at Arjiv Exports. Understand the 4Cs – Cut, Color, Clarity, and Carat – to choose the perfect diamond.",
      keywords:
        "diamond grading, diamond cut, diamond color, diamond clarity, diamond carat, Arjiv Exports",
      canonical: "https://www.arjivexports.com/grading",
    });
  }, []);

  return (
    <main className={styles.grading}>
      <HeroHeading img={polishing} title="Arjiv Grading System" />
      <section className="bg-offwhite">
        <div className="container max-w-8xl mx-auto py-3 px-4 text-primary">
          <div className={styles["grading-details"]}>
            <p>
              The <strong>Arjiv Grading System</strong> follows the global
              standard of the 4Cs: carat weight, cut, color, and clarity, while
              also incorporating additional valuable parameters that go beyond
              these standards. Expert gemologists use precise tools and
              methodologies to assess each characteristic, providing a
              comprehensive evaluation of the diamond's overall quality and
              value.
            </p>
          </div>
          {/* Shape of Diamond */}
          <div className={styles["grading-details"]}>
            <h2>Shape of Diamond</h2>
            <p>
              When purchasing diamonds, shape plays a crucial role. Each diamond
              shape crafted by Arjiv Export is distinct, offering its own unique
              characteristics and appeal.
            </p>
          </div>

          {/* Carat */}
          <div className={styles["grading-details"]}>
            <h2>Carat</h2>
            <div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-800">
                  <tbody>
                    {CARAT_RANGES.map((x, index) => (
                      <tr key={index}>
                        {x.map((z, idx) => (
                          <td
                            key={idx}
                            className="min-w-[100px] border border-gray-800 text-center p-2"
                          >
                            {z}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Clarity */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Clarity</h2>
            <p>
              Clarity refers to the presence of inclusions and blemishes in a
              diamond, with flawless diamonds being exceptionally rare and
              valuable. Inclusions, often traces of non-crystallized carbon, can
              affect a diamond’s brilliance by disrupting light dispersion.
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr gap-4 mt-4 lg:mt-5">
              {CLARITY.map((x, index) => (
                <div key={index} className="visual-img min-w-36 text-center">
                  <img
                    src={x.img}
                    alt={x.title}
                    width={100}
                    height={100}
                    className="mb-4 mx-auto"
                  />
                  <div>
                    <p className="mb-1">{x.title}</p>
                    <p>{x.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Color</h2>
            <p>
              Diamond color ranges from colorless to shades of yellow and brown,
              graded on a scale from D to Z. Fancy color diamonds, on the other
              hand, exhibit vibrant hues such as blue, pink, and yellow, valued
              for their rarity and striking beauty.
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr gap-4 mt-4 lg:mt-5">
              {COLOR.map((x, index) => (
                <div key={index} className="visual-img min-w-36 text-center">
                  <img
                    src={x.img}
                    alt={x.title}
                    width={100}
                    height={100}
                    className="mb-4 mx-auto"
                  />
                  <div>
                    <p className="mb-1">{x.title}</p>
                    <p>{x.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cut */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Cut</h2>
            <p>
              The cut of a diamond plays a key role in its sparkle and
              brilliance, directly influenced by the skill of the diamond
              cutter. Even with excellent color and clarity, a poorly executed
              cut can diminish the stone's ability to reflect light, reducing
              its overall radiance. A precise cut ensures maximum brilliance and
              enhances the diamond's visual impact.
            </p>

            <div className="mt-4 lg:mt-5">
              {/* Table with overflow only */}
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse border border-gray-800">
                  <tbody>
                    <tr>
                      {CUT_DATA.map((x, index) => (
                        <td
                          key={index}
                          className="visual-img min-w-36 text-center"
                        >
                          {x.code}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {CUT_DATA.map((x, index) => (
                        <td
                          key={index}
                          className="visual-img min-w-36 text-center font-normal"
                        >
                          {x.label}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Image */}
            <img src={Cut} alt="Cut" />
          </div>

          {/* Polish */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Polish</h2>
            <p>
              Polish refers to the degree of smoothness on a diamond's facets. A
              well-polished diamond enhances its ability to reflect light,
              contributing to its overall brilliance and visual appeal.
            </p>

            <div className="overflow-x-auto w-full mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <tbody>
                  <tr>
                    {POLISH_DATA.map((x, index) => (
                      <td
                        key={index}
                        className="visual-img min-w-36 text-center w-1/4"
                      >
                        {x.code}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {POLISH_DATA.map((x, index) => (
                      <td
                        key={index}
                        className="visual-img min-w-36 text-center font-normal"
                      >
                        {x.label}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Symmetry */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Symmetry</h2>
            <p>
              Symmetry in a diamond refers to the precise arrangement of its
              facets, ensuring each one is perfectly aligned with its
              counterpart. Inconsistent symmetry can cause light to scatter
              incorrectly, reducing the diamond’s brilliance and overall
              appearance.
            </p>

            <div className="overflow-x-auto w-full mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <tbody>
                  <tr>
                    {SYMMETRY_DATA.map((x, index) => (
                      <td
                        key={index}
                        className="visual-img min-w-36 text-center w-1/4"
                      >
                        {x.code}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {SYMMETRY_DATA.map((x, index) => (
                      <td
                        key={index}
                        className="visual-img min-w-36 text-center font-normal"
                      >
                        {x.label}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fluorescence */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Fluorescence</h2>
            <p>
              Diamond fluorescence is the visible light emitted by a diamond
              when exposed to ultraviolet (UV) light, typically resulting in a
              blue glow. While it doesn't affect a diamond's structure,
              fluorescence can influence its appearance, sometimes enhancing or
              dulling its visual appeal depending on its strength.
            </p>

            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4 lg:mt-5 overflow-x-auto">
              {FLUORESCENCE_DATA.map((x, index) => (
                <div key={index} className="min-w-24 text-center">
                  <img
                    src={x.img}
                    alt={x.label}
                    width={100}
                    height={100}
                    className="mb-2 mx-auto"
                  />
                </div>
              ))}
            </div>

            <div className="overflow-x-auto mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <thead>
                  <tr>
                    {FLUORESCENCE_DATA.map((x, index) => (
                      <th
                        key={index}
                        className="visual-img min-w-36 text-center"
                      >
                        {x.code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {FLUORESCENCE_DATA.map((x, index) => (
                      <td
                        key={index}
                        className="visual-img min-w-36 text-center font-normal"
                      >
                        {x.label}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Heart & Arrow */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Heart & Arrow</h2>
            <p>
              Heart & Arrows diamonds are precision-cut stones that exhibit a
              symmetrical pattern, with hearts visible from the bottom and
              arrows from the top. This high level of craftsmanship enhances the
              diamond's brilliance and visual appeal.
            </p>

            <div className="overflow-x-auto mt-6 lg:mt-10">
              <table className="w-full text-center border-collapse border border-gray-800">
                <tbody>
                  <tr>
                    {HEART_ARROW_DATA.map((x, index) => (
                      <td key={index} className="min-w-36">
                        {x}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="md:text-3xl sm:text-2xl text-xl my-8 font-medium text-center tracking-normal font-mont max-w-6xl mx-auto">
            “We go beyond common grading standards, considering additional
            factors for a more precise diamond evaluation.”
          </h3>
          {/* Luster */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Luster</h2>
            <p>
              Diamond Luster refers to the way light interacts with the
              diamond's surface, creating a brilliant, reflective glow.
            </p>
            <div className="overflow-x-auto mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <tbody>
                  <tr>
                    {LUSTER_DATA.map((x, index) => (
                      <td key={index}>{x}</td>
                    ))}
                  </tr>
                  <tr>
                    {LUSTER_LABELS.map((x, index) => (
                      <td key={index}>{x}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Shade */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Shade</h2>
            <p className="mb-3">
              Diamond shade refers to the subtle undertones or secondary hues
              present in a diamond that can influence its overall appearance and
              brilliance. Shade is an additional factor that affects how a
              diamond looks in different lighting conditions.
            </p>
            <p>
              Diamonds may exhibit{" "}
              <strong>
                colorless, gray, brown, green, yellow, blue or pink
              </strong>{" "}
              shades even if they appear near-colorless on paper. It can either
              enhance or diminish the diamond's beauty and value.
            </p>

            <div className="overflow-x-auto mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <thead>
                  {SHADE_DATA.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <th key={cellIndex}>{cell}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>

          {/* Extra Facet */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Extra Facet</h2>
            <p className="mb-3">
              An extra facet in a diamond refers to an additional, unplanned
              facet that is not part of the standard faceting pattern. These
              facets are typically added to remove minor surface imperfections
              or inclusions but do not follow the diamond’s original symmetrical
              design.
            </p>
            <p>
              They are usually small and placed near the{" "}
              <strong>girdle, pavilion, or culet.</strong> When positioned
              strategically, they do not significantly impact a diamond’s
              brilliance.
            </p>

            <div className="overflow-x-auto mt-4 lg:mt-5">
              <table className="w-full text-center border-collapse border border-gray-800">
                <tbody>
                  <tr>
                    {EXTRA_FACET_DATA.map((x, index) => (
                      <td key={index}>{x}</td>
                    ))}
                  </tr>
                  <tr>
                    {EXTRA_FACET_LABELS.map((x, index) => (
                      <td key={index}>{x}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Eye Clean */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Eye Clean</h2>
            <p>
              An eye-clean diamond is one that has no visible inclusions or
              blemishes when viewed with the naked eye from a standard viewing
              distance (typically 6–12 inches). These diamonds may still have
              inclusions, but they are too small or positioned in a way that
              makes them unnoticeable without magnification.
            </p>
            <p>
              Eye-cleanliness depends on{" "}
              <strong>
                clarity grade, inclusion type & size, placement, and diamond
                shape & cut.
              </strong>
            </p>
          </div>

          {/* Inclusions */}
          <div className={styles["grading-details"]}>
            <h2 className="flex items-center gap-2">Inclusions</h2>
            <p>
              Diamond Inclusions are internal or external imperfections formed
              during a diamond's natural creation process. Their type (e.g.,
              feather, cloud, crystal) and position (e.g., center, edge,
              surface) significantly impact the diamond's clarity, brilliance,
              and durability. Inclusions near the center are more visible and
              affect light reflection, while those on edges may pose a risk
              during cutting or setting.
            </p>
          </div>

          {/* White Inclusion */}
          <div className={styles["grading-details"]}>
            <h2>White Inclusion</h2>
            <p className="mb-4">
              A <strong>white inclusion</strong> in a diamond refers to an
              internal feature or imperfection that appears white, cloudy, or
              milky. These inclusions are typically caused by{" "}
              <strong>
                trapped minerals, uncrystallized carbon, or structural
                irregularities
              </strong>{" "}
              that occur during the diamond’s natural formation process. Unlike
              black inclusions (which are often graphite or carbon spots), white
              inclusions stand to be less visible but can still affect the
              diamond’s transparency and brilliance.
            </p>
            <p className="mb-4">
              At Arjiv’s grading we consider some of following white inclusions:
            </p>

            <ul className="pl-4 list-disc">
              {WHITE_INCLUSION.map((x, index) => (
                <li key={index} className="mb-1">
                  <strong>{x.type} </strong>
                  {x.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Black Inclusion */}
          <div className={styles["grading-details"]}>
            <h2>Black Inclusion</h2>
            <p className="mb-4">
              A <strong>black inclusion</strong> in a diamond is an internal
              flaw or impurity that appears as a dark or black spot inside the
              stone. These inclusions are typically made up of{" "}
              <strong>trapped carbon, graphite, or other minerals</strong> that
              did not crystallize properly during the diamond's natural
              formation. Black inclusions are often more{" "}
              <strong>visible to the naked eye,</strong> affecting the diamond’s
              clarity and overall appearance.
            </p>
            <p className="mb-4">
              At Arjiv’s grading we consider some of following black inclusions:
            </p>

            <ul className="pl-4 list-disc">
              {blackInclusionDetail.map((x, index) => (
                <li key={index} className="mb-1">
                  <strong>{x.type} </strong>
                  {x.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Black and White Inclusion */}
          <div className={styles["grading-details"]}>
            <h2>Black and White Inclusion both have sub-parts:</h2>
            <p className="m-0">
              <strong>Table Inclusion:</strong> A flaw located in the center of
              the diamond's top facet (table), making it more visible and
              directly impacting brilliance.
            </p>
            <p className="mb-4">
              <strong>Side Inclusion:</strong> A flaw positioned near the edges
              or girdle of the diamond, often less noticeable and can be hidden
              by the setting.
            </p>

            {/* Inclusion table */}
            <div className="overflow-x-auto">
              <table className="w-1/2 mx-auto text-center border-collapse border border-gray-300 mb-4">
                <tbody>
                  {INCLUSION_TABLE.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mb-2">Their Criteria:</p>

              <table className="w-full mx-auto text-center border-collapse border border-gray-300">
                <tbody>
                  {INCLUSION_CRITERIA.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Open Inclusion */}
          <div className={styles["grading-details"]}>
            <h2>Open Inclusion</h2>
            <p className="mb-2">
              Open Inclusion in a diamond refers to an internal flaw that breaks
              through the surface, creating an exposed cavity or fracture.
            </p>

            {/* Inclusion table */}
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse border border-gray-300">
                <tbody>
                  {OPEN_INCLUSION.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-2 mt-4">Open inclusion has been separated by:</p>

            {/* Separation table */}
            <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse border border-gray-300">
                <tbody>
                  {OPEN_INCLUSION_SEPARATION.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Common Inclusions */}
          <div className={styles["grading-details"]}>
            <h2 className="flex justify-center gap-2 my-5">
              Common Inclusions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3 lg:gap-16 sm:gap-8 gap-3 mt-4 lg:mt-5">
              {INCLUSIONS.map((x, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center py-4 overflow-hidden"
                >
                  <div className="text-center w-full">
                    <img
                      className="rounded-full mx-auto"
                      src={x.OrgImg}
                      alt={x.name}
                      width={100}
                    />
                    <h5 className="mt-3 font-poppins font-medium">{x.name}</h5>
                  </div>

                  <div className="w-full flex mt-2">
                    <img src={x.mainImg} alt={x.name} width={180} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles["grading-details"]}>
            <h5 className="text-center w-full md:w-3/4 mx-auto font-mont text-xl">
              By combining standard grading with our advanced criteria, we
              ensure a more accurate and comprehensive diamond evaluation,
              helping you make the best choice with confidence.
            </h5>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Grading;
