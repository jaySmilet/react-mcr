import React from "react";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-6">
      <div className="text-xl font-semibold">Star Rating</div>
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
            key={num}
            className={`star size-6 text-3xl cursor-pointer ${
              num <= ((rating && hover) || hover) ? "filled" : ""
            }`}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
