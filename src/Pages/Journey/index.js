import React, { useEffect } from "react";

import { updateMetaTags } from "utility/utils";

import fancy from "Assets/Image/Journey/fancy.png";
import flame from "Assets/Image/Journey/flame.png";
import hexa from "Assets/Image/Journey/hexa.png";
import oldmine from "Assets/Image/Journey/old-mine.png";
import rose from "Assets/Image/Journey/rose-cut.png";
import single from "Assets/Image/Journey/single-cut.png";
import ctp from "Assets/Image/Journey/ctp.png";
import brilliant from "Assets/Image/Journey/brilliant.png";

import Heading from "Components/Heading";

import "./Journey.scss";

function Journey() {
  useEffect(() => {
    updateMetaTags({
      title: "The Journey of Arjiv Exports - Our Evolution Over the Years",
      description:
        "Explore the journey of Arjiv Exports through the years. Learn about our major milestones, growth, and commitment to excellence in diamond manufacturing.",
      keywords:
        "company journey, Arjiv Exports history, diamond manufacturing evolution, business milestones, Arjiv Exports growth, company timeline, diamond industry leadership, global diamond supplier",
      canonical: "https://www.arjivexports.com/journey",
    });
  }, []);

  return (
    <main className="journery-holder bg-primary">
      <section className="sm:pt-36 pt-20">
        <div className="container mx-auto py-5 md:max-w-6xl">
          <div className="row journery-title mb-10 text-center">
            <h3 className="my-lg-4 my-3">
              <span>THE</span>
              <br />
              <span>JOURNEY</span>
            </h3>
            <h4 className="lg:my-7 my-6">WELCOME TO THE WORLD OF ARJIV.</h4>
            <p>
              Founded in 1985, ARJIV EXPORTS has always believed in Innovation,
              Excellence and Proficiency. Since then,we have been striving to
              meet the highest standards of manufacturing each diamond.
            </p>
          </div>
          <div className="row px-6">
            <div className="arjiv-timeline relative text-offwhite">
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={single} alt="Single Cut Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      1985's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Single Cut Diamonds
                    </h4>
                    <p className="description">
                      A single cut on the other hand is a simple form of cutting
                      a round diamond with only 17 or 18 facets. If you compare
                      a{" "}
                      <strong className="text-white text-capitalize">
                        {" "}
                        Single Cut Diamond{" "}
                      </strong>
                      (usually small Carat Weights of 1.2mm or less) , to a Full
                      Cut Diamond (58 facets), you’d quickly see the difference.
                      Small high quality single cut diamonds are highly prized
                      especially in the watch industry, and because there are
                      fewer but larger facets, they give off a majestic dance of
                      light and colour, that is often lost in a sea of white
                      light with the full cut stones
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={rose} alt="Rose Cut Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2000's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Rose Cut Diamonds
                    </h4>
                    <p className="description">
                      The{" "}
                      <strong className="text-white text-capitalize">
                        {" "}
                        rose cut{" "}
                      </strong>{" "}
                      is one of the oldest cutting style for diamonds mordern
                      jewellery designers are creating edges(Contemparory
                      jewellery with an interesting, old world vibe by adding
                      rose cut.) The ancient art of faceting a stone to look
                      like an opening nose, originated in India in the 16th
                      century. The result is a stone that is still coveted today
                      by high-end designers and consumers alike. This brilliant
                      time-honored cut allows light to reflect within 24 domed
                      facets(Size 0.01 to 20.00 cts), Colour(o-z.natural fancy
                      colour).
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={oldmine} alt="Old Mine Cut Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2002's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Old Mine Cut Diamonds
                    </h4>
                    <p className="description">
                      Brought back a piece of history by reviving the classic{" "}
                      <strong className="text-white text-capitalize">
                        {" "}
                        Old Mine Cut.
                      </strong>{" "}
                      This vintage-style diamond cut harkens back to the 18th
                      century, characterized by its shape, deep facets, and
                      antique charm. By introducing these cuts to our portfolio,
                      we enabled our customers to experience a sense of timeless
                      luxury, connecting them with the craftsmanship of a bygone
                      era.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={brilliant} alt="Brilliant Cut Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2008's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Brilliant Cut Diamonds
                    </h4>
                    <p className="description">
                      A brilliant cut is simple a diamond or other gemstone cut
                      in a particular form with numerous facets so as to have
                      exceptional brilliance. The shape resembles of a cone and
                      provides maximised light return through the top of a
                      diamond.{" "}
                      <strong className="text-white text-capitalize">
                        {" "}
                        Round Brilliant{" "}
                      </strong>{" "}
                      Cuts are moreover used in modern jewellery.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={fancy} alt="Fancy Coloured Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2012's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Fancy Coloured Diamonds
                    </h4>
                    <p className="description">
                      Natural, Intense{" "}
                      <strong className="text-white text-capitalize">
                        {" "}
                        fancy coloured diamonds{" "}
                      </strong>{" "}
                      are as rare as they exquisite. Arjiv exports carries a
                      variety of fancy colours in a range of shapes, sizes,
                      colours and clarity. They are 100% natural and un-treated
                      with heat or chemicals so not to compromise their value or
                      quality.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={hexa} alt="Step Cut Diamonds" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2015's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Step Cut Diamonds
                    </h4>
                    <p className="description">
                      Stones whose outlines are either square or rectangular and
                      whose facets are rectilinear and arranged parallel to the
                      griddle known as
                      <strong className="text-white text-capitalize">
                        {" "}
                        Step-or-step cut stones.
                      </strong>{" "}
                      These stones often have their corners truncated creating
                      an embrald cut with octagonal outline.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img src={flame} alt="Evolution of Step Cuts" />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2017's
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 text-[25px] border-b-2 border-dashed border-[#555]">
                      Evolution of Step Cuts
                    </h4>
                    <p className="description">
                      we embraced innovation by evolving the classic
                      <strong className="text-white text-capitalize">
                        {" "}
                        step-cut diamond.
                      </strong>{" "}
                      With a focus on creating modified cuts, we transformed the
                      traditional step cuts into something more intricate and
                      unique, pushing the boundaries of diamond cutting. This
                      new approach allowed us to offer diamonds with enhanced
                      brilliance and a striking geometric look, catering to
                      modern jewelry trends while maintaining a touch of
                      elegance.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <div className="circle">
                    <span>
                      <img
                        src={ctp}
                        alt="Custom Cuts for Limitless Creativity"
                      />
                    </span>
                  </div>
                  <div className="content relative">
                    <span className="year font-mont text-2xl bg-[#67676b] p-3 tracking-wide rounded-lg mb-11 mt-3 block">
                      2020's - Present
                    </span>
                    <h4 className="title uppercase text-left font-poppins font-medium pb-4 mb-5 border-dashed text-[555] border-b-2 border-[#555]">
                      Custom Cuts for Limitless Creativity
                    </h4>
                    <p className="description">
                      Arjiv Exports has been on the cutting edge of diamond
                      innovation. We now specialize in creating
                      <strong className="text-white text-capitalize">
                        {" "}
                        custom cuts{" "}
                      </strong>{" "}
                      that break traditional boundaries, allowing our customers
                      to realize their most imaginative jewelry designs. Whether
                      it’s modifying shapes, angles, or facet arrangements, we
                      work closely with our clients to craft diamonds that fit
                      their exact specifications. From avant-garde cuts to
                      personalized modifications, our bespoke diamond solutions
                      open up new possibilities for jewelry creators worldwide.
                    </p>
                    <div className="icon">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-16 mt-8 mb-8 text-center text-offwhite px-2">
            <div className="font-bold mb-5">
              <Heading className="uppercase tracking-normal">
                The Future of Arjiv Exports
              </Heading>
            </div>
            <p className="sm:text-lg text-md max-w-2xl mx-auto">
              As we continue to innovate and evolve, Arjiv Exports is committed
              to pushing the art of diamond cutting even further, blending
              tradition with modernity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Journey;
