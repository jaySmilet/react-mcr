import React from "react";
import type { AccordionTypes } from "../../static-data";

const AccordionItem = ({
  accordionItem,
}: {
  accordionItem: AccordionTypes;
}) => {
  const [showContent, setShowContent] = React.useState(false);
  return (
    <div className="border-2 rounded">
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between cursor-pointer py-2 px-4 bg-gray-200 font-semibold"
          onClick={() => setShowContent(!showContent)}
        >
          {accordionItem.title}
          <img
            className="size-6"
            src={`${import.meta.env.BASE_URL}${
              showContent ? "down-arrow.svg" : "up-arrow.svg"
            }`}
            alt="arrow"
          />
        </div>
        {showContent && (
          <>
            <div className="h-[1px] bg-black"></div>
            <div className="py-3 px-4">
              <p className="text-sm font-normal">{accordionItem.content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccordionItem;
