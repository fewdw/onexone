"use client";
import React from "react";

const APropos = () => {
  return (
    <section className="relative bg-black h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden min-h-screen">
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
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white mt-24 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            À propos de nous.
            <strong className="font-extrabold text-orange-700 sm:block">
              Plus qu'une salle de sport.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Bienvenue chez Équipe One X One, plus qu'un simple gymnase, une
            communauté passionnée par la boxe, la remise en forme et le
            dépassement de soi...
          </p>
        </div>
      </div>
    </section>
  );
};

export default APropos;
