import { useEffect, useState } from "react";

import vozNoSilencio from "./assets/voz-no-silencio.png";
import aindaExisteLuz from "./assets/ainda-existe-luz.png";
import depoisDaTempestade from "./assets/depois-da-tempestade.png";
import heroImage from "./assets/hero-1.png";
import { Link } from "react-router-dom";

import {
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

    const [mousePosition, setMousePosition] =
  useState({
    x: 0,
    y: 0,
  });

  const scrollToSection = (id) => {
    const element =
      document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 500],
    [0, 150]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    const moveCursor = (e) => {
  setMousePosition({
    x: e.clientX,
    y: e.clientY,
  });
};

window.addEventListener(
  "mousemove",
  moveCursor
);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      window.removeEventListener(
  "mousemove",
  moveCursor
);
    };
  }, []);

  const albums = [
    {
      title: "Voz no Silêncio",
      image: vozNoSilencio,
      link: "https://somvibe.lnk.to/ab35037",
    },

    {
      title: "Ainda Existe Luz",
      image: aindaExisteLuz,
      link: "https://somvibe.lnk.to/ab34686",
    },

    {
      title: "Depois da Tempestade",
      image: depoisDaTempestade,
      link: "https://somvibe.lnk.to/AZuXkCBd",
    },
  ];

  return (
    <div className="page">
      <div
  className="cursor-light"

  style={{
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
  }}
></div>
      <nav
        className={
          scrolled
            ? "navbar navbar-scrolled"
            : "navbar"
        }
      >
        <div className="logo">
          Ponto de Luz Oficial
        </div>

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>

        <div
          className={
            menuOpen
              ? "nav-container active"
              : "nav-container"
          }
        >
          <div className="nav-links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                scrollToSection(
                  "#inicio"
                );
              }}
            >
              Início
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                scrollToSection(
                  "#albuns"
                );
              }}
            >
              Álbuns
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();

                scrollToSection(
                  "#contato"
                );
              }}
            >
              Contato
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://open.spotify.com/artist/69NroCfrP8Nm9CWMXVOHuc"
              target="_blank"
              rel="noreferrer"
            >
              <FaSpotify size={28} />
            </a>

            <a
              href="https://www.instagram.com/pontodeluzoficial0/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={28} />
            </a>

            <a
              href="https://facebook.com/pontodeluzoficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </nav>

      <div
        id="inicio"
        className="hero"
      >
        <motion.img
          src={heroImage}
          alt="Hero"
          className="hero-image"
          style={{
            y: heroY,
          }}
        />

        <div className="hero-overlay">
          <div className="hero-glow"></div>

          <div className="particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h1 className="title">
            Ponto de Luz Oficial
          </h1>

          <p className="subtitle">
            Canções que iluminam a
            escuridão,
            <br />
            tocam a alma e transformam
            silêncio em esperança ✨
          </p>
        </div>
      </div>

      <motion.section
        className="spotify-section"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <h2 className="spotify-title">
          Ouça no Spotify 🎵
        </h2>

        <p className="spotify-text">
          Escute os lançamentos
          oficiais do Ponto de Luz
          Oficial
        </p>

        <iframe
          data-testid="embed-iframe"
          style={{
            borderRadius: "16px",
          }}
          src="https://open.spotify.com/embed/artist/69NroCfrP8Nm9CWMXVOHuc?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.section>

      <motion.section
        className="about-section"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <h2 className="about-title">
            Sobre o Projeto ✨
          </h2>

          <p className="about-text">
            Ponto de Luz Oficial nasceu
            para transformar silêncio em
            esperança através da música.

            <br />
            <br />

            Cada canção carrega emoção,
            fé, dor, cura e luz,
            conectando almas através de
            melodias que acolhem,
            inspiram e iluminam.

            <br />
            <br />

            Mais do que músicas,
            este projeto é um refúgio
            para quem busca força,
            paz e esperança em meio
            à escuridão.
          </p>
        </div>
      </motion.section>

      <div
        id="albuns"
        className="album-grid"
      >
        {albums.map(
          (album, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay:
                  index * 0.2,
              }}
              viewport={{
                once: true,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";

                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(255,215,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "none";
              }}
            >
              <img
                src={album.image}
                alt={album.title}
                className="album-image"
              />

              <h2 className="album-title">
                {album.title}
              </h2>

<Link
 to={
  index === 0
    ? "/voz-no-silencio"
    : index === 1
    ? "/ainda-existe-luz"
    : "/depois-da-tempestade"
}

  className="button"
>
  Explorar
</Link>
            </motion.div>
          )
        )}
      </div>

      <motion.footer
        className="footer"
        id="contato"
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <h2>
          Ponto de Luz Oficial
        </h2>

        <p>
          Uma voz, uma mensagem,
          um ponto de luz ✨
        </p>

        <div className="contact-grid">
          <a
            href="https://open.spotify.com/artist/69NroCfrP8Nm9CWMXVOHuc"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaSpotify size={40} />

            <h3>Spotify</h3>

            <p>
              Ouça os lançamentos
              oficiais
            </p>
          </a>

          <a
            href="https://www.instagram.com/pontodeluzoficial0/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaInstagram size={40} />

            <h3>Instagram</h3>

            <p>
              Acompanhe novidades
              e conteúdos
            </p>
          </a>

          <a
            href="https://facebook.com/pontodeluzoficial"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaFacebook size={40} />

            <h3>Facebook</h3>

            <p>
              Conecte-se com o projeto
            </p>
          </a>

          <a
            href="mailto:pontodeluzoficial0@gmail.com"
            className="contact-card"
          >
            <FaEnvelope size={40} />

            <h3>Email</h3>

            <p>
              Entre em contato
              profissionalmente
            </p>
          </a>
        </div>

        <span>
          © 2026 Ponto de Luz Oficial
        </span>
      </motion.footer>
    </div>
  );
}

export default App;