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
        <div className="flex flex-col md:flex-row justify-between gap-16">
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
              <h1 className="text-2xl font-bold text-[#00003f] border-l-[7px] pl-2 border-red-500 uppercase">
                Welcome to my portfolio
              </h1>
              <p className=" text-slate-800 text-center md:text-start">
                My name is <strong className="text-[#00003f] font-semibold">Abdu alyousef</strong> a frontend developer, I am passionate about creating
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
