// pages/index.tsx

import Hero from "@/components/Hero";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 w-full h-full -z-10" // Particles are behind everything else
        quantity={400}
        ease={50}
        staticity={10}
        color="#3ac58f"
        size={2}
        refresh
      />

      {/* Hero component */}
      <div className="relative z-10 w-full h-full overflow-y-auto bg-transparent">
        <Hero />
      </div>
    </div>
  );
}
