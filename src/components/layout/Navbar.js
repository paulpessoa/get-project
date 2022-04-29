import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/getprojectlogo.png";

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Get-Project" />
        </Link>
        <ul class={styles.list}>
            <li class={styles.item}><Link to="/">Início</Link></li>
            <li class={styles.item}><Link to="/projects">Projetos</Link></li>
            <li class={styles.item}><Link to="/company">Empresa</Link></li>
            <li class={styles.item}><Link to="/contact">Contato</Link></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
