"use client";
import React, { useEffect, useState, useRef } from "react";

const GymDesc = () => {
  const [inView, setInView] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          if (entry.isIntersecting && !inView.has(index)) {
            setInView((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const elements = containerRef.current?.querySelectorAll(".animated");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, [inView]);

  return (
    <section ref={containerRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Text Content */}
          <div
            data-index="0"
            className={`animated relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-amber-500 p-8 md:p-12 lg:px-16 lg:py-20 transition-all duration-500 ${
              inView.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl mb-6 bg-clip-text drop-shadow-lg">
                Notre Vision
              </h2>

              <p className="text-lg text-white/90 mb-8 leading-relaxed text-justify">
                Au One X One, nous croyons que la boxe transforme des vies.
                Notre mission est d'offrir un espace inclusif où chacun, quel
                que soit son âge ou son niveau, peut se dépasser, gagner en
                confiance et améliorer son bien-être physique et mental.
                Rejoignez une communauté passionnée et découvrez la puissance de
                la boxe dans un environnement convivial et motivant.
              </p>

              <a
                href="https://equipeonexone.fliipapp.com/horaire?cal=1&language=FR"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-orange-600 transition-all duration-300 hover:bg-gray-100 hover:text-orange-700 hover:scale-105 shadow-lg"
              >
                Voir le calendrier
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 011 1v1h4a1 1 0 110 2H7v1h4a1 1 0 110 2H7v1h4a1 1 0 110 2H7v1h4a1 1 0 110 2H7a1 1 0 01-1-1V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div
              data-index="1"
              className={`animated relative overflow-hidden rounded-2xl transition-transform duration-500 ${
                inView.has(1)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <img
                alt="Modern gym setup with equipment"
                src="acceuil.jpg"
                className="h-full w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>

            <div
              data-index="2"
              className={`animated relative overflow-hidden rounded-2xl transition-transform duration-500 ${
                inView.has(2)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <img
                alt="Gym facility showing advanced equipment"
                src="vision1.jpg"
                className="h-full w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymDesc;
