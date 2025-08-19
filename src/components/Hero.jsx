import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content */}
      <div
        className={`
          absolute inset-0
          pt-[90px] xs:pt-[100px] sm:pt-[120px]
          max-w-7xl mx-auto
          ${styles.paddingX}
          flex flex-row items-start gap-5 z-20
        `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I am{" "}
            <span className="text-[#915EFF] inline-flex">
              {"DHIRAJ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 text-white-50 max-w-3xl`}>
            I'm a software developer experienced in JavaScript and frameworks like React and Node.js. <br className="sm:block hidden" />
            I've worked on real-world React projects, integrating MongoDB for backend storage and using Python FastAPI to create APIs — even for PHP-based systems. <br className="sm:block hidden" />
            I build fast, scalable, and user-friendly web solutions tailored to your needs.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 bg-[#915EFF] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#7a48e3] transition duration-300"
          >
            Check Resume
          </a>
        </div>
      </div>

      {/* 3D Model Canvas - Desktop: Right side, Mobile: Below text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Desktop Layout */}
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-3/5">
          <ComputersCanvas />
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90vw] xs:w-4/5 h-[30vw] xs:h-2/5 max-w-[400px]">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-5 bottom-5 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;