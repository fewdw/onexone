import Link from "next/link";
import React from "react";

const GymDesc = () => {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-orange-700 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Vision
              </h2>

              <p className="text-white/90 sm:mt-4 text-left">
                Au One X One, nous croyons que la boxe transforme des vies.
                Notre mission est d'offrir un espace inclusif où chacun, quel
                que soit son âge ou son niveau, peut se dépasser, gagner en
                confiance et améliorer son bien-être physique et mental.
                Rejoignez une communauté passionnée et découvrez la puissance de
                la boxe dans un environnement convivial et motivant
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="https://equipeonexone.fliipapp.com/horaire?cal=1&language=FR"
                  target="_blank"
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-orange-700 transition focus:outline-none focus:ring focus:ring-yellow-400 hover:text-orange-800"
                >
                  Calendrier
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Modern gym setup with equipment"
              src="vision2.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Gym facility showing advanced equipment"
              src="vision1.jpg"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymDesc;
