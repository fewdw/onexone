"use client";
import React, { useEffect, useState } from "react";

const APropos = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("a-propos-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="a-propos-section" className="relative bg-black h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover scale-105 animate-zoom"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="gym2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center h-full px-4 py-16">
        <div
          className={`text-center text-white max-w-4xl transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
            <span className="block mb-4 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              À propos de nous
            </span>
            <span className="text-3xl sm:text-4xl font-medium text-amber-100">
              Plus qu'un gymnase,
              <br />
              une école de boxe.
            </span>
          </h1>

          <div
            className={`mt-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg sm:text-xl text-amber-50 text-justify leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Bienvenue chez{" "}
              <strong className="text-amber-400">Équipe One X One</strong>, une
              communauté passionnée par la boxe et l'apprentissage des
              techniques de ce sport légendaire. Depuis notre création, nous
              nous engageons à offrir un espace accueillant où les membres de
              tous âges et niveaux peuvent découvrir, apprendre et perfectionner
              leur pratique de la boxe dans un cadre stimulant et respectueux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
