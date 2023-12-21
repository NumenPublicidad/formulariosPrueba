import Image from "next/image";
import Navbar from "./components/Navbar";
import { Titan_One, Ultra, Bagel_Fat_One, Shrikhand, Luckiest_Guy } from "next/font/google";

const titan = Titan_One({
  weight: '400',
  subsets: ['latin'],
})

const ultra = Ultra({
  weight: '400',
  subsets: ['latin'],
})

const bagel = Bagel_Fat_One({
  weight: '400',
  subsets: ['latin'],
})

const shrikhand = Shrikhand({
  weight: '400',
  subsets: ['latin'],
})

const luckiest = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
      <main className="mt-28 h-screen">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className={`${titan.className} text-green-gradient text-5xl md:text-9xl`}>PREPARATE </h1>
          <p className={`${ultra.className} text-white text-5xl  md:text-9xl`}>PARA EL </p>
          <div className=" text-5xl md:text-9xl flex text-nowrap items-center gap-1 text-violet-gradient">
            <p className={`${titan.className}`}>P</p>
            <p className={`${bagel.className}`}>r</p>
            <p className={`${ultra.className}`}>e</p>
            <p className={`${shrikhand.className}`}>s</p>
            <p className={`${bagel.className}`}>e</p>
            <p className={`${luckiest.className}`}>n</p>
            <p className={`${shrikhand.className}`}>t</p>
            <p className={`${luckiest.className}`}>e</p>
          </div>

        </div>
      </main>
  );
}
