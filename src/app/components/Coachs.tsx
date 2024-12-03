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
    description:
      "Réalisation: Multiple combats de boxe & kick-boxing à son actif",
    imageUrl: "jeremy.jpg",
  },
];

const Coachs = () => {
  return (
    <div className="bg-black">
      <h2 className="text-2xl font-bold text-orange-600 md:text-3xl text-center bg-black pt-16">
        Notre Équipe
      </h2>

      <div className="flex flex-wrap justify-center py-8 px-4 md:px-8">
        {coaches.map((coach, index) => (
          <a
            key={index}
            className="group relative block bg-black flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mx-2 mb-4"
          >
            <img
              alt={coach.name}
              src={coach.imageUrl}
              className="absolute inset-0 h-full w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-50"
              style={{ objectFit: "cover" }}
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-large uppercase tracking-widest text-orange-700">
                {coach.name}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{coach.description}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Coachs;
