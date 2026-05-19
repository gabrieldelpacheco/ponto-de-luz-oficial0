import { useEffect, useState } from "react";
import vozNoSilencio from "./assets/voz-no-silencio.png";
import aindaExisteLuz from "./assets/ainda-existe-luz.png";
import depoisDaTempestade from "./assets/depois-da-tempestade.png";
import heroImage from "./assets/hero-1.png";
import {
  FaSpotify,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Lenis from "@studio-freight/lenis";


function App() {
  const [scrolled, setScrolled] = useState(false);
  const scrollToSection = (id) => {
  const element = document.querySelector(id);

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

  window.addEventListener("scroll", handleScroll);

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

  <div className="nav-links">
    <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#inicio");
  }}
>
  Início
</a>
    <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#albuns");
  }}
>
  Álbuns
</a>
    <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    scrollToSection("#contato");
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
  href="SEU_LINK_FACEBOOK"
  target="_blank"
  rel="noreferrer"
>
  <FaFacebook size={28} />
</a>
  </div>
</nav>
      <div id="inicio" className="hero">
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image"
        />

        <div className="hero-overlay">
          <h1 className="title">
            Ponto de Luz Oficial
          </h1>

<p className="subtitle">
  Canções que iluminam a escuridão,
  <br />
  tocam a alma e transformam silêncio em esperança ✨
</p>
        </div>
      </div>

      <div id="albuns" className="album-grid">
        {albums.map((album, index) => (
          <div
            key={index}
            className="card"
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
          </div>
        ))}
      </div>
      <footer
  className="footer"
  id="contato"
>
  <h2>Ponto de Luz Oficial</h2>

  <p>
    Uma voz, uma mensagem, um ponto de luz ✨
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
  href="SEU_LINK_FACEBOOK"
  target="_blank"
  rel="noreferrer"
>
  <FaFacebook size={28} />
</a>
  </div>

  <span>
    © 2026 Ponto de Luz Oficial
  </span>
</footer>
    </div>
  );
}

export default App;