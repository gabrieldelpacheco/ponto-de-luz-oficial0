import {
  FaSpotify,
  FaArrowLeft,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import vozNoSilencio from "../assets/voz-no-silencio.png";
import { motion } from "framer-motion";
function VozNoSilencio() {
  return (
<motion.div
  className="album-page"

  initial={{
    opacity: 0,
    y: 40,
  }}

  animate={{
    opacity: 1,
    y: 0,
  }}

  exit={{
    opacity: 0,
    y: -40,
  }}

  transition={{
    duration: 0.7,
  }}
>

    </motion.div>
  );
}

export default VozNoSilencio;