import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { config } from "@/config";
import Image from "next/image";

export default function Bento() {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-full gap-8 flex flex-col xl:max-w-5xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">{config.public.bento.title}</h2>
          <p className="text-muted-foreground">{config.public.bento.description}</p>
        </div>
        <AnimatedGroup preset="scale" className="grid auto-rows-auto md:grid-cols-3 gap-4">
          {config.public.bento.items.map((item, i) => (
            <BentoItem key={i} {...item} />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

interface BentoItem {
  title: string;
  description: string;
  image?: string;
}

const BentoItem = ({ title, description, image }: BentoItem) => {
  return (
    <div className="row-span-1 rounded-xl border p-4 flex flex-col">
      <div className="mb-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {image && (
        <div className="mt-auto relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}