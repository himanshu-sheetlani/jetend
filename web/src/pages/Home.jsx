import Hero from "../components/Hero";
import Trust from "../components/Trust";
import CodeComparison from "../components/CodeComparison";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="flex flex-col w-full z-10">
      <Hero />
      <Trust />
      <CodeComparison />
      <Features />
    </div>
  );
}
