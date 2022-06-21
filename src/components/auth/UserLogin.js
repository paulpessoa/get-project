//https://www.youtube.com/watch?v=_Kv965pA-j8&t=32s
//https://www.youtube.com/watch?v=s_Txhh-clVk
//https://www.youtube.com/watch?v=unr4s3jd9qA&t=452s


import React, { useRef, useState } from 'react';
import logo from '../../img/getprojectlogo.png';

import { signup } from '../../firebase';


import styles from '../project/ProjectForm.module.css';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

function UserLogin () {
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSignup() {

        setLoading(true)
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
            alert('Conta criada com sucesso')
        } catch {
            alert("Este email já esta cadastrado")
        }
        setLoading(false)

    
    }

    function logado() {
        sessionStorage.setItem("userToken", "62a4bcbd0e46e071d7");  
        var psw = sessionStorage.getItem("userToken");
        console.log(psw)
        window.location = '/projects'
    }
// variável que salva TOKEN no sessionStorage
    return (
        <div className={styles.Login}>
            <div className={styles.div1}>
                <img className={styles.logo} src={logo} alt="Get-Project" />
                    <form className={styles.forms}>
                         
                        <input ref={emailRef} type="mail" placeholder="E-mail" id="key" name="mail"/> 
                        <br/>
                        <input ref={passwordRef} type="password" placeholder="Senha" id="psw" name="password"/>
                        <br/>
                        <button className={styles.btn} disabled={loading} onClick={handleSignup}>Acessar</button>
                        <br/>
                        <br/>
                        
                        
                        <span className={styles.login_link}>
                            <Link to="/recoverypassword"> Recuperar </Link>
                            senha
                        </span> 
                        
                        <br></br>
                        <div className={styles.login_buttons}>           
                        <button className={styles.button_login_facebook}>
                            <BsFacebook/> Facebook
                        </button>
                        <button className={styles.button_login_google}>
                            <FcGoogle/> Google
                            </button>
                        </div>
                        <span className={styles.login_link}>
                            Ainda não tenho
                            <Link to="/userregister"> Cadastro</Link>
                        </span> 
                    </form>
                        <button  onClick={logado} className={styles.button_login_facebook}>ACESSAR DEMO
                        </button>
                    </div>
                </div>

    )
}

export default UserLogin