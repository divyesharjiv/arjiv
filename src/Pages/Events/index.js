import React, { useEffect } from "react";

import hktdc from "Assets/Image/exhibit/hktdc.jpg";
import miami from "Assets/Image/exhibit/miami.jpg";
import gemGenve from "Assets/Image/exhibit/gemGenve.jpg";
import jwlArabia from "Assets/Image/exhibit/jwlArabia.jpg";
import vicenzaoro from "Assets/Image/exhibit/vicenzaoro.jpg";
import jwlgemSingapore from "Assets/Image/exhibit/jwlgemSingapore.jpg";

import { updateMetaTags } from "utility/utils";
import EventShows from "Pages/Events/EventShows";
import Heading from "Components/Heading.js";
import LiveShows from "Pages/LiveShows";

const Events = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Events and Exhibitions - Arjiv Exports",
      description:
        "Arjiv Exports participate in many prestigious diamond and jewelry exhibitions.",
      keywords:
        "diamond exhibitions, jewelry exhibitions, diamond trade shows, diamond manufacturers, gemstone exhibitions, luxury jewelry events, international jewelry exhibitions, gem and diamond trade shows, diamond industry, global diamond exhibitions",
      canonical: "https://www.arjivexports.com/events",
    });
  }, []);

  const events = [
    { img: gemGenve, title: "GemGeneve" },
    { img: jwlgemSingapore, title: "Jewellery & Gem World Singapore" },
    { img: jwlArabia, title: "Jewellery Arabia" },
    { img: vicenzaoro, title: "Vicenzaoro" },
    { img: hktdc, title: "HKTDC" },
    { img: miami, title: "Miami Beach Show" },
  ];

  return (
    <div className="main-content events bg-primary">
      <LiveShows />
      <div className="mx-auto px-4 text-center">
        <div className="flex flex-wrap md:flex-nowrap gap-5 relative justify-around">
          <div className="w-full sm:pb-10 md:w-3/4 event-lists max-w-6xl lg:sticky top-[60px] h-max">
            <div className="my-5">
              <Heading size="text-4xl">EVENTS UPDATES</Heading>
              <p className="text-offwhite text-sm lg:text-lg tracking-widest mt-1 uppercase">
                We Exhibit in the Following Shows
              </p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 mb-5">
              {events.slice(0, 2).map((event, index) => (
                <div
                  key={index}
                  className="bg-green overflow-hidden shadow-md group cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-60 2xl:h-96 object-cover transition-transform 
                           duration-700 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <p
                      aria-label={`Event ${event.title}`}
                      className="bg-white text-primary text-center text-md p-2 font-bold"
                    >
                      {event.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-5">
              {events.slice(2, 6).map((event, index) => (
                <div
                  key={index}
                  className="bg-[#004d5d] overflow-hidden shadow-md group cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-60 xl:h-48 object-cover transition-transform 
                           duration-700 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <p className="bg-white text-primary text-center text-md p-2 font-bold">
                      {event.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/4 lg:w-1/4 relative">
            <div className="bg-white p-4 shadow-md sticky top-[0] h-100">
              <EventShows />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
