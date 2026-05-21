import { FaMusic } from "react-icons/fa";

function OtherPlatformsButton({ link }) {

  return (

    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="other-platforms-button"
    >

      <FaMusic />

      Ouça em outras plataformas

    </a>

  );

}

export default OtherPlatformsButton;