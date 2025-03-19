import React, { useState, useEffect } from "react";

const Apropostext = () => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
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
      <div className="max-w-7xl mx-auto">
        {/* Section: Notre approche */}
        <div className="rounded-lg p-8 mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-6 text-orange-700 text-center">
            Notre approche
          </h3>
          <p className="text-lg text-white max-w-3xl mx-auto text-justify leading-relaxed">
            Chez <b>Équipe One X One</b>, nous croyons que la boxe est bien plus
            qu'un simple entraînement physique: c'est un art martial et une
            discipline de vie. Nous proposons des cours adaptés à tous les
            niveaux, avec un accent particulier sur l'apprentissage des
            techniques de base, le perfectionnement des mouvements et la
            préparation aux compétitions.
          </p>
        </div>

        {/* Section: Pourquoi choisir ? */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-8 text-orange-700">
            Pourquoi choisir ?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg p-6 text-center transform transition-all duration-500">
              <div className="mb-4 text-5xl">
                <i className="fas fa-chalkboard-teacher text-orange-700"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Expert en coaching 👨‍🏫
              </h4>
              <p className="text-white text-justify leading-relaxed">
                Des entraîneurs expérimentés et passionnés vous transmettent les
                techniques et les valeurs fondamentales de la boxe, en vous
                accompagnant à chaque étape de votre progression.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center transform transition-all duration-500">
              <div className="mb-4 text-5xl">
                <i className="fas fa-hand-holding-heart text-orange-700"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Services spécialisés 💆‍♂️
              </h4>
              <p className="text-white text-justify leading-relaxed">
                En complément de la pratique de la boxe, nous offrons des
                services tels que le massage thérapeutique pour favoriser la
                récupération et le bien-être global des athlètes.
              </p>
            </div>
            <div className="rounded-lg p-6 text-center transform transition-all duration-500">
              <div className="mb-4 text-5xl">
                <i className="fas fa-users text-orange-700"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Esprit de communauté 🤝
              </h4>
              <p className="text-white text-justify leading-relaxed">
                Nous cultivons une ambiance familiale où le respect, la
                discipline et la solidarité sont au cœur de nos activités.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Notre vision */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-6 text-orange-700">
            Notre vision
          </h3>
          <p className="text-lg text-white max-w-3xl mx-auto text-justify leading-relaxed">
            Depuis plusieurs années, l'Équipe One X One s'efforce de devenir une
            référence dans l'enseignement et la pratique de la boxe. Notre
            objectif est d'aider chacun de nos membres à développer leurs
            compétences pugilistiques et leur passion pour ce sport unique, tout
            en les accompagnant vers l'atteinte de leurs objectifs personnels.
            <br />
            <br />
            Rejoignez-nous et découvrez comment la boxe peut transformer votre
            vie en vous apprenant la discipline, la technique et la
            persévérance. fois.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apropostext;
