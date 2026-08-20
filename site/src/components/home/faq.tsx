import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";

export const FAQ_ITEMS = [
  {
    question: "Can NRIs and foreign nationals buy property in Goa?",
    answer:
      "NRIs and OCI cardholders can freely buy residential and commercial property in India, including Goa, under RBI/FEMA guidelines. Foreign nationals who are not of Indian origin generally cannot buy property directly, but can explore long-term leasehold structures. AB Realty guides UAE and UK-based buyers through the correct route for their status.",
  },
  {
    question: "What are the best areas to invest in North Goa?",
    answer:
      "Candolim, Calangute, Guirim, Pilerne and Siolim are among North Goa's strongest performers for both appreciation and rental yield, thanks to beach proximity and tourism footfall. Dona Paula and Porvorim offer a quieter, more residential feel with strong long-term value.",
  },
  {
    question: "Can I buy a Goa property remotely from Dubai or London?",
    answer:
      "Yes. Amar regularly closes deals with NRI and overseas clients through video site visits, digital documentation and power-of-attorney arrangements where needed, so a trip to Goa isn't mandatory to complete a purchase.",
  },
  {
    question: "How does AB Realty vet its listings?",
    answer:
      "Every property is checked for location strength, design quality, title clarity and resale potential before it's featured — AB Realty does not list every property that comes its way.",
  },
  {
    question: "Does AB Realty help with renovations or rentals after purchase?",
    answer:
      "Yes — beyond the transaction, AB Realty supports clients with contractor coordination, renovation guidance and rental management referrals for owners who want to generate income from their Goa property.",
  },
];

export function Faq() {
  return (
    <section className="bg-[linear-gradient(to_bottom,var(--ivory),var(--sand)_140px)] px-6 py-20 sm:px-14 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            FAQ
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
            Common Questions
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion className="rounded-2xl bg-white px-6 sm:px-8">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-5 text-base font-semibold sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
