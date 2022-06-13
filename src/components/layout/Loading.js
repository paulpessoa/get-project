import React from 'react';
import loading from '../../img/Spinner-1s-200px.svg'
import styles from './Loading.module.css'

function Loading () {
    return (
        <div className={styles.loader_container}>
           <img className={styles.loader} src={loading} alt="Loading"/>
           <p>Carregando... </p>
        </div>
    )
}

export default Loading