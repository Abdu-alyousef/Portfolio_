"use client";
import Container from "./Container";

export default function About() {
  return (
    <Container>
      <h1 
       className="font-bold text-2xl border-l-[7px] pl-2 border-red-500 mb-10 mt-20 uppercase text-[#00003f]">
        ABOUT ME
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center gap-5 items-center">
          {/* Hello, I&apos;m Abdu alyousef */}
          <p className=" text-center md:text-start text-[#00143d]">
            I&apos;m excited about the prospects of leveraging my
            skills and expertise to tackle new challenges and push the
            boundaries of frontend development, where I can contribute to
            innovative projects that make a meaningful impact on users lives.
                With a passion for pixel-perfect design and
                seamless functionality, I bring ideas to life, shaping the
                digital landscape one line of code at a time. Join me on this
                exploration of innovation and creativity.
          </p>

          <span className="italic text-center md:text-start text-sm mb-10 text-[#00143d]">
            during my free time, I have undertaken various projects to practice
            and acquire new skills, often pursuing them as hobbies.
          </span>
        </div>
        <div>
          <h1 className="font-bold text-2xl uppercase text-[#00003f] border-l-[7px] pl-2 border-red-500">
            EXPERIENCE
          </h1>

          <div  id="project-section" className="pb-5 mt-14">
            <ol className="items-center sm:flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className=" flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-red-500 sm:ring-8 ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-sky-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full  h-0.5 bg-gray-950"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-sm font-semibold text-[#00003f]">
                    Customer service
                  </h3>
                  <time className="block mb-2 text-sm leading-none text-slate-600">
                    Aug 2023 - now
                  </time>
                  <p className="text-sm text-slate-500">
                    MediaMarkt | Magdeburg
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-sky-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-sm font-semibold text-[#00003f]">
                    Receptionist
                  </h3>
                  <time className="block mb-2 text-sm leading-none text-slate-600">
                    Oct 2021 - sep 2022
                  </time>
                  <p className="text-sm text-slate-500">
                   Fitone | Magdeburg
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5  text-sky-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-sm font-semibold text-[#00003f]">
                    Sales Assistant
                  </h3>
                  <time className="block mb-2 text-sm leading-none text-slate-600">
                    Aug 2019 - Mar 2020
                  </time>
                  <p className="text-sm text-slate-500">
                   SuperDry | Magdeburg
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5  text-sky-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-sm font-semibold text-[#00003f]">
                    Sales Advisor
                  </h3>
                  <time className="block mb-2 text-sm leading-none text-slate-600">
                    Jul 2018 - Mai 2019
                  </time>
                  <p className="text-sm text-slate-500">
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
