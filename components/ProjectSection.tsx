import CardItems from "./CardItems";

const ProjectSection = () => {
  return (
    <section id="skills">
      <div className="flex gap-2 justify-evenly bg-transparent">
        <CardItems
          cardTitle="Easy Driving"
          classname="w-[300px] h-[200px] items-center flex flex-col"
          logoHeight={100}
          logoWidth={100}
          cardContent="Easy Driving est une application web qui permet de trouver des conducteur prive de chez vous."
        />
        <CardItems
          cardTitle="Kitakits"
          classname="w-[300px] h-[200px] items-center flex flex-col"
          logoHeight={100}
          logoWidth={100}
          cardContent="Kitakits est une application web qui permet de trouver des personnes experimente sur un sujet."
        />
        <CardItems
          cardTitle="Dyonisus"
          classname="w-[300px] h-[200px] items-center flex flex-col"
          cardContent="Dyonisus est une application web qui permet de trouver des sommelier prive a domicile."
          logoHeight={100}
          logoWidth={100}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
