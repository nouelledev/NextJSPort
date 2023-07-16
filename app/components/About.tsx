import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="max-w-[1400px] mx-auto">
      {/* Introduction section */}
      <div className="flex flex-row items-center pt-[70px] mx-auto px-4 justify-between md:justify-evenly  ">
        <div className="flex flex-col  h-fit w-fit ">
          <div className="text-white items-center">
            <p className="font-semibold md:text-2xl"> Hi there I am</p>
            <p className="font-bold text-2xl md:text-4xl">Nouelle Caparas</p>
            <p className="font-semibold md:text-2xl">
              a Front-End Web Developer
            </p>
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
      {/* About me section*/}
      <div className="flex  flex-col md:flex-row items-center pt-[150px] mx-auto justify-between md:justify-evenly ">
        <div className="w-fit h-fit shrink-0 md:ml-[15%] px-4">
          <Image
            src="/pcpicture.jpg"
            width={400}
            height={432}
            alt="Picture of the author"
            className="rounded-lg  object-cover"
          />
        </div>
        <div className="flex flex-col  h-fit w-[fit]  md:justify-evenly ">
          <div className="text-white items-center ">
            <div className=" md:mx-auto md:w-[70%] md:p-auto md:pb-[50px] place-content-center mx-auto w-[50%] md:p-auto pb-[25px]">
              <h1 className="font-bold text-base md:text-5xl text-center">
                About me
              </h1>
            </div>
            <p className=" text-sm md:text-base font-semibold md:mx-auto md:w-[70%] md:p-auto px-4">
              I am Nouelle Caparas, a Front End Web Developer. I am a graduate
              of Bachelor Of Science in Information Technology at STI College
              Malolos and is currently looking for opportunity in the Web
              Development industry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
