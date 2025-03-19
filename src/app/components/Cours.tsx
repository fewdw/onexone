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
    imageUrl: "enfant.jpg", // Assuming a new image for this class
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
    <div ref={containerRef} className="bg-black pt-8">
      <div className="font-bold text-orange-700 relative text-center pb-4 text-5xl">
        Nos Cours
      </div>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-6 py-8 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <div
            key={index}
            data-index={index}
            className={`animated group relative block bg-black rounded-lg overflow-hidden shadow-lg transition transform ${
              inView.has(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            } duration-500`}
          >
            <img
              alt={classItem.name}
              src={classItem.imageUrl}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <div className="p-4 flex flex-col items-center">
              <h3 className="mt-4 text-lg font-bold text-orange-700 sm:text-xl text-center">
                {classItem.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div
        data-index={classes.length}
        className={`animated flex justify-center transition transform ${
          inView.has(classes.length)
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        } duration-500`}
      >
        <Link
          href="/nos-services"
          className="px-6 py-3 text-lg font-semibold text-white bg-orange-700 rounded-md shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default Classes;
