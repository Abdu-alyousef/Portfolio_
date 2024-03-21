"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-2 pb-3 shadow-md bg-gradient-to-t from-[#000018] to-[#00003f]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-8">
          <div className="p-2 rounded-md hover:bg-red-500 transition">
            <Link href="https://de.linkedin.com/in/abdu7?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank">
              <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-red-500 transition">
            <Link href="https://github.com/Abdu-alyousef" target="_blank">
              <Image src="/github.svg" alt="github" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-red-500 transition">
            <Link href="https://www.instagram.com/itsboud/" target="_blank">
              <Image src="/insta.svg" alt="insta" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-red-500 transition">
            <Link href="https://twitter.com/vieuuue"  target="_blank">
              <Image src="/x.svg" alt="x" width={20} height={20} />
            </Link>
          </div>
        </div>

        <p className="text-slate-400 text-sm">
          &copy; 2024 Abdu Alyousef. All rights reserved.
        </p>
      </div>
    </div>
  );
}
