import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { config } from "@/config";

export default function FAQ() {
  return (
    <section className="w-full flex items-center justify-center py-20">
      <div className="w-full xl:max-w-5xl">
        <h2 className="text-4xl font-bold">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {config.public.faq.map((faq, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}