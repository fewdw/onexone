import React from "react";

const classes = [
  {
    name: "Libre",
    description:
      "Entraînez-vous à votre rythme avec un accès complet à notre équipement: sacs de frappe, ring, haltères, tapis roulant, airbike, et plus.",
    imageUrl: "libre.jpg",
  },
  {
    name: "Groupe",
    description:
      "Participez à des sessions de groupe motivantes et apprenez les bases de la boxe avec un coach expert. Brûlez des calories dans une super ambiance!",
    imageUrl: "groupe.jpg",
  },
  {
    name: "Privé",
    description:
      "Profitez d’un coaching personnalisé pour progresser rapidement. En solo ou en petit groupe, les séances sont adaptées à vos objectifs.",
    imageUrl: "prive.jpg",
  },
  {
    name: "Compétition",
    description:
      "Préparez-vous pour le ring avec nos coachs spécialisés. Améliorez vos techniques, votre stratégie et votre mental de compétiteur.",
    imageUrl: "compe.jpg",
  },
];

const Classes = () => {
  return (
    <div className="bg-black pt-8">
      <h2 className="text-center text-4xl font-bold tracking-tight text-orange-700 sm:text-5xl">
        Nos Cours
      </h2>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-4 py-8 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <a
            key={index}
            href=""
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
