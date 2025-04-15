import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { config } from "@/config";
import Image from "next/image";

export default function Bento() {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-full gap-8 flex flex-col xl:max-w-5xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{config.public.bento.title}</h2>
          <p className="text-muted-foreground text-lg">{config.public.bento.description}</p>
        </div>
        <AnimatedGroup preset="scale" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.public.bento.items.map((item, i) => (
            <BentoCard key={i} {...item} />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

interface RecursoItem {
  title: string;
  description: string;
  image?: string;
}

const BentoCard = ({ title, description, image }: RecursoItem) => {
  return (
    <div className="rounded-xl border p-6 flex flex-col h-full">
      {image && (
        <div className="mb-4 relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}