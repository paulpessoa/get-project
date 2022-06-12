import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/getprojectlogo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Get-Project" />
        </Link>
        <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Início</Link></li>
            <li className={styles.item}><Link to="/projects">Projetos</Link></li>
            <li className={styles.item}><Link to="/Profile">Perfil</Link></li>
            <li className={styles.item}><Link to="/contact">Contato</Link></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
