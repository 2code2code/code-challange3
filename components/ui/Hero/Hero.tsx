import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="w-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-amber-200 to-yellow-400 py-16 shadow-lg md:py-20 xl:py-48">
      {/* <Image
        width="1920"
        height="1000"
        src="https://res.cloudinary.com/dma4fosaj/video/upload/c_scale,w_1920,h_1000/e_loop/q_30/fl_animated,fl_awebp/earth.webp"
        alt="Description of my image"
        unoptimized
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      /> */}

      <div className="absolute inset-0 mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 className="mb-4 text-center font-extrabold tracking-tight text-4xl lg:text-7xl">
          Zeus Chain
        </h1>
        <h2 className="mb-8 text-center text-xl font-bold text-indigo-300 sm:text-1xl md:mb-12 md:text-4xl">
          Empowering Decentralized Innovation
        </h2>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a
            href="/learn-more"
            className="group relative inline-block focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-400 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest group-active:text-opacity-75">
              Learn More
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
