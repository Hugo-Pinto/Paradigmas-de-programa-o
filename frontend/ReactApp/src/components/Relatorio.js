import React, {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../services/api';


function Relatorio() {
   const [linguagens, setlinguagens] = useState([]);

   useEffect(() => {
    async function buscaLinguagem()
    {
       const response = await api.get('/');
       //console.log(response.data);
       setlinguagens(response.data);
       localStorage.setItem('linguagens',response.data);
    }
    buscaLinguagem();
   }, []);
   
    return (
    <>
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>id</th>
      <th>Nome</th>
      <th>caracteristicas</th>
      
    </tr>
  </thead>
  <tbody>
   {linguagens.map(linguagens => (
    <tr>
      <td>{linguagens._id}</td>
      <td>{linguagens.nome}</td>
      <td>{linguagens.caracteristica}</td>
    </tr>
    ))}
   
  </tbody>
</Table>
   </>
  );
}

export default Relatorio;
