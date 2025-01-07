import React from "react";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="px-4 py-8 bg-black pt-16">
      <Header />

      <div className="mt-8">
        {/* Add the fade-in animation class here */}
        <h1 className="text-3xl font-semibold text-center text-orange-700 animate-fade-in">
          Événements et compétitions
        </h1>

        <p className="mt-4 text-lg text-center text-white animate-fade-in">
          Rejoignez-nous pour des cours de boxe dynamiques et adaptés à tous les
          niveaux !
        </p>
        <p className="mt-2 text-lg text-center text-white animate-fade-in">
          Nous organisons régulièrement des événements, des galas et des
          tournois pour nos boxeurs, et nous soutenons la communauté de la boxe
          avec passion.
        </p>

        <div className="mt-16 flex justify-center">
          {/* Mobile iframe */}
          <iframe
            className="sm:hidden"
            src="https://equipeonexone.fliipapp.com/api/web_integration/index/14bfa6bb14875e45bba028a21ed38046"
            frameBorder="0"
            allowFullScreen
            style={{ height: "1700px", width: "100%", border: "none" }}
          />
          {/* Default (larger screen) iframe */}
          <iframe
            className="hidden sm:block"
            src="https://equipeonexone.fliipapp.com/horaire/14bfa6bb14875e45bba028a21ed38046/DefaultRoom"
            frameBorder="0"
            allowFullScreen
            style={{
              height: "1200px",
              width: "80%",
              border: "none",
              background: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
