import React from 'react';
import {useHistory} from 'react-router-dom';
export default function Voltar(){
    const history = useHistory()
    
    function handlerLogout(){
        history.push('/mensagens');
    }
    return(
        <button  className="buttom-formulario" onClick={handlerLogout}>Voltar</button>
    )
}