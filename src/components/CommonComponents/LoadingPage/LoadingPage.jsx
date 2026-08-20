import "./LoadingPage.css";
import { useState, useEffect } from "react";

export default function LoadingPage({isHiding = false}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`loadingOverlay ${
          isVisible && !isHiding ? '' : 'fade-out'
        }`} />
      <div className={`loadingContainer ${
          isVisible && !isHiding ? '' : 'fade-out'
        }`}>
        <section className="LoadingPage">
          <article className="LoadingPageText">
            Ожидается ответ от сервера...
          </article>
          <LoaderSpinner />
        </section>
      </div>
    </>
  );
}

function LoaderSpinner() {
  return (
    <div className="LoadingPageSpinner">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="spinnerGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#444" />
          </linearGradient>
        </defs>
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="url(#spinnerGradient)"
          strokeWidth="3"
          strokeDasharray="60 40"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
