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
      <div id="home-section" className="pt-24 md:pt-48 mb-32">
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
                      "Hello!",
                      1000,
                      "My name is Abdu",
                      1000,
                      "I architecting the web with creativity and code.",
                      1000,
                      "I breathing life into pixels, pixel by pixel.",
                      1000,
                      "I transforming ideas into interactive wonders.",
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
              <h1 className="text-2xl font-bold text-[#00003f] border-l-[7px] pl-2 border-red-500 uppercase">
                Welcome to my portfolio
              </h1>
              <p className=" text-slate-800 text-center md:text-start">
                As a frontend developer, I am passionate about creating
                captivating digital experiences that seamlessly blend
                functionality with aesthetics. With a strong foundation in HTML,
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
