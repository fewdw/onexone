import React from "react";

const Apropostext = () => {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section: À propos de nous */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-4 text-primary">
            À propos de nous
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Bienvenue chez{" "}
            <span className="font-semibold">Équipe One X One</span>, plus qu'un
            simple gymnase, une communauté passionnée par la boxe, la remise en
            forme et le dépassement de soi. Depuis notre création, nous nous
            engageons à offrir un espace accueillant où les membres de tous âges
            et niveaux peuvent se développer physiquement et mentalement, grâce
            à la puissance de la boxe.
          </p>
        </div>

        {/* Section: Notre approche */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-4 text-primary text-center">
            Notre approche
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Chez <span className="font-semibold">Équipe One X One</span>, nous
            croyons que la boxe est bien plus qu'un sport : c'est un mode de
            vie. Nous proposons des cours adaptés à tous les objectifs, qu'il
            s'agisse de se mettre en forme, d'apprendre les techniques de base
            ou de performer en compétition. Peu importe vos objectifs, notre
            approche vous aide à progresser à votre rythme et à dépasser vos
            limites.
          </p>
        </div>

        {/* Section: Pourquoi choisir ? */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-4 text-primary">
            Pourquoi choisir ?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4 text-5xl">
                <i className="fas fa-chalkboard-teacher text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Coaching expert
              </h4>
              <p className="text-gray-200">
                Des entraîneurs expérimentés et dévoués qui vous accompagnent à
                chaque étape, en s'assurant que vous obtenez le meilleur de
                vous-même.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4 text-5xl">
                <i className="fas fa-hand-holding-heart text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Services complets
              </h4>
              <p className="text-gray-200">
                En plus de la boxe, nous offrons des services comme le massage
                thérapeutique et l'accompagnement physique pour un bien-être
                global.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="mb-4 text-5xl">
                <i className="fas fa-users text-primary"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Esprit de communauté
              </h4>
              <p className="text-gray-200">
                Nous sommes fiers d'avoir une ambiance familiale où le respect
                et le soutien mutuel sont au cœur de nos activités.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Notre vision */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold sm:text-5xl mb-4 text-primary">
            Notre vision
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Depuis plusieurs années, l'Équipe One X One s'efforce de devenir une
            référence dans la boxe et la remise en forme. Notre objectif est
            d'aider chacun de nos membres à atteindre son plein potentiel, qu'il
            s'agisse de renforcer sa santé, d'apprendre une nouvelle discipline
            ou de se surpasser dans un environnement motivant. Rejoignez -nous
            et découvrez comment la boxe peut transformer votre vie, un tour à
            la fois.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apropostext;
