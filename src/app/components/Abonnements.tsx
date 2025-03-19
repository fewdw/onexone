"use client";
import React from "react";

const memberships = [
  {
    name: "Libre",
    description: "Accès libre à toutes nos installations",
    options: [
      {
        duration: "1 mois",
        price: 59.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34754",
      },
      {
        duration: "3 mois",
        price: 49.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34755",
      },
      {
        duration: "6 mois",
        price: 43.33,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34756",
      },
      {
        duration: "12 mois",
        price: 41.66,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34757",
      },
    ],
    isPopular: false,
  },
  {
    name: "Cours en Groupe 2x/semaine",
    description: "2 cours par semaine avec coachs",
    options: [
      {
        duration: "1 mois",
        price: 119.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34758",
      },
      {
        duration: "3 mois",
        price: 105.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34759",
      },
      {
        duration: "6 mois",
        price: 94.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34760",
      },
      {
        duration: "12 mois",
        price: 84.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34761",
      },
    ],
    isPopular: true,
  },
  {
    name: "Cours en Groupe 3x/semaine",
    description: "3 cours intensifs par semaine",
    options: [
      {
        duration: "1 mois",
        price: 139.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34765",
      },
      {
        duration: "3 mois",
        price: 124.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34766",
      },
      {
        duration: "6 mois",
        price: 114.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34767",
      },
      {
        duration: "12 mois",
        price: 99.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34768",
      },
    ],
    isPopular: false,
  },
  {
    name: "Cours en Groupe Illimité",
    description: "Accès illimité à tous les cours",
    options: [
      {
        duration: "1 mois",
        price: 209.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34769",
      },
      {
        duration: "3 mois",
        price: 179.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34770",
      },
      {
        duration: "6 mois",
        price: 149.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34771",
      },
      {
        duration: "12 mois",
        price: 129.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34772",
      },
    ],
    isPopular: true,
  },
  {
    name: "Cours Enfants",
    description: "Programme spécialisé pour enfants",
    options: [
      {
        duration: "5 cours",
        price: 89.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34784",
      },
      {
        duration: "10 cours",
        price: 154.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34785",
      },
      {
        duration: "1 mois",
        price: 119.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34786",
      },
      {
        duration: "3 mois",
        price: 104.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34787",
      },
      {
        duration: "6 mois",
        price: 94.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34788",
      },
    ],
    isPopular: false,
  },
  {
    name: "Compétition",
    description: "Programme élite compétitif",
    options: [
      {
        duration: "1 mois",
        price: 204.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34789",
      },
      {
        duration: "3 mois",
        price: 184.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34787",
      },
      {
        duration: "6 mois",
        price: 154.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34791",
      },
      {
        duration: "12 mois",
        price: 134.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34792",
      },
    ],
    isPopular: true,
  },
];

const Abonnements = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600 bg-clip-text pt-16">
        Nos Abonnements
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between transition-all duration-300 hover:scale-105 ${
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

            <div className="space-y-4">
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                {membership.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {membership.description}
              </p>
            </div>

            <div className="space-y-4">
              {membership.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="text-4xl font-black text-orange-500">
                      {option.price.toFixed(2)}$
                    </div>
                    <span className="text-sm text-gray-400">
                      /{option.duration}
                    </span>
                  </div>
                  <a
                    href={option.link}
                    className="py-2 px-4 bg-orange-600 hover:bg-orange-700 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] shadow-lg border border-orange-500 text-center"
                  >
                    Rejoindre
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abonnements;
