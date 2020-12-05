import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => (
        <label>
          <input
            type="radio"
            name="rating"
            value={index + 1}
            onChange={() => setRating(index + 1)}
          />
          <FaStar
            className="star"
            size={100}
            color={(hover || rating) > index ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(index+1)}
            onMouseLeave={() => setHover(null)}
          />
        </label>
      ))}
    </div>
  );
};

export default StarRating;
