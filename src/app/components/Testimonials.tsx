"use client";
import React, { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    name: "SPLAYZ TV",
    content:
      "Je m’entraîne depuis 1 ans à one x one et Je peu dire que c’est le meilleur club de boxe, une superbe ambiance chaleureuse, où tous le monde débutant ou expérimenté trouvera son comble. Les coach sont passionnés et prennent le temps d’expliquer les exercices et aider tout le monde. Overall 100/10",
    rating: 5,
  },
  {
    name: "PANIZ MIRZAIE",
    content:
      "Je m'entraîne depuis 1 an à one x one et Je peu dire que c'est le meilleur club de boxe, une superbe ambiance chaleureuse, où tous le monde débutant ou expérimenté trouvera son comble. Les coach sont passionnés et prennent le temps d'expliquer les exercices et aider tout le monde. Overall 100/10",
    rating: 5,
  },
  {
    name: "HAFIZ BABAK",
    content:
      "Inscrit à One X One depuis septembre 2021 et j’ai que du positif à dire. Belle ambiance, très bon personnel, l’équipe est très accueillante et professionnelle. Je suis les cours de groupe la semaine et des cours privés les fds et je suis très satisfait!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [inView, setInView] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          if (entry.isIntersecting && !inView.has(index)) {
            setInView((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const elements = containerRef.current?.querySelectorAll(".animated");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, [inView]);

  return (
    <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
            Témoignages
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Ce que nos membres disent de nous
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-index={index}
              className={`animated group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 ${
                inView.has(index)
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-0 translate-y-8 rotate-2"
              } hover:-translate-y-2 hover:shadow-orange-500/20`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-orange-500 mb-4">
                  {testimonial.name}
                </h3>

                <blockquote className="text-lg text-gray-300 leading-relaxed italic before:content-['“'] before:text-4xl before:text-orange-600 before:mr-2 before:absolute before:-left-2 before:-top-2 after:content-['”'] after:text-4xl after:text-orange-600 after:ml-2 after:absolute after:-right-2 after:-bottom-2">
                  {testimonial.content}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-600/20 to-amber-500/10 rounded-full blur-3xl opacity-30" />
      </div>
    </div>
  );
};

export default Testimonials;
