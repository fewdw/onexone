"use client";
import Link from "next/link";
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
    <section ref={containerRef} className="pt-10">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            data-index="0"
            className={`animated transform transition-all duration-500 ${
              inView.has(0)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } bg-orange-700 p-8 md:p-12 lg:px-16 lg:py-24`}
          >
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Vision
              </h2>

              <p className="text-white/90 sm:mt-4 text-left">
                Au One X One, nous croyons que la boxe transforme des vies.
                Notre mission est d'offrir un espace inclusif où chacun, quel
                que soit son âge ou son niveau, peut se dépasser, gagner en
                confiance et améliorer son bien-être physique et mental.
                Rejoignez une communauté passionnée et découvrez la puissance de
                la boxe dans un environnement convivial et motivant.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="https://equipeonexone.fliipapp.com/horaire?cal=1&language=FR"
                  target="_blank"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-orange-700 transition focus:outline-none focus:ring focus:ring-yellow-400 hover:text-orange-800"
                >
                  Calendrier
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              data-index="1"
              alt="Modern gym setup with equipment"
              src="vision2.jpg"
              className={`animated h-40 w-full object-cover sm:h-56 md:h-full transform transition-all duration-500 ${
                inView.has(1)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            />

            <img
              data-index="2"
              alt="Gym facility showing advanced equipment"
              src="vision1.jpg"
              className={`animated h-40 w-full object-cover sm:h-56 md:h-full transform transition-all duration-500 ${
                inView.has(2)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymDesc;
