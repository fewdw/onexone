import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <img src="/logo.jpeg" alt="Logo" className="h-8" />
        </div>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="https://www.facebook.com/equipeonexonex"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <img src="/fb.png" alt="Facebook" className="h-6" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/equipe_onexoneboxe/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <img src="/ig.png" alt="Instagram" className="h-6" />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com/@equipeonexone"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">TikTok</span>
              <img src="/tiktok.png" alt="TikTok" className="h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
