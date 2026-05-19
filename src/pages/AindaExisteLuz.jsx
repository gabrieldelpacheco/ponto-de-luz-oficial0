import {
  FaSpotify,
  FaArrowLeft,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import aindaExisteLuz from "../assets/ainda-existe-luz.png";

function AindaExisteLuz() {
  return (
    <div className="album-page">

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

            <br /><br />

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

        </div>

      </div>

    </div>
  );
}

export default AindaExisteLuz;