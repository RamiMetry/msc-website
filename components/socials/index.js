import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./socials.module.scss";

const Socials = ({
  twitter,
  instagram,
  facebook,
  linkedin,
  centered = false,
}) => {
  return (
    <div
      className={styles.socials}
      style={{
        justifyContent: centered == true ? "space-evenly" : "flex-start",
      }}
    >
      {linkedin && (
        <div
          className={styles.socialCol}
          onClick={() => {
            window.open(`${linkedin}`, "_blank");
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
        </div>
      )}
      {instagram && (
        <div
          className={styles.socialCol}
          style={{
            marginLeft: centered == false && "8px",
          }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`${instagram}`, "_blank");
            }}
          />
        </div>
      )}
      {facebook && (
        <div
          className={styles.socialCol}
          style={{
            marginLeft: centered == false && "8px",
          }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`${facebook}`, "_blank");
            }}
          />
        </div>
      )}
      {twitter && (
        <div
          className={styles.socialCol}
          style={{
            marginLeft: centered == false && "8px",
          }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`${twitter}`, "_blank");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Socials;
