import React from 'react';
import styles from "./Footer.module.css"
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://github.com/paulpessoa/" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/paulmspessoa/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>                
            </ul>
            <p className={styles.copy_right}>
                Copyright &copy; 2022
            </p>
        </footer>
    )
}

export default Footer;