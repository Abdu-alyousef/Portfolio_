"use client";
import { TypeAnimation } from "react-type-animation";
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
      <div id="home-section" className="pt-40 mb-32">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className=" md:w-1/2 lg:w-1/3 md:order-1 flex items-center justify-center">
            <div className="">
              <div className="relative">
                <Image
                  src="/pc.svg"
                  alt="hero"
                  width={400}
                  height={400}
                  className="object-contain"
                />
                <span className="absolute top-20 left-2 text-white px-4">
                  <TypeAnimation
                    sequence={[
                      "Welcome to my Portfolio!",
                      1000,
                      "My name is Abdu",
                      1000,
                      "My name is Abdu a frontend developer",
                      1000,
                      "My name is Abdu with a passionate about creating amazing user experiences",
                      1000,

                      "My name is Abdu a expertise in HTML, CSS, and JavaScript",
                      1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ display: "inline-block", fontSize: ".9rem" }}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-2/3 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl font-bold text-[#00003f] border-l-[7px] pl-2 border-red-500">
                Mastering the Digital Canvas: HTML, CSS, JavaScript, React,
                Next.js
              </h1>
              <p className=" text-slate-800 text-center md:text-start">
                Embark on a journey through the digital realm as I wield HTML,
                CSS, JavaScript, React, and Next.js to craft immersive user
                experiences. With a passion for pixel-perfect design and
                seamless functionality, I bring ideas to life, shaping the
                digital landscape one line of code at a time. Join me on this
                exploration of innovation and creativity, where every project is
                a testament to the artistry of frontend development
              </p>
            </div>
            <div
              id="about-section"
              className="flex gap-5 justify-center md:justify-normal"
            >
              <button
                onClick={() => scrollToSection("contact-section")}
                className="bg-[#00003f] border-[2px] border-[#00003f] hover:border-red-500 transition hover:bg-red-500 text-white font-semibold py-2 px-4 rounded"
              >
                CONTACT
              </button>
              <button
                onClick={() => scrollToSection("skills-section")}
                className="bg-white transition hover:text-red-500 hover:border-red-500 text-[#00003f] border-[2px] border-[#00003f] font-bold py-2 px-4 rounded"
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
