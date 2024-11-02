import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const skillsData = [
    {
      src: "/Javascript_logo.svg",
      alt: "JavaScript logo",
      width: 70,
      height: 70,
    },
    {
      src: "/TypeScript_logo.svg",
      alt: "TypeScript logo",
      width: 70,
      height: 70,
    },
    { src: "/nextjs_logo.svg", alt: "Next.js logo", width: 70, height: 70 },
    { src: "/React_logo.svg", alt: "React logo", width: 70, height: 70 },
    { src: "/Ruby_logo.svg", alt: "Ruby logo", width: 70, height: 70 },
    { src: "/rails_logo.svg", alt: "Rails logo", width: 110, height: 110 },
    { src: "/CSS_logo.svg", alt: "CSS logo", width: 70, height: 70 },
    { src: "/HTML_logo.svg", alt: "HTML logo", width: 70, height: 70 },
    {
      src: "/Tailwind_CSS_logo.svg",
      alt: "Tailwind CSS logo",
      width: 70,
      height: 70,
    },
  ];

  const toolsSkillsData = [
    { src: "/Heroku_logo.svg", alt: "Heroku logo", width: 120, height: 120 },
    {
      src: "/postgresql-logo.svg",
      alt: "postgreSQL logo",
      width: 70,
      height: 70,
    },

    { src: "/GraphQL_logo.svg", alt: "graphQL logo", width: 120, height: 120 },
    { src: "/Git_logo.svg", alt: "git logo", width: 120, height: 120 },
    { src: "/Figma_logo.svg", alt: "figma logo", width: 50, height: 50 },
  ];

  return (
    <section id="skills" className="w-full items-center">
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 3 px-4 mt-6">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>

      <div className="w-full h-[2px] bg-gray-300 my-8"></div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 3 px-4">
          {toolsSkillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;