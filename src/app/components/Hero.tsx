"use client";
import Link from "next/link";
import React, { useRef } from "react";

const HeroSection = () => {
  const endSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative bg-black h-screen flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="gym.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content Overlay */}
      <div className="relative w-full mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-xl text-center text-white">
          <h1 className="text-3xl font-extrabold sm:text-5xl mb-6">
            0 expérience nécessaire,
            <strong className="font-extrabold text-orange-700 block sm:block">
              0 équipement requis.
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-orange-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              href="https://equipeonexone.fliipapp.com/user/register?language=FR"
              target="_blank"
            >
              Réservez votre essai gratuit
            </a>
          </div>
        </div>
      </div>

      {/* End of section marker */}
      <div ref={endSectionRef} className="h-16"></div>
    </section>
  );
};

export default HeroSection;
