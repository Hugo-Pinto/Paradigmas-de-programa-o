import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../services/api';


function Formulario() {
 // ---- Uso de Estados
  const [nome,setNome] = useState('');
  function trataNome(event)
  {
    setNome(event.target.value);
  }
  const [email,setEmail] = useState('');
  function trataEmail(event)
  {
    setEmail(event.target.value);
  }
 //---------------------------------

  async function enviaSubmit(event){
    
    event.preventDefault(); // evitar que o submir direcione para outra página
    
    const response = await api.post('/alunos',{
      nome : nome,
      email: email
    });

   //const {_id} = response.data; 
   console.log(response.status);
   if(response.status == 200)
       alert('Aluno Cadastrado com Sucesso');
  }
  
  return (
    <div>
      <Form onSubmit={enviaSubmit} >
        <Form.Group controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
           type="text" 
           value = {nome}
           placeholder="Entre com nome do aluno" 
           onChange = {trataNome}  
           />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Entre com o e-mail do aluno" 
            onChange = {trataEmail}
          />
        </Form.Group>
    <Button variant="primary" type="submit">
      Cadastrar
    </Button>
</Form>
   </div>
  );
}

export default Formulario;
