import React from "react";

// Import all images dynamically
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const images = importAll(
  require.context("Assets/Image/Shows", false, /\.(jpg|jpeg)$/)
);

const EventShows = () => {
  return (
    <section className="bg-gray-100 overflow-hidden relative sm:h-screen h-[70vh]">
      <div className="flex justify-end h-full">
        <div className="w-full h-full overflow-hidden p-1">
          {/* Scrolling Container */}
          <div className="flex flex-col gap-5 animate-scroll hover:[animation-play-state:paused]">
            {[...images, ...images].map((x, index) => (
              <div
                key={index}
                className={`p-0 text-left ${
                  index % 2 === 0 ? "" : "ml-auto text-right"
                }`}
              >
                <img
                  src={x}
                  alt={`Show ${(index % images.length) + 1}`}
                  className={`w-full object-cover ${
                    index % 2 === 0 ? "" : "ml-auto"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default EventShows;
