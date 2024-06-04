"use client";
import Image from "next/image";
import Container from "./Container";

export default function Main() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <div id="home-section" className="pt-24 md:pt-48 mb-32">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="md:w-1/2 md:order-1 flex items-center justify-center">
            <div className="">
              <div className="relative">
                <Image
                  src="/hero.png"
                  alt="hero"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl text-center md:text-start font-bold text-gray-800 opacity-90 md:border-l-[7px] md:pl-2 md:border-gray-800 uppercase">
                Welcome to my portfolio
              </h1>
              <p className=" text-gray-700 text-center md:text-start">
                My name is <strong className="text-gray-800 opacity-90 font-semibold">Abdu alyousef</strong> a frontend developer. With a strong foundation in HTML,
                CSS, and JavaScript, I thrive on turning design concepts into
                responsive and interactive websites and applications.
              </p>
            </div>
            <div
              id="about-section"
              className="flex gap-5 justify-center md:justify-normal"
            >
              <button
                onClick={() => scrollToSection("contact-section")}
                className="bg-gray-900 border-[2px] border-gray-900 hover:border-gray-700 transition hover:bg-gray-700 text-gray-50 font-semibold py-2 px-4 rounded"
              >
                CONTACT 
              </button>
              <button
                onClick={() => scrollToSection("skills-section")}
                className="transition hover:text-gray-700 hover:border-gray-700 text-gray-900 border-[2px] border-gray-900 font-bold py-2 px-4 rounded"
              >
                SKILLS
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
