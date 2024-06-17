import React from 'react'
import { FaFacebook } from "react-icons/fa"; //
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";


import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
        <footer className={styles.footer}>
            <FaFacebook size={50} style={{color: "azure"}}/>
            <FaInstagram size={50} style={{color: "azure"}}/>
            <FaTiktok size={50} style={{color: "azure"}}/>
        </footer>
    </div>
  )
}

export default Footer