"use client";
import Container from "./Container";

export default function About() {
  return (
    <Container>
      <h1 className=" text-center md:text-start font-bold text-2xl md:border-l-[7px] pl-2 md:border-gray-800 mb-10 mt-20 uppercase text-gray-800 opacity-90">
        ABOUT ME
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center gap-5 items-center">
          {/* Hello, I&apos;m Abdu alyousef */}
          <p className=" text-center md:text-start text-gray-700">
            I&apos;m excited about the prospects of leveraging my skills and
            expertise. With a passion for
            pixel-perfect design and seamless functionality, I bring ideas to
            life, shaping the digital landscape one line of code at a time.
          </p>

          <span className="italic text-center md:text-start text-sm mb-10 text-gray-800">
            during my free time, I have undertaken various projects to practice
            and acquire new skills, often pursuing them as hobbies.
          </span>
        </div>
        <div>
          <h1 className="font-bold text-center md:text-start text-2xl uppercase text-gray-800 opacity-90 md:border-l-[7px] md:pl-2 md:border-gray-800">
            EXPERIENCE
          </h1>

          <div id="project-section" className="pb-5 mt-14">
            <ol class="items-center w-full sm:flex">
              <li class="relative w-1/3 mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-4 bg-gray-500 sm:ring-8 ring-gray-800 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full h-0.5 bg-gray-400"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-800 opacity-85">
                    Customer service
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-700">
                    AUG 2023 - NOW
                  </time>
                  <p class="text-base font-normal text-gray-700">
                    MediaMarktSaturn | Magdeburg
                  </p>
                </div>
              </li>
              <li class="relative mb-6 w-1/3 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-gray-500 sm:ring-8 ring-gray-800 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full h-0.5 bg-slate-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-800 opacity-85">
                    Receptionist
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-700">
                    OCT 2021 - SEP 2022
                  </time>
                  <p class="text-base font-normal text-gray-700">
                    FITONE | Magdeburg
                  </p>
                </div>
              </li>
              <li class="relative mb-6 w-1/3 sm:mb-0">
                <div class="flex items-center">
                  <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-gray-500 sm:ring-8 ring-gray-800 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full h-0.5 bg-slate-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-800 opacity-85">
                    Sales Advisor
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-700">
                    JUL 2018 - MAY 2019
                  </time>
                  <p
                    id="project-section"
                    class="text-base font-normal text-gray-700"
                  >
                    H&M | Magdeburg
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Container>
  );
}
