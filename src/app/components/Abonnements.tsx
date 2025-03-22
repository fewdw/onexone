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
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
          Nos Abonnements
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                membership.isPopular
                  ? "bg-gradient-to-b from-gray-900 via-black to-gray-900 border-2 border-orange-500/40 hover:border-orange-500"
                  : "bg-gray-900/50 border border-gray-800 hover:border-orange-500/40"
              }`}
            >
              {membership.isPopular && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                  LE PLUS POPULAIRE
                </div>
              )}

              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
                    {membership.name}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    {membership.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {membership.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="flex items-center justify-between p-4 bg-gray-800/20 rounded-xl"
                    >
                      <div>
                        <div className="text-3xl font-bold text-amber-400">
                          {option.price.toFixed(2)}$
                        </div>
                        <span className="text-sm text-gray-400">
                          /{option.duration}
                        </span>
                      </div>
                      <a
                        href={option.link}
                        className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                      >
                        Rejoindre
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Abonnements;
