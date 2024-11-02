// pages/index.js (or index.tsx for TypeScript)
import Hero from "@/components/Hero";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={300}
        ease={50}
        staticity={10}
        color={"#3ac58f"}
        size={2}
        refresh
      />

      {/* Top horizontal line */}
      {/* <div className="w-full h-[2px] bg-gray-300"></div> */}

      {/* Hero component */}
      <Hero />

      {/* Bottom horizontal line */}
      {/* <div className="w-full h-[2px] bg-gray-300"></div> */}
    </div>
  );
}
