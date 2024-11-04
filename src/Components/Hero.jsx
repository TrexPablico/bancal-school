import React from "react";
import hero2 from "../assets/Hero/hero3.png";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      <div className="relative lg:flex w-full h-screen mx-auto items-center px-3 pt-1 home">
        <div className="lg:w-1/2 lg:ml-40 mt-10">
          <h2 className="xl:text-[5rem] lg:text-[80px] text-[3rem] lg:text-center text-center font-bold lg:leading-snug lg:mb-33 mb-11 lg:mr-[80px] font-Quicksand">
            Assessors Office Pagasinan <br />
          </h2>
          <p className="text-black lg:text-[50px] text-[2rem] font-Quicksand font-bold leading-normal mb-8 lg:ml-[-90px] ml-0 lg:text-center text-center"></p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={hero2}
            alt=""
            className="lg:w-[500px] w-[400px] lg:h-[450px] h-[300px] object-fit rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
