import React from "react";

function UserLogout () {

    function Sair() {
        sessionStorage.setItem('userToken', 'logout')
        alert('Você será desconectado')
        window.location = '/userlogin'
    }
    return (
        <div>
          
                <button onClick={Sair}> SAIR</button>
        </div>

    )
}

export default UserLogout;