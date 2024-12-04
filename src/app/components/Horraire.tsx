import React from "react";

const Horraire = () => {
  const schedule = {
    Lundi: [
      { time: "15H", activity: "LIBRE" },
      { time: "16H", activity: "LIBRE" },
      { time: "17H", activity: "LIBRE" },
      { time: "18H", activity: "(GROUPE) BOXE HIIT" },
      { time: "19H", activity: "(GROUPE) INTRO BOXE" },
      { time: "20H", activity: "(GROUPE) COMPÉTITION" },
    ],
    Mardi: [
      { time: "15H", activity: "LIBRE" },
      { time: "16H", activity: "LIBRE" },
      { time: "17H", activity: "LIBRE" },
      { time: "18H", activity: "(GROUPE) BOXE FIT" },
      { time: "19H", activity: "(GROUPE) KICK BOXING" },
      { time: "20H", activity: "(GROUPE) COMPÉTITION" },
    ],
    Mercredi: [
      { time: "15H", activity: "LIBRE" },
      { time: "16H", activity: "LIBRE" },
      { time: "17H", activity: "LIBRE" },
      { time: "18H", activity: "(GROUPE) KID-BOXING" },
      { time: "19H", activity: "(GROUPE) INTRO BOXE" },
      { time: "20H", activity: "(GROUPE) COMPÉTITION" },
    ],
    Jeudi: [
      { time: "15H", activity: "LIBRE" },
      { time: "16H", activity: "LIBRE" },
      { time: "17H", activity: "LIBRE" },
      { time: "18H", activity: "(GROUPE) BOXE TOUT NIVEAU" },
      { time: "19H", activity: "(GROUPE) KICK BOXING" },
      { time: "20H", activity: "(GROUPE) COMPÉTITION" },
    ],
    Vendredi: [
      { time: "15H", activity: "LIBRE" },
      { time: "16H", activity: "LIBRE" },
      { time: "17H", activity: "LIBRE" },
      { time: "18H", activity: "(GROUPE) INTRO BOXE" },
      { time: "19H", activity: "LIBRE" },
    ],
    Samedi: [
      { time: "10H", activity: "(GROUPE) KID-BOXING" },
      { time: "11H", activity: "(GROUPE) BOXE HIIT" },
      { time: "12H", activity: "(GROUPE) COMPÉTITION" },
      { time: "13H", activity: "LIBRE" },
      { time: "14H", activity: "LIBRE" },
    ],
    Dimanche: [
      { time: "10H", activity: "LIBRE" },
      { time: "11H", activity: "LIBRE" },
      { time: "12H", activity: "LIBRE" },
      { time: "13H", activity: "(GROUPE) KICK-BOXING" },
      { time: "14H", activity: "LIBRE" },
    ],
  };

  return (
    <div>
      <section className="overflow-hidden bg-black pt-24">
        <div className="bg-orange-600 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="font-bold text-white text-4xl text-center mb-6">
            L'horaire
          </h2>
          <p className="text-center text-lg text-white">
            <span className="block mb-2">Lundi au Jeudi: 15H - 21H</span>
            <span className="block mb-2">Vendredi: 15H - 20H</span>
            <span className="block">Samedi: 10H - 15H</span>
          </p>
        </div>

        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(schedule).map(([day, activities]) => (
              <div
                key={day}
                className="bg-black shadow-lg rounded-lg p-6 border-t-4 border-orange-700"
              >
                <h3 className="text-lg font-semibold text-white capitalize mb-4">
                  {day}
                </h3>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-sm text-gray-300"
                    >
                      <span className="text-orange-400 font-medium">
                        {activity.time}
                      </span>
                      <span className="font-medium text-white">
                        {activity.activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Horraire;
