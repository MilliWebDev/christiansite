import Image from "next/image";
import Navbar from "./ui/navigation";
import Hero from "./ui/hero";
import Card from "./ui/cards";
import SectionDivider from "./ui/divider";  

export default function Home() {
  return (
    <div>
      <div className="mt-5 w-full h-24">
      <Navbar />
      </div>
      <div className="">
        <Hero />
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Construction de Maisons"
            description="Construisez la maison de vos rêves avec notre équipe d'experts."
            image="/hero/hero.jpg"
            buttonText="En savoir plus"
          />
          <Card
            title="Rénovation Commerciale"
            description="Transformez votre espace de travail avec nos services de rénovation."
            image="/hero/hero.jpg"
            buttonText="En savoir plus"
          />
          <Card
            title="Aménagement Paysager"
            description="Créez un extérieur magnifique avec nos services d'aménagement paysager."
            image="/hero/hero.jpg"
            buttonText="En savoir plus"
          />
        </div>
      </div>
      <div className="w-full">
        <SectionDivider flip={false} color="black" />
      </div>
      <Card
            title="Aménagement Paysager"
            description="Créez un extérieur magnifique avec nos services d'aménagement paysager."
            image="/hero/hero.jpg"
            buttonText="En savoir plus"
          />
    </div>
  );
}
