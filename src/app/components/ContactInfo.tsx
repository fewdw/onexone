import React from "react";

const ContactInfo = () => {
  // Days of the week and logic for current day
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  const currentDay = (new Date().getDay() + 6) % 7;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-16 py-8 lg:py-12">
      {/* Contact Details */}
      <div className="rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
        <h3 className="text-3xl font-bold text-orange-600 mb-6">
          Nos Coordonnées
        </h3>
        <ul className="space-y-6">
          <li className="flex items-center">
            <span className="text-2xl mr-3 text-gray-400">📍</span>
            <span className="text-lg text-gray-300">
              5556 Grande Allée, Saint-Hubert, QC J3Y 1A8
            </span>
          </li>
          <li className="flex flex-col space-y-2">
            {daysOfWeek.map((day, index) => (
              <p
                key={index}
                className={`text-lg ${
                  index === currentDay
                    ? "text-orange-500 font-bold"
                    : "text-gray-300"
                }`}
              >
                {day}:{" "}
                <span>
                  {index <= 3
                    ? "15h - 21h"
                    : index === 4
                    ? "15h - 20h"
                    : "10h - 15h"}
                </span>
              </p>
            ))}
          </li>
          {/* Phone and Email */}
          <li className="flex items-center">
            <span className="text-2xl mr-3 text-gray-400">📞</span>
            <span className="text-lg text-gray-300">450 443 0853</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-3 text-gray-400">📧</span>
            <span className="text-lg text-gray-300">
              <a
                href="mailto:info@boxeonexone.ca"
                className="hover:text-orange-600"
              >
                info@boxeonexone.ca
              </a>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="https://www.instagram.com/equipe_onexoneboxe/"
              className="text-lg text-gray-400 hover:text-orange-600 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="ig.png" alt="Instagram" className="w-6 h-6 mr-2" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/equipeonexonex"
              className="text-lg text-gray-400 hover:text-orange-600 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="fb.png" alt="Facebook" className="w-6 h-6 mr-2" />
              Facebook
            </a>
          </li>
        </ul>
      </div>

      {/* Google Map Embed */}
      <div className="rounded-lg shadow-lg p-6 sm:p-8 md:p-10 flex flex-col">
        <h3 className="text-3xl font-bold text-orange-600 mb-6">
          Où nous trouver
        </h3>
        <div
          className="flex-1 relative w-full rounded-lg overflow-hidden"
          style={{ minHeight: "300px", height: "auto" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.397553838832!2d-73.44700518750551!3d45.47587153253839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90597ac322293%3A0xcefc3b59e7d0ab25!2sClub%20de%20boxe%20One%20X%20One!5e0!3m2!1sen!2sca!4v1733343441480!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
