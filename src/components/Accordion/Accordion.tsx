import React from "react";
import AccordionItem from "./AccordionItem";
import type { AccordionTypes } from "../../static-data";

type AccordionProps = {
  accordionData: AccordionTypes[];
};

const Accordion = ({ accordionData }: AccordionProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Accordion component implementation goes here */}
      <h3 className="text-xl font-semibold ">Accordions</h3>
      {accordionData.map((accordion) => {
        return (
          <React.Fragment key={accordion.id}>
            <AccordionItem accordionItem={accordion} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
