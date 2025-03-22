import React, { useState, useEffect } from "react";

const coaches = [
  {
    name: "Junior Petanqui",
    description:
      "6x champion canadien, médaillé d'argent aux Jeux continentaux, médaille de bronze aux Jeux panaméricains.",
    imageUrl: "junior.jpg",
  },
  {
    name: "Cedric Belony",
    description:
      "Entraîneur, participant aux Jeux Olympiques 2024, médaille de bronze aux Jeux panaméricains.",
    imageUrl: "cedrick.jpg",
  },
  {
    name: "David St-Pierre",
    description: "Entraîneur, multiple champion du Québec.",
    imageUrl: "david.jpg",
  },
  {
    name: "Jeremy McNamara",
    description: "Entraîneur de kick-boxing.",
    imageUrl: "jeremy.jpg",
  },
  {
    name: "Jason St-Charles",
    description: "Entraîneur.",
    imageUrl: "arianne.jpg",
  },
  {
    name: "Aryanne Boileau",
    description: "Réceptionniste.",
    imageUrl: "arianne.jpg",
  },
];

const Coachs = () => {
  const [inView, setInView] = useState<boolean[]>(
    new Array(coaches.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
              10
            );
            setInView((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".coach-card");
    elements.forEach((element) => observer.observe(element));

    return () => elements.forEach((element) => observer.unobserve(element));
  }, []);

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500 mb-12">
        Notre Équipe
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {coaches.map((coach, index) => (
          <div
            key={index}
            data-index={index}
            className={`coach-card relative group aspect-square overflow-hidden rounded-2xl transition-transform duration-500 ${
              inView[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } hover:-translate-y-2`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            <img
              alt={coach.name}
              src={coach.imageUrl}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-center space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                {coach.name}
              </h3>
              <p className="text-gray-300 text-sm leading-tight">
                {coach.description}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 border-2 border-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coachs;
