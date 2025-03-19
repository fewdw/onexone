"use client";
import React from "react";

const APropos = () => {
  return (
    <section className="relative bg-black h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="gym2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay */}
      </div>

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center h-full px-4 py-16">
        <div className="text-center text-white max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            À propos de nous.
            <br />
            <strong className="font-extrabold text-orange-700 sm:block">
              Plus qu'un gymnase, une école de boxe.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl text-justify px-4">
            Bienvenue chez <b>Équipe One X One</b>, une communauté passionnée
            par la boxe et l'apprentissage des techniques de ce sport
            légendaire. Depuis notre création, nous nous engageons à offrir un
            espace accueillant où les membres de tous âges et niveaux peuvent
            découvrir, apprendre et perfectionner leur pratique de la boxe dans
            un cadre stimulant et respectueux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default APropos;
