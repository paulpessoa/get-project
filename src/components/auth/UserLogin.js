import logo from '../../img/getprojectlogo.png';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

function UserLogin () {  

// variável que salva TOKEN no sessionStorage

    return (
        <div className={styles.Login}>
            <div className={styles.div1}>
                <img className={styles.logo} src={logo} alt="Get-Project" />
                    <form className={styles.form}>
                        <Input type="mail" placeholder="E-mail" name="mail"/> 
                        <Input type="password" placeholder="Senha" name="password"/>
                        <SubmitButton type="submit" text="Acessar"/>
                        <br></br>
                        <spam className={styles.login_link}>
                            <Link to="/recoverypassword"> Recuperar </Link>
                            senha
                        </spam> 
                        
                        <br></br>
                        <div className={styles.login_buttons}>           
                        <button className={styles.button_login_facebook}>
                            <BsFacebook/> Facebook
                        </button>
                        <button className={styles.button_login_google}>
                            <FcGoogle/> Google
                            </button>
                        </div>
                        <spam className={styles.login_link}>
                            Ainda não tenho
                            <Link to="/userregister"> Cadastro</Link>
                        </spam> 
                    </form>
                    </div>
                </div>

    )
}

export default UserLogin