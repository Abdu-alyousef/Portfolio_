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
              <h1 className="text-2xl text-center md:text-start font-bold text-[#011638] md:border-l-[7px] md:pl-2 md:border-[#D499B9] uppercase">
                Welcome to my portfolio
              </h1>
              <p className=" text-slate-800 text-center md:text-start">
                My name is <strong className="text-[#011638] font-semibold">Abdu alyousef</strong> a frontend developer, I am passionate about creating
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
                className="bg-[#9055A2] border-[2px] border-[#9055A2] hover:border-[#D499B9] transition hover:bg-[#D499B9] text-white font-semibold py-2 px-4 rounded"
              >
                CONTACT 
              </button>
              <button
                onClick={() => scrollToSection("skills-section")}
                className="bg-white transition hover:text-[#D499B9] hover:border-[#D499B9] text-[#2E294E] border-[2px] border-[#2E294E] font-bold py-2 px-4 rounded"
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
