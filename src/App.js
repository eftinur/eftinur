import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MOUSE_CONTEXT } from "./context/MouseContext";

function App() {
  const { variants, cursorVariant } = useContext(MOUSE_CONTEXT);
  

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <motion.div 
      variants={variants}
      animate={cursorVariant}
      className="cursor hidden lg:block"
      >      
      </motion.div>
    </div>
  );
}

export default App;
