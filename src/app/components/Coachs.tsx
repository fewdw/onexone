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
      <h2 className="text-2xl font-bold text-orange-700 md:text-3xl text-center bg-black">
        Notre Équipe
      </h2>

      <div className="flex flex-wrap justify-center py-8 px-4 md:px-8">
        {coaches.map((coach, index) => (
          <a
            key={index}
            className="group relative block bg-black flex-shrink-0 w-full sm:w-[300px] md:w-[300px] lg:w-[350px] xl:w-[300px] mx-2 mb-4"
          >
            <img
              alt={coach.name}
              src={coach.imageUrl}
              className="h-full w-full object-cover object-top opacity-75 transition-opacity group-hover:opacity-50"
              style={{ objectFit: "cover" }}
            />

            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-center p-4 transition-opacity group-hover:bg-opacity-90">
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
