"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };

  const motionNav = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  return (
    <div className="w-screen fixed bg-[#1D1B22] flex justify-between items-center py-2 top-0 z-50 overflow-x-hidden">
      <div className="lg:ml-20 w-36 ml-5 ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Academia Numen Logo"
            width={263}
            height={60}
            priority
            className="pt-3"
          />
        </Link>
      </div>

      {/* Menú para pantallas medianas - grandes */}
      <div className="hidden md:flex gap-x-6 text-white mr-5 ">
        <ul className="flex ">
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/motion">
              <p>FORM 1</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/chackra">
              <p>FORM 2</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/mongo">
              <p>FORM 3</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/contacts">
              <p>FORM 4</p>
            </Link>
          </li>
          <li className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold">
            <Link href="/contacts">
              <p>FORM 5</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Menú para pantallas pequeñas */}
      <div className="md:hidden mr-6 bg-black">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "Cerrar" : "Menú"}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={motionNav}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0   rounded-md h-screen w-screen bg-[#1D1B22]"
            >
              <div className="flex justify-center items-center">
                <ul className="mt-2 text-white">
                  <li
                    onClick={closeModal}
                    className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold"
                  >
                    <Link href="/motion">
                      <p>FORM 1</p>
                    </Link>
                  </li>
                  <li
                    onClick={closeModal}
                    className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold"
                  >
                    <Link href="/chackra">
                      <p>FORM 2</p>
                    </Link>
                  </li>
                  <li
                    onClick={closeModal}
                    className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold"
                  >
                    <Link href="/mongo">
                      <p>FORM 3</p>
                    </Link>
                  </li>
                  <li
                    onClick={closeModal}
                    className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold"
                  >
                    <Link href="/contacts">
                      <p>CONTACTO</p>
                    </Link>
                  </li>
                  <li
                    onClick={closeModal}
                    className="hover:bg-[#29A9FF] hover:text-black px-4 py-2 rounded-full font-bold"
                  >
                    <Link href="/contacts">
                      <p>CAMPUS</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="text-center text-white" onClick={closeModal}>
                Cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
