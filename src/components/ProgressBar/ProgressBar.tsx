import React from "react";

type ProgressBarProps = {
  progress: number;
  color: string;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const ProgressBar = ({ progress, color, setProgress }: ProgressBarProps) => {
  const styleObj = {
    width: `${progress}%`,
    backgroundColor: color,
    height: "20px",
    borderRadius: "16px",
    transition: "width 0.5s ease-in-out",
  };

  React.useEffect(() => {
    // if already complete, do nothing
    if (progress >= 100) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // no change; interval will be cleared by outer cleanup on next render,
          // or you can clear it here if you capture timer via ref
          return prev;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [setProgress, progress >= 100]); // only re-run when completion status changes

  return (
    <div className="progress-bar-container bg-gray-300 rounded-full h-5 overflow-hidden">
      <div
        style={styleObj}
        className="progress-bar flex items-center justify-center text-xs font-semibold text-white"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
