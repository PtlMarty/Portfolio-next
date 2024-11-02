import Image from "next/image";
import CardItems from "./CardItems";
import { Progress } from "./ui/progress";

const SkillsSection = () => {
  return (
    <>
      <section id="skills">
        <div className="flex gap-6 flex-wrap justify-evenly bg-transparent">
          <CardItems
            cardTitle="Javascript"
            // classname="w-[200] h-[200px] items-center flex gap-3 flex-col"
            cardContent={
              <>
                <Image
                  src="/Javascript_logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
                <Progress value={80} className="mt-2" />
              </>
            }
          />

          <CardItems
            cardTitle="Ruby"
            // classname="w-[200] h-[200px] items-center flex flex-col"
            cardContent={
              <Image src="/Ruby_logo.svg" alt="logo" width={100} height={100} />
            }
            logoHeight={100}
            logoWidth={100}
          />
          <CardItems
            cardTitle="React"
            // classname="w-[200] h-[200px] items-center flex flex-col"
            cardContent={
              <Image
                src="/React_logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            }
            logoHeight={100}
            logoWidth={100}
          />
          <CardItems
            cardTitle="TypeScript"
            // classname="w-[200] h-[200px] items-center flex flex-col"
            cardContent={
              <Image
                src="/TypeScript_logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
            }
            logoHeight={100}
            logoWidth={100}
          />
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
