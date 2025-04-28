import Image from "next/image";
import Navbar from "./ui/navigation";
import Hero from "./ui/hero";

export default function Home() {
  return (
    <div>
      <div className="mt-5 w-full h-24">
      <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
    </div>
  );
}
