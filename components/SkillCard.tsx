import { SkillTypes } from "@/lib/types";
import Image from "next/image";
import CardItems from "./CardItems";

const SkillCard = ({ src, alt, width, height }: SkillTypes) => (
  <CardItems
    cardClass="flex flex-col items-center border-none shadow-none justify-center w-full p-4 bg-transparent" // Added bg-transparent
    cardContent={
      <>
        <Image src={src} alt={alt} width={width} height={height} />
      </>
    }
  />
);

export default SkillCard;
