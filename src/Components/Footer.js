import React from "react";
import ArjivLogo from "Assets/Image/Common/arjiv-exports.png";
import appStoreWhite from "Assets/Application/app-store-white.svg";
import playStoreWhite from "Assets/Application/play-store-white.svg";

import { FiMail } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

//prettier-ignore
import { FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
//prettier-ignore
import { APP_STORE_APP_URL, PLAY_STORE_APP_URL, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SKYPE_URL, WHATSAPP_URL, ARJIV_EXPORTS_URL, MUMBAI_OFFICE_MAP, SURAT_OFFICE_URL, ARJIV_INFO_EMAIL_URL, CALL_URL } from "Common";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      link: FACEBOOK_URL,
      icon: <FaFacebookF size={25} color="#3b5998" />,
    },
    {
      link: INSTAGRAM_URL,
      icon: <FaInstagram size={25} color="#b5458c" />,
    },
    {
      link: WHATSAPP_URL,
      icon: <FaWhatsapp size={25} color="#44b54e" />,
    },
    {
      link: LINKEDIN_URL,
      icon: <FaLinkedinIn size={25} color="#0e76a8" />,
    },
    {
      link: SKYPE_URL,
      icon: <FaSkype size={25} color="#00aff0" />,
    },
  ];

  const quickLinks = [
    { path: "/csr", label: "CSR" },
    { path: "/what-we-do", label: "What We Do" },
    { path: "/rjcpolicy", label: "RJC Policy" },
    { path: "/policies", label: "Policies" },
    { path: "/contact_us", label: "Contact Us" },
    { path: "/sitemap", label: "Sitemap" },
  ];

  return (
    <footer className="bg-offwhite text-dark pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-5 px-4">
        {/* Logo & Apps */}
        <div className="flex flex-col lg:items-center">
          <Link to="/" aria-label="Go to homepage">
            <img
              src={ArjivLogo}
              alt="Arjiv Exports Logo - High-Quality Exporters of Diamonds and Jewelry"
              className="w-60 drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            />
          </Link>
          <div className="md:mt-20 sm:mt-14 mt-10 lg:text-center">
            <h4 className="sm:text-xl text-lg font-bold uppercase font-mont mb-3">
              Download the App
            </h4>
            <div className="flex lg:justify-start gap-2">
              <Link
                to={APP_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <img
                  src={appStoreWhite}
                  alt="Download from App Store"
                  width="112"
                  height="34"
                  className="w-28 h-auto shadow-xl"
                />
              </Link>
              <Link
                to={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play Store"
              >
                <img
                  src={playStoreWhite}
                  alt="Download from Play Store"
                  width="112"
                  height="34"
                  className="w-28 h-auto shadow-xl"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="sm:text-xl text-lg font-bold uppercase font-mont md:mb-6 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:underline transition"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="sm:text-xl text-lg font-bold uppercase font-mont md:mb-6 mb-3">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                to={ARJIV_INFO_EMAIL_URL}
                className="flex items-center hover:underline gap-2"
                aria-label="Send us an email"
              >
                <FiMail size={20} className="shrink-0" />
                info@arjiv.com
              </Link>
            </li>
            <li>
              <Link
                to={CALL_URL}
                className="flex items-center hover:underline gap-2"
                aria-label="Call us"
              >
                <IoMdCall size={20} className="shrink-0" />
                +91 98983 00984
              </Link>
            </li>
            <li>
              <Link
                to={MUMBAI_OFFICE_MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:underline gap-2"
                aria-label="Our Mumbai office location"
              >
                <MdLocationPin size={20} className="shrink-0" />
                <span className="leading-tight">
                  CC-7085, Bharat Diamond Bourse, BKC, Bandra East, Mumbai,
                  Maharashtra, 400051 - INDIA.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={SURAT_OFFICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:underline gap-2"
                aria-label="Our Surat office location"
              >
                <MdLocationPin size={20} className="shrink-0" />
                <span className="leading-tight">
                  CS NO 3074, Survey NO 412-1 Block NO. 1C, Opp Reshamvala
                  Reyon, Vastadevadi Road Katargam, Surat, Gujarat, 395004 -
                  INDIA.
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="sm:text-xl text-lg font-bold uppercase font-mont md:mb-6 mb-3">
            Follow Us
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1 transition hover:scale-110 rounded-full`}
                aria-label={`Follow us on ${social.link}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center sm:mt-8 mt-4 text-offwhite sm:text-md text-xs bg-dark sm:tracking-widest tracking-wider p-2">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          to={ARJIV_EXPORTS_URL}
          className="underline transition"
          aria-label="Visit our website"
        >
          ARJIV EXPORTS
        </Link>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
