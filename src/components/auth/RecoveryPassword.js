import React from 'react';
import logo from '../../img/getprojectlogo.png';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';
import { Link } from 'react-router-dom';
import Message from '../layout/Message';

function RecoveryPassword () {  

    return (
    <div className={styles.Login}>
        <div className={styles.div1}>
            <img className={styles.logo} src={logo} alt="Get-Project" />
                <form className={styles.form}>
                    <Input type="mail" placeholder="E-mail" name="mail"/> 
                    <SubmitButton type="submit" text="Recuperar senha "/>
                    <br></br>
                    <span>Lembrou?</span>
                    <br></br>
                    <span className={styles.login_link}>
                        <Link to="/userlogin"> Acesse</Link>
                    </span> 
                </form>
                <Message msg="Verifique seu e-mail"/>
        </div>
    </div>
    )
}

export default RecoveryPassword