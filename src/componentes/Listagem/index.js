import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Voltar from '../buttom/Voltar';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import Swal from 'sweetalert2';


const schema = yup.object().shape({
  channel: yup.string().required("campo é obrigatório"),
  trigger: yup.string().required("campo é obrigatório"),
  timer: yup.string().required("campo obrigatório").min(2,"hora valida"),
  newMessage: yup.string().required("campo obrigatorio").min(4,"muito curto")
})

const Listagem = () => {



  const [listTriggers, setListTriggers] = useState([]);
  const [listchannels, setListChannels] = useState([]);

  const [id, setId] = useState('');
  const [channel, setChannel] = useState('');
  const [trigger, setTrigger] = useState('');
  const [timer, setTimer] = useState('')
  const [newMessage, setNewMessage] = useState('');

  

  useEffect(() => {
    async function listTrigger() {
      const response = await api.get('/triggers');
      setListTriggers(response.data);
    }

    async function listchannel() {
      const response = await api.get('./channels');
      setListChannels(response.data);
    }

    listTrigger();
    listchannel();

  }, [])

  const handleAddMessage = async (event) => {


    try {
      event.preventDefault();
      const isValid = await schema.isValid({ channel, trigger, timer, newMessage })

      if (isValid === false) {
        Swal.fire("Preencha todos os campos")
        return
      } else {
        Swal.fire("Cadastrado com sucesso!")
      }
      const store = await api.post('/messages', {
        channel: channel,
        trigger: trigger,
        timer: timer,
        message: newMessage
      });

      setId(store.data.id);
      setTrigger('');
      setChannel('');
      setTimer('');
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  

  }
  const notify = () => toast("Cadastrado com sucesso!");

  return (
    <>

      <div className="conteiner">
        <div className="container-mensage">
          <h1 >Mensagens</h1>
          <Voltar />
        </div>

        <form onSubmit={handleAddMessage}>
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
              <input
                class="col-md-4"
                type="text"
                value={timer}
                onChange={e => setTimer(e.target.value)}
              />
            </div>

          </div>{/**row */}

          <div className="row">

            <div className="col-md-12">
              Mensagem:
            </div>
            <div className="col-md-12">
              <textarea
                class="form-control"
                value={newMessage}
                onChange={event => setNewMessage(event.target.value)}
              ></textarea>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-md-12">
              <button  type="submit" className="buttom-formulario">Cadastrar</button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>

    </>
  )
};

export default Listagem