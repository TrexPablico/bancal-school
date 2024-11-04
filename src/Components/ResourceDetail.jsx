import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../assets/ResourceDetails/1.png";
import image2 from "../assets/ResourceDetails/2.png";
import image3 from "../assets/ResourceDetails/3.png";
import image4 from "../assets/ResourceDetails/4.png";
import image5 from "../assets/ResourceDetails/5.png";
import image6 from "../assets/ResourceDetails/6.png";
import image7 from "../assets/ResourceDetails/7.png";
import image8 from "../assets/ResourceDetails/8.png";
import image9 from "../assets/ResourceDetails/9.png";
import image10 from "../assets/ResourceDetails/10.png";
import image11 from "../assets/ResourceDetails/11.png";
import video1 from "../assets/ResourceDetails/video1.mp4";
import video2 from "../assets/ResourceDetails/video2.mp4";
import video3 from "../assets/ResourceDetails/video3.mp4";
import video4 from "../assets/ResourceDetails/video4.mp4";
import video5 from "../assets/ResourceDetails/video5.mp4";
import video6 from "../assets/ResourceDetails/video6.mp4";
import video7 from "../assets/ResourceDetails/video7.mp4";
import video8 from "../assets/ResourceDetails/video8.mp4";
import video9 from "../assets/ResourceDetails/video9.mp4";
import video10 from "../assets/ResourceDetails/video10.mp4";
import video11 from "../assets/ResourceDetails/video11.mp4";

