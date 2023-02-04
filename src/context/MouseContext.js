import React, { createContext, useEffect, useState } from "react";

export const MOUSE_CONTEXT = createContext();
const MouseContext = ({ children }) => {
  const [mousePostion, setMousePostion] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePostion);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePostion({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePostion.x - 10,
      y: mousePostion.y - 10,
      backgroundColor: "black",
    },
    element: {
        height: 80,
        width: 80,
        x: mousePostion.x - 40,
        y: mousePostion.y - 40,
        backgroundColor: "white",
        mixBlendMode: "difference",
    }
  };

  const [cursorVariant, setCursorVariant] = useState("default");

  const elementEnter = () => setCursorVariant("element");
  const elementLeave = () => setCursorVariant("default");
  const value = {
    variants,
    cursorVariant,
    elementEnter,
    elementLeave
  };
  return (
    <MOUSE_CONTEXT.Provider value={value}>{children}</MOUSE_CONTEXT.Provider>
  );
};

export default MouseContext;
