import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="pt-[150px] ">
      {/* Skills display */}
      <div className="grid grid-cols-3 md:grid-cols-4 text-white items-center  gap-5 md:gap-y-7 md:gap-x-2 w-[75%] m-auto">
        <div className=" md:mx-auto md:w-full md:p-auto md:pb-[50px] place-content-center mx-auto w-[50%] md:p-auto pb-[25px] col-span-3 md:col-span-4">
          <h1 className="font-bold text-base md:text-5xl text-center  ">
            Skills
          </h1>
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/htmll.png" width={200} height={200} alt="Html" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/siss.png" width={200} height={200} alt="Css" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/boot.png" width={200} height={200} alt="Bs" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/tailwind-css.png" width={200} height={200} alt="Tw" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/jascript.png" width={200} height={200} alt="Js" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/angu.png" width={200} height={200} alt="Angular" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/aspnetcore.png" width={200} height={200} alt="core" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/githubskill.png" width={200} height={200} alt="github" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/react.png" width={200} height={200} alt="github" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110 ">
          <Image src="/vite.svg" width={200} height={200} alt="github" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/taypes.png" width={200} height={200} alt="github" />
        </div>
        <div className=" rounded-3xl mx-auto hover:scale-110">
          <Image src="/c--4.svg" width={180} height={200} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
