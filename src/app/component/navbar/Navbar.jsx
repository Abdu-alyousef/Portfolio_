"use client";
import { useState } from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <button
            onClick={() => scrollToSection("home-section")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Logo />
          </button>
          <UserMenu />
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  onClick={() => scrollToSection("home-section")}
                  className="block py-2 px-3 text-white transition hover:text-gray-400 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about-section")}
                  className="block py-2 px-3 text-white rounded  md:p-0 transition hover:text-gray-400"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills-section")}
                  className="block py-2 px-3 text-white transition hover:text-gray-400 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("project-section")}
                  className="block py-2 px-3 text-white transition hover:text-gray-400 rounded  md:p-0"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="block py-2 px-3 text-white transition hover:text-gray-400 rounded  md:p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}
