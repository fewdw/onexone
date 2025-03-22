"use client";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";

const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

const ContactPage = () => {
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const questionRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const isContactTitleVisible = useIntersectionObserver(contactTitleRef, {
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  const isQuestionVisible = useIntersectionObserver(questionRef, {
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  const isParagraphVisible = useIntersectionObserver(paragraphRef, {
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  return (
    <div>
      <Header />

      <div className="bg-black text-white pt-16 pb-24">
        {/* Contactez-Nous Title */}
        <h2
          ref={contactTitleRef}
          className={`text-4xl font-extrabold text-center text-orange-700 mb-8 pt-16 transition-opacity duration-700 ${
            isContactTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Contactez-Nous
        </h2>

        <section className="bg-gray-900 py-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center">
              {/* Question Prompt Title */}
              <h2
                ref={questionRef}
                className={`text-2xl font-bold text-white mb-6 transition-opacity duration-700 ${
                  isQuestionVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Vous avez des questions? Contactez-nous dès maintenant!
              </h2>

              {/* Paragraph */}
              <p
                ref={paragraphRef}
                className={`text-lg text-gray-400 max-w-3xl mx-auto transition-opacity duration-700 text-justify ${
                  isParagraphVisible ? "opacity-100" : "opacity-0"
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
