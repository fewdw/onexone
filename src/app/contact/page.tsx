import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  // Get the current day of the week
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  // Adjust the day index, because getDay() starts from Sunday (0)
  const currentDay = (new Date().getDay() + 6) % 7; // Adjust so Monday is 0, Sunday is 6

  return (
    <div className="bg-black text-white pt-16">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-0">
          Contactez-Nous
        </h2>

        <section className="bg-black">
          <div className="p-8 md:p-12 lg:px-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-2xl font-bold text-white md:text-2xl mt-1 text-left">
                Vous avez des questions? Contactez-nous dès maintenant!
                Appelez-nous, envoyez-nous un message sur nos réseaux sociaux,
                ou venez visiter notre salle de sport pour en savoir plus.
              </h2>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <div
          id="contact-info"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Nos Coordonnées
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-lg mr-2 text-gray-300">📍</span>
                <span className="text-lg">{`5556 Grande Allée, Saint-Hubert, QC J3Y 1A8`}</span>
              </li>
              <li className="flex items-start">
                <div className="text-lg">
                  {daysOfWeek.map((day, index) => (
                    <p key={index}>
                      <span
                        className={
                          index === currentDay
                            ? "text-orange-500 font-bold"
                            : "text-white"
                        }
                      >
                        {day}:
                      </span>{" "}
                      {index === 0 || index === 1 || index === 2 || index === 3
                        ? "15h - 21h"
                        : index === 4
                        ? "15h - 20h"
                        : "10h - 15h"}
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.instagram.com/equipe_onexoneboxe/"
                  className="text-lg text-gray-400 hover:text-orange-600 inline-block mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="ig.png"
                    alt="Instagram"
                    className="w-6 h-6 mr-2 inline-block"
                  />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/equipeonexonex"
                  className="text-lg text-gray-400 hover:text-orange-600 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="fb.png"
                    alt="Facebook"
                    className="w-6 h-6 mr-2 inline-block"
                  />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map Embed */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Où nous trouver
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.397553838832!2d-73.44700518750551!3d45.47587153253839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90597ac322293%3A0xcefc3b59e7d0ab25!2sClub%20de%20boxe%20One%20X%20One!5e0!3m2!1sen!2sca!4v1733343441480!5m2!1sen!2sca"
              width="100%"
              height="350"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
