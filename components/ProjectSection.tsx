"use client";

import Link from "next/link";
import CardItems from "./CardItems";
import { Button } from "./ui/button";

const ProjectSection = () => {
  const projetData = [
    {
      cardTitle: "Easy Driving",
      cardDescription:
        "Easy Driving est une application web qui permet de trouver des conducteur prive de chez vous.",
      cardFooter: (
        <>
          <Button>
            <Link href="https://easy-driving.com">View</Link>
          </Button>
        </>
      ),
    },
    {
      cardTitle: "Kitakits",
      cardDescription:
        "Kitakits est une application web qui permet de trouver des personnes experimente sur un sujet.",
      cardFooter: (
        <>
          <Button>
            <Link href="https://easy-driving.com">View</Link>
          </Button>
        </>
      ),
    },
    {
      cardTitle: "Dyonisus",
      cardDescription:
        "Dyonisus est une application web qui permet de trouver des sommelier prive a domicile.",
      cardFooter: (
        <>
          <Button>
            <Link href="https://easy-driving.com">View</Link>
          </Button>
        </>
      ),
    },
  ];

  // TODO Ajouter une image sur chaque projet
  // TODO Ajouter un lien vers la page du projet sur chaque carte
  // TODO Ajouter une animation lorsque le curseur passe sur une carte

  return (
    <section id="skills">
      <div className="flex gap-2 justify-evenly  m-4">
        {projetData.map((project, index) => (
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
