import React, { useEffect, useState, useHistory } from 'react';
import NewMensage from '../../componentes/buttom/NewMesage';
import api from '../../services/api';
import Swal from 'sweetalert2'

const Mensagens = () => {

    const [listMessages, setListMessages] = useState([]);
    const [listTriggers, setListTriggers] = useState([]);
    const [listchannels, setListChannels] = useState([]);

    const [channel, setChannel] = useState('');
    const [trigger, setTrigger] = useState('');
    const [timer, setTimer] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        async function hadleGetMessages(){
            try{
                let res = await api.get('/messages');
                setListMessages(res.data);
            } catch (error) {
                console.log('Erros econtrados no json-server');
                console.log(error);
            }
        };

        async function listTrigger(){
            let res = await api.get('/triggers');
            setListTriggers(res.data);
        }

        async function listchannel(){
            let res = await api.get('./channels');
            setListChannels(res.data);
        }

        hadleGetMessages();
        listTrigger();
        listchannel();

    }, [])

    useEffect(() => {
      var urlTrigger = '';
      var urlChannel = '';
      var urlTimer = '';
      if (trigger){
         urlTrigger = `trigger=${trigger}`;
      }
      if (channel){
         urlChannel = `channel=${channel}`;
      }
      if (timer){
         urlTimer = `timer=${timer}`;
      }

    
      async function getFilters(){
        let filter = `?${urlTrigger}&${urlChannel}&${urlTimer}`;
        let response = await api.get('/messages'+filter);
        setListMessages(response.data);
    }
  
    setTimeout(function(){getFilters()}, 1000);

    }, [trigger, channel, timer]);

   

const mostrarMensagem = (menssage) => {
  Swal.fire({
    icon: "info",
    title: "Mensagem",
    text: menssage,
    footer: 'Criado por ZAP System'
  })
}

    return (
        <>
        <div class="row col-xs-12 col-sm-12 col-md-12 col-lg-12"  align="center">
        <form onSubmit>
            <div className="container-mensage">
            <h1 >Mensagens</h1>
            <NewMensage/>
            <button type="submit" className="buttom" >Pesquisar</button>
               </div>
                <div className="row">
                    <div className="col-md-4">
                        Gatilho
                    </div>
                    <div className="col-md-4">
                        Canal
                    </div>
                    <div className="col-md-4">
                        Timer
                    </div>

                    <div className="col-md-4">
                        <select value={trigger} onChange={(event) => setTrigger(event.target.value)}>
                            <option></option>
                            {listTriggers.map((i) => 
                                <option 
                                    value={i.name} 
                                    key={i.id}
                                    >
                                    {i.name}
                                </option>
                            )}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select value={channel} onChange={(event) => setChannel(event.target.value)}>
                            <option></option>   
                            {listchannels.map((i) => (
                                <option value={i.name} key={i.id}>{i.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input class="col-auto" type="text" value={timer} onChange={(event) => setTimer(event.target.value)} />
                    </div>
                </div>
            </form>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Gatilho</th>
                        <th scope="col">Canal</th>
                        <th scope="col">Tempo</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listMessages.map(i => 
                        <tr>
                            <td>{i.trigger}</td>
                            <td>{i.channel}</td>
                            <td>{i.timer}</td>
                            <td><button type="button" class="btn btn-outline-info" onClick={() => mostrarMensagem(i.message)}>Mensagem</button></td>
                        </tr>
                    )}
                    
                </tbody>

            </table>
        </div>
        

        </>
    )
};
  

export default Mensagens