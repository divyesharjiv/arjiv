import { ARJIV_EMAIL_URL } from "Common";
import Heading from "Components/Heading";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateMetaTags } from "utility/utils";

function Policies() {
  useEffect(() => {
    updateMetaTags({
      title: "Policy - Privacy and Terms of Arjiv Exports",
      description:
        "Read the policies of Arjiv Exports, including our privacy policy, terms of service, and data protection practices. We are committed to protecting your information.",
      keywords:
        "Explore the policies of Arjiv Exports, including our commitment to your privacy, data protection measures, and terms of service. Learn how we handle your information responsibly.",
      canonical: "https://www.arjivexports.com/policies",
    });
  }, []);

  return (
    <div className="main-content policy bg-primary text-offwhite font-poppins">
      <div className="container mx-auto px-4 sm:pt-8 pt-5 max-w-6xl">
        <Heading className="uppercase tracking-wide text-center md:mb-12 mb-6">Arjiv Exports Policies</Heading>
        {/* Policy – Supply Chain */}
        <div className="sm:mb-10 mb-7">
          <h2 className="sm:text-3xl text-2xl sm:mb-4 mb-3 font-poppins font-medium">
            Policy – Supply Chain
          </h2>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed">
            This Policy demonstrates Arjiv Exports is committed and its
            expectations for its product suppliers regarding actions to address
            Conflict Minerals. Arjiv Exports expects it's suppliers to have in
            place policies and due diligence measures that will enable us to
            reasonably assure that products and components supplied to us
            containing conflict minerals are DRC conflict free. We being a
            responsible company, Arjiv Exports supports the goal of the
            Dodd-Frank Act of preventing armed groups in the Democratic Republic
            of the Congo and adjoining countries from benefitting from the
            sourcing of Conflict Minerals from that region. Arjiv Exports is
            committed to working with its suppliers to educate them on these
            matters and concerning steps they can take to obtain increased
            transparency regarding the origin of minerals contained in the
            products they manufacture and sell to Arjiv Exports. Arjiv Exports
            reserves the right to request additional documentation from its
            suppliers regarding the origin of any Conflict Minerals included in
            any products sold to Arjiv Exports. Suppliers who do not reasonably
            comply with this Policy shall be reviewed by Arjiv Exports for
            future business.
          </p>
        </div>

        {/* Policy – Sourcing */}
        <div className="sm:mb-10 mb-7">
          <h2 className="sm:text-3xl text-2xl sm:mb-4 mb-3 font-poppins font-medium">
            Policy – Sourcing
          </h2>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed">
            Arjiv Exports is committed to ensuring that our supply chain is free
            of any metal which was procured for the support or benefit of armed
            and anti social conflict groups or involving serious abuses of human
            rights and non compliant with OECD Guidelines. Arjiv Exports clearly
            criticizes such activity and will reject any material which we
            believe was obtained involving serious human rights violations or
            which benefitted or supported armed rebels or terrorist groups
            through illegal finance or other activities. The company shall carry
            out risk assessment for its supply chain and shall not enter into
            any business relationship or if may require then shall
            suspend/discontinue the engagement with any such supplier involved
            in dealing with Conflict-Affected and High-Risk areas, Any form of
            Human Right Violation; Torture, Cruel, In-Human and Degrading
            Treatment; Forced/Compulsory Labour; Child Labour; Abuses such as
            widespread Sexual Violence; War Crimes; other serious violations of
            International Humanitarian Law, Crime against Humanity; Genocide
            and/or To Bribe or To be Bribed. We strictly condemn and prohibit
            any Direct/Indirect support to public/private security forces which
            illegally Control, Tax or Extort money from Mining Sites,
            Transportation Routes and Upstream Sectors. The Company shall carry
            out due diligence to assess risks related to procurement from the
            Conflict-affected and high-risk areas – CAHRAs and shall always
            source from compliant miners/refiners/traders We shall always set
            reasonable efforts to source Conflict Minerals from smelters and
            refiners validated as being DRC Conflict Free, and require their
            direct and indirect suppliers to do the same; We strive to work
            supportively with our customers and supply chain partners in
            implementing conflict minerals compliance programs.
          </p>
        </div>

        {/* Policy – Due Diligence */}
        <div className="sm:mb-10 mb-7">
          <h2 className="sm:text-3xl text-2xl sm:mb-4 mb-3 font-poppins font-medium">
            Policy – Due Diligence
          </h2>
          <p className="sm:text-[16px] text-sm text-justify leading-relaxed">
            The company shall always undertake to ensure that the extraction and
            trade of diamond support peace and development, not conflict. Arjiv
            Exports remains committed to enhance its Supply Chain Due Diligence
            program through internal review and external assessments. We have
            zero tolerance policy for the supplier violating OECD due diligence
            guideline and we shall immediately stop commercial relationship if
            any of our business associates found non-compliant or High-Risk
            during our internal/external risk assessment. Currently Arjiv
            Exports procure it’s precious metals from RJC-CoC and CoP compliant
            miners/refiners/traders. However, we have established a strong due
            diligence process and we shall review it as an when we observed
            significant risk or upon receipt of any grievance or complaint but
            in normal course, we shall carry our due diligence process on annual
            basis.
          </p>
        </div>

        {/* Grievance Mechanism */}
        <div className="sm:mb-10 mb-7">
          <h2 className="sm:text-3xl text-2xl sm:mb-4 mb-3 font-poppins font-medium">
            Grievance Mechanism
          </h2>
          <p className="text-justify leading-relaxed">
            Our employees, suppliers and other parties can report concerns and
            alleged violations of supply chain/sourcing/due diligence policy as
            follows: Email:{" "}
            <Link
              to={ARJIV_EMAIL_URL}
              className="text-blue-400 text-lg underline"
            >
              surat@arjiv.com
            </Link>
            . Reports can be made anonymously and will be kept confidential to
            the fullest extent practicable and allowed by law. We will not take
            any retaliatory action against our employees, suppliers, or other
            parties who make a report in good faith. Our suppliers are
            encouraged to contact{" "}
            <Link
              to={ARJIV_EMAIL_URL}
              className="text-blue-400 text-lg underline"
            >
              surat@arjiv.com
            </Link>{" "}
            if they wish to seek guidance on the application of this Policy.
          </p>
        </div>

        {/* Date */}
        <div className="bg-gray-100 py-3 text-center">
          <h4 className="sm:text-2xl text-xl mb-4 font-mont font-medium my-3 uppercase tracking-widest">
            Date: 01/04/2024 | India
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Policies;
