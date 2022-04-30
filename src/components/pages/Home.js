import React from "react";
import logo from "../../img/getprojectlogo.png";
import styles from "./Home.module.css";

function Home () {
    return (
        <div className={styles.beleuza}>
            <h1>Bem vindo ao <span>GetProject</span></h1>
            <p>Comece a gerencias os seus projetos agora mesmo</p>
            <a href='/'>Criar Projeto</a>
            <img src={logo} alt='Saving Project' />
        </div>
    )
}

export default Home;