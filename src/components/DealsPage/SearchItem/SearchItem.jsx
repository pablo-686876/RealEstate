import "./SearchItem.css";
import { deals } from "../../../../public/db/data.js";
import { AveragePrice } from "../PriceBar/PriceBar.jsx";
import { useState } from "react";

export default function SearchItem({ onClick, ...props }) {
  const { deal_amount, address, url } = props;
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    onClick();
    if (!wasClicked) {
      setWasClicked(true);
    }
  };

  return (
    <button
      className={`searchItem  ${wasClicked ? "searchItemClicked" : ""}`}
      onClick={handleClick}
    >
      <span className="searchItemPrice">{deal_amount} €</span>
      <span className="searchItemAddress">
        <span className="searchItemIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(4 2)"
              strokeWidth={1}
            >
              <path d="m6.5 16.54l.631-.711Q8.205 14.6 9.064 13.49l.473-.624Q12.5 8.875 12.5 6.533C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033q0 2.342 2.963 6.334l.473.624a55 55 0 0 0 2.564 3.05"></path>
              <circle cx={6.5} cy={6.5} r={2.5}></circle>
            </g>
          </svg>
        </span>
        <span className="searchItemText">{address}</span>
      </span>
      <span className="searchItemLink">
        <span className="searchItemIcon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"
            ></path>
            <path
              fill="white"
              d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"
            ></path>
          </svg>
        </span>
        <span className="searchItemText">{url}</span>
      </span>
      {AveragePrice(deals) <= props.deal_amount ? <UpMark /> : <DownMark />}
    </button>
  );
}

export function DownMark({ className, text }) {
  return (
    <span className={`DownMark ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V18M12 18L8 14M12 18L16 14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function UpMark({ className }) {
  return (
    <span className={`UpMark ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18V6M12 6L8 10M12 6L16 10"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
