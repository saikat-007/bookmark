import React from "react";
import Button from "./Button";
import heroImg from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div>
        <div className="text-center lg:text-left">
          <p className="text-3xl lg:text-4xl leading-10 font-bold px-20 sm:px-24 py-6 mt-4">A Simple Bookmark Manager</p>
          <p className="pt-10 px-16 lg:px-24 lg:pt-8 leading-10 text-xl font-medium text-neutral-500">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start mt-10 lg:ml-24">
          <Button />
          <Button />
        </div>
      </div>

      <div className="pt-10 relative lg:w-full">
        <div className="">
          <img src={heroImg} alt="" className="w-full h-full -z-10" />
        </div>
        <div className="w-[80%] h-[70%] bg-blue-600 rounded-bl-[100px] -z-20 absolute top-24 lg:top-32 md:top-48 right-0 "></div>
      </div>
    </div>
  );
};

export default Hero;
