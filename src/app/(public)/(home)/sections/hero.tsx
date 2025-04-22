"use client";

import { config } from "@/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col gap-12 items-center justify-center xl:max-w-5xl">
        <HeroHeader title={config.public.hero.title} description={config.public.hero.description} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Button size="xl">Crie sua conta agora!</Button>
        </motion.div>
        <HeroImage />
      </motion.div>
    </section >
  );
}

const HeroHeader = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-6xl text-center font-bold font-serif">{title}</h1>
      <p className="text-muted-foreground text-center text-xl md:w-3/5">{description}</p>
    </div>
  );
}

const HeroImage = () => {
  return (
    <div className="relative w-full h-[30rem] rounded-xl overflow-hidden border">
      <Image alt="Background" src={"/image.png"} fill />
      <h1 className="font-light text-4xl absolute inset-0 flex items-end justify-center p-4 text-white text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h1>
    </div>
  );
}
