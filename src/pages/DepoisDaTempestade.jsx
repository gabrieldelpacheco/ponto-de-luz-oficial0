import {
  FaSpotify,
  FaArrowLeft,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import depoisDaTempestade from "../assets/depois-da-tempestade.png";

function DepoisDaTempestade() {
  return (
    <div className="album-page">

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
            Toda tempestade passa.

            <br />
            <br />

            Essa canção fala sobre
            cura, superação e a paz
            que nasce após os momentos
            mais difíceis da vida.
          </p>

          <a
            href="https://somvibe.lnk.to/AZuXkCBd"
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

export default DepoisDaTempestade;