import React from "react";
import Image from "next/image";

const courses = [
  {
    title: "Entraînement Libre",
    description:
      "Accédez à notre salle de sport et à tous ses équipements pendant les plages horaires dédiés à l'entraînement libre. Entraînez-vous à votre rythme, selon vos objectifs, avec tout le matériel nécessaire à portée de main.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxfit",
    description:
      "Notre cours signature combine préparation physique et technique de boxe. Travaillez sur les sacs de frappe, les mitaines et divers équipements (poids, cordes, balles slam, etc.), dans une ambiance dynamique et accueillante.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxe HIIT",
    description:
      "Un mélange puissant d'exercices de boxe (70%) et de renforcement musculaire (30%) sans poids. Parfait pour améliorer votre cardio, brûler des calories, et vous préparer pour les sportifs saisonniers.",
    link: "/nos-abonnements",
  },
  {
    title: "Intro Boxe",
    description:
      "Découvrez les bases de la boxe dans ce cours pour débutants, conçu pour les 12 ans et plus. Idéal pour apprendre la technique, rester actif, ou commencer votre parcours en boxe dans une ambiance motivante et dynamique.",
    link: "/nos-abonnements",
  },
  {
    title: "Boxe Compétitive",
    description:
      "Conçu pour les boxeurs expérimentés qui souhaitent participer à des combats et représenter l'équipe One X One. Ce cours est axé sur le sparring, le conditionnement et les techniques avancées pour la compétition.",
    link: "/nos-abonnements",
  },
  {
    title: "Kick Boxing",
    description:
      "Un entraînement complet combinant poings et pieds. Améliorez votre cardio, votre force et votre agilité tout en perfectionnant vos techniques offensives et défensives, seul ou en duo.",
    link: "/nos-abonnements",
  },
  {
    title: "Cours pour Enfants (6 à 11 ans)",
    description:
      "Des cours ludiques et éducatifs pour les plus jeunes ! Nos séances combinent technique de boxe, conditionnement physique et jeux amusants, offrant à vos enfants une expérience enrichissante tout en s'amusant.",
    link: "/nos-abonnements",
  },
  {
    title: "Cours Privés et Semi-Privés",
    description:
      "Profitez d'un coaching personnalisé avec nos cours privés ou semi-privés :\n- Cours privés : Une attention individuelle pour progresser rapidement avec un coach qualifié.\n- Cours semi-privés : Entraînez-vous en petit groupe avec un coach, idéal pour apprendre dans une ambiance sociale et motivante.",
    link: "/nos-abonnements",
  },
];

const NosServiceCours = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-white relative text-center pt-16 pb-16 text-5xl">
          Catégories de Cours
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-700 mt-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center text-center max-w-lg mx-auto lg:max-w-xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src="/gym2.jpg"
                  alt="Boxing Gym"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 text-left">
                  {course.title}
                </h3>
                <p className="text-white mb-6 text-justify">
                  {course.description}
                </p>
                <div className="text-left">
                  <a
                    href={course.link}
                    className="inline-block text-orange-700 hover:text-orange-800 font-semibold uppercase tracking-wide"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NosServiceCours;
