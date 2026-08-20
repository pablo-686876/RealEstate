import "./Deal.css";
import { DownMark, UpMark } from "../SearchItem/SearchItem.jsx";
import { AveragePrice } from "../PriceBar/PriceBar.jsx";
import { deals } from "../../../../public/db/data.js";
import { useState, useEffect } from "react";

export default function Deal({ onClose, ...props }) {
  const { deal_amount, address, url, floor, total_area } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => {
      if (onClose) onClose();
    }, 250);
  };

  return (
    <>
      <div
        className={`loadingOverlay ${isVisible && !isHiding ? "" : "fade-out"}`}
      />
      <div
        className={`loadingContainer ${
          isVisible && !isHiding ? "" : "fade-out"
        }`}
      ></div>
      <section className={`Deal ${isVisible && !isHiding ? "" : "fade-out"}`}>
        <button
          className="CancelButtonContainer"
          type="button"
          onClick={handleClose}
        >
          <span className="CancelButton-1"></span>
          <span className="CancelButton-2"></span>
        </button>
        <span className="searchItemPrice DealPrice">{deal_amount} €</span>
        {AveragePrice(deals) <= deal_amount ? (
          <div className="DealMarkContainer">
            <UpMark className={"DealMark"} />
            <span className="DealMarkText">выше рынка</span>
          </div>
        ) : (
          <div className="DealMarkContainer">
            <DownMark className={"DealMark"} />
            <span className="DealMarkText">ниже рынка</span>
          </div>
        )}
        <div className="DealInfoContainer">
          <span className="DealInfo">Этаж: {floor}</span>
          <span className="DealInfo">Площадь: {total_area} м²</span>
          <span className="DealInfo">
            Цена за метр: {Math.round(deal_amount / total_area)} €/м²
          </span>
        </div>
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
          <span className="searchItemText dealText">{address}</span>
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
          <a className="searchItemText dealText" href={url} target="_blank">
            {url}
          </a>
        </span>
      </section>
    </>
  );
}
