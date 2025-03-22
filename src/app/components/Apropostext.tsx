import React, { useState, useEffect } from "react";

const Apropostext = () => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById("apropos-text");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="apropos-text"
      className={`py-16 px-6 sm:px-8 lg:px-12 bg-black text-white transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section: Notre approche */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 md:p-12">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 text-center mb-8">
              Notre Approche
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              Chez{" "}
              <span className="font-semibold text-amber-400">
                Équipe One X One
              </span>
              , nous croyons que la boxe est bien plus qu'un simple entraînement
              physique: c'est un art martial et une discipline de vie. Nous
              proposons des cours adaptés à tous les niveaux, avec un accent
              particulier sur l'apprentissage des techniques de base, le
              perfectionnement des mouvements et la préparation aux
              compétitions.
            </p>
          </div>
        </div>

        {/* Section: Pourquoi choisir ? */}
        <div className="space-y-16">
          <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 text-center">
            Pourquoi Nous Choisir ?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨🏫",
                title: "Expert en Coaching",
                content:
                  "Des entraîneurs expérimentés et passionnés vous transmettent les techniques et les valeurs fondamentales de la boxe, en vous accompagnant à chaque étape de votre progression.",
              },
              {
                icon: "💆‍♂️",
                title: "Services Spécialisés",
                content:
                  "Massage thérapeutique et services complémentaires pour favoriser la récupération et le bien-être global des athlètes.",
              },
              {
                icon: "🤝",
                title: "Esprit Communautaire",
                content:
                  "Ambiance familiale où le respect, la discipline et la solidarité sont au cœur de nos activités.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="mb-6 text-6xl text-center animate-float">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-semibold text-amber-400 text-center mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Notre vision */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 md:p-12">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 text-center mb-8">
              Notre Vision
            </h3>
            <div className="space-y-6 text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
              <p>
                Depuis plusieurs années, l'Équipe One X One s'efforce de devenir
                une référence dans l'enseignement et la pratique de la boxe.
                Notre objectif est d'aider chacun de nos membres à développer
                leurs compétences pugilistiques et leur passion pour ce sport
                unique.
              </p>
              <p className="text-amber-400 font-medium">
                Rejoignez-nous et découvrez comment la boxe peut transformer
                votre vie à travers la discipline, la technique et la
                persévérance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apropostext;
