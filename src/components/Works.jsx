import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const projects = [
  {
    title: "Live Stream",
    description:
      "This is a fully functional, modern web platform that enables live streaming and video calling experiences with real-time chat capabilities. Built using Next.js and styled with Tailwind CSS, the platform integrates Clerk for seamless user authentication and Stream.io SDK to power real-time video, voice, and messaging",
    demoLink: "https://live-stream-kzei.vercel.app/",
    iframeLink: "./desktop_pc/image.png",
  },
  {
    title: "frontend",
    description:
      "this project is a modern, scalable frontend architecture built using React and React Router DOM v6+, designed with performance and maintainability in mind. It features dynamic routing, code splitting using React.lazy, and a modular folder structure. Shared layouts are implemented using Outlet, and the application is styled with Tailwind CSS for a clean, responsive UI.",
    demoLink: "https://react-six-rho-55.vercel.app/",
    iframeLink: "https://react-six-rho-55.vercel.app/",
  },
  {
    title: "YouTube Clone",
    description:
      "A clone of YouTube using the YouTube API. Features video search, play, and responsive UI.",
    demoLink: "https://youtube-pi-five.vercel.app/",
    iframeLink: "https://youtube-pi-five.vercel.app/",
  },
  {
    title: "Classes Website",
    description:
      "Educational institute landing page. Includes course info, contact form, and modern UI.",
    demoLink: "https://classes-website.vercel.app/",
    iframeLink: "https://classes-website.vercel.app/",
  },
  {
    title: "Car Repair Services",
    description:
      "Car repair company site with service listings, booking form, and contact options.",
    demoLink: "https://car-repair-services.vercel.app/",
    iframeLink: "https://car-repair-services.vercel.app/",
  },
];

const Works = () => {
  return (
    <>
      {/* Header Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Intro Text */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-full md:max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples. Each
          project includes a live demo and reflects my ability to solve complex problems, work with
          various technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-2 gap-10 '>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            className="border border-indigo-800 rounded-xl p-4 shadow-md bg-indigo-950 flex flex-col"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-sm md:text-[15px] text-white mb-3">{project.description}</p>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mb-2 inline-block"
            >
              View Live
            </a>
            <div className='w-full h-[300px] overflow-hidden rounded-md border'>
              <iframe
                src={project.iframeLink}
                title={project.title}
                className='w-full h-full '
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
