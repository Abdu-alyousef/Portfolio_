import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdu's Portfolio",
  description:
    "Dive into my digital world, where creativity meets code in stunning frontend projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="logo" href="/logo.png" />
      </Head>
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
