import React from "react";
import ReusableProgressBar from "../components/ProgressBar/ReusableProgressBar";
// import ProgressBar from "../components/ProgressBar/ProgressBar";

const ProgressBarPage = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 10 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="space-y-4 p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-6 my-4">
        <div className="text-xl font-semibold">Reusable Progress Bars</div>
        <ReusableProgressBar progress={progress} />
        <ReusableProgressBar progress={60} color="bg-green-500" />
        <ReusableProgressBar progress={90} color="bg-red-500" />
      </div>
      {/* <div className="flex flex-col gap-6 my-6">
        <div className="text-xl font-semibold">Normal Progress Bars</div>
        <ProgressBar progress={40} color="blue" setProgress={setProgress} />
        <ProgressBar progress={60} color="green" setProgress={setProgress} />
        <ProgressBar progress={90} color="red" setProgress={setProgress} />
      </div> */}
    </div>
  );
};

export default ProgressBarPage;
