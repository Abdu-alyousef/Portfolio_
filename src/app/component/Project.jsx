"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Project() {
  return (
    <Container>
      <div className="mt-20">
        <h2 className="text-2xl text-center md:text-start mb-10 font-bold uppercase text-gray-800 opacity-90 md:border-l-[7px] md:pl-2 md:border-gray-800">
          See my all Projects
        </h2>
        <p className=" text-gray-700 mb-4 text-center md:text-start">
          For a comprehensive view of all my work, including open-source
          projects and personal endeavors, head over to my GitHub profile.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-10">
          <div className="rounded overflow-hidden shadow-xl mt-5 relative bg-gray-50">
            <Image src="/food.png" alt="food" width={600} height={400} />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-800 opacity-90">
                FOOD APP
              </div>
              <p className="text-gray-700 text-md">
                Discover a taste of convenience with our demo food app.
              </p>
            </div>
            <div className="px-6 py-4">
              <Link
                href="https://next-js-essential.vercel.app/"
                target="_blank"
                className="bg-gray-900 transition hover:bg-gray-700 text-gray-50 font-light py-2 px-4 rounded"
              >
                See demo
              </Link>
            </div>
            <div className="absolute text-gray-700 bg-gray-50 top-4 left-2 px-3 py-1 rounded-full">
              <span>NextJs</span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-xl mt-5 relative bg-gray-50">
            <Image src="/dice.png" alt="dice" width={600} height={400} />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-800 opacity-90">
                Dice game
              </div>
              <p className="text-gray-700 text-md">
                Roll the dice and let the excitement unfold with my demo dice
                game app.
              </p>
            </div>
            <div className="px-6 py-4">
              <Link
                href="https://abdu-alyousef.github.io/dice/"
                target="_blank"
                className="bg-gray-900 transition hover:bg-gray-700 text-gray-50 font-light py-2 px-4 rounded"
              >
                See demo
              </Link>
            </div>
            <div className="absolute text-gray-700 bg-gray-50 top-4 left-2 px-3 py-1 rounded-full">
              <span>JavaScript</span>
            </div>
          </div>

          <div className="object-cover rounded overflow-hidden shadow-xl mt-5 relative bg-gray-50">
            <Image
              src="/dream.png"
              alt="dream website"
              width={600}
              height={400}
            />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-800 opacity-90">
                Home design
              </div>
              <p className="text-gray-700 text-md">
                Step into the world of interior design with my demo home design
                app.
              </p>
            </div>
            <div className="px-6 py-4">
              <Link
                id="skills-section"
                href="https://abdu-alyousef.github.io/dream-home/"
                target="_blank"
                className="bg-gray-900 transition hover:bg-gray-700 text-gray-50 font-light py-2 px-4 rounded"
              >
                See demo
              </Link>
            </div>
            <div className="absolute text-gray-700 bg-gray-50 top-4 left-2 px-3 py-1 rounded-full">
              <span>HTML&CSS</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
