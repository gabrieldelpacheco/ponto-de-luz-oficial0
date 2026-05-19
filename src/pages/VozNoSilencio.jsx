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
              to="/ainda-existe-luz"
              className="nav-album-button"
            >
              Próximo Álbum →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default VozNoSilencio;