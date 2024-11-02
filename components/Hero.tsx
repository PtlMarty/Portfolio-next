"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

const Hero = () => {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center relative">
      <div className="flex w-full h-full relative z-10 items-center px-8">
        {/* Profile section */}
        <div className="w-1/4 flex flex-col justify-center items-center h-full mr-2">
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
        {/* Content section */}
        <div className="w-3/4 flex justify-evenly items-center h-full w-full">
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
