import React, {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../services/api';


function Relatorio() {
   const [alunos, setAlunos] = useState([]);

   useEffect(() => {
    async function buscaAlunos()
    {
       const response = await api.get('/');
       //console.log(response.data);
       setAlunos(response.data);
       localStorage.setItem('alunos',response.data);
    }
    buscaAlunos();
   }, []);
  /* async function buscaAlunos()
   {
      const response = await api.get('/');
      //console.log(response.data);
      setAlunos(response.data);
   }
   buscaAlunos();

*/  return (
    <>
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>E-mail</th>
    </tr>
  </thead>
  <tbody>
   {alunos.map(aluno => (
    <tr>
      <td>{aluno._id}</td>
      <td>{aluno.nome}</td>
      <td>{aluno.email}</td>
    </tr>
    ))}
   
  </tbody>
</Table>
   </>
  );
}

export default Relatorio;
