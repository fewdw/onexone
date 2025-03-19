import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="bg-black">
      <Header />

      {/* Video Hero Section */}
      <section className="relative bg-black h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/events.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Video Content */}
        <div className="relative w-full mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400"></h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in">
              À l'Équipe One X One, nous organisons régulièrement des événements
              excitants au gymnase pour permettre à notre équipe de compétition
              de briller et offrir à tous nos membres l'opportunité de se
              mesurer aux meilleurs athlètes locaux.
            </p>

            <div className="py-8">
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"></div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed animate-fade-in">
              Notre équipe de compétition voyage également à travers tout le
              Québec pour participer à des tournois et des galas de boxe,
              représentant fièrement nos couleurs et repoussant constamment no
              limites.
            </p>

            <p className="text-xl text-orange-500 font-semibold leading-relaxed animate-fade-in mt-12">
              Rejoignez-nous pour faire partie de cette aventure sportive et
              vivre l'intensité des combats aux côtés de notre équipe.
            </p>
          </div>

          {/* Schedule Section */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-600 mb-8">
              Calendrier des Événements
            </h2>

            <div className="rounded-xl overflow-hidden">
              {/* Mobile iframe */}
              <iframe
                className="sm:hidden w-full"
                src="https://equipeonexone.fliipapp.com/api/web_integration/index/14bfa6bb14875e45bba028a21ed38046"
                frameBorder="0"
                allowFullScreen
                style={{ height: "800px", border: "none" }}
              />

              {/* Desktop iframe */}
              <iframe
                className="hidden sm:block w-full"
                src="https://equipeonexone.fliipapp.com/horaire/14bfa6bb14875e45bba028a21ed38046/DefaultRoom"
                frameBorder="0"
                allowFullScreen
                style={{
                  height: "800px",
                  border: "none",
                  background: "black",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
