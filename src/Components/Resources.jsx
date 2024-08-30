import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import cover1 from "../assets/Resources/cover1.jpg";
import cover2 from "../assets/Resources/cover2.jpg";
import cover3 from "../assets/Resources/cover3.jpg";
import cover4 from "../assets/Resources/cover4.jpg";
import cover5 from "../assets/Resources/cover5.jpg";
import cover6 from "../assets/Resources/cover6.jpg";
import cover7 from "../assets/Resources/cover7.jpg";
import cover8 from "../assets/Resources/cover8.jpg";
import cover9 from "../assets/Resources/cover9.jpg";
import cover10 from "../assets/Resources/cover10.jpg";
import cover11 from "../assets/Resources/cover11.jpg";

const Resources = () => {
  const navigate = useNavigate();

  const resource = [
    {
      id: 1,
      cover: cover1,
      title: "Marq (formerly Lucidpress)",
      description:
        "A design and brand templating platform that allows users to create and manage marketing materials, brochures, flyers and social media graphics.",
    },
    {
      id: 2,
      cover: cover2,
      title: "Venngage",
      description:
        "Learn how to create stunning infographics, presentations, and reports with ease.",
    },
    {
      id: 3,
      cover: cover3,
      title: "Stencil",
      description:
        "a fantastically easy-to-use online graphic design tool and image editor built for business owners, social media marketers, and bloggers.",
    },
    {
      id: 4,
      cover: cover4,
      title: "Creatopy",
      description:
        "Creatopy is an intuitive design platform that simplifies creating engaging ads, social media visuals, and marketing materials.",
    },
    {
      id: 5,
      cover: cover5,
      title: "Visme",
      description:
        "Visme is a versatile design tool that lets you create stunning presentations, infographics, and marketing materials effortlessly.",
    },
    {
      id: 6,
      cover: cover6,
      title: "Ceros",
      description:
        "a content creation platform that empowers marketers and designers to create engaging, interactive, and immersive content experiences.",
    },
    {
      id: 7,
      cover: cover7,
      title: "Foleon",
      description:
        "Foleon is a content creation platform for designing interactive and visually engaging digital publications with an easy-to-use drag-and-drop editor and customizable templates.",
    },
    {
      id: 8,
      cover: cover8,
      title: "Wordpress",
      description:
        "WordPress is a popular content management system that allows users to create and manage websites and blogs with ease.",
    },
    {
      id: 9,
      cover: cover9,
      title: "Emplifi (Formerly Socialbakers)",
      description:
        "A digital tool that allows you to easily manage all the profiles you have on social networks in a clear and simple way.",
    },
    {
      id: 10,
      cover: cover10,
      title: "Microsoft Teams",
      description:
        "A collaboration platform that integrates chat, video meetings, and file sharing to streamline team communication and productivity.",
    },
    {
      id: 11,
      cover: cover11,
      title: "Google Classroom",
      description:
        "Google Classroom is an educational platform that simplifies assignment management, communication, and collaboration between teachers and students.",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/resource/${id}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-light-blue to-white min-h-screen">
      <div className="w-4/5 m-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-semibold font-Quicksand">
            Learning Resources
          </h1>
          <span className="text-sm mt-2 block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resource.map((item) => (
            <div
              key={item.id}
              className="box rounded-lg shadow-shadow1 bg-white cursor-pointer"
              onClick={() => handleCardClick(item.id)} // Added onClick handler
            >
              <div className="images rounded-t-lg relative overflow-hidden h-50 w-full">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="rounded-t-lg object-cover w-full h-full"
                />
                <div className="categ flex gap-4 absolute top-0 m-3">
                  <span className="text-[14px] bg-yellow-300 p-1 px-3 text-white rounded-[5px]"></span>
                  <span className="text-[14px] bg-purple-700 p-1 px-3 text-white rounded-[5px]"></span>
                </div>
              </div>
              <div className="text p-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FaBook />
                    <span className="text-[14px] ml-2">
                      Reading/Video Lessons
                    </span>
                  </div>
                </div>
                <h3 className="text-black my-4 font-bold">{item.title}</h3>
                <h4 className="text-gray-700 my-4 font-semibold">
                  {item.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
