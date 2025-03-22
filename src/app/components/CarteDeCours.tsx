"use client";

import React, { useEffect, useState, useRef } from "react";

const courses = [
  {
    name: "Carte de Cours (Paiement Unique)",
    options: [
      {
        count: 1,
        price: 23.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34780",
      },
      {
        count: 5,
        price: 103.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34781",
      },
      {
        count: 10,
        price: 189.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34782",
      },
      {
        count: 20,
        price: 349.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_membership/1/34783",
      },
    ],
  },
  {
    name: "Cours Privé",
    options: [
      {
        count: 1,
        price: 89.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4918",
      },
      {
        count: 5,
        price: 399.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4919",
      },
      {
        count: 10,
        price: 749.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4920",
      },
      {
        count: 20,
        price: 1399.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4922",
      },
      {
        count: 50,
        price: 3249.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4923",
      },
      {
        count: 100,
        price: 5999.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4924",
      },
    ],
    isPopular: true,
  },
  {
    name: "Semi Privé (2 participants)",
    options: [
      {
        count: 1,
        price: 64.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4925",
      },
      {
        count: 5,
        price: 274.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4926",
      },
      {
        count: 10,
        price: 499.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4928",
      },
      {
        count: 20,
        price: 899.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4929",
      },
      {
        count: 50,
        price: 1999.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4931",
      },
      {
        count: 100,
        price: 3499.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4932",
      },
    ],
    isPopular: true,
  },
  {
    name: "Semi Privé (4-6 participants)",
    options: [
      {
        count: 1,
        price: 39.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4933",
      },
      {
        count: 10,
        price: 349.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4934",
      },
      {
        count: 20,
        price: 599.99,
        link: "https://equipeonexone.fliipapp.com/user/register/buy_service/1/4935",
      },
    ],
  },
];

("react");

const CarteDeCours = () => {
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
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animated");
    elements?.forEach((element) => observer.observe(element));

    return () => {
      elements?.forEach((element) => observer.unobserve(element));
    };
  }, [inView]);

  return (
    <div ref={containerRef} className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-500">
          Cartes de Cours
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              data-index={index}
              className={`animated group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
                inView.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                course.isPopular
                  ? "border-2 border-orange-500/30 hover:border-orange-500"
                  : "border border-gray-800/50"
              }`}
            >
              {course.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 text-sm font-bold rounded-full shadow-lg">
                  POPULAIRE
                </div>
              )}

              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
                  {course.name}
                </h3>

                <ul className="space-y-4">
                  {course.options.map((option, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center p-4 bg-gray-800/20 rounded-lg"
                    >
                      <div>
                        <div className="text-2xl font-bold text-amber-400">
                          {option.price.toFixed(2)}$
                        </div>
                        <span className="text-sm text-gray-400">
                          {option.count} cours
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {course.options.length > 0 && (
                  <a
                    href={course.options[0].link}
                    className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-lg transition-transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    Rejoindre maintenant
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarteDeCours;
