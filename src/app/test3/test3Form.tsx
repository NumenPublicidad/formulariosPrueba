"use client";
import React from "react";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import Typewriter from "typewriter-effect";

export default function ContactForm3() {
  return (
    <div className="flex flex col justify-center space-x-32 rounded-lg">
      <div className="w-3/5">
        <h1 className="text-5xl font-light">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Bienvenidos, dejenos su consulta"],
            }}
          />
        </h1>
      </div>
      <form className="grid w-2/5 space-y-5">
        <input
          id="name"
          type="text"
          required
          placeholder="Your Name"
          className=" bg-transparent border-b-2 border-stone-300 focus:outline-none placeholder:text-black placeholder:font-light hover:border-stone-900"
          autoComplete="off"
        />
        <input
          id="email"
          type="email"
          required
          placeholder="Your Email"
          className="bg-transparent border-b-2 border-stone-300 focus:outline-none placeholder:text-black placeholder:font-light hover:border-stone-900"
          autoComplete="off"
        />
        <input
          id="number"
          type="number"
          required
          placeholder="Your Number"
          className="bg-transparent border-b-2 border-stone-300 focus:outline-none placeholder:text-black placeholder:font-light hover:border-stone-900"
          autoComplete="off"
        />
        <textarea
          className="bg-transparent border-b-2 border-stone-300 focus:outline-none placeholder:text-black placeholder:font-light hover:border-stone-900"
          placeholder="Your message"
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="w-full p-1 bg-black border border-transparent rounded-lg text-white hover:bg-white hover:text-black"
        >
          <div className="flex flex col items-center justify-center space-x-10 rounded-lg">
            SEND MESSAGE
            <div className="pl-4 justify-center">
              <HiMiniPaperAirplane />
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}
