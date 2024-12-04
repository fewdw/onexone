import React from "react";

// JSON data for classes
const classes = [
  {
    name: "Libre",
    description: "Entraînements individuels pour progresser à votre rythme.",
    imageUrl: "libre.jpg",
  },
  {
    name: "Groupe",
    description: "Séances collectives pour renforcer l'esprit d'équipe.",
    imageUrl: "groupe.jpg",
  },
  {
    name: "Privé",
    description: "Séances personnalisées pour un entraînement sur mesure.",
    imageUrl: "prive.jpg",
  },
  {
    name: "Compétition",
    description:
      "Préparez-vous pour des défis et des compétitions de haut niveau.",
    imageUrl: "compe.jpg",
  },
];

const Classes = () => {
  return (
    <div className="bg-black pt-16">
      <h2 className="text-center text-4xl font-bold tracking-tight text-orange-700 sm:text-5xl lg:pt-16">
        Nos Cours
      </h2>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-4 py-8 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <a
            key={index}
            href="#"
            className="group block bg-black flex-shrink-0 rounded-lg overflow-hidden shadow-xl transition"
          >
            <img
              alt={classItem.name}
              src={classItem.imageUrl}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <div className="p-4">
              <h3 className="mt-4 text-lg font-bold text-orange-700 sm:text-xl">
                {classItem.name}
              </h3>
              <p className="mt-2 text-sm text-white">{classItem.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Classes;
