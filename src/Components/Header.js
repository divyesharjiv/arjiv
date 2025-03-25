import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

import { TRADE_ARJIV_URL } from "Common";
import logo from "Assets/Image/Common/logo.png";
import { isTab } from "utility/utils";

const MENU_ITEMS = [
  {
    name: "About",
    isDropdown: true,
    subItems: [
      // { name: "Story", href: "/story" },
      { name: "Our History", href: "/our-history" },
      { name: "CSR", href: "/csr" },
    ],
  },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Customization", href: "/customization" },
  { name: "Grading", href: "/grading" },
  { name: "Events", href: "/events" },
  {
    name: "Compliances",
    isDropdown: true,
    subItems: [
      { name: "Policies - Supply Chain", href: "/policies" },
      { name: "RJC Policy", href: "/rjcpolicy" },
      {
        name: "Web Ethical Business Policies",
        action: () => handlePdfDownload(),
      },
      { name: "Provenance Claim", href: "/provenance" },
    ],
  },
  { name: "Contact Us", href: "/contact_us" },
];

const handlePdfDownload = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Web-Ethical-Business-Policies.pdf`;
  window.open(pdfUrl, "_blank");
};

export default function Navbar() {
  const location = useLocation(); // Get current path
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const renderSubItems = useCallback(
    (subItems) => {
      return subItems.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={subItem.href}
            onClick={(e) => {
              if (subItem.action) {
                e.preventDefault();
                subItem.action();
              }
            }}
            className={`w-full text-left block px-4 py-2 ${
              !isOpen ? `text-primary` : `text-offwhite`
            }`}
          >
            {subItem.name}
          </Link>
        </li>
      ));
    },
    [isOpen]
  );

  const menuClass = useMemo(
    () => `lg:static lg:bg-transparent lg:flex lg:items-center`,
    []
  );

  const linkClass = useCallback(
    (href) =>
      `relative xl:text-lg md:text-sm font-medium tracking-wide px-2.5 py-2 flex items-center gap-1
     ${
       isFixed
         ? `hover:text-primary before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-300 hover:before:w-full`
         : `hover:bg-white hover:text-primary`
     }
     ${
       location.pathname === href
         ? isFixed
           ? `text-primary before:w-full` // Active state in fixed header
           : `bg-white text-primary` // Active state in normal header
         : ""
     }`,
    [isFixed, location.pathname]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const offToggleMenu = useCallback(() => setIsOpen(false), []);

  const handleDropdown = useCallback(
    (menuName) =>
      setOpenDropdown((prev) => (prev === menuName ? null : menuName)),
    []
  );

  const handleClick = useCallback(
    (e, href) => {
      if (location.pathname === href) {
        e.preventDefault(); // Prevent navigation for active tab
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    if (isTab()) {
      offToggleMenu();
    }
    handleDropdown();
  }, [location, toggleMenu, handleDropdown]);

  return (
    <nav
      className={`w-full top-0 z-50 fixed transition-all duration-300 px-3 ${
        isFixed
          ? "bg-offwhite text-primary shadow-lg shadow-grey sm:py-2 py-3"
          : "bg-transparent text-white py-6"
      }`}
    >
      <div className="flex justify-between items-center sm:px-4 px-1">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Arjiv Exports"
            className={`sm:w-16 w-10 transition-all ${isFixed ? "invert" : ""}`}
          />
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={toggleMenu} className="block lg:hidden">
          <HiOutlineMenuAlt3 size={30} />
        </button>

        {/* Menu */}
        <div className={`${menuClass} hidden lg:block`}>
          <ul className="flex flex-col lg:flex-row items-center mt-16 lg:mt-0">
            {MENU_ITEMS.map((x) => {
              const isOpen = openDropdown === x.name;

              return x.isDropdown ? (
                <li
                  key={x.name}
                  className="relative"
                  onMouseEnter={() => handleDropdown(x.name)}
                  onMouseLeave={() => handleDropdown(null)}
                >
                  <button className={linkClass(x.href)}>
                    {x.name}
                    <GoTriangleDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="absolute right-0 top-[40px] bg-white shadow-md mt-1 w-60 z-20 py-2 rounded-sm">
                      {renderSubItems(x.subItems)}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={x.name}>
                  <Link
                    to={x.href}
                    onClick={(e) => handleClick(e, x.href)}
                    className={linkClass(x.href)}
                  >
                    {x.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Login Button */}
          <Link
            to={TRADE_ARJIV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 text-lg font-medium hover:text-primary hover:bg-offwhite px-3 py-3"
          >
            <FaUserCircle className="text-2xl" />
            <span>Login</span>
          </Link>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`fixed inset-0 bg-extradark z-50 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${isOpen || isOpen === null ? "visible" : "invisible"}`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-2 text-3xl text-white"
        >
          <IoCloseOutline size={45} />
        </button>

        {/* Mobile Menu */}
        <ul className="flex flex-col items-center mt-10 mb-6 px-4">
          {MENU_ITEMS.map((x) => {
            const isOpen = openDropdown === x.name;
            const isActive = window.location.pathname === x.href;

            return x.isDropdown ? (
              <li key={x.name} className="text-xl w-full">
                <button
                  onClick={() => handleDropdown(x.name)}
                  className="text-white flex items-center gap-2 py-3 w-full relative"
                >
                  {x.name}
                  <GoTriangleDown
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  {/* Underline Effect */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-white w-full scale-x-0 transition-transform duration-300 origin-left ${
                      isOpen ? "scale-x-100" : ""
                    }`}
                  ></span>
                </button>
                {isOpen && (
                  <ul
                    className={`bg-gray-800 mt-1 rounded-md ${
                      isOpen ? `pl-4` : `pl-0`
                    }`}
                  >
                    {renderSubItems(x.subItems)}
                  </ul>
                )}
              </li>
            ) : (
              <li key={x.name} className="w-full mb-2">
                <Link
                  to={x.href}
                  className="text-xl text-white py-3 block relative"
                >
                  {x.name}
                  {/* Underline Effect */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-white w-full scale-x-0 transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
          <Link
            to={TRADE_ARJIV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-medium hover:text-primary hover:bg-offwhite py-3 w-full"
          >
            <FaUserCircle className="text-2xl" />
            <span>Login</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
