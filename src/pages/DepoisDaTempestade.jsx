import {
  useEffect,
  useState,
} from "react";

import {
  FaSpotify,
  FaArrowLeft,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import { motion } from "framer-motion";
import OtherPlatformsButton from "../components/OtherPlatformsButton";
import depoisDaTempestade from "../assets/depois-da-tempestade.png";

function DepoisDaTempestade() {

  const [mousePosition, setMousePosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {

    const updateMouse = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener(
      "mousemove",
      updateMouse
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        updateMouse
      );

    };

  }, []);

  return (

    <>

      <div
        className="custom-cursor"

        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

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

        <div className="album-hero">

          <img
            src={depoisDaTempestade}
            alt="Depois da Tempestade"
            className="album-page-image"
          />

          <div className="album-overlay">

            <Link
              to="/"
              className="back-button"
            >
              <FaArrowLeft />

              Voltar
            </Link>

            <h1 className="album-page-title">
              Depois da Tempestade
            </h1>

            <p className="album-page-text">

              Após a dor,
              sempre existe um novo amanhecer.

              <br />
              <br />

              Uma obra sobre superação,
              esperança e a paz que nasce
              depois das batalhas da vida.

            </p>

<a
  href="https://open.spotify.com/artist/69NroCfrP8Nm9CWMXVOHuc"
  target="_blank"
  rel="noreferrer"
  className="album-page-button"
>

  <FaSpotify />

  Ouvir Agora

</a>

<OtherPlatformsButton
  link="https://somvibe.lnk.to/AZuXkCBd"
/>

            <div className="spotify-embed">

              <iframe
                data-testid="embed-iframe"

                style={{
                  borderRadius: "12px",
                }}

                src="https://open.spotify.com/embed/album/6XkgHgKKka680Laf7X4tDd?utm_source=generator"

                width="100%"

                height="352"

                frameBorder="0"

                allowFullScreen=""

                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

                loading="lazy"
              ></iframe>

            </div>

            <div className="album-navigation">

              <Link
                to="/ainda-existe-luz"
                className="nav-album-button"
              >
                ← Álbum Anterior
              </Link>

            </div>

          </div>

        </div>

      </motion.div>

    </>

  );

}

export default DepoisDaTempestade;