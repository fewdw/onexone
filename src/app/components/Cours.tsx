import React from "react";

// JSON data for classes
const classes = [
  {
    name: "Libre",
    description:
      "Explorez notre espace gym à votre rythme! Accédez à une variété d'équipements, notamment des sacs de frappe, un ring, des haltères, un tapis roulant, un airbike, et bien plus encore. Idéal pour ceux qui veulent se concentrer sur leurs propres objectifs.",
    imageUrl: "libre.jpg",
  },
  {
    name: "Groupe",
    description:
      "Rejoignez nos séances dynamiques en groupe dirigées par un coach expert! Apprenez les bases de la boxe tout en brûlant des calories et en renforçant votre endurance dans une ambiance motivante et conviviale.",
    imageUrl: "groupe.jpg",
  },
  {
    name: "Privé",
    description:
      "Bénéficiez d'un entraînement sur mesure avec nos coaches experts. Que ce soit en tête-à-tête ou en petit groupe, nous adaptons chaque session à vos besoins pour des progrès rapides et efficaces.",
    imageUrl: "prive.jpg",
  },
  {
    name: "Compétition",
    description:
      "Prenez la boxe au sérieux et préparez-vous à briller dans le ring. Entraînez-vous avec nos coachs spécialisés pour développer vos compétences, votre stratégie et votre mental de gagnant.",
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
