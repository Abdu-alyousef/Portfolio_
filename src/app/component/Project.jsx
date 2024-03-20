"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Project() {
  return (
    <Container>
      <div className="mt-24">
        <h2 id="project-section"
        className="text-2xl font-bold mb-2 uppercase text-gray-900 border-l-[7px] pl-2 border-yellow-700">
          See my all Projects
        </h2>
        <p className="text-sm text-gray-700 mb-4">For a comprehensive view of all my work, including open-source projects and personal endeavors, head over to my GitHub profile.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-10">
          <div className="rounded overflow-hidden shadow-lg mt-5 relative bg-white">
            <Image src="/food.png" alt="food" width={600} height={400} />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-900">FOOD APP</div>
              <p className="text-gray-700 text-base">Description</p>
            </div>
            <div className="px-6 py-4">
              <Link
                href="https://next-js-essential.vercel.app/"
                target="_blank"
                className="bg-yellow-700 transition hover:bg-stone-800 text-white font-light py-2 px-4 rounded">
                See demo
              </Link>
            </div>
            <div className="absolute bg-gray-200 top-4 left-2 px-4 py-2 rounded-full">
              <span>
                NextJs
              </span>
            </div>
          </div>

          {/* Add similar markup for other cards */}

          <div className="rounded overflow-hidden shadow-lg mt-5 relative bg-white">
            <Image src="/dice.png" alt="dice" width={600} height={400} />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-900">Dice game</div>
              <p className="text-gray-700 text-base">Description</p>
            </div>
            <div className="px-6 py-4">
              <Link
                href="https://abdu-alyousef.github.io/dice/"
                target="_blank"
                className="bg-yellow-700 transition hover:bg-stone-800 text-white font-light py-2 px-4 rounded"
              >
                See demo
              </Link>
            </div>
            <div className="absolute bg-gray-200 top-4 left-2 px-4 py-2 rounded-full">
              <span>
                JavaScript
              </span>
            </div>
          </div>

          <div className="object-cover rounded overflow-hidden shadow-lg mt-5 relative bg-white">
            <Image
              src="/dream.png"
              alt="dream website"
              width={600}
              height={400}
            />
            <div className="px-6 py-2">
              <div className="font-semibold text-xl mb-2 text-gray-900">Home design</div>
              <p className="text-gray-700 text-base">Description</p>
            </div>
            <div className="px-6 py-4">
              <Link
                href="https://abdu-alyousef.github.io/dream-home/"
                target="_blank"
                className="bg-yellow-700 transition hover:bg-stone-800 text-white font-light py-2 px-4 rounded"
              >
                See demo
              </Link>
            </div>
            <div className="absolute bg-gray-200 top-4 left-2 px-4 py-2 rounded-full">
              <span>HTML&CSS</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
