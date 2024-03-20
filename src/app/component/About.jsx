"use client";
import Container from "./Container";

export default function About() {
  return (
    <Container>
      <h1 id="about-section"
       className="font-bold text-2xl mb-10 uppercase text-gray-900">
        ABOUT ME
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center gap-5 items-center">
          {/* Hello, I&apos;m Abdu alyousef */}
          <p className=" sm:text-center text-gray-700">
            Looking ahead, I&apos;m excited about the prospects of leveraging my
            skills and expertise to tackle new challenges and push the
            boundaries of frontend development, where I can contribute to
            innovative projects that make a meaningful impact on users lives.
          </p>

          <span className="italic text-sm mb-10 text-gray-700">
            during my free time, I have undertaken various projects to practice
            and acquire new skills, often pursuing them as hobbies.
          </span>
        </div>
        <div>
          <h1 className="font-bold text-2xl uppercase text-gray-900">
            EXPERIENCE
          </h1>

          <div className="pb-5 mt-14">
            <ol class="items-center sm:flex">
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class=" flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.0.0
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 2, 2021
                  </time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.2.0
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 23, 2021
                  </time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                  <div class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pe-8">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.3.0
                  </h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 5, 2022
                  </time>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
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
