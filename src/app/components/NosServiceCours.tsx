"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Abonnement Libre",
    description: "Accès illimité à la salle d'entraînement de boxe.",
    courses: [
      {
        title: "Entraînement libre",
        description:
          "Pratique autonome des techniques de boxe et perfectionnement des mouvements avec accès à tous les équipements professionnels. ✦",
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
        description:
          "Apprentissage des techniques de boxe combinées à des exercices dynamiques pour améliorer l'endurance et la coordination. ✦",
      },
      {
        title: "Boxe HIIT",
        description:
          "Techniques de boxe intégrées à des enchaînements rapides pour perfectionner la vitesse et la précision des mouvements. ✦",
      },
      {
        title: "Concours",
        description:
          "Préparation technique et tactique pour les compétitions de boxe, avec mise en situation et entraînements spécialisés. ✦",
      },
    ],
    image: "/gallery/1.jpg",
  },
  {
    title: "Cours Privé",
    description:
      "Coaching personnalisé pour tous les niveaux, axé sur les techniques de boxe.",
    courses: [
      {
        title: "Séances privées",
        description:
          "Accompagnement individuel pour perfectionner les techniques de boxe et développer des compétences tactiques avec un coach dédié. ✦",
      },
      {
        title: "Séances semi-privées",
        description:
          "Entraînement technique en petits groupes pour une ambiance motivante et un suivi personnalisé. ✦",
      },
    ],
    image: "/gallery/26.jpg",
  },
  {
    title: "Cours pour Enfants",
    description: "Initiation à la boxe pour les jeunes de 6 à 11 ans.",
    courses: [
      {
        title: "Boxe Ludique",
        description:
          "Séances éducatives pour découvrir les bases de la boxe, développer coordination, discipline et confiance en soi dans un environnement sécurisé. ✦",
      },
    ],
    image: "/gallery/10.jpg",
  },
];

const NosServiceCours = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        ref={containerRef}
        className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full"
      >
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-center mb-16">
            <span className="bg-clip-text font-extrabold text-5xl md:text-7xl text-orange-600 uppercase tracking-tighter">
              Nos Services
            </span>
          </h1>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl shadow-2xl flex flex-col"
                style={{ minHeight: `${300 + category.courses.length * 80}px` }}
              >
                {/* Image Section */}
                <div className="relative h-64 flex-shrink-0">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 relative">
                  <div className="mb-4 flex justify-between items-start min-h-[120px]">
                    <div className="flex-1">
                      <h2 className="text-2xl font-black text-white line-clamp-2 mb-2">
                        {category.title}
                      </h2>
                      <p className="text-orange-200/90 text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Always visible courses list */}
                  <div className="flex-1 overflow-y-auto pr-2">
                    <div className="space-y-5">
                      {category.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="pl-5 relative before:absolute before:left-0 before:top-3 
                            before:w-2 before:h-2 before:bg-orange-600 before:rounded-full"
                        >
                          <h3 className="text-lg font-bold text-orange-400 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-gray-300/90 text-sm leading-relaxed">
                            {course.description}
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
