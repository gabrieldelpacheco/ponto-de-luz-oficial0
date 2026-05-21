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
import vozNoSilencio from "../assets/voz-no-silencio.png";

function VozNoSilencio() {

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
            src={vozNoSilencio}
            alt="Voz no Silêncio"
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
              Voz no Silêncio
            </h1>

            <p className="album-page-text">

              Voz no Silêncio é uma jornada
              emocional que transforma dor,
              silêncio e esperança em música.

              <br />
              <br />

              Cada faixa carrega mensagens
              profundas para tocar almas,
              iluminar caminhos e fortalecer
              corações.

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
  link="https://somvibe.lnk.to/ab35037"
/>

            <div className="spotify-embed">

              <iframe
                data-testid="embed-iframe"

                style={{
                  borderRadius: "12px",
                }}

                src="https://open.spotify.com/embed/album/3Yoc0aP9CoNDiZ4eC1BfqE?utm_source=generator"

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
                to="/"
                className="nav-album-button"
              >
                ← Página Inicial
              </Link>

              <Link
                to="/ainda-existe-luz"
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

export default VozNoSilencio;