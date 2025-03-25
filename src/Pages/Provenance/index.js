import { ARJIV_EMAIL_URL } from "Common";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateMetaTags } from "utility/utils";

function Policies() {
  useEffect(() => {
    updateMetaTags({
      title: "Provenance - Ethical Sourcing and Compliance at Arjiv Exports",
      description:
        "Explore the Provenance Policy of Arjiv Exports, ensuring ethical sourcing, conflict-free materials, and responsible business practices. Learn about our commitment to transparency and accountability.",
      keywords:
        "Arjiv Exports provenance policy, ethical sourcing, conflict-free materials, supply chain practices, responsible business, transparency, compliance, grievance mechanism",
      canonical: "https://www.arjivexports.com/provenance",
    });
  }, []);

  return (
    <div className="main-content policy bg-primary text-offwhite font-poppins">
      <div className="container mx-auto px-4 sm:pt-8 pt-5 max-w-6xl">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-center font-poppins md:mb-10 sm:mb-6 mb-4">
          Provenance Claim Policy Statement
        </h1>
        {/* Provenance – Claim Policy Statement */}
        <div className="sm:mb-10 mb-7">
          <h2 className="md:text-3xl text-lg tracking-wide font-poppins my-5 capitalize">
            The policies relating to this section are part of the Business
            Principles adopted by Arjiv Exports are presented below for
            reference:
          </h2>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            <strong className="text-4xl font-mont">A.</strong> “The company
            shall ensure all its Provenance Claims made will be fully valid
            along with available evidence to support the Claim(s)”
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            Origin - Geographical origin of material, for example country,
            region, mine or corporate ownership of the Mining Facility/ies;
            and/or
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            Source - Type of source, for example recycled, mined, artisanally
            mined, or date of production; and/or
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            Practices - Specific practices applied in the supply chain relevant
            to the Code of Practices, including but not limited to, standards
            applicable to extraction, processing or manufacturing, conflict-free
            status, or due diligence towards sources.
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            Provenance Claims may also relate to origin, sources or practices
            that are specifically excluded from the supply chain, such as
            through a ‘negative warranty’.
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            <strong className="text-4xl font-mont">B.</strong> The company shall
            ensure that all claims and statements (made to consumers or other
            businesses) on practices in the supply chain and the origin or
            source of Diamonds use of both descriptions and symbols are valid.
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            <strong className="text-4xl font-mont">C.</strong> The company shall
            ensure that there will be no attempt to mislead consumers through
            illustrations, descriptions, expressions, words, figures, depictions
            or symbols relating to the Provenance Claim(s).
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            <strong className="text-4xl font-mont">D.</strong> The company shall
            ensure that all the relevant employees are aware about the
            provenance claim and it procedures.
          </p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4"></p>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4"></p>
        </div>

        {/* Policy – Sourcing */}
        <div className="sm:mb-10 mb-7">
          <h2 className="sm:text-3xl text-2xl sm:mb-4 mb-3 font-poppins font-medium">
            GRIEVANCE MECHANISM:
          </h2>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed mb-4">
            <strong className="text-4xl font-mont">E.</strong> Arjiv Exports has
            established this grievance procedure to hear concerns about
            circumstances in the provenance claim and sourcing from
            conflict-affected areas. The compliance officer is responsible for
            implementing and reviewing this procedure. Provenance claim related
            concerns can be raised by interested parties via email to{" "}
            <Link
              to={ARJIV_EMAIL_URL}
              className="text-blue-400 text-lg underline"
            >
              surat@arjiv.com
            </Link>
            .
          </p>
        </div>

        {/* Date */}
        <div className="bg-gray-100 py-3 text-center">
          <h3 className="sm:text-2xl text-xl mb-4 font-mont font-medium my-3 uppercase tracking-widest">
            Place: India | Date: 01/04/2024
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Policies;
