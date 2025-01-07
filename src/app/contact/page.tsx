"use client";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactSectionRef = useRef<HTMLHeadingElement>(null);

  // Check if the elements are in view (for scroll-triggered animations)
  const handleScroll = () => {
    if (contactSectionRef.current) {
      const rect = contactSectionRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />

      <div className="bg-black text-white pt-16 pb-24">
        {/* Contactez-Nous Title */}
        <h2
          ref={contactSectionRef} // Using ref instead of id for the DOM element
          className={`text-4xl font-extrabold text-center text-orange-700 mb-8 pt-16 opacity-0 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Contactez-Nous
        </h2>

        <section className="bg-gray-900 py-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center">
              {/* Question Prompt Title */}
              <h2
                className={`text-2xl font-bold text-white mb-6 opacity-0 transition-opacity duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Vous avez des questions? Contactez-nous dès maintenant!
              </h2>

              {/* Paragraph */}
              <p
                className={`text-lg text-gray-400 max-w-3xl mx-auto opacity-0 transition-opacity duration-700 text-justify ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Appelez-nous, envoyez-nous un message sur nos réseaux sociaux,
                ou venez visiter notre salle de sport pour en savoir plus. Nous
                serons ravis de vous aider avec toutes vos demandes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <div className="mt-12">
          <ContactInfo />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
