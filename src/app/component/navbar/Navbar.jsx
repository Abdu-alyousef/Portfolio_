"use client";
import { useState } from "react";
import Container from "../Container";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <nav className=" bg-gradient-to-l from-[#2E294E] to-[#9055A2] opacity-90 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <button
            onClick={() => scrollToSection("home-section")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="text-sm bg-gradient-to-b from-[#2E294E] to-[#9055A2] p-1 border-[2px] border-white font-semibold rounded-md flex items-center justify-center">
              <span className="text-white mr-1">Abdu</span>
            </div>
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
                  className="block font-semibold py-2 px-3 text-white transition hover:text-[#D499B9]  md:p-0 "
                  aria-current="page"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about-section")}
                  className="block py-2 px-3 font-semibold text-white rounded  md:p-0 transition hover:text-[#D499B9] "
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("project-section")}
                  className="block py-2 px-3 font-semibold text-white transition hover:text-[#D499B9]    md:p-0 "
                  aria-current="page"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills-section")}
                  className="block py-2 px-3 font-semibold text-white transition hover:text-[#D499B9]  md:p-0"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-section")}
                  className="block py-2 px-3 font-semibold text-white transition hover:text-[#D499B9]   md:p-0"
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
