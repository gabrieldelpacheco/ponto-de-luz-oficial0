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
import aindaExisteLuz from "../assets/ainda-existe-luz.png";

function AindaExisteLuz() {

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
            src={aindaExisteLuz}
            alt="Ainda Existe Luz"
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
              Ainda Existe Luz
            </h1>

            <p className="album-page-text">

              Mesmo nos dias mais escuros,
              ainda existe esperança.

              <br />
              <br />

              Uma canção sobre fé,
              recomeço e a luz que nunca
              deixa de brilhar.

            </p>

<a
  href="https://somvibe.lnk.to/ab34686"
  target="_blank"
  rel="noreferrer"
  className="album-page-button"
>

  <FaSpotify />

  Ouvir Agora

</a>

<OtherPlatformsButton
  link="https://somvibe.lnk.to/ab34686"
/>

            <div className="spotify-embed">

              <iframe
                data-testid="embed-iframe"

                style={{
                  borderRadius: "12px",
                }}

                src="https://open.spotify.com/embed/album/6rgQFKTBN9oNn5oJ4IQsvQ?utm_source=generator"

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
                to="/voz-no-silencio"
                className="nav-album-button"
              >
                ← Álbum Anterior
              </Link>

              <Link
                to="/depois-da-tempestade"
                className="nav-album-button"
              >
                Próximo Álbum →
              </Link>

            </div>

          </div>

        </div>

      </motion.div>

    </>

  );

}

export default AindaExisteLuz;