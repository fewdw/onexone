import Link from "next/dist/client/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-black fixed top-0 left-0 w-full z-50 shadow-md text-white">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost hover:bg-black">
          <img src="/logo.jpeg" alt="Logo" className="h-8" />{" "}
          {/* Adjust the height as needed */}
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-none">
        {/* Desktop Menu */}
        <ul className="hidden md:menu md:menu-horizontal px-1">
          <li>
            <Link className="text-white" href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/horaire-abonnements">Horaire et Abonnements</Link>
          </li>
          <li>
            <Link className="text-white" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block rounded-lg bg-orange-700 px-4 py-2 text-center text-white shadow hover:bg-orange-800"
              target="_blank"
              href="https://equipeonexone.fliipapp.com/home/dashboard"
            >
              Membre
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul className="menu menu-compact md:hidden">
          <li>
            <details>
              <summary className="text-left text-white">Menu</summary>
              <ul className="bg-black text-white rounded-t-none p-2">
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/horaire-abonnements">
                    Horaire et Abonnements
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <a
                    className="block rounded-lg bg-orange-700 px-4 py-2 text-center text-white shadow hover:bg-orange-800"
                    target="_blank"
                    href="https://equipeonexone.fliipapp.com/home/dashboard"
                  >
                    Membre
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
