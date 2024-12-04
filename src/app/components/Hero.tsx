"use client";
import Link from "next/link";
import React, { useRef } from "react";

const HeroSection = () => {
  // Create a ref to target the end of the section
  const endSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToEnd = () => {
    if (endSectionRef.current) {
      if (window.innerWidth <= 768) {
        // On mobile, scroll further down
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else {
        // On larger screens, scroll to the section
        endSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative bg-gray-50 h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden min-h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content Overlay */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white mt-24 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            ONEXONE
            <strong className="font-extrabold text-orange-700 block sm:block">
              Plus qu'une salle de sport
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Débutant ou expert, nos cours accueillent tous les âges et niveaux.
            Vivez une expérience de boxe unique avec notre équipe dédiée.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-orange-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-orange-800 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              href="/contact"
            >
              S'inscrire
            </a>

            <button
              className="block w-full rounded px-12 py-3 text-sm font-medium bg-white text-orange-600 shadow hover:bg-gray-100 hover:text-orange-700 focus:outline-none focus:ring active:bg-gray-200 sm:w-auto"
              onClick={scrollToEnd}
            >
              Plus D'Infos
            </button>
          </div>
        </div>
      </div>

      {/* End of section marker */}
      <div ref={endSectionRef} className="h-16"></div>
    </section>
  );
};

export default HeroSection;
