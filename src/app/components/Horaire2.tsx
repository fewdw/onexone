import React from "react";

const Horaire2 = () => {
  return (
    <div>
      <section className="bg-black">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center pt-16">
            <h2 className="text-2xl font-bold text-orange-600 md:text-3xl">
              Voir L'horaire de cette semaine
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-xl flex justify-center">
            <a
              href="https://equipeonexone.fliipapp.com/horaire?cal=1"
              target="_blank"
              className="group flex items-center justify-center gap-2 rounded-md px-5 py-3 text-white transition bg-orange-600 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <span className="text-sm font-medium"> Clickez ici!</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Horaire2;
