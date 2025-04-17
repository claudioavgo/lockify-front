import FAQ from "./_components/sections/faq";
import Hero from "./_components/sections/hero";
import Bento from "./_components/sections/bento";
import CTA from "./_components/sections/cta";
import HIW from "./_components/sections/hiw";
import Line from "@/components/style/line";

export default function Home() {
  return (
    <main>
      <Hero />
      <Line style="dashed" className="xl:max-w-5xl mx-auto" />
      <Bento />
      <Line style="dashed" className="xl:max-w-5xl mx-auto" />
      <HIW />
      <Line style="dashed" className="xl:max-w-5xl mx-auto" />
      <CTA />
      <Line style="dashed" className="max-w-5xl mx-auto" />
      <FAQ />
    </main>
  );
}
