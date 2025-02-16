"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import MenuList from "./MenuList";
import Profile from "./Profile";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

type SectionType = "about" | "skillsSection" | "projectSection";

const sectionVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

const Hero = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>("about");

  const handleSectionChange = (section: SectionType) => {
    setCurrentSection(section);
  };

  const renderSection = (key: string, component: React.ReactNode) => (
    <motion.div
      key={key}
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }}
      className="w-full p-2"
    >
      {component}
    </motion.div>
  );

  return (
    <section className="w-full h-screen flex flex-col md:flex-row justify-start items-center relative">
      {/* Profile section */}
      <div className="flex flex-col items-center justify-center w-screen md:w-1/4  mt-3 gap-3">
        <Profile
          classname="flex flex-col justify-center items-center p-2 w-full"
          imgClass="rounded-full"
        />

        <MenuList onSectionChange={handleSectionChange} />
        <Contact />
      </div>

      {/* Vertical separator line for larger screens */}
      <div className="hidden md:block h-full w-[2px] bg-gray-300"></div>

      {/* Content section that changes based on navigation */}
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center  z-10">
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {currentSection === "about" && renderSection("about", <About />)}
            {currentSection === "skillsSection" &&
              renderSection("skillsSection", <SkillsSection />)}
            {currentSection === "projectSection" &&
              renderSection("projectSection", <ProjectSection />)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
