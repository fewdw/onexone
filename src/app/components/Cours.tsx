"use client";

import Link from "next/link";
import React from "react";

const classes = [
  {
    name: "Cours privé",
    imageUrl: "prive.jpg",
  },
  {
    name: "Cours en groupe",
    imageUrl: "groupe.jpg",
  },
  {
    name: "Cours pour enfants",
    imageUrl: "enfant.jpg", // Assuming a new image for this class
  },
  {
    name: "Cours libre",
    imageUrl: "libre.jpg",
  },
];

const Classes = () => {
  return (
    <div className="bg-black pt-8">
      <h2 className="text-center text-4xl font-bold tracking-tight text-orange-700 sm:text-5xl pb-8">
        Nos Cours
      </h2>

      {/* Grid container for responsive layout */}
      <div className="grid grid-cols-1 gap-6 py-8 px-4 md:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="group relative block bg-black rounded-lg overflow-hidden shadow-lg transition transform"
          >
            <img
              alt={classItem.name}
              src={classItem.imageUrl}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <div className="p-4 flex flex-col items-center">
              <h3 className="mt-4 text-lg font-bold text-orange-700 sm:text-xl text-center">
                {classItem.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/nos-services"
          className="px-6 py-3 text-lg font-semibold text-white bg-orange-700 rounded-md shadow hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default Classes;
