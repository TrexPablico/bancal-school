import React from "react";
import hero1 from "../assets/Hero/hero1.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-blue-300 to-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      ></div>
      <div className="relative lg:flex w-full h-screen mx-auto justify-between items-center px-3 pt-1 home lg:gap-[200px]">
        <div className="lg:w-3/6 lg:ml-40">
          <h2 className="xl:text-[5rem] lg:text-[80px] text-[3rem] lg:text-center text-center font-bold lg:leading-snug mb-44 lg:mr-[80px] font-Quicksand">
            Bancal Integrated School <br />
          </h2>
          <p className="text-black lg:text-[50px] text-[2rem] font-Quicksand font-bold leading-normal mb-8 lg:ml-[-90px] ml-0 lg:text-center text-center">
            Learning Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
