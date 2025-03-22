import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <img
              src="/logo.jpeg"
              alt="One X One Logo"
              className="h-10 w-auto transform transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/a-propos" },
                { name: "Nos Services", href: "/nos-services" },
                { name: "Abonnements", href: "/nos-abonnements" },
                { name: "Événements", href: "/evenements-competitions" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Membre Button */}
            <Link
              href="https://equipeonexone.fliipapp.com/home/dashboard"
              target="_blank"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-lg text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >
              Espace Membre
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-900 rounded-box w-52 border border-gray-800">
                {[
                  { name: "Accueil", href: "/" },
                  { name: "À Propos", href: "/a-propos" },
                  { name: "Nos Services", href: "/nos-services" },
                  { name: "Abonnements", href: "/nos-abonnements" },
                  { name: "Événements", href: "/evenements-competitions" },
                  { name: "Contact", href: "/contact" },
                  {
                    name: "Espace Membre",
                    href: "https://equipeonexone.fliipapp.com/home/dashboard",
                    special: true,
                  },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target={item.special ? "_blank" : "_self"}
                      className={`${
                        item.special
                          ? "bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-600"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
