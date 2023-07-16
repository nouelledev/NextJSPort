"use client";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import React from "react";
import Reveal from "./Reveal";

const Portfolio = () => {
  const PortfolioProjects = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      info: "My first",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      info: "My second",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      info: "My third",
    },

    {
      imgUrl:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      info: "My fourth",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      info: "My fifth",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirtSlide = currentIndex === 0;
    const newIndex = isFirtSlide
      ? PortfolioProjects.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextslide = () => {
    const isLastSlide = currentIndex === PortfolioProjects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <Reveal>
      <div id="portfolio" className="max-w-[1100px] mx-auto mt-[15%]">
        <h1 className="text-white  mt-[20] text-center pt-[30%] md:pt-[10%] font-bold text-base md:text-5xl">
          My Portfolio
        </h1>
        <div className="max-w-[1200px]  h-[550px] md:h-[780px] w-full m-auto py-16 px-4  relative group ">
          <div
            style={{
              backgroundImage: `url(${PortfolioProjects[currentIndex].imgUrl})`,
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
          >
            <h1 className="text-white absolute inset-x-0 bottom-20 h-16 text-center font-bold text-4xl md:text-5xl">
              {" "}
              {PortfolioProjects[currentIndex].info}
            </h1>
          </div>
          {/*Left arrow*/}
          <div className="text-white w-fit group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20  cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/*Right arrow */}
          <div className="text-white w-fit group-hover:block   absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
            <BsChevronCompactRight onClick={nextslide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {PortfolioProjects.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-white"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Portfolio;