import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const resources = {
  1: {
    title: "Tax Mapping Activities",
    title2:
      "Tax Mapping Activities, collaborative efforts by & beyween NIA Region 1 &  Assessor Aguilar",
    title3: "Discover more by watching this video.",
    description2:
      "Marq is the new name for Lucidpress, rebranded to better reflect its evolving capabilities as a brand templating platform. The core functionalities remain the same, but the rebranding to Marq emphasizes a broader scope in helping businesses maintain brand integrity while empowering teams to create content quickly and easily.",
    description:
      "A design and brand templating platform that allows users to create and manage marketing materials, brochures, flyers and social media graphics.",
    cover: image1,
    //video: "../assets/ResourceDetails/video1.mp4",
    embedCode: `<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100064709975156%2Fvideos%2F412133091407708%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    opener: "Things to know about Tax mapping",
    id: 1,
    question: "What is the purpose of taxmapping?",
    question2: "Other purposes of tax mapping?",
    answer: "It helps identification of affected lots",
    answer2: "Identification of lot owners & Submition of documents",
  },
  2: {
    title: "Venngage",
    title2: "What is Venngage?",
    title3: "Check out the video for more information.",
    description2:
      "Venngage is an online platform that allows users to create infographics, presentations, reports, and other visual content easily. It's designed to be user-friendly, with a wide range of templates, icons, charts, and design tools that help users create professional-looking visuals without needing advanced design skills. Venngage is popular among marketers, educators, and business professionals who want to communicate information in a visually engaging way.",
    description:
      "Learn how to create stunning infographics, presentations, and reports with ease.",
    cover: image2,
    video: "../assets/ResourceDetails/video2.mp4",
    opener: "Some facts for venngage",
    id: 2,
    question: "Does Venngage offer templates that students can use for free?",
    question2: "What makes venngage different from other design apps?",
    answer:
      "Yes, Venngage offers a variety of free templates that students can customize for different projects. While there are also premium templates available, the free options are often enough for creating professional-looking designs for most school assignments.",
    answer2:
      "Venngage excels with real-time collaboration, making it ideal for team projects. It offers educational resources, a freemium model with advanced features for infographics, and supports interactive elements like charts and maps, making it versatile for dynamic content creation.",
  },
  3: {
    title: "Stencil",
    title2: "What is Stencil?",
    title3: "Watch the video to learn more",
    description2:
      "Stencil is an online graphic design tool that allows users to create images and graphics quickly and easily, particularly for social media, blogs, and marketing purposes. It is designed to be user-friendly and accessible, making it ideal for people who may not have extensive design experience.",
    description:
      "A fantastically easy-to-use online graphic design tool and image editor built for business owners, social media marketers, and bloggers.",
    cover: image3,
    video: "../assets/ResourceDetails/video3.mp4",
    opener: "Things you need to know about Stencil",
    question: "How does Stencil make designing pictures fun and easy?",
    question2: "What kinds of designs can you create with Stencil?",
    answer:
      "Stencil makes designing pictures fun and easy by giving you lots of ready-made designs and stickers. You can pick and choose what you like, and just drag and drop them into your picture to make it look great without any hassle.",
    answer2:
      "With Stencil, you can create all kinds of designs, like birthday cards, posters, and social media pictures. It has lots of templates and fun elements you can use to make your designs look amazing!",
  },
  4: {
    title: "Creatopy",
    title2: "What is Creatopy?",
    description2:
      "Creatopy is a design automation platform that helps users create and manage various types of visual content, such as ads, banners, and social media graphics. It offers tools for designing, personalizing, and optimizing creative assets, often integrating features like drag-and-drop editing, template libraries, and collaboration options. It aims to streamline the design process, making it easier for individuals and teams to produce high-quality visual content efficiently.",
    description:
      "Creatopy is an intuitive design platform that simplifies creating engaging ads, social media visuals, and marketing materials.",
    cover: image4,
    video: "../assets/ResourceDetails/video4.mp4",
    opener: "Cool Questions About Creatopy: Fun Facts for Young Designers!",
    question:
      "What makes designing with Creatopy like playing with digital Legos?",
    question2: "How can Creatopy turn you into a design superstar?",
    answer:
      "Designing with Creatopy is like playing with digital Legos because you can easily drag and drop different design pieces into your project. Just like building with Legos, you can mix and match elements to create something unique and fun!",
    answer2:
      "Creatopy can turn you into a design superstar by giving you awesome templates and tools to create eye-catching posters, ads, and more. It’s like having a magic wand for making your designs look amazing and professional!",
  },
  5: {
    title: "Visme",
    title2: "What is Visme?",
    description2:
      "Visme is a versatile online design tool used for creating a wide range of visual content, including presentations, infographics, reports, social media graphics, and more. It offers a user-friendly interface with drag-and-drop functionality, pre-designed templates, and a variety of design elements such as icons, charts, and images. Visme also includes features for data visualization, interactive content, and collaboration, making it a popular choice for individuals and teams looking to create professional and engaging visual content.",
    description:
      "Visme is a versatile design tool that lets you create stunning presentations, infographics, and marketing materials effortlessly.",
    cover: image5,
    video: "../assets/ResourceDetails/video5.mp4",
    opener: "Visme Magic: Fun Facts for Young Creators!",
    question:
      "What’s the coolest thing you can do with Visme for your school projects?",
    question2:
      "What’s a fun feature of Visme that makes your presentations really exciting?",
    answer:
      "With Visme, the coolest thing you can do is create interactive presentations and posters. You can add links, animations, and fun graphics to make your projects really stand out and keep your audience excited!",
    answer2:
      "A fun feature of Visme is that it lets you create interactive and animated designs. You can add cool effects and clickable elements to your presentations and reports, making them come to life like a mini-movie!",
  },
  6: {
    title: "Ceros",
    title2: "What is Ceros?",
    description2:
      "Ceros is a content creation platform designed to help users build interactive and engaging digital experiences, such as presentations, infographics, and marketing content. It provides a range of tools for designing dynamic and visually appealing content without needing extensive coding knowledge. Ceros focuses on creating interactive elements like animations, clickable areas, and embedded media to enhance user engagement. It's often used by marketing teams and designers to create content that stands out and captures audience attention.",
    description:
      "A content creation platform that empowers marketers and designers to create engaging, interactive, and immersive content experiences.",
    cover: image6,
    video: "../assets/ResourceDetails/video6.mp4",
    opener: "Things you should know about Ceros",
    question: "What is Ceros, and why should students learn how to use it?",
    question2: "What makes Ceros stand out from other design tools?",
    answer:
      "Ceros is a tool for creating interactive projects like infographics and presentations without coding. It's great for students because it helps make your work more engaging and builds valuable design skills for future projects or careers.",
    answer2:
      "Ceros is different because it focuses on creating interactive, immersive content without needing any coding skills. Unlike other design tools that are static, Ceros lets you bring your ideas to life with animations, clickable elements, and engaging visuals, all in one easy-to-use platform.",
  },
  7: {
    title: "Foleon",
    title2: "What is Foleon?",
    description2:
      "Foleon is a content creation platform that allows users to create interactive and visually rich digital publications, such as brochures, reports, magazines, and newsletters. It provides a drag-and-drop editor, customizable templates, and tools for incorporating multimedia elements like videos, animations, and interactive features. Foleon is designed to help businesses and organizations produce engaging content that can be easily shared and viewed across devices. It's often used for creating content that combines the narrative power of traditional print media with the interactivity and analytics of digital media.",
    description:
      "Foleon is a content creation platform for designing interactive and visually engaging digital publications with an easy-to-use drag-and-drop editor and customizable templates.",
    cover: image7,
    video: "../assets/ResourceDetails/video7.mp4",
    opener:
      "Cool Stuff You Should Know About Foleon: Making Awesome Digital Projects Fun and Easy!",
    question: "Do I need to know coding to use Foleon?",
    question2: "Can I work on Foleon projects with my friends?",
    answer:
      "Nope! With Foleon, you don’t need to know any coding at all. It’s like a digital craft box where you just drag and drop what you want, making it easy and fun to design awesome projects.",
    answer2:
      "Yes, you can! Foleon makes it easy to team up with your friends on projects. You can all work together online, adding your own ideas to create something amazing as a group.",
  },
  8: {
    title: "Wordpress",
    title2: "What is Wordpress?",
    description2:
      "WordPress is a popular open-source content management system (CMS) that allows users to create and manage websites and blogs easily. It offers a flexible platform for building a wide range of websites, from simple blogs to complex e-commerce sites, without requiring extensive coding knowledge.",
    description:
      "WordPress is a popular content management system that allows users to create and manage websites and blogs with ease.",
    cover: image8,
    video: "../assets/ResourceDetails/video8.mp4",
    opener:
      "Awesome Things You Should Know About WordPress: Building Your Own Website is Easier Than You Think!",
    question: "Can I make my own website with WordPress?",
    question2: "Do I need to be a computer whiz to use WordPress?",
    answer:
      "Absolutely! With WordPress, you can create your own website and make it look just how you want. Whether it’s a blog about your favorite games or a site to show off your art, WordPress makes it fun and easy to build.",
    answer2:
      "Not at all! WordPress is super user-friendly, even if you’re just starting out. You can pick a design, add your words and pictures, and your website is ready to go without needing any special tech skills.",
  },
  9: {
    title: "Emplifi (Formerly Socialbakers)",
    title2: "What is Emplifi?",
    description2:
      "Emplifi is a customer experience platform that provides tools and solutions for businesses to manage and improve their interactions with customers across various digital channels. It combines social media management, customer care, and data analytics to help companies engage with their audiences, deliver better customer service, and make data-driven decisions.",
    description:
      "A digital tool that allows you to easily manage all the profiles you have on social networks in a clear and simple way.",
    cover: image9,
    video: "../assets/ResourceDetails/video9.mp4",
    opener: "Cool Facts About Emplifi: Making Social Media Fun and Easy!",
    question: "How can Emplifi help you with your social media posts?",
    question2:
      "Can Emplifi help you talk to your friends and followers online?",
    answer:
      "Emplifi is like a super helper for your social media! It makes it easy to manage all your posts and see how people are liking them. It can even help you make your posts look cool and catch more eyes, so your friends and followers will be super impressed!",
    answer2:
      "Yes! Emplifi helps you chat with your friends and followers all in one place. It’s like having a super smart friend who keeps track of all your messages and helps you respond quickly!",
  },
  10: {
    title: "Microsoft Teams",
    title2: "What is Microsoft Teams?",
    description2:
      "Microsoft Teams is a collaboration and communication platform developed by Microsoft, designed to facilitate teamwork in organizations. It offers a range of tools and features to help teams collaborate effectively, whether they are working in the same office or remotely.",
    description:
      "A collaboration platform that integrates chat, video meetings, and file sharing to streamline team communication and productivity.",
    cover: image10,
    video: "../assets/ResourceDetails/video10.mp4",
    opener:
      "Ready to test your Microsoft Teams know-how? Let’s dive into some fun and essential questions about this powerful collaboration tool!",
    question:
      "What’s the coolest thing you can do with Microsoft Teams during a school project?",
    question2:
      "What makes Microsoft Teams the ultimate playground for learning?",
    answer:
      "The coolest thing? You can have a virtual hangout with your classmates! Imagine chatting, video calling, and even working on the same document together—just like you're in the same room, even if you're miles apart. It’s like a super fun group study session, but online!",
    answer2:
      "Microsoft Teams is like a digital playground where learning becomes an adventure! You can explore different channels for each subject, play with apps and tools to create awesome projects, and even meet up with your classmates online. It turns schoolwork into a game where everyone wins!",
  },
  11: {
    title: "Google Classroom",
    title2: "What is Google Classroom?",
    description2:
      "Google Classroom is a free online learning management system (LMS) developed by Google, designed to help teachers create, distribute, and manage assignments, and communicate with students. It is part of Google's suite of tools for education, and it integrates seamlessly with other Google services like Google Drive, Docs, Sheets, and Slides.",
    description:
      "Google Classroom is an educational platform that simplifies assignment management, communication, and collaboration between teachers and students.",
    cover: image11,
    video: "../assets/ResourceDetails/video11.mp4",
    opener: "Ready to explore the ins and outs of Google Classroom?",
    question: "What’s cool about getting feedback in Google Classroom?",
    question2: "Why is Google Classroom great for learning on the go?",
    answer:
      "Teachers can give you instant feedback on your work, so you know right away how you’re doing and what to improve.",
    answer2:
      "You can access Google Classroom from any device with an internet connection, so you can stay on top of your schoolwork whether you’re at home or out and about.",
  },
};

const ResourceDetail = () => {
  const { id } = useParams();
  const resource = resources[id] || {
    title: "Not Found",
    description: "Resource not found.",
    video: "",
    cover: "",
  };

  const getVideoSrc = () => {
    switch (id) {
      case "1":
        return video1;
      case "2":
        return video2;
      case "3":
        return video3;
      case "4":
        return video4;
      case "5":
        return video5;
      case "6":
        return video6;
      case "7":
        return video7;
      case "8":
        return video8;
      case "9":
        return video9;
      case "10":
        return video10;
      case "11":
        return video11;
    }
  };

  const videoSrc = getVideoSrc();

  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // para nasa taas pag click ng kwan
  }, []);

  return (
    <div className="mt-9">
      <h1 className="text-2xl font-bold mb-4 mt-4 pt-4 text-center">
        {resource.title2}
      </h1>
      {/* tanggal muna neto
      <div className="flex flex-col md:flex-row mt-20 px-10 mx-7 gap-y-8">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          {resource.cover && (
            <img
              src={resource.cover}
              alt={resource.title}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <p className="text-center font-semibold mx-4 md:mx-9">
            {resource.description2}
          </p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-4 pt-4 text-center">
        {resource.title3}
      </h1>
      <div className="player-wrapper mx-4 mt-20 flex object-center justify-center">
        <video controls width="700px">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div> */}
      <div
        dangerouslySetInnerHTML={{ __html: resource.embedCode }}
        className="player-wrapper mx-4 mt-20 flex object-center justify-center"
      />

      <div className="w-89% m-auto max-w-[1400px] bg-gray-400 p-8 rounded-lg shadow-md mt-40">
        <h2 className="2xl mb-6 font-semibold">{resource.opener}</h2>
        <div className="mb-4 last:mb-0">
          <button
            className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
            onClick={() =>
              setActiveQuestion(
                activeQuestion === `question1-${resource.id}`
                  ? null
                  : `question1-${resource.id}`
              )
            }
          >
            {resource.question}
            {activeQuestion === `question1-${resource.id}` ? (
              <FaMinusCircle />
            ) : (
              <FaPlusCircle />
            )}
          </button>
          <AnimatePresence>
            {activeQuestion === `question1-${resource.id}` && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-600"
              >
                <p>{resource.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            className="w-full text-left text-xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center mt-4"
            onClick={() =>
              setActiveQuestion(
                activeQuestion === `question2-${resource.id}`
                  ? null
                  : `question2-${resource.id}`
              )
            }
          >
            {resource.question2}
            {activeQuestion === `question2-${resource.id}` ? (
              <FaMinusCircle />
            ) : (
              <FaPlusCircle />
            )}
          </button>
          <AnimatePresence>
            {activeQuestion === `question2-${resource.id}` && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 text-gray-600"
              >
                <p>{resource.answer2}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;
