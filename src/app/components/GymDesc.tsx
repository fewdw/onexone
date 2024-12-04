import Link from "next/link";
import React from "react";

const GymDesc = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-orange-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Notre Gym
              </h2>

              <p className="text-white/90 sm:mt-4 text-left">
                L'équipe One X One est un centre de boxe complet situé au cœur
                de la Rive-Sud. Reconnue pour son ambiance familiale et son
                esprit de camaraderie, notre centre dispose d'une infrastructure
                moderne : un ring de boxe, des sacs de frappe, un sauna, du
                matériel de cardio-training et des équipements de musculation.
              </p>

              <div className="mt-4 md:mt-8">
                <Link
                  href="/horraire-abonnements"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-orange-600 transition focus:outline-none focus:ring focus:ring-yellow-400 hover:text-orange-700"
                >
                  Horraire et Abonnements
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Modern gym setup with equipment"
              src="gym1.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Gym facility showing advanced equipment"
              src="gym2.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymDesc;
