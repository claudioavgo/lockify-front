import { config } from "@/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <div className="w-full flex flex-col gap-8 items-center justify-center px-6 py-10 xl:max-w-5xl">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-6xl text-center font-bold font-serif">{config.public.hero.title}</h1>
          <p className="text-muted-foreground text-center text-xl w-3/4">{config.public.hero.description}</p>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Button size="xl">Crie sua conta agora!</Button>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

const HeroImage = () => {
  return (
    <section className="relative w-full h-96 rounded-4xl overflow-hidden">
      <Image alt="Background" src={"/image.png"} fill />
    </section>
  );
}
