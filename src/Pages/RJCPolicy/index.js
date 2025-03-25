import React, { useEffect } from "react";
import RJCLogo from "Assets/Image/Common/RJC.jpg";
import Heading from "Components/Heading";
import { updateMetaTags } from "utility/utils";
import { Link } from "react-router-dom";

function Rjcpolicy() {
  useEffect(() => {
    updateMetaTags({
      title: "RJC Compliance Policy - Arjiv Exports",
      description:
        "Arjiv Exports is a member of the Responsible Jewellery Council (RJC) and is committed to ethical business practices and compliance with the Code of Practices in all business activities.",
      keywords:
        "RJC, Responsible Jewellery Council, ethical business practices, diamond supply chain, compliance policy, Arjiv Exports",
      canonical: "https://www.arjivexports.com/rjcpolicy",
    });
  }, []);

  return (
    <div className="main-content policy bg-primary">
      <div className="container mx-auto text-center px-4 mt-5">
        <Heading className="text-center sm:pt-3 pt-6 text-2xl font-poppins font-bold">
          RJC Compliance Policy
        </Heading>
        <div className="flex flex-col lg:flex-row lg:gap-12 sm:gap-8 gap-4 items-center text-offwhite sm:py-12 py-7">
          <div className="w-full lg:w-1/2 mb-3">
            <p className="md:text-xl sm:text-lg text-md text-justify leading-[1.6!important]">
              Arjiv Exports is a member of Responsible Jewellery Council – RJC
              and committed to ethical business practices and compliance with
              Code of Practices in all its business activities. The management
              of Arjiv Exports shall implement responsible ethical, social, and
              environmental practices throughout the diamond supply chain, from
              mine to retail. We, being a responsible entity of the diamond
              supply chain, believe in consumer confidence in our trade and
              request our business partners to follow the same. As a part of
              best endeavors and responsible business entity, we anticipate the
              cooperation of our business partners in adopting the standard and
              ensuring that the entire diamond supply chain is compliant with
              respect to business, social, and environmental responsibilities.
              We strongly encourage all our business partners to follow and
              implement the various requirements of the RJC code of practice and
              other prevailing trade standards. More information about the
              Compliance Program is available on{" "}
              <Link
                to="http://www.responsiblejewellery.com"
                className="text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.responsiblejewellery.com
              </Link>{" "}
              For Arjiv Exports
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className=" overflow-hidden shadow-lg">
              <Link
                to="https://www.responsiblejewellery.com/member/arjiv-exports/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={RJCLogo}
                  alt="RJC Logo"
                  className="w-full transform transition duration-300 hover:scale-105"
                />
                <p className="bg-green font-bold text-xl text-center p-2 relative">
                  Responsible Jewellery Council
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rjcpolicy;
