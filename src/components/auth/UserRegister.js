import logo from '../../img/getprojectlogo.png';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from '../project/ProjectForm.module.css';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

function UserRegister () {  

// variável que salva TOKEN no sessionStorage

    return (
    <div className={styles.Login}>
        <div className={styles.div1}>
            <img className={styles.logo} src={logo} alt="Get-Project" />
                <form className={styles.form}>
                    <Input type="text" placeholder="Nome" name="name"/> 
                    <Input type="mail" placeholder="E-mail" name="mail"/> 
                    <Input type="password" placeholder="Digitar Senha" name="password"/>
                    <Input type="password" placeholder="Confirmar Senha" name="password_confirm"/>
                    <SubmitButton type="submit" text="Cadastrar"/>
                    <br></br>
                    <spam>Realize o cadastro com</spam>
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
                        
                        <Link to="/userlogin"> Acesse</Link>
                    </spam> 
                </form>
        </div>
    </div>
    )
}

export default UserRegister