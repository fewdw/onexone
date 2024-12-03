import Link from "next/link";
import React from "react";

const GymDesc = () => {
  return (
    <div className="bg-black">
      <section className="overflow-hidden bg-black sm:grid sm:grid-cols-2 sm:items-center pt-8">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-orange-600 md:text-3xl">
              Notre Gym
            </h2>

            <p className="text-gray-500 mt-4 text-left text-xl sm:text-2xl">
              L'équipe One X One est un centre de boxe complet situé au cœur de
              la Rive-Sud. Reconnue pour son ambiance familiale et son esprit de
              camaraderie, notre centre dispose d'une infrastructure moderne :
              un ring de boxe, des sacs de frappe, un sauna, du matériel de
              cardio-training et des équipements de musculation.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                href="/contact"
                className="inline-block rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring "
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="gym banner"
          src="banner2.jpg"
          className="h-full w-full object-cover rounded sm:h-[calc(100%_-_2rem)] sm:self-end md:h-[calc(100%_-_4rem)]"
        />
      </section>
    </div>
  );
};

export default GymDesc;
