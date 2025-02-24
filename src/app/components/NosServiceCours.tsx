"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Abonnement Libre",
    description: "Accès illimité à la salle de sport.",
    courses: [
      {
        title: "Entraînement Libre",
        description: "Accès à tous les équipements professionnels.",
      },
    ],
    image: "/gallery/5.jpg",
  },
  {
    title: "Cours en Groupe",
    description: "Abonnements avec accès libre inclus.",
    courses: [
      {
        title: "Boxfit",
        description: "Boxe + conditionnement physique intensif.",
      },
      {
        title: "Boxe HIIT",
        description: "Boxe + renforcement musculaire intense.",
      },
      {
        title: "Compétition",
        description: "Préparation pour compétitions de boxe.",
      },
    ],
    image: "/gallery/1.jpg",
  },
  {
    title: "Cours Privé",
    description: "Coaching personnalisé pour tous les niveaux.",
    courses: [
      {
        title: "Séances Privées",
        description: "Programme sur mesure avec un coach dédié.",
      },
      {
        title: "Séances Semi-Privées",
        description: "Petits groupes pour une ambiance motivante.",
      },
    ],
    image: "/gallery/26.jpg",
  },
];

const NosServiceCours = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        ref={containerRef}
        className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10 mix-blend-soft-light">
          <div className="absolute w-[800px] h-[800px] -top-48 -left-48 bg-radial-gradient from-orange-500/30 to-transparent animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] -bottom-48 -right-48 bg-radial-gradient from-red-500/30 to-transparent animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-center mb-20">
            <span className=" bg-clip-text font-extrabold text-5xl md:text-7xl text-orange-600 uppercase tracking-tighter animate-text">
              Nos Services
            </span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Parallax Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Category Header */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex justify-between items-start space-x-4">
                      <div className="max-w-2xl">
                        <h2 className="text-4xl font-black text-white mb-3 drop-shadow-2xl">
                          {category.title}
                        </h2>
                        <p className="text-orange-200/90 text-lg font-medium backdrop-blur-sm">
                          {category.description}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleCategory(index)}
                        className="flex-shrink-0 text-orange-500 hover:text-amber-400 transition-all duration-300
                          h-14 w-14 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm
                          border-2 border-orange-600/50 hover:border-orange-400 hover:scale-110 shadow-xl"
                      >
                        <span className="text-3xl font-bold">
                          {expandedCategory === index ? "−" : "+"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out 
                  ${expandedCategory === index ? "max-h-[500px]" : "max-h-0"}`}
                >
                  <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 border-t-2 border-orange-600/30">
                    <div className="max-w-4xl mx-auto space-y-6">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="animate-on-scroll pl-6 relative before:absolute before:left-0 before:top-4 before:w-3 before:h-3 before:bg-orange-600 before:rounded-full
                                     hover:translate-x-2 transition-transform duration-300"
                        >
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-300/90 leading-relaxed font-medium">
                            {course.description}
                            <span className="ml-2 inline-block text-orange-500">
                              ✦
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosServiceCours;
