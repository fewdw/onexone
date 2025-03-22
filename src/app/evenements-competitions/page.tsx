import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <div className="bg-black">
      <Header />

      {/* Video Hero Section */}
      <section className="relative bg-black h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover scale-105 animate-zoom"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/events.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Video Content */}
        <div className="relative w-full mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center text-white space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Événements & Compétitions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="animate-fade-in-up">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                À l'Équipe One X One, nous organisons régulièrement des
                événements excitants au gymnase pour permettre à notre équipe de
                compétition de briller et offrir à tous nos membres
                l'opportunité de se mesurer aux meilleurs athlètes locaux.
              </p>
            </div>

            <div className="flex justify-center animate-fade-in-up delay-300">
              <div className="h-1 w-32 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full animate-pulse" />
            </div>

            <div className="animate-fade-in-up delay-500">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Notre équipe de compétition voyage à travers le Québec pour
                participer à des tournois et galas de boxe, représentant
                fièrement nos couleurs tout en repoussant nos limites.
              </p>
            </div>

            <div className="text-center mt-16 animate-fade-in-up delay-700">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                Rejoignez-nous pour vivre l'intensité des combats aux côtés de
                notre équipe
              </p>
              <a
                href="/contact"
                className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Nous Contacter
              </a>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mt-24 animate-fade-in-up delay-1000">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800">
              <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
                Calendrier des Événements
              </h2>

              <div className="relative rounded-xl overflow-hidden border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none" />
                <iframe
                  className="w-full h-[800px]"
                  src="https://equipeonexone.fliipapp.com/horaire/14bfa6bb14875e45bba028a21ed38046/DefaultRoom"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
