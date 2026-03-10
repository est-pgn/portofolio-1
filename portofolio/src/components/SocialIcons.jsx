import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedinIn,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./SocialIcons.css";

function SocialIcons() {
  return (
    <div className="social-container">

      <a
        href="https://www.linkedin.com/in/ermuratiev-estera-018bb029b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a
        href="https://wa.me/qr/5FK2LJTRIQIBI1"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

      <a
        href="https://github.com/est-pgn"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href="mailto:esfiri2000@gmail.com"
        className="social-btn"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

    </div>
  );
}

export default SocialIcons;