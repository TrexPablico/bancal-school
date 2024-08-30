import React from "react";
import logo from "../assets/Navbar/logo.jpg";

const Navbar = () => {
  return (
    <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center gap-6 px-5">
          <img src={logo} alt="logo" className="h-[70px]" />
        </div>
        <div className="flex items-start gap-9 font-bold">
          <span>Home</span>
          <span>About</span>
          <span>Resources</span>
          <span>Media Gallery</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
