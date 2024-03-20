"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="pt-2 pb-3 bg-gary-100 shadow-md border-t-[1px] border-gray-300 bg-gray-900">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-8">
          <div className="p-2 rounded-md hover:bg-gray-300 transition">
            <Link href="#">
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-300 transition">
            <Link href="#">
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-300 transition">
            <Link href="#">
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
          <div className="p-2 rounded-md hover:bg-gray-300 transition">
            <Link href="#">
              <Image src="/x.svg" alt="Logo" width={20} height={20} />
            </Link>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; 2024 Abdu Alyousef. All rights reserved.
        </p>
      </div>
    </div>
  );
}
