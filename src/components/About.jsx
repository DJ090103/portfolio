import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import reactLogo from "../assets/tech/reactjs.png";
import jslogo from "../assets/tech/javascript.png";
import csslogo from "../assets/tech/css.png";
import htmllogo from "../assets/tech/html.png";
import pythonlogo from "../assets/tech/python.png";
import mongoLogo from "../assets/tech/mongodb.png";
import nodejslogo from "../assets/tech/nodejs.png";
import githublogo from "../assets/github.png";
import gitlogo from "../assets/tech/git.png";
import vscodeLogo from "../assets/tech/vscode.png";
import phplogo from "../assets/tech/php.png";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Skill Data
const frontendSkills = [
  { title: "HTML", icon: htmllogo },
  { title: "CSS", icon: csslogo },
  { title: "JavaScript", icon: jslogo },
  { title: "React.js", icon: reactLogo },
];

const backendSkills = [
  { title: "PHP", icon: phplogo },
  { title: "MongoDB", icon: mongoLogo },
  { title: "MySQL", icon: "/icons/mysql.png" },
  { title: "Node.js", icon: nodejslogo },
  { title: "Express.js", icon: "/icons/expressjs.png" },
];

const tools = [
  { title: "Git", icon: gitlogo },
  { title: "GitHub", icon: githublogo },
  { title: "VS Code", icon: vscodeLogo },
];

// Skill Badge (no Tilt)
const SkillBadge = ({ title, icon }) => (
  <div className="flex flex-col items-center w-[80px] sm:w-[100px]">
    <img
      src={icon}
      alt={title}
      className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2"
    />
    <p className="text-white text-sm text-center">{title}</p>
  </div>
);

const TiltSkillSection = ({ title, skills }) => {
  const maxItems = 6;
  const paddedSkills =
    skills.length < maxItems
      ? [...skills, ...Array(maxItems - skills.length).fill({ title: "", icon: "" })]
      : skills;

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="w-full md:w-[30%] mb-12"
    >
      <Tilt className="w-full">
        <div className="bg-tertiary p-6 sm:p-8 rounded-[20px] shadow-card hover:shadow-xl transition-shadow duration-300 h-full">
          <h3 className="text-white text-[22px] font-bold mb-6">{title}</h3>
          <div className="grid grid-cols-3 gap-4">
            {paddedSkills.map((skill, index) =>
              skill.title ? (
                <SkillBadge key={`${title}-${skill.title}`} {...skill} />
              ) : (
                <div key={`${title}-empty-${index}`} className="w-[80px] sm:w-[100px] h-[80px] opacity-0" />
              )
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="mt-16 flex flex-col md:flex-row justify-center items-stretch gap-8">
        <TiltSkillSection title="Frontend" skills={frontendSkills} />
        <TiltSkillSection title="Backend" skills={backendSkills} />
        <TiltSkillSection title="Tools" skills={tools} />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");