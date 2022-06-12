import logo from '../../img/getprojectlogo.png';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

function RecoveryPassword () {  

// variável que salva TOKEN no sessionStorage

    return (
    <div className={styles.Login}>
        <div className={styles.div1}>
            <img className={styles.logo} src={logo} alt="Get-Project" />
                <form className={styles.form}>
                    <Input type="mail" placeholder="E-mail" name="mail"/> 
                    <SubmitButton type="submit" text="Recuperar senha "/>
                    <br></br>
                    <spam>Lembrou?</spam>
                    <br></br>
                   
                    <spam className={styles.login_link}>
                        
                        <Link to="/userlogin"> Acesse</Link>
                    </spam> 
                </form>
        </div>
    </div>
    )
}

export default RecoveryPassword