import React from "react";
import Header from "../components/Header";
import APropos from "../components/APropos";

const page = () => {
  return (
    <div>
      <Header />
      <APropos />
      {/* Additional Sections */}
      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Notre approche</h3>
        <p className="mt-4 text-lg text-gray-600">
          Chez Équipe One X One, nous croyons que la boxe est bien plus qu'un
          sport : c'est un mode de vie. Nous proposons des cours adaptés à tous
          les objectifs...
        </p>
      </div>

      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Pourquoi choisir ?</h3>
        <p className="mt-4 text-lg text-gray-600">
          Coaching expert : Des entraîneurs expérimentés et dévoués qui vous
          accompagnent à chaque étape...
        </p>
      </div>

      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl font-semibold">Notre vision</h3>
        <p className="mt-4 text-lg text-gray-600">
          Depuis plusieurs années, l'Équipe One X One s'efforce de devenir une
          référence dans la boxe et la remise en forme...
        </p>
      </div>
    </div>
  );
};

export default page;
