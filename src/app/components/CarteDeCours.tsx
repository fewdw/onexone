import React from "react";

const courses = [
  {
    name: "Cours de groupe",
    options: [
      { count: 1, price: 23.99 },
      { count: 5, price: 103.99 },
      { count: 10, price: 189.99 },
      { count: 20, price: 349.99 },
    ],
  },
  {
    name: "Cours Enfants",
    options: [
      { count: 5, price: 89.99 },
      { count: 10, price: 154.99 },
    ],
  },
  {
    name: "Privé",
    options: [
      { count: 1, price: 89.99 },
      { count: 5, price: 399.99 },
      { count: 10, price: 749.99 },
      { count: 20, price: 1399.99 },
      { count: 50, price: 3249.99 },
      { count: 100, price: 5999.99 },
    ],
    isPopular: true,
  },
  {
    name: "Semi Privé (2 participants)",
    options: [
      { count: 1, price: 64.99 },
      { count: 5, price: 274.99 },
      { count: 10, price: 499.99 },
      { count: 20, price: 899.99 },
      { count: 50, price: 1999.99 },
      { count: 100, price: 3499.99 },
    ],
    isPopular: true,
  },
  {
    name: "Semi Privé (4-6 participants)",
    options: [
      { count: 1, price: 39.99 },
      { count: 10, price: 349.99 },
      { count: 20, price: 599.99 },
    ],
  },
];

const CarteDeCours = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-orange-600">
        Cartes de Cours
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`rounded-lg border p-6 shadow-md transition-transform duration-300 ${
              course.isPopular
                ? "border-orange-600 bg-gradient-to-b from-gray-800 via-gray-900 to-black ring-2 ring-orange-600"
                : "border-gray-700 bg-gray-800 shadow-sm"
            }`}
          >
            {course.isPopular && (
              <span className="block mb-3 text-center bg-orange-600 text-black px-3 py-1 text-xs font-semibold rounded">
                Populaire
              </span>
            )}
            <h3 className="text-2xl font-semibold text-center">
              {course.name}
            </h3>
            <ul className="mt-4 space-y-4">
              {course.options.map((option, idx) => {
                const perClassPrice = (option.price / option.count).toFixed(2);
                return (
                  <li
                    key={idx}
                    className="flex justify-between items-center text-gray-300"
                  >
                    <span className="text-lg font-semibold text-orange-600">
                      {perClassPrice}$ par cours
                    </span>{" "}
                    <span className="text-sm text-gray-500">{`pour ${
                      option.count
                    } cours${option.count > 1 ? "" : ""}`}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarteDeCours;
