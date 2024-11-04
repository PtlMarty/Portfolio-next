import { Button } from "@/components/ui/button";
import Link from "next/link";

export const projetData = [
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

export const skillsData = [
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
  {
    src: "/Javascript_logo.svg",
    alt: "JavaScript logo",
    width: 70,
    height: 70,
  },
  { src: "/HTML_logo.svg", alt: "HTML logo", width: 70, height: 70 },
  { src: "/CSS_logo.svg", alt: "CSS logo", width: 70, height: 70 },
  {
    src: "/Tailwind_CSS_logo.svg",
    alt: "Tailwind CSS logo",
    width: 70,
    height: 70,
  },
];

export const toolsSkillsData = [
  { src: "/Heroku_logo.svg", alt: "Heroku logo", width: 120, height: 120 },
  {
    src: "/postgresql-logo.svg",
    alt: "postgreSQL logo",
    width: 70,
    height: 70,
  },
  { src: "/GraphQL_logo.svg", alt: "graphQL logo", width: 70, height: 70 },
  { src: "/Git_logo.svg", alt: "git logo", width: 120, height: 120 },
  { src: "/Figma_logo.svg", alt: "figma logo", width: 50, height: 50 },
];
