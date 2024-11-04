"use client";

import { projetData } from "@/lib/data";
import { CardProps } from "@/lib/types";
import CardItems from "./CardItems";

// TODO Add an image to each project
// TODO Add a link to the project page on each card
// TODO Add an animation when the cursor hovers over a card

const ProjectSection = ({ projectData }: { projectData?: CardProps[] }) => {
  const localData = projectData || projetData;
  return (
    <section id="skills">
      <div className="flex gap-2 justify-evenly  m-4">
        {localData.map((project: CardProps, index: number) => (
          <CardItems
            key={index}
            {...project}
            classname="p-4 flex flex-col gap-3 items-center"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
