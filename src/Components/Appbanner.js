import React from "react";
import NECK from "Assets/Application/NECK.png";
import PAIR from "Assets/Application/PAIR.png";
import SEARCH from "Assets/Application/SEARCH.png";
import SINGLESTONE from "Assets/Application/SINGLESTONE.png";
import MOBILE from "Assets/Application/MOBILE.png";
import AppStore from "Assets/Application/app-store.svg";
import PlayStore from "Assets/Application/play-store.svg";
import { APP_STORE_APP_URL, PLAY_STORE_APP_URL } from "Common";
import { Link } from "react-router-dom";

const Appbanner = () => {
  const explorable = [
    {
      img: SEARCH,
      title: "easy to search",
    },
    {
      img: PAIR,
      title: "matching pair",
    },
    {
      img: NECK,
      title: "calibrate diamonds",
    },
    {
      img: SINGLESTONE,
      title: "fancy color",
    },
  ];

  return (
    <section
      className={`bg-offwhite pt-10 lg:pt-12 bg-cover bg-center bg-app-bg overflow-hidden`}
    >
      <div className="container-fluid px-4 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-end lg:justify-around">
          {/* Mobile App Image */}
          <div className="lg:w-5/12 w-full flex justify-center">
            <img
              src={MOBILE}
              alt="Mobile App"
              className="object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Text and Content */}
          <div className="lg:w-6/12 w-full text-center mb-14">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold capitalize text-primary">
                Explore our app
              </h2>
              <p className="text-gray-500 mt-3 text-lg text-primary">
                Find your perfect diamond
              </p>
            </div>

            {/* Explorable Boxes */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {explorable.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded p-4 flex flex-col items-center justify-center shadow-lg aspect-square sm:w-32 sm:h-32 w-28 h-28"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-12 h-12 object-contain mb-3"
                    loading="lazy"
                  />
                  <h5 className="font-semibold uppercase sm:text-sm text-xs text-center font-mont sm:leading-5">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>

            {/* App Store and Play Store */}
            <div className="flex justify-center mt-6 gap-3">
              <Link
                to={APP_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from App Store - Arjiv Exports"
              >
                <img
                  src={AppStore}
                  alt="Download from App Store - Arjiv Exports"
                  className="w-36 h-auto shadow-lg"
                  loading="lazy"
                />
              </Link>
              <Link
                to={PLAY_STORE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download from Google Play - Arjiv Exports"
              >
                <img
                  src={PlayStore}
                  alt="Download from Google Play - Arjiv Exports"
                  className="w-36 h-auto shadow-lg"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appbanner;
