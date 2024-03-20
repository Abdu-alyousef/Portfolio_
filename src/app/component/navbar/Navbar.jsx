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
      <nav className="bg-neutral-300 fixed w-full z-20 top-0 start-0 ">
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <button
                  onClick={() => scrollToSection("home-section")}
                  className="block font-semibold py-2 px-3 text-neutral-950 transition hover:text-yellow-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about-section")}
                  className="block py-2 px-3 font-semibold text-neutral-950 rounded  md:p-0 transition hover:text-yellow-700"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills-section")}
                  className="block py-2 px-3 font-semibold text-neutral-950 transition hover:text-yellow-700   md:p-0 "
                  aria-current="page"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("project-section")}
                  className="block py-2 px-3 font-semibold text-neutral-950 transition hover:text-yellow-700  md:p-0"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="block py-2 px-3 font-semibold text-neutral-950 transition hover:text-yellow-700  md:p-0"
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
