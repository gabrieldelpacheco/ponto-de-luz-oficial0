import {
  FaSpotify,
  FaArrowLeft,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import vozNoSilencio from "../assets/voz-no-silencio.png";

function VozNoSilencio() {
  return (
    <div className="album-page">

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
            Uma canção sobre dor,
            silêncio e esperança.

            <br />
            <br />

            Mesmo quando ninguém
            escuta nossas lágrimas,
            Deus continua presente
            iluminando o caminho.
          </p>

          <a
            href="https://somvibe.lnk.to/ab35037"
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

export default VozNoSilencio;