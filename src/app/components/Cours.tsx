"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const classes = [
  {
    name: "Cours privé",
    imageUrl: "prive.jpg",
  },
  {
    name: "Cours en groupe",
    imageUrl: "groupe.jpg",
  },
  {
    name: "Cours pour enfants",
    imageUrl: "enfant.jpg",
  },
  {
    name: "Accès libre",
    imageUrl: "libre.jpg",
  },
];

const Classes = () => {
  const [inView, setInView] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
    <div ref={containerRef} className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
        Nos Cours
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <div
            key={index}
            data-index={index}
            className={`animated group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${
              inView.has(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } hover:shadow-orange-500/30 hover:-translate-y-2`}
          >
            <div className="relative aspect-square">
              <img
                alt={classItem.name}
                src={classItem.imageUrl}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-500 mb-2 transition-colors group-hover:text-amber-400">
                {classItem.name}
              </h3>
              <div className="h-1 w-12 bg-orange-600 mx-auto mb-4 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/nos-services"
          className="animated inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/30 border border-orange-500"
          data-index={classes.length}
        >
          <span className="mr-2">En savoir plus</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Classes;
