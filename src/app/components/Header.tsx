import Link from "next/dist/client/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-black fixed top-0 left-0 w-full z-50 shadow-md text-white">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost hover:bg-black">
          <img src="/logo.jpeg" alt="Logo" className="h-8" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-none">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:menu lg:menu-horizontal px-1">
          <li>
            <Link className="text-white" href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/a-propos">À Propos</Link>
          </li>
          <li>
            <Link href="/nos-services">Nos services</Link>
          </li>
          <li>
            <Link href="/nos-abonnements">Nos abonnements</Link>
          </li>
          <li>
            <Link href="/evenements-competitions">
              Événements et compétitions
            </Link>
          </li>
          <li>
            <Link className="text-white" href="/contact">
              Contactez-nous
            </Link>
          </li>
        </ul>

        {/* Membre button - Always visible */}
        <Link
          className="hidden lg:block rounded-lg bg-orange-700 px-4 py-2 text-center text-white shadow hover:bg-orange-800"
          target="_blank"
          href="https://equipeonexone.fliipapp.com/home/dashboard"
        >
          Membre
        </Link>

        {/* Mobile Menu - Visible under 1024px */}
        <ul className="menu menu-compact lg:hidden">
          <li>
            <details>
              <summary className="text-left text-white">Menu</summary>
              <ul className="bg-black text-white rounded-t-none p-2">
                <li>
                  <Link href="/">Accueil</Link>
                </li>
                <li>
                  <Link href="/a-propos">À Propos</Link>
                </li>
                <li>
                  <Link href="/nos-services">Nos services</Link>
                </li>
                <li>
                  <Link href="/nos-abonnements">Nos abonnements</Link>
                </li>
                <li>
                  <Link href="/evenements-competitions">
                    Événements et compétitions
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contactez-nous</Link>
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
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
