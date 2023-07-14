"use client";
"use strict";
import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });
  async function handleSubmit(e: React.SyntheticEvent) {
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({}),
    });
  }
  return (
    <div
      className="md:w-[80%] h-full text-center grid grid-cols-1 px-11 pt-16 md:grid-cols-2 mx-auto gap-x-11"
      id="contact"
    >
      <h1 className="text-base md:text-5xl text-white pb-5 md:col-span-2 md:pb-[5%]">
        Contact me
      </h1>
      <div className="col-start-1 h-full w-full place-content-center border-white  border-solid rounded-my-size bg-card-contact">
        <div className="flex flex-col">
          <h1 className="text-white md:text-3xl md:pb-[5%] md:mt-11">
            Contact Informations
          </h1>
          <p className="text-base md:text-1xl text-white md:pb-[2%] pb-5">
            Fill up the form and I hope to work with you soon.
          </p>
          <div className="text-white text-base w-full flex flex-row pb-6 justify-center md:gap-x-16 gap-x-3">
            <AiFillPhone size={25} />
            <p className="text-white">+63968 853 8953</p>
          </div>
          <div className="text-white text-base w-full flex flex-row pb-6 justify-center md:gap-x-16 gap-x-3">
            <AiOutlineMail size={25} className="" />
            <p className="text-white text-base">nouellec@gmail.com</p>
          </div>
          <div className="flex flex-row text-white gap-x-8 justify-center pb-5">
            <AiOutlineGithub size={25} />
            <AiOutlineFacebook size={25} />
            <AiOutlineLinkedin size={25} />
          </div>
        </div>
      </div>
      <div className=" mt-[5%] md:w-full md:mx-auto">
        <form className=" md:col-start-2 " onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <input
              type="text"
              {...register("firstName")}
              placeholder="Enter your name"
              className=" bg-inherit w-full border-b-2 border-b-slate-600 text-white text-base outline-none md:text-1xl"
            />
            <input
              type="text"
              {...register("email")}
              placeholder="Enter a valid email address"
              className=" bg-inherit w-full border-b-2 border-b-slate-600 text-white text-base outline-none md:text-1xl"
            />
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Message"
              className=" bg-inherit w-full border-b-2 border-b-slate-600 text-white text-base resize-none outline-none md:text-1xl col-span-2"
            />
            <input
              className="text-white w-[50%] md:text-2xl md:w-full h-[35px] md:h- bg-slate-600 rounded-lg row-start-3 col-start-2 justify-center"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
