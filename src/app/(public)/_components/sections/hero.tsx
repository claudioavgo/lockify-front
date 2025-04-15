"use client";

import { config } from "@/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <div className="w-full flex flex-col gap-8 items-center justify-center px-6 py-10 xl:max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h1 className="text-6xl text-center font-bold font-serif">{config.public.hero.title}</h1>
          <p className="text-muted-foreground text-center text-xl w-3/5">{config.public.hero.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <Button size="xl">Crie sua conta agora!</Button>
        </motion.div>
        <HeroImage />
      </div>
    </section>
  );
}

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-96 rounded-xl overflow-hidden border"
    >
      <Image alt="Background" src={"/image.png"} fill />
    </motion.div>
  );
}
