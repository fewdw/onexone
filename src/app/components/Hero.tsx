"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

const HeroSection = () => {
  const endSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative bg-black h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover scale-105 animate-zoom"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="gym.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative w-full mx-auto max-w-screen-2xl px-4">
        <div className="mx-auto max-w-2xl text-center text-white space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              0 expérience nécessaire,
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              0 équipement requis.
            </span>
          </h1>

          <div className="mt-8 flex justify-center animate-fade-in-up delay-300">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-orange-700 hover:to-amber-600 border-2 border-orange-400/30"
              href="https://equipeonexone.fliipapp.com/user/register?language=FR"
              target="_blank"
            >
              Réservez votre essai gratuit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5 animate-bounce-horizontal"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* End of section marker */}
      <div ref={endSectionRef} className="h-16" />
    </section>
  );
};

export default HeroSection;
