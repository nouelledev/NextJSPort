import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
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
      <div className=" pt-20">
        <div className="flex flex-row items-center pt-[70px] mx-auto px-4 justify-between md:justify-evenly  ">
          <div className="w-fit h-fit ">
            <Image
              src="/pcpicture.jpg"
              width={400}
              height={432}
              alt="Picture of the author"
              className=" rounded-lg "
            />
          </div>
          <div className="flex flex-col  h-fit w-fit items-center px-4 md:justify-evenly">
            <div className="text-white items-center">
              <h1 className="font-bold text-3xl md:text-5xl relative">
                About me
              </h1>
              <p className=" text-sm md:text-1xl">
                I am Nouelle Caparas, an aspiring Full Stack Web Developer.
              </p>
              <p className=" text-sm md:text-1xl">
                I am currently taking BS in Information Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
