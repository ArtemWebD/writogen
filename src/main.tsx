import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/Header";
import "./assets/index.css";
import FirstScreen from "./components/first-screen/FirstScreen";
import { motion } from "framer-motion";
import { GLOBAL_ANIMATION_DELAY, GLOBAL_ANIMATION_DURATION } from "./const";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <motion.div
      key={"root"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: GLOBAL_ANIMATION_DURATION, delay: GLOBAL_ANIMATION_DELAY }}
    >
      <Header />
      <FirstScreen />
    </motion.div>
  </StrictMode>
);
