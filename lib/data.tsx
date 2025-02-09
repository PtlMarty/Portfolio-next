import { Button } from "@/components/ui/button";
import Link from "next/link";

export const projetData = [
  {
    cardImage: "/road_driving.jpg",
    cardTitle: "Restaurant Helper",
    cardDescription:
      "Web application that helps Shops owners to manage their order, inventory, suppliers.",
    cardFooter: (
      <Button className="hover:scale-110 transition-transform duration-300">
        <Link
          className="font-semibold"
          href="https://supply-chain-snowy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View [On Progress]
        </Link>
      </Button>
    ),
  },
  {
    cardImage: "/kitakits_img.jpg",
    cardTitle: "Kitakits",
    cardDescription:
      "Kitakits is a web application that allows you to find experienced people on a subject.",
    cardFooter: (
      <Button className="hover:scale-110 transition-transform duration-300">
        <Link
          className="font-semibold"
          href="https://kitakitsme-9f2c7f35760b.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </Link>
      </Button>
    ),
  },
  {
    cardImage: "/dyonisus_img.jpg",
    cardTitle: "Dyonisus",
    cardDescription:
      "Dyonisus is a web application that allows you to find private sommeliers at home.",
    cardFooter: (
      <Button className="hover:scale-110 transition-transform duration-300">
        <Link
          className="font-semibold"
          href="https://dionysus-ptlmarty-bdaa44666ef5.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </Link>
      </Button>
    ),
  },
];

export const skillsData = [
  {
    src: "/Typescript_logo.svg",
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
    src: "/Tailwind_CSS_Logo.svg",
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
  { src: "/GraphQL_Logo.svg", alt: "graphQL logo", width: 70, height: 70 },
  { src: "/Git_logo.svg", alt: "git logo", width: 120, height: 120 },
  { src: "/Figma_logo.svg", alt: "figma logo", width: 50, height: 50 },
];
