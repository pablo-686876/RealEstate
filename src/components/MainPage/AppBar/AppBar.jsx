import "./AppBar.css";
import { useState, useEffect } from "react";

export default function AppBar({ credit }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAppBarOpenClass, setShowAppBarOpenClass] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setShowAppBarOpenClass(true);
    } else {
      const timer = setTimeout(() => {
        setShowAppBarOpenClass(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`appBar ${showAppBarOpenClass ? 'appBarOpen' : ''}`}>
      <div>
        <article className="appBarTitle">
          clip<span className="accent">market</span>
        </article>
      </div>
      {isMobile ? (
        <>
          <button className="burgerButton" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="mobileMenuContainer">
            <AppBarActions
              credit={credit}
              className={`mobileMenuPanel ${isMenuOpen ? "open" : ""}`}
            />
          </div>
        </>
      ) : (
        <AppBarActions credit={credit} />
      )}
    </section>
  );
}

function AppBarButton({ text, color }) {
  return (
    <button className="appBarButton" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

function AppBarActions({ credit, className }) {
  return (
    <div className={`${className} appBarActions`}>
      <p className="appBarKreditBalance">Kredit: {credit}</p>
      <ul className="appBarButtonList">
        <li>
          <AppBarButton color={"#2d5ef4"} text={"+1"} />
        </li>
        <li>
          <AppBarButton color={"#2d5ef4"} text={"+5"} />
        </li>
        <li>
          <AppBarButton color={"#2d5ef4"} text={"+10"} />
        </li>
        <li className="appBarButtonLogout">
          <AppBarButton color={"#fa473f"} text={"Logout"} />
        </li>
      </ul>
    </div>
  );
}
