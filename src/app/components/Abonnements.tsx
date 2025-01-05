import React, { useState } from "react";

const memberships = [
  {
    name: "LIBRE",
    description: "Accès libre à toutes nos installations.",
    prices: [
      { duration: "1 MOIS", price: 59.99 },
      { duration: "3 MOIS", price: 49.99 },
      { duration: "6 MOIS", price: 43.33 },
      { duration: "12 MOIS", price: 41.66 },
    ],
    isPopular: false,
  },
  {
    name: "COURS EN GROUPE 2 COURS/SEMAINE",
    description: "Participez à 2 cours par semaine avec nos coachs.",
    prices: [
      { duration: "1 MOIS", price: 119.99 },
      { duration: "3 MOIS", price: 105.99 },
      { duration: "6 MOIS", price: 94.99 },
      { duration: "12 MOIS", price: 84.99 },
    ],
    isPopular: false,
  },
  {
    name: "COURS EN GROUPE ILLIMITÉ",
    description: "Accès illimité à tous nos cours en groupe.",
    prices: [
      { duration: "1 MOIS", price: 209.99 },
      { duration: "3 MOIS", price: 179.99 },
      { duration: "6 MOIS", price: 149.99 },
      { duration: "12 MOIS", price: 129.99 },
    ],
    isPopular: true,
  },
  {
    name: "ENFANT",
    description: "Des cours adaptés pour les enfants.",
    prices: [
      { duration: "1 MOIS", price: 119.99 },
      { duration: "3 MOIS", price: 104.99 },
      { duration: "6 MOIS", price: 94.99 },
      { duration: "12 MOIS", price: 84.99 },
    ],
    isPopular: false,
  },
  {
    name: "COMPETITION",
    description: "Pour ceux qui veulent aller plus loin et performer.",
    prices: [
      { duration: "1 MOIS", price: 205.99 },
      { duration: "3 MOIS", price: 184.99 },
      { duration: "6 MOIS", price: 154.99 },
      { duration: "12 MOIS", price: 134.99 },
    ],
    isPopular: true,
  },
];

const Abonnements = () => {
  const [selectedDuration, setSelectedDuration] = useState("1 MOIS");

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDuration(event.target.value);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600 pt-16">
        Abonnements
      </h2>
      <div className="mb-6 flex justify-center">
        <select
          value={selectedDuration}
          onChange={handleDurationChange}
          className="select select-bordered w-full max-w-xs bg-gray-900 text-white border-gray-600 rounded-md px-4 py-2"
        >
          <option disabled>Choisissez une durée</option>
          <option value="1 MOIS">1 Mois</option>
          <option value="3 MOIS">3 Mois</option>
          <option value="6 MOIS">6 Mois</option>
          <option value="12 MOIS">12 Mois</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {memberships.map((membership, index) => {
          const price = membership.prices.find(
            (p) => p.duration === selectedDuration
          );
          const agreementText =
            selectedDuration !== "1 MOIS"
              ? `**Sur une entente de ${selectedDuration}**`
              : "";

          return (
            <div
              key={index}
              className={`rounded-lg border ${
                membership.isPopular
                  ? "border-orange-600 bg-gradient-to-b from-gray-800 via-gray-900 to-black shadow-md ring-2 ring-orange-600"
                  : "border-gray-700 bg-gray-800 shadow-sm"
              } p-6 sm:p-8 flex flex-col justify-between sm:h-[320px] md:h-auto h-auto transition-transform duration-300`}
            >
              {membership.isPopular && (
                <span className="block mb-3 text-center bg-orange-600 text-black px-3 py-1 text-xs font-semibold rounded">
                  Populaire
                </span>
              )}
              <div className="text-center flex flex-col justify-between h-full">
                <h3 className="text-2xl font-semibold">{membership.name}</h3>
                <p className="mt-2 text-sm text-gray-400 hidden sm:block">
                  {membership.description}
                </p>
                {price ? (
                  <div className="mt-2 sm:mt-4">
                    <span className="text-4xl font-extrabold">
                      {price.price.toFixed(2)}$
                    </span>
                    <span className="text-sm text-gray-400"> / MOIS</span>
                  </div>
                ) : (
                  <p className="mt-2 sm:mt-4 text-gray-500">
                    Pas de prix disponible pour cette durée
                  </p>
                )}
              </div>

              {agreementText && (
                <p className="mt-4 text-sm text-gray-400 text-center">
                  {agreementText}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Abonnements;
