import React, { useEffect, useState } from "react";

interface ReusableProgressBarProps {
  progress: number; // 0–100
  color?: string; // Tailwind color class
}

const ReusableProgressBar: React.FC<ReusableProgressBarProps> = ({
  progress,
  color = "bg-blue-500",
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // animate progress smoothly when value changes
  useEffect(() => {
    const valid = Math.min(Math.max(progress, 0), 100);
    const timer = requestAnimationFrame(() => setAnimatedProgress(valid));
    return () => cancelAnimationFrame(timer);
  }, [progress]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
      <div
        className={`h-full ${color} flex items-center justify-center text-xs font-semibold text-white transition-[width] duration-500 ease-in-out`}
        style={{ width: `${animatedProgress}%` }}
      >
        {progress} %
      </div>
    </div>
  );
};

export default ReusableProgressBar;
