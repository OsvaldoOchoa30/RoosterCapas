import React from "react";
import { FaFacebook } from "react-icons/fa"; //
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={50} style={{ color: "azure" }} />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={50} style={{ color: "azure" }} />
        </a>

        <a
        href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaTiktok size={50} style={{ color: "azure" }} />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
