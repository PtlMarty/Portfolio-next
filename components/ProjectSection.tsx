"use client";

import { projetData } from "@/lib/data";
import { CardProps } from "@/lib/types";
import CardItems from "./CardItems";

const ProjectSection = ({ projectData }: { projectData?: CardProps[] }) => {
  const localData = projectData || projetData;

  return (
    <section id="projects">
      <div className="flex flex-wrap gap-8 m-4 justify-center">
        {localData.map((project: CardProps, index: number) => (
          <CardItems
            key={index}
            cardTitle={project.cardTitle}
            cardImage={project.cardImage} // Pass the image URL
            cardDescription={project.cardDescription}
            cardClass="flex flex-col items-center font-bold size-96 justify-between m-auto text-center bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
            titleClass="text-2xl text-primary font-bold bg-opacity-80 w-full p-4 bg-white"
            contentClass="text-lg"
            descriptionClass="text-lg p-4 text-white bg-opacity-50 bg-gray-500"
            footerClass="text-lg"
            cardFooter={project.cardFooter}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
