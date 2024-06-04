"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { title: "Home", section: "home-section" },
  { title: "Projects", section: "project-section" },
  { title: "About", section: "about-section" },
  { title: "Skills", section: "skills-section" },
  { title: "Contact", section: "contact-section" },
];

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setOpen(false); // Close the menu
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "#e5e7eb", // Change the color when opened
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "#e5e7eb", // Change the color when opened
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
      transition: {
        duration: 0.2,
      },
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:hidden">
      <button
        className="w-8 h-6 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-7 h-1 bg-gray-700 rounded origin-left" // Change color here
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-7 h-1 bg-gray-700 rounded" // Change color here
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-7 h-1 bg-gray-700 rounded origin-left" // Change color here
        ></motion.div>
      </button>
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center text-4xl gap-8"
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.title}>
              <button
                onClick={() => handleLinkClick(link.section)}
                className="text-gray-200 hover:text-gray-400" // Change color here
              >
                {link.title}
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
