import FAQ from "./_components/sections/faq";
import Hero from "./_components/sections/hero";
import Bento from "./_components/sections/bento";
import CTA from "./_components/sections/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Bento />
      <CTA />
      <FAQ />
    </main>
  );
}
