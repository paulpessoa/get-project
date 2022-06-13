import React from "react";

function UserLogout () {

    function Sair() {
        sessionStorage.clear('userToken', '62a4bcbd0e46e071d7')
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