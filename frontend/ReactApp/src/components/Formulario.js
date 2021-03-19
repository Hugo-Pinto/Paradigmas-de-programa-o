import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../services/api';

//3000
function Formulario() {
 // ---- Uso de Estados
  const [nome,setNome] = useState('');
  function trataNome(event)
  {
    setNome(event.target.value);
  }
  const [caracteristica,setcaracteristica] = useState('');

  //não sei oq a função faz, se pa nem vou usar, deixar ai.
  function tratacaracteristica(event)
  {
    setcaracteristica(event.target.value);
  }
 //---------------------------------

  async function enviaSubmit(event){
    
    event.preventDefault(); // evitar que o submir direcione para outra página
    
    const response = await api.post('/linguagens',{
      nome : nome,
      caracteristica : caracteristica,
      //paradigma : paradigma
    });

   //const {_id} = response.data; 
   console.log(response.status);
   if(response.status === 200)
       alert('linguagem Cadastrada com Sucesso');
  }
  
  return (
    <div>
      <Form onSubmit={enviaSubmit} >
        <Form.Group controlId="formBasicNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
           type="text" 
           value = {nome}
           placeholder="Entre com nome da linguagem" 
           onChange = {trataNome}  
           />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Caracteristicas da linguagem</Form.Label>
          <Form.Control
            type="caracteristicas"
            value={caracteristica}
            placeholder="Entre com as caracteristicas da linguagem" 
            onChange = {tratacaracteristica}
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
