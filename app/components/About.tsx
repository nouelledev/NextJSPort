import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-row items-center pt-[70px] mx-auto px-4 md:justify-evenly  ">
      <div className="flex flex-col  h-fit w-fit ">
        <div className="text-white items-center">
          <p className="font-semibold md:text-2xl"> Hi there I am</p>
          <p className="font-bold text-2xl md:text-4xl">Nouelle Caparas</p>
          <p className="font-semibold md:text-2xl">a Front-End Web Developer</p>
        </div>
      </div>
      <div className="w-fit h-fit ">
        <Image
          src="/pic.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="rounded-full shrink-0 grow-0 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
