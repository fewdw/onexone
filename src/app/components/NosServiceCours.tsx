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
  return (
    <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Nos Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-orange-500/20"
            >
              <div className="relative h-80">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>

              <div className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-amber-100/90 text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-6 border-l-2 border-orange-600/50 pl-4">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="relative pl-4 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-orange-500 before:rounded-full before:shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                    >
                      <h3 className="text-lg font-semibold text-amber-100">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-amber-100/80 text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-amber-500/10 rounded-full blur-3xl opacity-30" />
      </div>
    </div>
  );
};

export default NosServiceCours;
