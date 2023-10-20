import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/ContextProvider";

const AnimateMouse = () => {
  const { isEnter } = useContext(AppContext);
  const eRef = useRef(null);
  const tRef = useRef(null);
  const nRef = useRef(null);
  const iRef = useRef(null);
  const o = false;

  useEffect(() => {
    const handleMouseMove = (s) => {
      if (!o) {
        tRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      eRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      nRef.current = s.clientY;
      iRef.current = s.clientX;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={eRef}
        style={{ visibility: "visible" }}
        className={`mouseCursor cursor-outer ${isEnter ? "cursor-big" : ""}`}
      ></div>
      <div
        ref={tRef}
        className={`mouseCursor cursor-inner ${isEnter ? "cursor-big" : ""}`}
        style={{ visibility: "visible" }}
      >
        <span>Drag</span>
      </div>
    </React.Fragment>
  );
};

export default AnimateMouse;
