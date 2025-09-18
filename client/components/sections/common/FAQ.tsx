import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface QA {
  q: string;
  a: string;
}

export default function FAQ({ items }: { items: QA[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-xl glass divide-y divide-white/10"
    >
      {items.map((qa, i) => (
        <AccordionItem key={qa.q} value={`item-${i}`}>
          <AccordionTrigger>{qa.q}</AccordionTrigger>
          <AccordionContent>{qa.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
