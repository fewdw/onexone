"use client";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactSectionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (contactSectionRef.current) observer.observe(contactSectionRef.current);

    return () => {
      if (contactSectionRef.current)
        observer.unobserve(contactSectionRef.current);
    };
  }, []);

  return (
    <div className="bg-black">
      <Header />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <h2
          ref={contactSectionRef}
          className={`text-center text-5xl md:text-6xl font-bold mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Contactez-Nous
          </span>
        </h2>

        {/* Contact Prompt Section */}
        <div
          className={`max-w-3xl mx-auto mb-24 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-800">
            <h3 className="text-3xl font-semibold text-center mb-6 text-amber-100">
              Vous avez des questions ?
            </h3>
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              Notre équipe est prête à répondre à toutes vos demandes.
              Appelez-nous, envoyez un message via nos réseaux sociaux, ou
              visitez notre salle de sport pour découvrir notre univers
              pugilistique.
            </p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ContactInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
