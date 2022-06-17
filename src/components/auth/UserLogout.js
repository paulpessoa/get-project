import React from "react";

function UserLogout () {

    function Sair() {
        sessionStorage.clear('userToken')
        alert('Você será desconectado')
        window.location = '/newproject'
    }
    return (
        <div>
          
                <button onClick={Sair}> SAIR</button>
        </div>

    )
}

export default UserLogout;