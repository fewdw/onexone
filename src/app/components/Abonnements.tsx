"use client";
import React from "react";

const memberships = [
  {
    name: "LIBRE",
    description: "Accès libre à toutes nos installations",
    price: 59.99,
    isPopular: false,
  },
  {
    name: "2X/SEMAINE",
    description: "2 cours par semaine avec coachs",
    price: 105.99,
    isPopular: true,
  },
  {
    name: "3X/SEMAINE",
    description: "3 cours intensifs par semaine",
    price: 139.99,
    isPopular: false,
  },
  {
    name: "ILLIMITÉ",
    description: "Accès illimité à tous les cours",
    price: 149.99,
    isPopular: true,
  },
  {
    name: "ENFANTS",
    description: "Programme spécialisé pour enfants",
    price: 94.99,
    isPopular: false,
  },
  {
    name: "PRIVÉ",
    description: "Coaching personnel sur mesure",
    price: 199.99,
    isPopular: true,
  },
  {
    name: "SEMI-PRIVÉ",
    description: "Cours duo personnalisé",
    price: 129.99,
    isPopular: false,
  },
  {
    name: "COMPÉTITION",
    description: "Programme élite compétitif",
    price: 134.99,
    isPopular: true,
  },
];

const Abonnements = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600 bg-clip-text pt-16">
        Nos Abonnements
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 shadow-2xl h-[380px] flex flex-col justify-between transition-all duration-300 hover:scale-105 ${
              membership.isPopular
                ? "bg-gradient-to-b from-gray-800 via-gray-900 to-black border-2 border-orange-600"
                : "bg-gray-900 border border-gray-800"
            } hover:border-orange-500 overflow-hidden group`}
          >
            {membership.isPopular && (
              <div className="absolute top-0 right-0 bg-orange-600 text-black px-6 py-1 text-sm font-bold skew-x-12 shadow-xl">
                POPULAIRE
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-3xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                {membership.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {membership.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="text-5xl font-black mb-2 text-orange-500">
                {membership.price.toFixed(2)}$
              </div>
              <span className="text-sm text-gray-400">/MOIS</span>
            </div>

            <a
              href="https://equipeonexone.fliipapp.com/user/register?language=FR"
              className="w-full py-3 mt-4 bg-orange-600 hover:bg-orange-700 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] shadow-lg border border-orange-500 text-center"
            >
              Rejoindre Maintenant
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abonnements;
