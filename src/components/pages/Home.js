import React from "react";
import styles from "./Home.module.css";
import LinkButton from "../layout/LinkButton";


function Home () {
    return (
        <div className={styles.home_container}>
            <h1>Bem vindo {'{user.name}'}</h1>
            <p>Comece a gerencias os seus projetos</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>  
        </div>
    )
}

export default Home;