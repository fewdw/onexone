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
    name: "Example Name",
    content:
      "Un super endroit pour apprendre et se perfectionner. L'atmosphère est géniale et les coachs sont toujours là pour nous aider à progresser.",
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
    <div>
      <section className="bg-black">
        <div
          ref={containerRef}
          className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="font-bold text-orange-700 relative text-center pb-4 text-5xl">
            Lisez les avis de nos clients de confiance.
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 pt-8">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                data-index={index}
                className={`animated rounded-lg p-6 shadow-sm sm:p-8 bg-gray-900 transition transform ${
                  inView.has(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } duration-500`}
              >
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex justify-center gap-0.5 text-orange-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-orange-600">
                      {testimonial.name}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-white">{testimonial.content}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
