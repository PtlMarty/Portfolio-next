"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import Particles from "./ui/particles";

const Hero = () => {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <section className="bg-white w-full h-[70vh] flex flex-col justify-center items-center relative">
      <div className="flex w-full h-full relative z-10">
        <Particles
          className="absolute top-0 left-0 w-full h-full"
          quantity={300}
          ease={10}
          staticity={100}
          color={"#3ac58f"}
          size={2}
          refresh
        />

        <div className="w-1/3 flex flex-col justify-center items-center h-full mr-2 z-10">
          <Image
            className="rounded-full"
            src="/profile_img.jpeg"
            alt="Profile picture"
            width={250}
            height={250}
          />
          <h3 className="text-xl font-bold mt-4">PORTAL MARTIN</h3>
          <p className="text-gray-600">Fullstack Web Developer</p>
          <Header onSectionChange={handleSectionChange} />
          <Contact />
        </div>

        {/* Vertical separator line */}
        <div className="h-full w-[2px] bg-gray-300"></div>

        {/* Conditionally render based on current section */}
        <div className="w-2/3 flex justify-center items-center h-full z-10">
          <AnimatePresence mode="wait">
            {currentSection === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }} // Custom easing
              >
                <About />
              </motion.div>
            )}
            {currentSection === "skillsSection" && (
              <motion.div
                key="skillsSection"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }}
              >
                <SkillsSection />
              </motion.div>
            )}
            {currentSection === "projectSection" && (
              <motion.div
                key="projectSection"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }}
              >
                <ProjectSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
