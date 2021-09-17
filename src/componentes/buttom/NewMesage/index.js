import React from 'react';
import {useHistory} from 'react-router-dom';

export default function NewMensage(){
    const history = useHistory()
    
    function handlerLogout(){
        history.push('/formulario');
    }
    return(
        <button type="button" className="buttom" onClick={handlerLogout}>Nova Mensagem</button>
    )
}