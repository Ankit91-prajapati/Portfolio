import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // optional styling
import { SectionWrapper } from "../hoc"; // optional HOC wrapper
import { fadeIn, textVariant } from "../utils/motion"; // optional animation

const experiences = [
  {
    title: "web Developer Intern",
    company: "Xpertstim IT Services Pvt. Ltd.",
    duration: "Jun 2025 - Jul 2025",
    description:
      "Developed the front-end of a classes-website using React and Tailwind and also Cars repair and services website using HTML ,CSS ,javacsript , jQuery. Recreated added routing, and deployed the project on Vercel.",
  },
 
];

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-gradient-to-r from-indigo-100 to-blue-200 border border-gray-200 p-6 rounded-xl shadow-md"

  >
    <h3 className="text-xl font-semibold text-blue-600">{experience.title}</h3>
    <p className="text-gray-800 font-medium">{experience.company}</p>
    <p className="text-gray-500 text-sm mb-3">{experience.duration}</p>
    <p className="text-gray-700 text-sm">{experience.description}</p>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience"); // Remove wrapper if not needed
