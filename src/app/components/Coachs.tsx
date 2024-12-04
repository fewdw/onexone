import React from "react";

// JSON data for coaches
const coaches = [
  {
    name: "Junior Petanqui",
    description:
      "Multiple titre de Champion Canadien, médaille aux Jeux panaméricain et Continentaux.",
    imageUrl: "junior.jpg",
  },
  {
    name: "Cedrick Belony",
    description:
      "Multiple titre de champion du Québec et médaille aux jeux panaméricain.",
    imageUrl: "cedrick.jpg",
  },
  {
    name: "David St-Pierre",
    description: "Ancien champion du Québec.",
    imageUrl: "david.jpg",
  },
  {
    name: "Jeremy McNamara",
    description: "Multiple combats de boxe & kick-boxing à son actif",
    imageUrl: "jeremy.jpg",
  },
];

const Coachs = () => {
  return (
    <div className="bg-black">
      <h2 className="text-center text-4xl font-bold tracking-tight text-orange-700 sm:text-5xl lg:pt-16">
        Notre Équipe
      </h2>

      {/* Grid container with responsive column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4 md:px-8">
        {coaches.map((coach, index) => (
          <a
            key={index}
            className="group relative block bg-black flex-shrink-0 sm:w-full sm:h-full"
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
