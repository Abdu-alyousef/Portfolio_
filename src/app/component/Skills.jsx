"use client"
import Image from "next/image"
import Container from "./Container"
export default function Skills  () {
    return (
        <Container>
        <div id="skills-section" className="mt-24">
            <div className="border flex flex-col items-center gap-12 py-10 rounded overflow-hidden shadow-lg bg-white ">
                <h1 className="font-bold text-2xl uppercase- text-gray-900">Skills</h1>
                <div className="flex flex-col gap-4 px-6">
                <p className="font-semibold text-gray-800">My expertise encompasses a wide array of frontend technologies, including:</p>
                <ul className="list-disc text-gray-700 text-sm">
                    <li>HTML5, CSS3, and JavaScript for building dynamic and visually stunning websites.</li>
                    <li>Modern CSS frameworks like Scss, Tailwind CSS, and Material-UI for rapid prototyping and responsive design.</li>
                    <li>JavaScript libraries and frameworks such as React.js and Next.js for building scalable and interactive web applications.</li>
                    <li>Version control systems like Git for seamless collaboration and code management.</li>
                </ul>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/javascript.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">JAVASCRIPT</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/html.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">HTML5</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/css3.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">CSS3</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/nextjs.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">NEXTJS</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/react.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">REACT</span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-50 p-2 rounded">
                    <Image src="/github.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-sm uppercase text-gray-800">GITHUB</span>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}