import React, { useState } from "react";
import logo from "../assets/Navbar/logo.jpg";
import { LuContact } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [eClassroomOpen, setEClassroomOpen] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleEClassroom = () => {
    setEClassroomOpen(!eClassroomOpen);
  };

  return (
    <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
      <div className="container flex justify-between items-center">
        {/* Logo on the left */}
        <div className="logo flex items-center gap-6 px-5">
          <img src={logo} alt="logo" className="h-[70px]" />
        </div>

        {/* Navigation links in the center, hidden on medium and smaller screens */}
        <div className="flex-1 justify-center items-center gap-9 font-bold hidden md:flex">
          <span>Home</span>
          <span>Announcements</span>
          <span>Media Gallery</span>
        </div>

        {/* E-Classroom button with dropdown on the right, hidden on medium and smaller screens */}
        <div className="relative items-center px-5 md:flex">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white"
            onClick={toggleEClassroom}
          >
            <LuContact className="text-2xl" />
            Contact us <RiArrowDropDownLine className="text-4xl" />
          </button>
          {eClassroomOpen && (
            <div className="absolute top-full mt-0 right-5 w-[187px] bg-blue-200 shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Assessors email
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
              >
                Assessors phone number
              </a>
            </div>
          )}
        </div>

        {/* Menu icon for small screens */}
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden md:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <MdClose />
          </div>
        ) : (
          <div
            onClick={showDropdown}
            className="lg:hidden md:hidden text-[22px] cursor-pointer text-black mr-5"
          >
            <HiMenuAlt3 />
          </div>
        )}
      </div>

      <div
        className={`lg:hidden w-full fixed top-24 bg-gray transition-all duration-300 ${
          dropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </header>
  );
};

export default Navbar;
