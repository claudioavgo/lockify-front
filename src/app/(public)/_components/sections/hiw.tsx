'use client'

import { config } from "@/config";
import { useState } from "react";
import { motion } from "motion/react";

export default function HIW() {
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  }

  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-full xl:max-w-5xl flex flex-col gap-8">
        <HIWHeader title={config.public.hiw.title} description={config.public.hiw.description} />
        <div className="flex flex-col gap-4">
          {config.public.hiw.items.map((item, index) => (
            <HIWItem key={index} {...item} isActive={active === index} handleActive={handleActive} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface HIWItem {
  title: string;
  description: string;
  isActive: boolean;
  handleActive: (index: number) => void;
  index: number;
}

const HIWItem = ({ title, description, isActive, handleActive, index }: HIWItem) => {
  return (
    <motion.div
      onClick={() => handleActive(index)}
      className={`flex flex-col gap-2 p-6 rounded-xl border hover:cursor-pointer ${!isActive ? "" : ""}`}
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.h3 layout className="text-2xl font-bold">{title}</motion.h3>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-muted-foreground text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
}

const HIWHeader = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}