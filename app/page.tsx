// pages/index.js (or index.tsx for TypeScript)
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-200">
      {/* Top horizontal line */}
      <div className="w-full h-[2px] bg-gray-300"></div>

      {/* Hero component */}
      <Hero />

      {/* Bottom horizontal line */}
      <div className="w-full h-[2px] bg-gray-300"></div>
    </div>
  );
}
