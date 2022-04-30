import React from "react";
import logo from "../../img/getprojectlogo.png";
import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";

function Home () {
    return (
        <div className={styles.home_container}>
            <h1>Bem vindo ao <span>GetProject</span></h1>
            <p>Comece a gerencias os seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={logo} alt='Saving Project' />
        </div>
    )
}

export default Home;