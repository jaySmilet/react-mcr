import { accordionData } from "../static-data";
import Accordion from "../components/Accordion/Accordion";

const Accordions = () => {
  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold">
        Welcome to Accordions Page
      </h2>
      <Accordion accordionData={accordionData} />
    </div>
  );
};

export default Accordions;
