import { skillsData, toolsSkillsData } from "@/lib/data";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full flex flex-col items-center px-4">
      {/* Skills section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      <div className="w-full h-[2px] bg-gray-300 my-8"></div>

      {/* Tools section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {toolsSkillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
