import Image from "next/image";
import CardItems from "./CardItems";

declare interface SkillTypes {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const SkillCard = ({ src, alt, width, height }: SkillTypes) => (
  <CardItems
    classname="flex flex-col items-center border-none shadow-none justify-center w-full p-4 bg-transparent" // Added bg-transparent
    cardContent={
      <>
        <Image src={src} alt={alt} width={width} height={height} />
      </>
    }
  />
);

export default SkillCard;
