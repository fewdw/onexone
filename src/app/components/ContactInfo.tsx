"use client";
import React, { useEffect, useState } from "react";

const ContactInfo = () => {
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

  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact-info");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      id="contact-info"
      className={`grid grid-cols-1 gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-8 py-16 transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Contact Details Card */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 sm:p-10 shadow-2xl border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent rounded-2xl" />
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 mb-8">
          Nos Coordonnées
        </h3>

        <ul className="space-y-6 relative z-10">
          <li className="flex items-start">
            <span className="text-2xl text-orange-500 mr-3 mt-1">📍</span>
            <span className="text-lg text-gray-300">
              5556 Grande Allée, Saint-Hubert, QC J3Y 1A8
            </span>
          </li>

          {/* Opening Hours */}
          <li className="space-y-4">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  index === currentDay
                    ? "bg-orange-600/20 border border-orange-500/30"
                    : "bg-gray-800/20"
                }`}
              >
                <span className="text-gray-300">{day}</span>
                <span className="font-medium text-amber-100">
                  {index <= 3
                    ? "15h - 21h"
                    : index === 4
                    ? "15h - 20h"
                    : "10h - 15h"}
                </span>
              </div>
            ))}
          </li>

          {/* Contact Methods */}
          <li className="flex items-center">
            <span className="text-2xl text-orange-500 mr-3">📞</span>
            <span className="text-lg text-gray-300">450 443 0853</span>
          </li>
          <li className="flex items-center">
            <span className="text-2xl text-orange-500 mr-3">📧</span>
            <a
              href="mailto:info@boxeonexone.ca"
              className="text-lg text-gray-300 hover:text-amber-400 transition-colors"
            >
              info@boxeonexone.ca
            </a>
          </li>

          {/* Social Links */}
          <li className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://www.instagram.com/equipe_onexoneboxe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all group"
            >
              <svg
                className="w-6 h-6 mr-2 text-pink-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-gray-300 group-hover:text-amber-400 transition-colors">
                Instagram
              </span>
            </a>
            <a
              href="https://www.facebook.com/equipeonexonex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all group"
            >
              <svg
                className="w-6 h-6 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-300 group-hover:text-amber-400 transition-colors">
                Facebook
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Map Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5595.397553838832!2d-73.44700518750551!3d45.47587153253839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90597ac322293%3A0xcefc3b59e7d0ab25!2sClub%20de%20boxe%20One%20X%20One!5e0!3m2!1sen!2sca!4v1733343441480!5m2!1sen!2sca"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-4 right-4 bg-black/80 px-4 py-2 rounded-lg text-sm text-amber-100">
          🥊 Parking disponible sur place
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
