"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import MenuList from "./MenuList";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

const Hero = () => {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <section className="w-full h-screen flex flex-col md:flex-row justify-center items-center relative">
      {/* Profile and navigation section */}
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center p-4 md:p-8  md:h-full">
        <Image
          className="rounded-full"
          src="/profile_img.jpeg"
          alt="Profile picture"
          width={200} // Adjusted size for mobile
          height={200}
        />
        <h3 className="text-lg md:text-xl font-bold mt-4">PORTAL MARTIN</h3>
        <p className="text-gray-600 text-sm md:text-base">
          Fullstack Web Developer
        </p>
        <MenuList onSectionChange={handleSectionChange} />
        <Contact />
      </div>

      {/* Vertical separator line for larger screens */}
      <div className="hidden md:block h-full w-[2px] bg-gray-300"></div>

      {/* Content section that changes based on navigation */}
      <div className="w-full md:w-3/4 flex justify-center md:justify-start items-center p-4 h-full overflow-auto">
        <AnimatePresence mode="wait">
          {currentSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }}
              className="w-full max-h-full overflow-y-auto"
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
              className="w-full max-h-full overflow-y-auto"
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
              className="w-full max-h-full overflow-y-auto"
            >
              <ProjectSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
