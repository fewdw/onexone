"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const courses = [
  {
    title: "Entraînement Libre",
    description:
      "Accédez à notre salle de sport et à tous ses équipements pendant les plages horaires dédiés à l'entraînement libre. Entraînez-vous à votre rythme, selon vos objectifs, avec tout le matériel nécessaire à portée de main.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxfit",
    description:
      "Notre cours signature combine préparation physique et technique de boxe. Travaillez sur les sacs de frappe, les mitaines et divers équipements (poids, cordes, balles slam, etc.), dans une ambiance dynamique et accueillante.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxe HIIT",
    description:
      "Un mélange puissant d'exercices de boxe (70%) et de renforcement musculaire (30%) sans poids. Parfait pour améliorer votre cardio, brûler des calories, et vous préparer pour les sportifs saisonniers.",
    link: "/nos-abonnements",
  },
  {
    title: "Intro Boxe",
    description:
      "Découvrez les bases de la boxe dans ce cours pour débutants, conçu pour les 12 ans et plus. Idéal pour apprendre la technique, rester actif, ou commencer votre parcours en boxe dans une ambiance motivante et dynamique.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxe Compétitive",
    description:
      "Conçu pour les boxeurs expérimentés qui souhaitent participer à des combats et représenter l'équipe One X One. Ce cours est axé sur le sparring, le conditionnement et les techniques avancées pour la compétition.",
    link: "/nos-abonnements",
  },
  {
    title: "Kick Boxing",
    description:
      "Un entraînement complet combinant poings et pieds. Améliorez votre cardio, votre force et votre agilité tout en perfectionnant vos techniques offensives et défensives, seul ou en duo.",
    link: "/nos-abonnements",
  },
  {
    title: "Cours pour Enfants (6 à 11 ans)",
    description:
      "Des cours ludiques et éducatifs pour les plus jeunes ! Nos séances combinent technique de boxe, conditionnement physique et jeux amusants, offrant à vos enfants une expérience enrichissante tout en s'amusant.",
    link: "/nos-abonnements",
  },
  {
    title: "Cours Privés et Semi-Privés",
    description:
      "Profitez d'un coaching personnalisé avec nos cours privés ou semi-privés :\n- Cours privés : Une attention individuelle pour progresser rapidement avec un coach qualifié.\n- Cours semi-privés : Entraînez-vous en petit groupe avec un coach, idéal pour apprendre dans une ambiance sociale et motivante.",
    link: "/nos-abonnements",
  },
];

const NosServiceCours = () => {
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
    <div ref={containerRef} className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-orange-700 relative text-center pb-16 text-5xl pt-16">
          Catégories de Cours
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              data-index={index}
              className={`animated group relative bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center max-w-lg mx-auto lg:max-w-xl transition transform ${
                inView.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } duration-500`}
            >
              <div className="relative w-full h-56">
                <Image
                  src="/gym2.jpg"
                  alt="Boxing Gym"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-left">
                  {course.title}
                </h3>
                <p className="text-white mb-6 text-justify">
                  {course.description}
                </p>
                <div className="text-left">
                  <a
                    href={course.link}
                    className="inline-block text-orange-700 hover:text-orange-800 font-semibold uppercase tracking-wide"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosServiceCours;
