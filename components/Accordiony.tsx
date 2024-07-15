import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Accordiony = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border p-4 w-[20rem] m-auto rounded-sm"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI_ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
        <AccordionContent className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          vitae magni itaque aliquam quas, similique cumque facilis unde maiores
          aspernatur!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Lorem ipsum dolor sit amet.</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          eligendi.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordiony;
