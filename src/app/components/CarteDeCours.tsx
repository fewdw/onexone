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
    <div
      ref={containerRef}
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600 bg-clip-text pt-16">
        Cartes de Cours
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            data-index={index}
            className={`animated rounded-2xl p-8 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-105 ${
              course.isPopular
                ? "bg-gradient-to-b from-gray-800 via-gray-900 to-black border-2 border-orange-600"
                : "bg-gray-900 border border-gray-800"
            } hover:border-orange-500 overflow-hidden group`}
          >
            {course.isPopular && (
              <div className="absolute top-0 right-0 bg-orange-600 text-black px-6 py-1 text-sm font-bold skew-x-12 shadow-xl">
                POPULAIRE
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                {course.name}
              </h3>

              <ul className="space-y-4">
                {course.options.map((option, idx) => {
                  return (
                    <li
                      key={idx}
                      className="flex flex-col justify-between border-b border-gray-700 pb-4"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-black text-orange-500">
                          {option.price.toFixed(2)}$
                        </span>
                        <span className="text-sm text-gray-400">
                          {option.count} cours
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {course.options.length > 0 && (
              <a
                href={course.options[0].link}
                className="w-full py-3 mt-6 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 rounded-xl font-bold text-white transition-all transform hover:scale-[1.02] shadow-lg border border-orange-400 text-center"
              >
                Rejoindre Maintenant
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarteDeCours;
