import { useEffect, useState } from "react";

import vozNoSilencio from "./assets/voz-no-silencio.png";
import aindaExisteLuz from "./assets/ainda-existe-luz.png";
import depoisDaTempestade from "./assets/depois-da-tempestade.png";
import heroImage from "./assets/hero-1.png";
import {
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Lenis from "@studio-freight/lenis";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);
  const { scrollY } = useScroll();

const heroY =
  useTransform(
    scrollY,
    [0, 500],
    [0, 150]
  );

  const scrollToSection = (id) => {
    const element =
      document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
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

              <a
                href={album.link}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Ouvir Agora
              </a>
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

        <div className="footer-socials">
          <a
            href="https://open.spotify.com/artist/69NroCfrP8Nm9CWMXVOHuc"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify size={24} />
          </a>

          <a
            href="https://www.instagram.com/pontodeluzoficial0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://facebook.com/pontodeluzoficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        <span>
          © 2026 Ponto de Luz
          Oficial
        </span>
      </motion.footer>
    </div>
  );
}

export default App;