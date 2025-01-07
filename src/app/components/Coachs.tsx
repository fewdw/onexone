import React from "react";

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
  return (
    <div className="bg-black">
      <h2 className="text-center text-4xl font-bold tracking-tight text-orange-700 sm:text-5xl">
        Notre Équipe
      </h2>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-4 py-8 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {coaches.map((coach, index) => (
          <a
            key={index}
            className="group relative block bg-black flex-shrink-0 sm:w-full h-full"
          >
            <img
              alt={coach.name}
              src={coach.imageUrl}
              className="h-full w-full object-cover object-top opacity-75 transition-opacity"
              style={{ objectFit: "cover" }}
            />

            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-center p-4 transition-opacity">
              <p className="text-sm font-large uppercase tracking-widest text-orange-700">
                {coach.name}
              </p>
              <p className="text-sm text-white mt-1">{coach.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Coachs;
