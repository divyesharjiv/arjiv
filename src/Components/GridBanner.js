import React from "react";

import Marking from "Assets/Video/Marking.mp4";
import Sawing from "Assets/Video/Sawing.mp4";
import Bruting from "Assets/Video/Bruting.mp4";
import Planning from "Assets/Video/Planning2.mp4";
import Polishing from "Assets/Video/Polishing.mp4";

const videoData = [
  { src: Planning, label: "Planning", id: "planning" },
  { src: Marking, label: "Marking", id: "marking" },
  { src: Sawing, label: "Sawing", id: "sawing" },
  { src: Bruting, label: "Blocking & Bruting", id: "bruting" },
  { src: Polishing, label: "Polishing", id: "polishing" },
];

const GridBanner = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -250; // Adjust offset for better alignment
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="main-content grid-banner bg-dark">
      <section className="lg:h-[calc(100vh-100px)] h-screen grid grid-cols-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="relative text-offwhite text-center lg:border-r-2 border-offwhite last:border-r-0 overflow-hidden cursor-pointer grayscale hover:grayscale-0 transition duration-[2000ms] flex flex-col even:flex-col-reverse items-center md:border-0"
            onClick={() => scrollToSection(video.id)}
          >
            <div className="w-full h-[75vh] overflow-hidden">
              <video
                src={video.src}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-125"
              />
            </div>
            <h2 className="text-3xl uppercase font-poppins font-medium my-14 hidden lg:block">
              {video.label}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default GridBanner;
