"use client";

import Image from "next/image";
import Container from "./Container";
import { React } from "react";

export default function Main() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <Container>
      <div id="home-section" className="pt-20 mb-14">
        <div className="flex flex-col justify-center items-center gap-6 py-4">
          <div className="h-1/2 relative">
            <Image
              src="/hero.png"
              alt="nnn"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
          <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
            <h1 className="text-2xl font-bold text-center text-gray-900">
              Mastering the Digital Canvas: HTML, CSS, JavaScript, React,
              Next.js
            </h1>
            <p className="text-center text-gray-700">
              Embark on a journey through the digital realm as I wield HTML,
              CSS, JavaScript, React, and Next.js to craft immersive user
              experiences. With a passion for pixel-perfect design and seamless
              functionality, I bring ideas to life, shaping the digital
              landscape one line of code at a time. Join me on this exploration
              of innovation and creativity, where every project is a testament
              to the artistry of frontend development
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-10">
            <button  onClick={() => scrollToSection("contact-section")} className="bg-yellow-700 transition hover:bg-neutral-950 text-white font-semibold py-2 px-4 rounded">CONTACT</button>
            <button  onClick={() => scrollToSection("skills-section")}  className="bg-white transition hover:text-yellow-700 hover:border-yellow-700 text-neutral-950 border-[2px] border-neutral-950 font-bold py-2 px-4 rounded">SKILLS</button>
        </div>
      </div>

   
    </Container>
    
  );
}
